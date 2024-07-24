import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import './Detail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// Example favoritePosts, assuming it's a subset of posts
const favoritePosts = [
  {
    id: 1,
    title: 'Exploring React Hooks',
    media_url: 'https://via.placeholder.com/600x400',
    media_type: 'image',
  },
  {
    id: 3,
    title: 'The Evolution of Web Development',
    media_url: 'https://via.placeholder.com/600x400',
    media_type: 'image',
  },
  {
    id: 4,
    title: 'Mastering CSS Grid and Flexbox',
    media_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    media_type: 'video',
  },
];

const posts = [
  {
    id: 1,
    title: 'Exploring React Hooks',
    desc: 'In this detailed post, we dive deep into the world of React Hooks. React Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class. This post covers various hooks including useState, useEffect, useContext, and custom hooks. We will explore practical examples, discuss best practices, and provide tips for effectively using hooks in your React applications. Whether you are a beginner or an experienced React developer, this guide will enhance your understanding and help you build better React applications.',
    media_url: 'https://via.placeholder.com/600x400',
    media_type: 'image',
    content: 'In this comprehensive guide, we’ll start with the basics of React Hooks, discussing their benefits and how they can simplify your code. We’ll then move on to detailed examples demonstrating each hook, including how to manage state with useState, handle side effects with useEffect, and utilize context with useContext. Additionally, we will cover advanced topics such as creating custom hooks and optimizing performance. The goal is to provide you with a thorough understanding of React Hooks and how to apply them effectively in real-world scenarios.',
    location: 'San Francisco, CA',
    time: '2024-07-01T12:00:00Z',
  },
  {
    id: 2,
    title: 'Introduction to Video Streaming Technologies',
    desc: 'This post provides an in-depth overview of video streaming technologies. It covers the fundamental concepts of video streaming, including the difference between live streaming and on-demand streaming. We will explore various streaming protocols such as HLS (HTTP Live Streaming), DASH (Dynamic Adaptive Streaming over HTTP), and RTMP (Real-Time Messaging Protocol). The post also delves into the technical aspects of video encoding, bitrate management, and adaptive streaming techniques. By the end of this article, you will have a solid understanding of how video streaming works and how to implement it in your own applications.',
    media_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    media_type: 'video',
    content: 'In this detailed guide, we will walk you through the different video streaming technologies and their applications. We’ll start by explaining the basic concepts of streaming and how they differ from traditional video delivery methods. Next, we’ll cover various streaming protocols, discussing their advantages and use cases. You’ll learn about video encoding techniques and how to ensure optimal quality and performance. Additionally, the post includes practical tips for setting up and managing video streaming services, making it a valuable resource for anyone interested in video technology.',
    location: 'New York, NY',
    time: '2024-07-02T12:00:00Z',
  },
  {
    id: 3,
    title: 'The Evolution of Web Development',
    desc: 'This article explores the evolution of web development, from its early days to the modern era. We will trace the history of web technologies, starting with the introduction of HTML, CSS, and JavaScript. The post covers significant milestones such as the rise of AJAX, the development of frameworks like Angular and React, and the advent of modern web standards. Additionally, we’ll discuss the impact of new technologies such as Progressive Web Apps (PWAs) and WebAssembly. By examining these changes, you’ll gain insights into how web development has evolved and what to expect in the future.',
    media_url: 'https://via.placeholder.com/600x400',
    media_type: 'image',
    content: 'In this extensive overview, we will delve into the key developments in web technology over the years. We’ll start with the origins of web development and how HTML, CSS, and JavaScript laid the foundation for modern web applications. The article will cover the evolution of web frameworks and libraries, highlighting the benefits and challenges of each. We’ll also explore recent advancements such as serverless architecture and microservices. This guide aims to provide a comprehensive look at the progress of web development and how it continues to shape the digital world.',
    location: 'Austin, TX',
    time: '2024-07-03T12:00:00Z',
  },
  {
    id: 4,
    title: 'Mastering CSS Grid and Flexbox',
    desc: 'This detailed post provides a comprehensive guide to CSS Grid and Flexbox, two powerful layout systems in CSS. We will explore the fundamentals of both layout techniques, including their syntax, use cases, and practical examples. The post covers key concepts such as grid containers, grid items, and grid lines for CSS Grid, as well as flex containers and flex items for Flexbox. We’ll also discuss best practices for using these layout systems together and how to create responsive designs. Whether you’re a beginner or an experienced developer, this guide will help you master CSS Grid and Flexbox.',
    media_url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    media_type: 'video',
    content: 'In this in-depth tutorial, we’ll start by introducing CSS Grid and Flexbox, explaining their core principles and how they differ from one another. We’ll provide step-by-step instructions for creating layouts using both techniques, including complex grid designs and flexible box layouts. The article also includes practical tips for combining Grid and Flexbox to achieve advanced layout solutions. With numerous examples and hands-on exercises, this guide is designed to enhance your skills and help you build sophisticated and responsive web layouts.',
    location: 'Seattle, WA',
    time: '2024-07-04T12:00:00Z',
  },
  {
    id: 5,
    title: 'Understanding RESTful APIs',
    desc: 'This post offers a thorough introduction to RESTful APIs, a key component of modern web development. We will explain the principles of REST (Representational State Transfer), including the use of HTTP methods, status codes, and resources. The article covers how to design and implement RESTful APIs, best practices for API documentation, and common challenges developers face. We’ll also explore tools and technologies for testing and securing APIs. By the end of this guide, you will have a solid understanding of RESTful APIs and how to effectively integrate them into your applications.',
    media_url: 'https://via.placeholder.com/600x400',
    media_type: 'image',
    content: 'In this extensive guide, we’ll cover the key concepts and techniques for working with RESTful APIs. We’ll start by discussing the principles of REST and how they apply to API design. The post will provide practical examples of creating and consuming RESTful APIs, including authentication and authorization strategies. We’ll also explore various tools and frameworks that can simplify API development and testing. Whether you’re new to APIs or looking to enhance your skills, this guide offers valuable insights and practical advice for building robust and scalable APIs.',
    location: 'Chicago, IL',
    time: '2024-07-05T12:00:00Z',
  },
  // Add more posts as needed
];

function Detail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  
  // Define the favorite post IDs
  const favoritePostIds = [1, 3, 4];
  
  // Filter favorite posts from the posts array
  const favoritePosts = posts.filter(post => favoritePostIds.includes(post.id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <Container className="detail-container">
      <Button variant="primary" href="/" className="back-button">Back to Posts</Button>

      <Row className="align-items-start">
        <Col md={8} className="main-content-col" data-aos="fade-right">
          <h2>{post.title}</h2>
          <p><strong>Location:</strong> {post.location}</p>
          <p><strong>Year:</strong> {new Date(post.time).getFullYear()}</p>
          {post.media_type === 'image' && (
            <img src={post.media_url} alt={post.title} className="post-media" />
          )}
          {post.media_type === 'video' && (
            <video controls className="post-media">
              <source src={post.media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <p>{post.content}</p>
        </Col>
        <Col md={4} className="sidebar-col" data-aos="fade-left">
          <h3>Favorite Posts</h3>
          <ListGroup>
            {favoritePosts.map((favPost) => (
              <ListGroup.Item key={favPost.id}>
                <Link to={`/posts/${favPost.id}`} className="favorite-post-link">
                  <h4>{favPost.title}</h4>
                  {favPost.media_type === 'image' && (
                    <img src={favPost.media_url} alt={favPost.title} className="favorite-post-media" />
                  )}
                  {favPost.media_type === 'video' && (
                    <video controls className="favorite-post-media">
                      <source src={favPost.media_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
