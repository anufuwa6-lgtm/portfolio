import React from "react";
import './Services.css';
import {motion} from "framer-motion"


export default function Services() {

    const services = [
  "Web Development",
  "Frontend React Development",
  "Next.js Full-Stack Apps",
  "Cybersecurity Testing",
  "API & Database Setup"
];
    return(
        <section id="services" className="services-section">
             <motion.h2
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5}}>
                  Services
             </motion.h2>
          <div className="services-grid">
            {services.map((item, index ) => (
            <motion.div 
                key={index}
                className="services-card"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.1}}
                >
                 {item}
            </motion.div>
           ))}
          </div>
           
            
        </section>
    );
}