import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Web Development",
    text: `Use React,angular,laravel,php mysql,mongodb,nodejs to develop fullstack websites using modern technologies bring an awesome client side user experience`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Web Design",
    text: `Use well known all kinds of open-source web technologies such as Theming genesis content management systems like WordPress, strapi and well known Frameworks like Laravel, Angular, React to bring an awesome client side user experience.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Full-Stack",
    text: `Static or Dynamic web sites, Content Management systems or Inventory control systems, Blog or eCommerce website, Advanced administrative control panel, Search Engine optimizing, payment gateway integrations, SSL/HTTPS secure websites as your own requirements. Banh mi direct trade marfa salvia.`,
  },
]

export default services
