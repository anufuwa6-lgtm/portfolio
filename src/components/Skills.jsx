import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase} from 'react-icons/fa';

export default function Skills() {
    return(
        <section id="skills" className='skills-section'>
            <h2>My Skills</h2>
            <div className='skills-container'>
                <div className='skill'>
                    <div className='skill-header'>
                        <FaHtml5 size={30} style={{marginRight:'8px'}}/>
                        <span>HTML</span>
                        <span>90%</span>
                    </div>
                    <div className='skill-bar'>
                        <div className='skill-fill' style={{width:'90%'}}></div>
                    </div>
                    <div className='skill'>
                    <div className='skill-header'>
                        <FaCss3Alt size={30} style={{marginRight:'8px'}}/>
                        <span>CSS</span>
                        <span>85%</span>
                    </div>
                    <div className='skill-bar'>
                        <div className='skill-fill' style={{width:'85%'}}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}