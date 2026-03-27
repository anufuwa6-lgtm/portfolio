import React from "react";
import './Certificates.css';
import { motion } from "framer-motion";

const certificates = [
    {name: "Frontend Masters-Advanced React",
     icon: "🎓",
     issuer: "Frontend Masters",
     year: "2025"
    },
    {name: "Google Analytics Certification",
        icon:"📊",
        year: "2025"
    },
    {name: "MongoDB Basics",
        icon: "💾",
        year: "2025"
    }
    
];

function Certificates () {
    return(
        <section id="certificates" className="certificates-section">
                <motion.h2
                      initial={{opacity: 0, y: 20}}
                      whileInView={{opacity: 1, y: 0}}
                      viewport={{once: true}}
                      transition={{duration: 0.5}}>
                       Certificates
                </motion.h2>
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
                        Certificates
                    <div className="certificate-icon">{cert.icon}</div>
                    <h3 className="certificate-name">{cert.name}</h3>
                    <p className="certificate-year">{cert.year}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
export default Certificates