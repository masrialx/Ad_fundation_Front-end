import React, { useState } from 'react';
import './Middle.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Link } from 'react-router-dom';

const staticPosts = [
  {
    id: 1,
    title: 'Post Title 1',
    desc: 'This is a summary of the first documentation post. Click to read more...',
    media_url: 'https://via.placeholder.com/600x400',
    media_type: 'image',
    location: 'Location 1',
    time: '2024-07-01T12:00:00Z',
  },
  {
    id: 2,
    title: 'Post Title 2',
    desc: 'This is a summary of the second documentation post. Click to read more...',
    media_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    media_type: 'video',
    location: 'Location 2',
    time: '2024-07-02T12:00:00Z',
  },
  {
    id: 2,
    title: 'Post Title 2',
    desc: 'This is a summary of the second documentation post. Click to read more...',
    media_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    media_type: 'video',
    location: 'Location 2',
    time: '2024-07-02T12:00:00Z',
  },
  {
    id: 2,
    title: 'Post Title 2',
    desc: 'This is a summary of the second documentation post. Click to read more...',
    media_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    media_type: 'video',
    location: 'Location 2',
    time: '2024-07-02T12:00:00Z',
  },
  {
    id: 2,
    title: 'Post Title 2',
    desc: 'This is a summary of the second documentation post. Click to read more...',
    media_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    media_type: 'video',
    location: 'Location 2',
    time: '2024-07-02T12:00:00Z',
  },
  {
    id: 2,
    title: 'Post Title 2',
    desc: 'This is a summary of the second documentation post. Click to read more...',
    media_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    media_type: 'video',
    location: 'Location 2',
    time: '2024-07-02T12:00:00Z',
  },
  {
    id: 3,
    title: 'Post Title 3',
    desc: 'This is a summary of the third documentation post. Click to read more...',
    media_url: 'https://via.placeholder.com/600x400',
    media_type: 'image',
    location: 'Location 3',
    time: '2024-07-03T12:00:00Z',
  },
  {
    id: 4,
    title: 'Post Title 4',
    desc: 'This is a summary of the fourth documentation post. Click to read more...',
    media_url: 'https://via.placeholder.com/600x400',
    media_type: 'image',
    location: 'Location 4',
    time: '2024-07-04T12:00:00Z',
  },
  {
    id: 5,
    title: 'Post Title 5',
    desc: 'This is a summary of the fifth documentation post. Click to read more...',
    media_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    media_type: 'video',
    location: 'Location 5',
    time: '2024-07-05T12:00:00Z',
  },
  // Add more posts as needed
];

function Middle() {
  const [posts] = useState(staticPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const categories = [...new Set(posts.map(post => new Date(post.time).getFullYear()))];

  return (
    <div className="middle-container">
      <div className="donate-section">
        <Link to="/donate" className="donate-button">Donate Now</Link>
      </div>
      <div className="documentation-section">
        <h2 className="section-title">Latest Documentation Posts</h2>
        <div className="categories">
          {categories.map((category, index) => (
            <button key={index} className="category-button">
              {category}
            </button>
          ))}
        </div>
        <div className="row">
          {currentPosts.map((post) => (
            <div key={post.id} className="col-md-4">
              <div className="post-card">
                {post.media_type === 'image' && (
                  <img src={post.media_url} alt={post.title} className="post-media" />
                )}
                {post.media_type === 'video' && (
                  <video controls className="post-media">
                    <source src={post.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.desc}</p>
                  <div className="post-meta">
                    <div><strong>Location:</strong> <span className="post-location">{post.location}</span></div>
                    <div><strong>Time:</strong> <span className="post-time">{new Date(post.time).getFullYear()}</span></div>
                  </div>
                  <Link to={`/posts/${post.id}`} className="read-more">Read more...</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(number => (
            <button
              key={number + 1}
              className={`pagination-button ${currentPage === number + 1 ? 'active' : ''}`}
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Middle;


