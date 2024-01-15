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
      date: "September 2020 - September 2023",
      points: [
        "Designed and implemented enterprise fintech applications of kenya's largest Supply Chain Financing platforms, driving monthly revenue of Ksh 80 million using(Flutter, Django and AWS ec2)",
        "Integrated multiple third-party systems with the escrow platform, including Mpesa, increasing revenue by 23% in the first quarter.",
        "Designed and implemented scalable APIs and background workers for managing first- and third-party proprietary licenses using Django rest framework, AWS lambda, and other AWS cloud technologies that serve millions of license requests daily.",
        "Automated and optimized business logic for the core marketing experiments, including A/B, Auto-Targeting, and Multivariate Testing.",
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