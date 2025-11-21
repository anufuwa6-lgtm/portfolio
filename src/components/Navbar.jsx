import './Navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>My Logo</div>
            <nav className={`nav-links ${isActive ? 'active' : '' }`}>
            <a href='#home' onClick={() => setIsActive(false)}>Home</a>
            <a href='#about' onClick={() => setIsActive(false)}>About</a>
            <a href='#skills' onClick={() => setIsActive(false)}>Skills</a>
            <a href='#projects' onClick={() => setIsActive(false)}>Projects</a>
            <a href='#contact' onClick={() => setIsActive(false)}>Contact</a>
            </nav>
            <div className='hamburger' onClick={() => setIsActive(!isActive)}>
                <div className='line'></div>
                 <div className='line'></div>
                  <div className='line'></div>

            </div>
        </div>
    );
}