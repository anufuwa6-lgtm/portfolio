import React from "react";
import "./Testimonials.css";
import {motion} from "framer-motion";
const testimonials = [
    {name: "John Doe",
    role: "Product Manager",
    company: "Fintech Corp",
    message: "Working with you was seamless. Delivery was fast, clean, and exceeded expectations."
    },
    {name: "Sarah Ahmed",
    role: "Startup Founder",
    company: "Paystack Partner",
    message: "Highly professional developer. Communication and execution were top-notch."
    },
    {name: "Michael Lee",
    role: "CTO",
    company: "Web3 Startup",
    message: "Strong technical knowledge and very reliable. Would definitely work together again."
    },
    {name: "Daniel Okafor",
    role: "CEO",
    company: "TechNOva Africa",
    message: "Your attention to detail and problem-solving skills helped us scale our platform efficiently.",
    },
    {name: "Aisha Bello",
    role: "UI/UX Designer",
    company: "DesignMint",
    message: "Clean code, great collaboration, and a strong understanding of product needs.",
    },
    {name: "Samuel Jackson",
    role: "Software Engineer",
    company: "CloudX Systems",
    message: "Very dependable and technically solid. Always delivered on time with quality.",
    },
    {name: "Emily Carter",
    role: "Digital Marketer",
    company: "Growth Labs",
    message: "The website performance and SEO improvements made a noticeable difference for our brand.",
    },
    {name: "Ibrahim Musa",
    role: "Operations Manager",
    company: "LogPay",
    message: "Excellent communication and execution. The project was smooth from start to finish.",
    },
    {name: "Olivia Martinez",
    role: "Founder",
    company: "E-commerce Hub",
    message: "You delivered beyond expectations. The platform is fast, secure and scalable.",
    },
    {name: "Davud Chen",
    role: "Technical Lead",
    company: "SaaS Bridge",
    message: "Impressive backend architechture and clean frontend implementation. Highly recommended.",
    },
    {name: "Blessing Adeyemi",
    role: "Project Coordinator",
    company: "Innovate NG",
    message: "Your professionalism and commitment made this one of our smoothest projects.",
    },
    {name: "Mark Williams",
    role: "Startup Advisor",
    company: "LaunchPad ",
    message: "Clear communication and excellent technical execution throughout.",
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <motion.h2
                initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                >
                    Testimonials
                </motion.h2>
           
            <div className="testimonial-grid">
                {testimonials.map((item, index) => (
                    <motion.div
                    key={index}
                    className="testimonial-card"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: index * 0.2}}
                    >
                        <p className="message">“{item.message}”</p>
                        <h4>{item.name}</h4>
                        <span>{item.role} . {item.company}</span>
                    </motion.div>
                ))}
            </div>
            </div>
        </section>
    );
}

