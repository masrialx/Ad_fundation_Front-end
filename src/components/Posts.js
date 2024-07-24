// components/Posts.js

import React, { useState, useEffect } from 'react';
import { Container, Dropdown, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Posts.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [selectedSection, setSelectedSection] = useState('home');
  const [newPost, setNewPost] = useState({
    titles: ['', '', '', '', ''],
    images: [null, null, null, null, null],
    desc: '',
    media: null,
    media_type: 'image',
    time: '',
    location: '',
    socialMedia: {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: '',
      telegram: '',
      whatsapp: '',
      email: ''
    }
  });
  const [previews, setPreviews] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchPosts();
  }, []);

  useEffect(() => {
    const newPreviews = newPost.images.map((image) =>
      image ? URL.createObjectURL(image) : ''
    );
    setPreviews(newPreviews);
    return () => {
      newPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [newPost.images]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/posts');
      setPosts(response.data.posts);
    } catch (error) {
      console.error(error);
      setAlert({ type: 'danger', message: 'An error occurred while fetching posts.' });
    }
  };

  const handleAddPost = async () => {
    const formData = new FormData();
    newPost.titles.forEach((title, index) => {
      if (title) formData.append(`title_${index}`, title);
    });
    newPost.images.forEach((image, index) => {
      if (image) formData.append(`image_${index}`, image);
    });
    formData.append('desc', newPost.desc);
    formData.append('time', newPost.time);
    formData.append('location', newPost.location);
    formData.append('socialMedia', JSON.stringify(newPost.socialMedia));

    try {
      await axios.post('/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setAlert({ type: 'success', message: 'Post added successfully!' });
      setNewPost({
        titles: ['', '', '', '', ''],
        images: [null, null, null, null, null],
        desc: '',
        media: null,
        media_type: 'image',
        time: '',
        location: '',
        socialMedia: {
          facebook: '',
          twitter: '',
          instagram: '',
          linkedin: '',
          telegram: '',
          whatsapp: '',
          email: ''
        }
      });
      setPreviews([]);
      fetchPosts();
    } catch (error) {
      console.error(error);
      setAlert({ type: 'danger', message: 'An error occurred while adding the post.' });
    }
  };

  const renderFormFields = () => {
    switch (selectedSection) {
      case 'home':
        return (
          <>
            {newPost.titles.map((title, index) => (
              <div key={index}>
                <Form.Label>Title {index + 1}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Enter title ${index + 1}`}
                  value={title}
                  onChange={(e) => {
                    const updatedTitles = [...newPost.titles];
                    updatedTitles[index] = e.target.value;
                    setNewPost({ ...newPost, titles: updatedTitles });
                  }}
                />
                <Form.Label>Image {index + 1}</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const updatedImages = [...newPost.images];
                      updatedImages[index] = file;
                      setNewPost({ ...newPost, images: updatedImages });
                    }
                  }}
                />
                {previews[index] && <img src={previews[index]} alt={`Preview ${index + 1}`} className="post-media-preview" />}
              </div>
            ))}
          </>
        );
      case 'middle':
        return (
          <>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={newPost.titles[0]} 
              onChange={(e) => setNewPost({
                ...newPost,
                titles: [e.target.value, ...newPost.titles.slice(1)]
              })}
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={newPost.desc}
              onChange={(e) => setNewPost({ ...newPost, desc: e.target.value })}
            />
            <Form.Label>Media</Form.Label>
            <Form.Control
              type="file"
              accept="image/*,video/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setNewPost({
                    ...newPost,
                    media: file,
                    media_type: file.type.startsWith('image/') ? 'image' : 'video'
                  });
                }
              }}
            />
            {newPost.media && (
              <div className="media-preview" data-aos="zoom-in">
                {newPost.media_type === 'image' ? (
                  <img src={URL.createObjectURL(newPost.media)} alt="Preview" className="post-media-preview" />
                ) : (
                  <video src={URL.createObjectURL(newPost.media)} controls className="post-media-preview" />
                )}
              </div>
            )}
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={newPost.time}
              onChange={(e) => setNewPost({ ...newPost, time: e.target.value })}
            />
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location (optional)"
              value={newPost.location}
              onChange={(e) => setNewPost({ ...newPost, location: e.target.value })}
            />
          </>
        );
      case 'footer':
        return (
          <>
            <div className="social-media-form">
              <h4>Social Media Links</h4>
              <Form.Group>
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Facebook link"
                  value={newPost.socialMedia.facebook}
                  onChange={(e) => setNewPost({
                    ...newPost,
                    socialMedia: { ...newPost.socialMedia, facebook: e.target.value }
                  })}
                />
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Twitter link"
                  value={newPost.socialMedia.twitter}
                  onChange={(e) => setNewPost({
                    ...newPost,
                    socialMedia: { ...newPost.socialMedia, twitter: e.target.value }
                  })}
                />
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Instagram link"
                  value={newPost.socialMedia.instagram}
                  onChange={(e) => setNewPost({
                    ...newPost,
                    socialMedia: { ...newPost.socialMedia, instagram: e.target.value }
                  })}
                />
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter LinkedIn link"
                  value={newPost.socialMedia.linkedin}
                  onChange={(e) => setNewPost({
                    ...newPost,
                    socialMedia: { ...newPost.socialMedia, linkedin: e.target.value }
                  })}
                />
                <Form.Label>Telegram</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Telegram link"
                  value={newPost.socialMedia.telegram}
                  onChange={(e) => setNewPost({
                    ...newPost,
                    socialMedia: { ...newPost.socialMedia, telegram: e.target.value }
                  })}
                />
                <Form.Label>WhatsApp</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter WhatsApp link"
                  value={newPost.socialMedia.whatsapp}
                  onChange={(e) => setNewPost({
                    ...newPost,
                    socialMedia: { ...newPost.socialMedia, whatsapp: e.target.value }
                  })}
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={newPost.socialMedia.email}
                  onChange={(e) => setNewPost({
                    ...newPost,
                    socialMedia: { ...newPost.socialMedia, email: e.target.value }
                  })}
                />
              </Form.Group>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="posts-container">
      {alert && (
        <Alert variant={alert.type} onClose={() => setAlert(null)} dismissible>
          {alert.message}
        </Alert>
      )}
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select Section
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSelectedSection('home')}>Home</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedSection('middle')}>Middle</Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedSection('footer')}>Footer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="form-section">
        {renderFormFields()}
        <Button variant="primary" onClick={handleAddPost}>Add Post</Button>
      </div>
      <div className="posts-list">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            {post.images && post.images.map((image, imgIndex) => (
              <img key={imgIndex} src={image} alt={`Post ${index} Image ${imgIndex}`} className="post-image" />
            ))}
            <p>{post.desc}</p>
            {post.media && (
              post.media_type === 'image' ? (
                <img src={post.media} alt={`Post ${index} Media`} className="post-media" />
              ) : (
                <video src={post.media} controls className="post-media" />
              )
            )}
            <div className="post-footer">
              {post.socialMedia && (
                <>
                  {post.socialMedia.facebook && <a href={post.socialMedia.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>}
                  {post.socialMedia.twitter && <a href={post.socialMedia.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
                  {post.socialMedia.instagram && <a href={post.socialMedia.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                  {post.socialMedia.linkedin && <a href={post.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
                  {post.socialMedia.telegram && <a href={post.socialMedia.telegram} target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>}
                  {post.socialMedia.whatsapp && <a href={post.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>}
                  {post.socialMedia.email && <a href={`mailto:${post.socialMedia.email}`} target="_blank" rel="noopener noreferrer"><MdEmail /></a>}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Posts;
