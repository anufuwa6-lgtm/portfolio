import './Contact.css'

export default function Contact() {
    return (
        <div className='contact'>
        <form>
            <input type='text' placeholder='Full Name'/>
            <input type='email' placeholder='Your Email'/>
            <textarea id='message' name='message' required placeholder='Your Message'></textarea>
            <button type='submit'>Send Message</button>
            </form>     
        </div>
    );
}