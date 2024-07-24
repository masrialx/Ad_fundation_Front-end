import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'; // Ensure this line is present


function Home() {
  return (
    <div className="home-container">
      <Carousel className="carousel-container"   interval={3000} pause={false}>
      <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/Ewf604TWQAAzBss?format=jpg&name=small"
            alt="First slide"
            data-aos="fade-up"
          />
          <Carousel.Caption>
            <h3 className="carousel-title">Welcome to Our Donation Foundation</h3>
            <p className="carousel-text">Help us make a difference.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.licdn.com/dms/image/C4D12AQGQFof_T8pf3Q/article-cover_image-shrink_600_2000/0/1596568765580?e=2147483647&v=beta&t=4qtE4bloZyK4aXGapkwzCXdjCUMKBLYnF49wo1nYAOw"
            alt="Second slide"
            data-aos="fade-down"
          />
          <Carousel.Caption>
            <h3 className="carousel-title">Your Support Matters</h3>
            <p className="carousel-text">Join us in making the world a better place.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/032/467/163/non_2x/traditional-zulu-people-south-africa-within-an-african-tribe-photo.jpg"
            alt="Third slide"
            data-aos="fade-down"
          />
          <Carousel.Caption>
            <h3 className="carousel-title">Be a Part of the Change</h3>
            <p className="carousel-text">Your donation can transform lives.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/627492508/photo/group-of-happy-african-children-east-africa.jpg?b=1&s=612x612&w=0&k=20&c=iTWN_34sZIBJasLfiZ81284YTzoY8RfwVQDmU2qN2Cg="
            alt="Fourth slide"
            data-aos="fade-down"
          />
          <Carousel.Caption>
            <h3 className="carousel-title">Clean Water for All</h3>
            <p className="carousel-text">Support our mission to provide clean water.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/640305394/photo/group-of-happy-african-children-east-africa.jpg?b=1&s=612x612&w=0&k=20&c=gV8KKRx4cmHe0iKwFv60yb0Jt2W42jvQFr97liDZGA8="
            alt="Fifth slide"
            data-aos="fade-down"
          />
          <Carousel.Caption>
            <h3 className="carousel-title">Every Child Deserves a Future</h3>
            <p className="carousel-text">Join us in supporting children in need.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
