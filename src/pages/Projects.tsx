import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";
import emmaImg from '@/Public/emma.jpg';
import theaImg from '@/Public/thea.jpg';
import ellaImg from '@/Public/ella.jpg';
import knightsImg from '@/Public/knights.jpg';
import mathematrixImg from '@/Public/mathematrix.jpg';
import semacImg from '@/Public/semc.jpg';
import ideapoolImg from '@/Public/ideapool.jpg';
import fitdeckImg from '@/Public/firedeck.jpg';
import chatterboxImg from '@/Public/chatterbox.jpg';
import capnshareImg from '@/Public/capnshare.jpg';
import careerMapperImg from '@/Public/career-mapper.jpg';
import inventoryImg from '@/Public/inventory.jpg';
import faceRecognitionImg from '@/Public/face-recognition.jpg';
import agilePlannerImg from '@/Public/agile-planner.jpg';
import agrotechImg from '@/Public/agrotech.jpg';
import influencerImg from '@/Public/influencer.jpg';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

const projects = [
    {
      id: 1,
      title: "Emma",
      description: "Advanced personal assistant automating daily productivity, managing schedules, and providing smart suggestions.",
      tech: ["Python", "Custom Algorithms"],
      color: "from-purple-500 to-pink-500",
      liveDemo: "https://github.com/Brajesh31/emma",
      image: emmaImg,
    },
    {
      id: 2,
      title: "Thea (AI Therapist)",
      description: "Empathetic AI therapist for mental health support and human-like conversations.",
      tech: ["Python", "AI Models"],
      color: "from-blue-500 to-cyan-500",
      liveDemo: "https://github.com/Brajesh31/thea-ai-therapist",
      image: theaImg,
    },
    {
      id: 3,
      title: "Ella (AI Companion)",
      description: "Mobile AI companion app with chat interface, emotional support, and productivity tools.",
      tech: ["React Native", "Expo", "Machine Learning"],
      color: "from-purple-500 to-blue-600",
      liveDemo: "https://github.com/Brajesh31/ella-ai-companion",
      image: ellaImg,
    },
    {
      id: 4,
      title: "The Knights of Flovora",
      description: "RPG game featuring dungeon crawling, combat, character progression, and fantasy storyline.",
      tech: ["Flutter", "Dart"],
      color: "from-orange-500 to-red-500",
      liveDemo: "https://github.com/Brajesh31/knights-of-flovora",
      image: knightsImg,
    },
    {
      id: 5,
      title: "Mathematrix",
      description: "Interactive multiplication learning platform with quizzes and gamification aimed at kids.",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "from-yellow-400 to-yellow-600",
      liveDemo: "https://github.com/Brajesh31/mathematrix",
      image: mathematrixImg,
    },
    {
      id: 6,
      title: "SEMAC",
      description: "College utility platform with group collaboration, study resources, and notifications.",
      tech: ["Next.js", "MongoDB", "Machine Learning"],
      color: "from-green-500 to-green-700",
      liveDemo: "https://github.com/Brajesh31/semac",
      image: semacImg,
    },
    {
      id: 7,
      title: "IdeaPool",
      description: "Project collaboration platform for developers to share ideas and form teams.",
      tech: ["MERN Stack"],
      color: "from-purple-600 to-indigo-600",
      liveDemo: "https://github.com/Brajesh31/ideapool",
      image: ideapoolImg,
    },
    {
      id: 8,
      title: "FitDeck",
      description: "Social network for fitness enthusiasts with coach following and community features.",
      tech: ["MERN Stack"],
      color: "from-pink-500 to-pink-700",
      liveDemo: "https://github.com/Brajesh31/fitdeck",
      image: fitdeckImg,
    },
    {
      id: 9,
      title: "ChatterBox",
      description: "Real-time chat app with themed rooms and live messaging.",
      tech: ["Node.js", "Socket.io"],
      color: "from-blue-600 to-blue-800",
      liveDemo: "https://github.com/Brajesh31/chatterbox",
      image: chatterboxImg,
    },
    {
      id: 10,
      title: "Cap’n Share",
      description: "Campus food sharing platform with request and admin moderation.",
      tech: ["Ruby on Rails", "PostgreSQL"],
      color: "from-red-500 to-red-700",
      liveDemo: "https://github.com/Brajesh31/capn-share",
      image: capnshareImg,
    },
    {
      id: 11,
      title: "Career Mapper",
      description: "Job comparison tool based on cost of living and safety indices.",
      tech: ["Python", "React", "MySQL"],
      color: "from-yellow-500 to-yellow-700",
      liveDemo: "https://github.com/Brajesh31/career-mapper",
      image: careerMapperImg,
    },
    {
      id: 12,
      title: "Inventory Management System",
      description: "Stock and order management platform with CRUD.",
      tech: ["Python", "Django", "SQLite"],
      color: "from-green-400 to-green-600",
      liveDemo: "https://github.com/Brajesh31/inventory-management-system",
      image: inventoryImg,
    },
    {
      id: 13,
      title: "NLP Chatbot",
      description: "AI chatbot for customer interaction and FAQ automation.",
      tech: ["Python", "NLP", "TensorFlow"],
      color: "from-purple-400 to-purple-600",
      liveDemo: "https://github.com/Brajesh31/nlp-chatbot",
      image: null, // missing import
    },
    {
      id: 14,
      title: "Face Recognition System",
      description: "Real-time face recognition and security system.",
      tech: ["Python", "OpenCV", "TensorFlow"],
      color: "from-blue-400 to-blue-600",
      liveDemo: "https://github.com/Brajesh31/face-recognition-system",
      image: faceRecognitionImg,
    },
    {
      id: 15,
      title: "Lab Agile Planning Tool",
      description: "Agile workflow and sprint planning platform.",
      tech: ["Jira", "React"],
      color: "from-red-400 to-red-600",
      liveDemo: "https://github.com/Brajesh31/lab-agile-planning-tool",
      image: agilePlannerImg,
    },
    {
      id: 16,
      title: "AgroTech",
      description: "Farm management platform with IoT sensor integration and analytics.",
      tech: ["React", "Node.js", "MongoDB", "IoT"],
      color: "from-green-600 to-green-800",
      liveDemo: "https://github.com/Brajesh31/agrotech",
      image: agrotechImg,
    },
    {
      id: 17,
      title: "Influencer Sponsor Coordination",
      description: "Platform connecting influencers with sponsors.",
      tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
      color: "from-purple-500 to-purple-700",
      liveDemo: "https://github.com/Brajesh31/influencer-sponsor-coordination",
      image: influencerImg,
    },
    {
      id: 18,
      title: "Image Denoising + StyleGAN",
      description: "Research on image restoration using GANs and diffusion models.",
      tech: ["Deep Learning", "TensorFlow"],
      color: "from-pink-500 to-pink-700",
      liveDemo: "https://github.com/Brajesh31/image-denoising-stylegan",
      image: null, // missing import
    },
  ];

  return (
      <PageLayout>
        <div className="container mx-auto px-4 lg:px-20 relative z-10">
          <ParticlesBackground />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-none bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                My Projects
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A showcase of my recent work and creative solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                  <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="group relative cursor-pointer"
                      onClick={() =>
                          setSelectedProject(selectedProject === project.id ? null : project.id)
                      }
                  >
                    <div
                        className={`bg-gradient-to-br ${project.color} p-6 rounded-xl shadow-2xl flex flex-col items-center`}
                    >
                      {/* ✅ Fixed image block */}
                      <div className="mb-4 w-20 h-20 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-gray-900">
                        {project.image ? (
                            <img
                                src={project.image as string}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-white text-sm">No Image</span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                            >
                      {tech}
                    </span>
                        ))}
                      </div>

                      <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                      />

                      <motion.div
                          initial={false}
                          animate={{ height: selectedProject === project.id ? "auto" : 0 }}
                          className="overflow-hidden"
                      >
                        {selectedProject === project.id && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="pt-4 border-t border-gray-600"
                            >
                              <div className="flex gap-4">
                                <motion.a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                  Live Demo
                                </motion.a>
                              </div>
                            </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
  );
};

export default Projects;
