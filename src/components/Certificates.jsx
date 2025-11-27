import React from "react";
import './Certificates.css';
import { motion } from "framer-motion";

const certificates = [
    {name: "Frontend Masters-Advanced React",
     icon: "🎓",
     issuer: "Frontend Masters",
     year: "2023"
    },
    {name: "AWS Certified Developer",
        icon: "☁️",
        issuer: "Amazon Web Services",
        year: "2024"
    },
    {name: "Google Analytics Certification",
        icon:"📊",
        issuer:"Google",
        year: "2022"
    },
    {name: "MongoDB Basics",
        icon: "💾",
        issuer: "MongoDB University",
        year: "2023"
    }
    
];

function Certificates () {
    return(
        <section id="certificates" className="certificates-section">
            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                    <motion.div
                    key={index}
                    className="certificate-card"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: index * 0.1}}
                    >
                    <div className="certificate-icon">{cert.icon}</div>
                    <h3 className="certificate-name">{cert.name}</h3>
                    <p className="certificate-issuer">{cert.issuer}</p>
                    <p className="certificate-year">{cert.year}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
export default Certificates