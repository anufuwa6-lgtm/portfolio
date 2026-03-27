import React from 'react';
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Certificates from './components/Certificates.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer';
import FAQ from './components/FAQ.jsx';
import Services from './components/Services.jsx';
import {motion} from "framer-motion";
import WhatsappFloat from './components/WhatsappFloat.jsx';
import BackToTop from './BackToTop.jsx';
import Hiremefloat from './Hiremefloat.jsx';


export default function App() {
 
  return (
    <div className='App'>
     <Navbar/>
      <main>
        <section id='home'>
          <motion.div
          initial ={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount:0.2}}
          transition={{duration: 0.6, ease:"easeOut" }}>
          <Home/>
          </motion.div>
        </section>
        <section id='about'>
          <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.6, ease:"easeOut"}}>
            <About/>
            </motion.div>
        </section>
        <section id='skills'>
          <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.6, ease:"easeOut"}}>
          <Skills/>
          </motion.div>
        </section>
        <section id='certificates'>
          <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.6, ease:"easeOut"}}>
          <Certificates/>
          </motion.div>
        </section>
        <section id='services'>
          <Services/>
        </section>
        <section id='projects'>
          <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.6, ease:"easeOut"}}>
          <Projects/>
          </motion.div>
        </section>
        <section id='contact'>
          <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true, amount: 0.2}}
          transition={{duration: 0.6, ease:"easeOut"}}>
          <Contact/>
          </motion.div>
        </section>
        <section>
          <FAQ/>
        </section>
      </main>
      <Footer/> 
      <Hiremefloat />
      <WhatsappFloat/>
      <BackToTop />
      
    </div>

  );
}