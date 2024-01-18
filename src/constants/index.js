import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,

    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import ebiashara from "../assets/company/ebiashara.png";
  import dawin from "../assets/dawin.jpeg";
  import freelance from"../assets/freelance.png"
  import arronax from "../assets/arronaxhome.png";
  import smartnyumba from "../assets/smartnyumba.png";
  import agritech from"../assets/agritech.jpg";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [

    {
      title: "Full Stack developer ",
      company_name: "e-Biashara",
      icon: ebiashara,
      iconBg: "#E6DEDD",
      date: "August 2022- ongoing",
      points: [
        "Designed and implemented enterprise fintech applications of kenya's largest Supply Chain Financing platforms, driving monthly revenue of Ksh 80 million using(Flutter, Django and AWS ec2)",
        "Increased sales by 40% from sales worth ksh 2 million monthly through the integration of Artificial intelligent recommender systems on the company’s e-commerce client’s websites",
        "Increased the company’s customer conversion rate from 20% to 30% through the introduction of personalization features such as custom color schemes and contextualized responses on the company’s flagship products mobile application",
        "Reduced application shipping time to multiple platforms from one year to 2 months through the utilization of cross platform development development frameworks that allow deployment of applications to multiple platforms from a single code base",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Dawin tours and travel",
      icon: dawin,
      iconBg: "#E6DEDD",
      date: " March 2020 - July 2022",
      points: [
        "Increased the company’s SEO ranking to third place from 10th place on google page ranking",
        "Enhanced the company’s brand awareness through developing the company’s web application that allowed users to make travel bookings on their own in an easy and seamless manner",
        
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: " July 2019 – July 2021",
      points: [
        "Increased sales for clients by 40% through improving client’s sites SEO ranking",
        "Increased customer conversion rate for ecommerce clients by 56% through the implementation of recommender engines on their web applications",
        
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Dennis proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Dennis does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Dennis optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Arronax",
      description:
        "Web-based and mobile based platform that allows users to view local Kenyan content of their liking.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Aws, Redis, Celery",
          color: "green-text-gradient",
        },
        {
          name: "Django Rest Framework",
          color: "pink-text-gradient",
        },
      ],
      image: arronax,
      source_code_link: "https://play.google.com/store/apps/details?id=com.ebiashara.arronaxsandbox.arronaxMediaAppTest&pcampaignid=web_share",
    },
    {
      name: "Smart nyumba",
      description:
        "A mobile  application that makes property management to be hassle free, from colleting rent, on boarding tenants to paying staff all at the palm of your hands",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Mpesa Daraja API",
          color: "pink-text-gradient",
        },
      ],
      image: smartnyumba,
      source_code_link: "https://github.com/DennisMuasyaWambua/Smart_Nyumba_Mobile_App.git",
    },
    {
      name: "Smart farmer",
      description:
        "An AI model that recommends crops to plant to farmers based on the nutritional profile, soil ph, ambient temperature, soil humidity and predicted rainfall this helps in allowing farmers to efficinetly plan for planting  ",
      tags: [
        {
          name: "xgboost, pandas",
          color: "blue-text-gradient",
        },
        {
          name: "Fast API",
          color: "green-text-gradient",
        },
        {
          name: "AWS EC2",
          color: "pink-text-gradient",
        },
      ],
      image: agritech,
      source_code_link: "https://github.com/DennisMuasyaWambua/farmer.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };