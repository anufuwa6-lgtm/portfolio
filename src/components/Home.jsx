import './home.css';
import heroImage from "../assets/hero.jpeg";

export default function Home () {
    return (
        <div className='home'>
            <img src={heroImage} alt='Hero'/>
            <h2><span>Hello I'm Ethan</span></h2>
            <p>A passionate Web Developer creating clean and functonal designs</p>
            <div className='home-buttons'>
                <button className='btn'
                onClick={() => document.getElementById("projects").scrollIntoView({behaviour: "smooth"})}>
                    View Projects
                </button>
                <button className='btn'
                onClick={() => document.getElementById("contact").scrollIntoView({behaviour: "smooth"})}>
                   Contact Me
                </button>
            </div>
        </div>
    );
}