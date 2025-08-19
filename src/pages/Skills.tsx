import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";

// ✅ import icons
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFlask,
  SiSolidity,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiGooglecloud,
  SiGithubactions,
  SiGraphql,
  SiWebrtc,
  SiEthereum,
  SiWeb3Dotjs,
  SiVisualstudiocode,
  SiFigma,
  SiJira,
  SiCplusplus,
} from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = {
    "🚀 Frontend Development": [
      { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500", icon: SiReact },
      { name: "Next.js", level: 90, color: "from-gray-700 to-black", icon: SiNextdotjs },
      { name: "JavaScript (ES6+)", level: 90, color: "from-yellow-400 to-orange-500", icon: SiJavascript },
      { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400", icon: SiTypescript },
      { name: "HTML5", level: 90, color: "from-orange-500 to-pink-500", icon: SiHtml5 },
      { name: "CSS3", level: 90, color: "from-blue-400 to-indigo-600", icon: SiCss3 },
      { name: "TailwindCSS", level: 85, color: "from-teal-400 to-blue-500", icon: SiTailwindcss },
      { name: "Bootstrap", level: 80, color: "from-purple-500 to-indigo-500", icon: SiBootstrap },
    ],
    "⚡ Backend Development": [
      { name: "Node.js", level: 90, color: "from-green-500 to-pink-400", icon: SiNodedotjs },
      { name: "Express.js", level: 85, color: "from-yellow-500 to-green-600", icon: SiExpress },
      { name: "Python", level: 85, color: "from-yellow-500 to-blue-500", icon: SiPython },
      { name: "Django", level: 75, color: "from-green-700 to-gray-600", icon: SiDjango },
      { name: "Flask", level: 70, color: "from-gray-500 to-blue-600", icon: SiFlask },
      { name: "Solidity (Smart Contracts)", level: 55, color: "from-blue-400 to-blue-600", icon: SiSolidity },
    ],
    "🗄️ Databases": [
      { name: "MongoDB", level: 85, color: "from-green-500 to-green-700", icon: SiMongodb },
      { name: "PostgreSQL", level: 80, color: "from-indigo-600 to-blue-500", icon: SiPostgresql },
      { name: "MySQL", level: 75, color: "from-blue-700 to-gray-500", icon: SiMysql },
      { name: "Firebase", level: 70, color: "from-yellow-400 to-orange-600", icon: SiFirebase },
    ],
    "☁️ DevOps & Cloud": [
      { name: "Git & GitHub", level: 95, color: "from-red-600 to-green-600", icon: SiGithub },
      { name: "Docker", level: 80, color: "from-blue-500 to-cyan-700", icon: SiDocker },
      { name: "Kubernetes", level: 70, color: "from-sky-500 to-blue-800", icon: SiKubernetes },
      { name: "AWS (EC2, S3, Lambda)", level: 80, color: "from-orange-400 to-yellow-600", icon: SiAmazonaws },
      { name: "Google Cloud Platform (GCP)", level: 70, color: "from-blue-500 to-yellow-500", icon: SiGooglecloud },
      { name: "CI/CD (GitHub Actions, Jenkins)", level: 75, color: "from-purple-500 to-indigo-600", icon: SiGithubactions },
    ],
    "🔗 APIs & Integrations": [
      { name: "REST APIs", level: 90, color: "from-pink-500 to-red-500", icon: SiWebrtc },
      { name: "GraphQL", level: 75, color: "from-purple-600 to-pink-400", icon: SiGraphql },
      { name: "WebSockets", level: 70, color: "from-green-400 to-blue-400", icon: SiWebrtc },
    ],
    "🔒 Blockchain / Web3": [
      { name: "Ethereum Smart Contracts", level: 55, color: "from-purple-700 to-indigo-700", icon: SiEthereum },
      { name: "Web3.js & Ethers.js", level: 60, color: "from-blue-600 to-purple-500", icon: SiWeb3Dotjs },
    ],
    "🛠️ Tools & Project Management": [
      { name: "VS Code", level: 95, color: "from-cyan-500 to-blue-500", icon: SiVisualstudiocode },
      { name: "Figma (UI/UX)", level: 80, color: "from-pink-400 to-purple-500", icon: SiFigma },
      { name: "Agile & Scrum", level: 85, color: "from-teal-500 to-green-500", icon: SiJira },
      { name: "Project Management (ClickUp, Jira, Trello)", level: 80, color: "from-yellow-500 to-cyan-500", icon: SiJira },
    ],
    "🎯 Core CS & Problem Solving": [
      { name: "Data Structures & Algorithms (DSA)", level: 85, color: "from-gray-600 to-gray-800", icon: SiCplusplus },
      { name: "Object-Oriented Programming (OOP)", level: 85, color: "from-blue-600 to-indigo-800", icon: SiCplusplus },
      { name: "System Design", level: 70, color: "from-gray-700 to-black", icon: SiCplusplus },
      { name: "Critical Thinking & Problem Solving", level: 90, color: "from-teal-600 to-green-600", icon: SiCplusplus },
    ],
  };

  return (
      <PageLayout>
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <ParticlesBackground />

          {/* Heading */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Skills
            </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Categories */}
          <div className="space-y-12">
            {Object.entries(categories).map(([category, skills], i) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <h2 className="text-2xl font-semibold text-purple-300 mb-6">
                    {category}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-3">
                              {skill.icon && (
                                  <skill.icon className="text-2xl text-white" />
                              )}
                              <h3 className="text-lg font-medium text-white">
                                {skill.name}
                              </h3>
                            </div>
                            <span className="text-gray-300 text-sm">
                        {skill.level}%
                      </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                                transition={{
                                  duration: 1.5,
                                  delay: 0.5 + index * 0.1,
                                }}
                            />
                          </div>
                        </motion.div>
                    ))}
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </PageLayout>
  );
};

export default Skills;
