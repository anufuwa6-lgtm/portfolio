import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";

const faqs = [
  {
    question: "Are you available for freelance work?",
    answer:
      "Yes, I'm available for freelance projects and long-term collaborations. You can reach out via the contact section."
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Next.js, Node.js, MongoDB, APIs, and modern web development tools."
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on complexity, but most projects take between 1-4 weeks."
  },
  {
    question: "Do you offer maintenance after project delivery?",
    answer:
      "Yes. I provide ongoing support, bug fixes, and feature updates after delivery if needed."
  },
  {
    question: "Can you work with existing designs or codebases?",
    answer:
      "Absolutely. I can integrate into existing projects, improve performance, or add new features."
  }
];
export default function FAQ() {
    const [activeIndex, setActiveIndex]= useState(null);
    return (
        <section className="faq-section">
            <div className="faq-container">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key= {index} className="faq-item">
                        <button 
                        className="faq-question"
                        onClick={() => 
                            setActiveIndex(activeIndex === index ? null: index)
                        }>
                            <span>{faq.question}</span>
                            <span>{activeIndex === index ? "-" : "+"}</span>
                        </button>

                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                className="faq-answer"
                                initial= {{height: 0, opacity: 0}}
                                animate= {{height: "auto", opacity: 1}}
                                exit={{height: 0, opacity: 0}}
                                transition={{duration: 0.3}}>
                                    <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}