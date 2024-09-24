

import React from 'react';
import './Projects.css'; 
import project1 from "../Assets/project1.jpg"; 
import project2 from "../Assets/dance_php.jpg";
import project4 from "../Assets/school_site.jpg";
import project5 from "../Assets/byte.jpg";
import project6 from "../Assets/photo-studio.jpg";
import videoFile from "../Assets/Ruchika_saree.mp4";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: 'Billing-Software',
      description: 'Billion Software** allows businesses to create and manage bills with ease, track sales by day, week, or month, and search for specific items to view how much has been sold and the total revenue. It also enables bill printing and generates detailed reports to help businesses streamline sales and billing operations efficiently.',
      image: project1,
      github: 'https://github.com/Rathoredipanshu21/Resturant_bill_software',
      demo: 'https://your-live-demo1.com', 
    },
    {
      id: 2,
      name: 'Dance-Studio-Site',
      description: 'The Star United Banka Dance website offers exclusive dance content, including videos and images managed via Google Drive, accessible through a secure login. Admins can manage and upload new materials, ensuring fresh content. The site also integrates YouTube, allowing users to watch dance videos directly from the class’s channel, providing an engaging and easily managed platform for both users and admins.',
      image: project2,
      github: 'https://github.com/Rathoredipanshu21/Dance_site_PHP',
      demo: 'https://dance-site-php.vercel.app/',
    },
    {
      id: 3,
      name: 'Ruchika-Saree',
      description: 'Ruchika Saree is a comprehensive e-commerce platform built using the MERN stack. Users can easily browse and accept orders with full CRUD functionality for products. The site manages user details and order histories, ensuring a seamless shopping experience. With an intuitive interface, customers can explore a wide range of sarees, making it a go-to destination for online saree shopping.',
      video: videoFile,
      github: 'https://github.com/Rathoredipanshu21/Ruchika_backend',
      demo: '',
    },
    {
      id: 4,
      name: 'School-site',
      description: 'I created a website for Doon Public School using React for a dynamic user experience and Node.js for the contact form. The site features the schools mission, academic programs, extracurricular activities, and faculty profiles. The Node.js contact form efficiently manages inquiries from prospective students and parents. The user-friendly design provides a comprehensive overview of the school, enhancing engagement and communication.',
      image: project4,
      github: 'https://github.com/Rathoredipanshu21/school_site',
      demo: 'https://doon-2a35b.web.app/',
    },
    {
      id: 5,
      name: 'ByteWave Official site',
      description: 'I developed a website for Bytewave Company, showcasing services like website and application development, digital marketing, and graphic design. The site highlights their commitment to quality solutions tailored to clients needs, featuring detailed service descriptions and company values. Testimonials and stories about the positive work environment enhance Bytewaves reputation for excellence, fostering trust and interest among potential clients and partners.This is the fifth project description.',
      image: project5,
      github: 'https://github.com/Rathoredipanshu21/ByteWave',
      demo: 'https://byte-wave-phi.vercel.app/',
    },
    {
      id: 6,
      name: 'Photography-Studio',
      description: 'I created a frontend website for a camera studio using React, designed as a clone of guptafoto.com. The site features a visually appealing layout that showcases various camera equipment and photography services. Users can navigate effortlessly through sections displaying products, pricing, and booking options. The responsive design ensures a seamless experience across devices, making it user-friendly for potential customers. This project aims to deliver a comprehensive view of the studios offerings while replicating the successful design of the original site.',
      image: project6,
      github: 'https://github.com/Rathoredipanshu21/CameraStudio',
      demo: 'https://camera-studio.vercel.app/',
    },
  ];

  return (
    <>
      <h1 id='h1'>My Recent <span style={{color:'yellow'}}>Works</span> </h1>
      <h3 id='h1'>Here are a few <span style={{color:'yellow'}}> projects</span> I've worked on recently</h3>
      <div className="projects-container">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            {project.image ? (
              <img src={project.image} alt={project.name} />
            ) : (
              <video controls autoPlay muted width="100%">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <h3>{project.name}</h3>
            <p style={{color:'#fff'}}>{project.description}</p>
            <div className="button-container">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
