import {
    Public
} from "@mui/icons-material";
import {
    motion
} from "framer-motion";
const Projects = () => {
  const cardsData = [
    {
      image: "./models/neoncube.png",
      title: "NeonCube - Company Showcase Website",
      techUsed:
        "React.js, Bootstrap, Intersection Observer API, Scroll Animations",
      description: `
            Designed and developed NeonCube, a company showcase website, with a clean and modern interface.
            Used React.js for dynamic rendering and Bootstrap for responsive layout design.
            Implemented smooth scroll animations with the Intersection Observer API to highlight sections as the user scrolls.
            The website showcases the company's services, portfolio, and contact information, all in a highly interactive and visually appealing manner.
          `,
      link: "https://pandithevan96.github.io/neoncube/",
    },
    {
      image: "./models/chatapp1.png",
      title: "Chatfo - Real-Time Chat Application",
      techUsed:
        "React.js, Material-UI, Tailwind CSS, Zustand, Firebase, Cloudinary",
      description: `
            Designed and developed Chatfo, a real-time chat app with secure Google Authentication using Firebase.
            Implemented profile customization, real-time messaging, message deletion, and online user status tracking.
            Built a responsive interface with Material-UI and Tailwind CSS, and used Zustand for efficient state management.
            Integrated Firebase Firestore for a scalable backend to support real-time operations.
          `,
      link: "https://pandithevan96.github.io/chatapp/",
    },
    {
      image: "./models/x-clone.png",
      title: "X-Clone - Social Media Platform",
      techUsed:
        "MERN Stack, TanStack (React Query), Tailwind CSS, DaisyUI, JWT Authentication, Cloudinary, Custom Hooks",
      description: `
            Built X-Clone, a Twitter-like social media platform with features like liking, commenting, following, and posting.
            Integrated JWT authentication for secure login/signup and used TanStack for efficient data fetching.
            Designed a responsive UI with Tailwind CSS and DaisyUI, and optimized media uploads with Cloudinary.
            Utilized custom hooks for reusable logic and built a scalable backend with Node.js and Express.
          `,
      link: "https://x-clone-l2ul.onrender.com/",
    },
  ];
  const ProjectCard = ({ project, index }) => (
    <motion.div
      className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ delay: index * 0.2 }}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-300">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.techUsed.split(", ").map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/50 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-400 leading-relaxed">{project.description}</p>

        <motion.a
          href={project.link}
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-pink-400 hover:from-pink-400 hover:to-yellow-500 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Public className="text-white" />
          <span className="text-white font-medium">Live Demo</span>
        </motion.a>
      </div>

      <div className="absolute inset-0 border-2 border-purple-400/20 rounded-3xl pointer-events-none group-hover:border-purple-400/40 transition-all" />
    </motion.div>
  );
  return (
    <div>
      <section id="projects" className="space-y-12 mt-12">
 <div className="flex items-center mb-12 gap-4">
  <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full" />
  <h5 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-300 bg-clip-text text-transparent">
    Projects
  </h5>
  <div className="h-1 flex-1 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full" />
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
