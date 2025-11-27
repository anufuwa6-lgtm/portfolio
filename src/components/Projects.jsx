import './Projects.css';

export default function Projects() {
 const projects = [
  { title: "Crypto Dashboard", desc: "Track and manage crypto assets." },
  { title: "Movie Site", desc: "Browse and save your favorite movies." },
  { title: "Property App", desc: "List and find properties easily." },
  { title: "E-Commerce Store", desc: "Buy and sell products with a simple UI." },
  { title: "Chat App", desc: "Real-time messaging with typing indicators." },
  { title: "Task Manager", desc: "Organize tasks with drag-and-drop support." },
  { title: "Portfolio Website", desc: "Showcase your work and skills professionally." },
  { title: "Blog Platform", desc: "Write, publish, and manage blog posts easily." },
  { title: "Weather App", desc: "Check real-time temperature and forecasts." },
   { title: "Learning Management System", desc: "Create and manage online courses with quizzes." },
];

    return(
        <section className='projects' id='projects'>
            <h2>My Projects</h2>
            <div className='project-grid'>
                {projects.map((p, i) => (
                    <div key = {i} className='project-card'>
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <button>View Details</button>
                    </div>
                )
            )}
            </div>
        </section>
    );
}