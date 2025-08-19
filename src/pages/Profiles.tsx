import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";
import {FaGithub, FaLinkedin, FaYoutube, FaArrowUp, FaFreeCodeCamp, FaUniversity} from "react-icons/fa";
import {SiCisco, SiCodechef, SiCodeforces, SiCoursera, SiCredly, SiCsharp, SiEdx, SiFortran, SiGeeksforgeeks,
  SiGooglecloud, SiHackerearth,
  SiHackerrank, SiIbm, SiInfosys,
  SiLeetcode,
  SiMicrosoft, SiSololearn, SiUdemy
} from "react-icons/si";

const profiles = [
  {
    name: "GitHub",
    icon: <FaGithub size={48} className="text-white" />,
    description: "Open source contributions and repositories",
    stats: "5+ repositories",
    url: "https://github.com/Brajesh31",
    color: "from-[#232c3d] to-[#293042]"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={48} className="text-white" />,
    description: "Professional networking and career profile",
    stats: "500+ connections",
    url: "https://www.linkedin.com/in/brajesh-kumar-9b58651a8/",
    color: "from-[#0a66c2] to-[#004182]"
  },
  {
    name: "CodeChef",
    icon: <SiCodechef size={48} className="text-white" />,
    description: "Competitive programming challenges",
    stats: "Rated user",
    url: "https://www.codechef.com/users/brajesh31",
    color: "from-[#5b4638] to-[#2e1e0f]"
  },
  {
    name: "HackerRank",
    icon: <SiHackerrank size={48} className="text-white" />,
    description: "Coding practice and skill certifications",
    stats: "Problem solving profile",
    url: "https://www.hackerrank.com/profile/bk117134",
    color: "from-[#1ba94c] to-[#0d7a33]"
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces size={48} className="text-white" />,
    description: "Competitive programming contests",
    stats: "Active participant",
    url: "https://codeforces.com/profile/bk117134",
    color: "from-[#1f1f39] to-[#393975]"
  },
  {
    name: "freeCodeCamp",
    icon: <FaFreeCodeCamp size={48} className="text-white" />,
    description: "Learning platform for coding and projects",
    stats: "Certified learner",
    url: "https://www.freecodecamp.org/fccefc996a3-a55c-4b7d-bca0-b59b68536279",
    color: "from-[#0a0a23] to-[#1b1b32]"
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks size={48} className="text-white" />,
    description: "Articles, practice, and coding challenges",
    stats: "Contributor & learner",
    url: "https://www.geeksforgeeks.org/user/brajesh31/",
    color: "from-[#308d46] to-[#154f28]"
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud size={48} className="text-white" />,
    description: "Cloud projects and skill badges",
    stats: "Profile & labs completed",
    url: "https://www.cloudskillsboost.google/public_profiles/9c512a6d-9347-491d-a16f-1db7651126d9",
    color: "from-[#4285f4] to-[#1a73e8]"
  },
  {
    name: "Microsoft Learn",
    icon: <SiMicrosoft size={48} className="text-white" />,
    description: "Learning modules and certifications",
    stats: "Skill-based achievements",
    url: "https://learn.microsoft.com/en-us/users/brajeshkumar-2922/",
    color: "from-[#0078d7] to-[#004578]"
  },
  {
    name: "Coursera",
    icon: <SiCoursera size={48} className="text-white" />,
    description: "Online courses and certifications",
    stats: "Multiple certifications earned",
    url: "https://www.coursera.org/user/d1d21a6feea4a96b11b52a876f8d5278",
    color: "from-[#2a73cc] to-[#174ea6]"
  },
  {
    name: "Udemy",
    icon: <SiUdemy size={48} className="text-white" />,
    description: "Online learning platform",
    stats: "Enrolled in multiple courses",
    url: "https://www.udemy.com/user/brajesh-kumar-547/",
    color: "from-[#a435f0] to-[#8710d8]"
  },
  {
    name: "edX",
    icon: <SiEdx size={48} className="text-white" />,
    description: "University-level online learning",
    stats: "Completed online courses",
    url: "https://profile.edx.org/u/brajesh31_4",
    color: "from-[#02262b] to-[#054d5a]"
  },
  {
    name: "Cisco Network Academy",
    icon: <SiCisco size={48} className="text-white" />,
    description: "Networking and IT certifications",
    stats: "Certified learner",
    url: "https://www.netacad.com/profile?&tab=profile",
    color: "from-[#1ba0d7] to-[#005073]"
  },
  {
    name: "Cognitive Class",
    icon: <SiIbm size={48} className="text-white" />,
    description: "IBM learning modules and badges",
    stats: "Completed multiple modules",
    url: "https://courses.cognitiveclass.ai/u/bk117134",
    color: "from-[#052f61] to-[#021d3a]"
  },
  {
    name: "Saylor Academy",
    icon: <FaUniversity size={48} className="text-white" />,
    description: "Free online university-level courses",
    stats: "Certified learner",
    url: "https://learn.saylor.org/user/profile.php?id=2051648",
    color: "from-[#4a5568] to-[#2d3748]"
  },
  {
    name: "SoloLearn",
    icon: <SiSololearn size={48} className="text-white" />,
    description: "Mobile-first learning platform",
    stats: "Active learner",
    url: "https://www.sololearn.com/en/profile/32005015",
    color: "from-[#13a49b] to-[#0e807c]"
  },
  {
    name: "C# Corner",
    icon: <SiCsharp size={48} className="text-white" />,
    description: "Developer articles and knowledge sharing",
    stats: "Community member",
    url: "https://www.c-sharpcorner.com/members/brajesh-kumar62",
    color: "from-[#239120] to-[#144d12]"
  },
  {
    name: "Credly",
    icon: <SiCredly size={48} className="text-white" />,
    description: "Verified digital credentials",
    stats: "Multiple badges",
    url: "https://www.credly.com/users/brajesh-kumar.d85228d3",
    color: "from-[#ff6a00] to-[#ff3d00]"
  },
  {
    name: "Unstop",
    icon: <SiHackerearth size={48} className="text-white" />, // (Unstop has no official icon, fallback)
    description: "Hackathons, jobs, and competitions",
    stats: "Active participant",
    url: "https://unstop.com/u/Brajesh3101",
    color: "from-[#0f172a] to-[#1e293b]"
  },
  {
    name: "Campus Code",
    icon: <FaUniversity size={48} className="text-white" />,
    description: "Student-driven coding community",
    stats: "Community member",
    url: "https://www.campuscode.in/",
    color: "from-[#334155] to-[#1e293b]"
  },
  {
    name: "Forage",
    icon: <SiFortran size={48} className="text-white" />, // placeholder, no official
    description: "Virtual internships and simulations",
    stats: "Multiple programs completed",
    url: "https://www.theforage.com/profile/qXFNjXrD3s5vM5xDh",
    color: "from-[#1e3a8a] to-[#1d4ed8]"
  },
  {
    name: "Infosys Springboard",
    icon: <SiInfosys size={48} className="text-white" />,
    description: "Skill development and certifications",
    stats: "Certified learner",
    url: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate",
    color: "from-[#007cc3] to-[#004b75]"
  }
];

const Profile = () => (
  <PageLayout>
    <div className="overflow-hidden container mx-auto px-4 lg:px-20 relative z-10">
      <ParticlesBackground /> {/* If `mouseInteractive` not supported, use your own props API */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-3 font-serif bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Profiles
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with me across different platforms
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-10">
          {profiles.map((profile, idx) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-4 focus:ring-pink-300 rounded-2xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.14 }}
                whileHover={{ scale: 1.03, y: -7 }}
                className={`bg-gradient-to-br ${profile.color}
                  rounded-2xl shadow-xl px-8 py-8 min-h-[230px] flex flex-col justify-between transition-all duration-300`}
              >
                <div>
                  <div className="mb-5">{profile.icon}</div>
                  <div className="text-2xl font-bold text-white mb-2">{profile.name}</div>
                  <div className="text-white/85 text-base mb-3">{profile.description}</div>
                </div>
                <div className="mt-auto font-semibold text-[1rem] text-white/85">{profile.stats}</div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Profile;
