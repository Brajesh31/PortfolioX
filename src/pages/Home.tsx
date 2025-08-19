import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";
import AnimatedGradient from "../components/AnimatedGradient";
import Typewriter from "typewriter-effect";
import emailjs from "@emailjs/browser";

import gssocCampusAmbassadorImg from '@/Public/gssoc-campus-ambassador.png';
import ssocContributorImg from '@/Public/ssoc-contributor.png';
import openSourceContributorImg from '@/Public/open-source-contributor.png';
import techDevClubImg from '@/Public/tech-dev-club.png';
import iitRoorkeeImg from '@/Public/iit-roorkee.png';
import iitDelhiImg from '@/Public/iit-delhi.png';
import iitMadrasImg from '@/Public/iit-madras.png';
import letsUpgradImg from '@/Public/lets-upgrad.png';
import mentorImg from '@/Public/mentor.png';
import budgetGoogleSheetsImg from '@/Public/budget-google-sheets.png';
import linkedinNetworkingImg from '@/Public/linkedin-networking.png';
import canvaWebPagesImg from '@/Public/canva-web-pages.png';
import pandasBootcampImg from '@/Public/pandas-bootcamp.png';
import awsSolutionsArchJobImg from '@/Public/aws-solutions-arch-job.png';
import brajesh from '@/Public/BkAvatar2.png';
import braj from '@/Public/brajesh3.png';
import bk from '@/Public/brajesh2.png';
import { useAudio } from "../context/AudioContext";
import AudioToggle from "../components/AudioToggle";
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
import {FaGithub, FaLinkedin, FaArrowUp, FaFreeCodeCamp, FaUniversity} from "react-icons/fa";
import {SiCisco, SiCodechef, SiCodeforces, SiCoursera, SiCredly, SiCsharp, SiEdx, SiFortran, SiGeeksforgeeks,SiHackerearth,
  SiHackerrank, SiIbm, SiInfosys,
  SiMicrosoft, SiSololearn, SiUdemy
} from "react-icons/si";
import resume from "@/Public/brajesh.pdf";
import emmaImg from "@/Public/emma.jpg";
import theaImg from "@/Public/thea.jpg";
import ellaImg from "@/Public/ella.jpg";
import knightsImg from "@/Public/knights.jpg";
import mathematrixImg from "@/Public/mathematrix.jpg";
import semacImg from "@/Public/semc.jpg";
import ideapoolImg from "@/Public/ideapool.jpg";
import fitdeckImg from "@/Public/firedeck.jpg";
import chatterboxImg from "@/Public/chatterbox.jpg";
import capnshareImg from "@/Public/capnshare.jpg";
import careerMapperImg from "@/Public/career-mapper.jpg";
import inventoryImg from "@/Public/inventory.jpg";
import faceRecognitionImg from "@/Public/face-recognition.jpg";
import agilePlannerImg from "@/Public/agile-planner.jpg";
import agrotechImg from "@/Public/agrotech.jpg";
import influencerImg from "@/Public/influencer.jpg";

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


const achievements = [
  {
    title: "Mentor @ GirlScript Summer of Code 2025",
    description: "Provided guidance and mentorship to participants in GirlScript Summer of Code 2025, helping students learn open-source development, coding best practices, and project collaboration.",
    date: "Jul 2025 - Present",
    position: "Mentor & Guide",
    images: [mentorImg]
  },
  {
    title: "GirlScript Summer of Code (GSSoC) 2025 - Campus Ambassador",
    description: "Selected as a Campus Ambassador for GSSoC 2025, played a key role in promoting open-source culture, mentoring participants, leading outreach campaigns, and representing the program on campus.",
    date: "Jul 2025 - Present",
    position: "Campus Ambassador & Mentor",
    images: [gssocCampusAmbassadorImg]
  },
  {
    title: "Social Summer of Code (SSOC) Season 4 - Contributor",
    description: "Contributed to open-source projects during SSOC Season 4 by collaborating with global developers to build impactful software and promote collaborative coding practices.",
    date: "Jun 2025 - Present",
    position: "Open Source Contributor",
    images: [ssocContributorImg]
  },
  {
    title: "Open Source Connect - Full-time Contributor",
    description: "Contributed full-time to Open Source Connect projects remotely, improving software quality and assisting in community development.",
    date: "Jul 2025 - Present",
    position: "Open Source Contributor",
    images: [openSourceContributorImg]
  },
  {
    title: "Tech Dev Club - Co-Founder",
    description: "Co-founded the Tech Dev Club, a global MERN stack developer community organizing events, workshops, projects, and mentorship programs to empower developers internationally.",
    date: "2024 - Present",
    position: "Co-Founder & Community Organizer",
    images: [techDevClubImg]
  },
  {
    title: "Campus Ambassador - Indian Institute of Technology Roorkee",
    description: "Represented IIT Roorkee as a Campus Ambassador for Cognizance 2025, fostering student engagement and promoting technical events and workshops.",
    date: "Mar 2025",
    position: "Campus Ambassador",
    images: [iitRoorkeeImg]
  },
  {
    title: "Campus Ambassador - Indian Institute of Technology Delhi",
    description: "Selected Campus Ambassador for the Kaizen 2025 event at IIT Delhi, managing outreach and increasing participation among peers.",
    date: "Jan 2025 - Feb 2025",
    position: "Campus Ambassador",
    images: [iitDelhiImg]
  },
  {
    title: "Campus Ambassador - Indian Institute of Technology Madras",
    description: "Served as Campus Ambassador at IIT Madras from Oct 2024 to Jan 2025, promoting information technology and engaging student communities.",
    date: "Oct 2024 - Jan 2025",
    position: "Campus Ambassador",
    images: [iitMadrasImg]
  },
  {
    title: "Campus Ambassador - Lets Upgrad",
    description: "Promoted Lets Upgrad programs and encouraged enrollments by representing the brand as a Campus Ambassador between Jul 2024 and Aug 2024.",
    date: "Jul 2024 - Aug 2024",
    position: "Campus Ambassador",
    images: [letsUpgradImg]
  },
  {
    title: "Create a Budget with Google Sheets",
    description: "Master budgeting and financial planning using Google Sheets.",
    date: "March 2025",
    position: "RKE7ENA811A0",
    images: [budgetGoogleSheetsImg],
    url: "https://www.coursera.org/account/accomplishments/verify/RKE7ENA811A0"
  },
  {
    title: "Strategically Build and Engage Your Network on LinkedIn",
    description: "Effective LinkedIn networking strategy and engagement.",
    date: "March 2025",
    position: "YC6VX14WS7BU",
    images: [linkedinNetworkingImg],
    url: "https://www.coursera.org/account/accomplishments/verify/YC6VX14WS7BU"
  },
  {
    title: "Use Canva to Create Desktop and Mobile-friendly Web Pages",
    description: "Creating responsive web pages using Canva for desktop and mobile platforms.",
    date: "March 2025",
    position: "8ULAP5KM83Y0",
    images: [canvaWebPagesImg],
    url: "https://www.coursera.org/account/accomplishments/verify/8ULAP5KM83Y0"
  },
  {
    title: "Pandas Bootcamp | Data Analysis with Pandas Python3",
    description: "Data analysis with Pandas in Python.",
    date: "March 2025",
    position: "UC-f9187042-b451-4a32-b357-83d402ace15a",
    images: [pandasBootcampImg],
    url: "https://www.udemy.com/certificate/UC-f9187042-b451-4a32-b357-83d402ace15a/"
  },
  {
    title: "AWS APAC - Solutions Architecture Job Simulation",
    description: "AWS solution architecture job simulation.",
    date: "March 2025",
    position: "KuL5Gy2Xm45XuFXhZ",
    images: [awsSolutionsArchJobImg],
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_qXFNjXrD3s5vM5xDh_1741979405499_completion_certificate.pdf"
  },
];

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

const achievementsStats = [
  { number: "316+", label: "Full-Stack Projects Completed" },
  { number: "20+", label: "Technologies & Frameworks Mastered" },
  { number: "12+", label: "Professional Certifications Earned" },
  { number: "5+", label: "Hackathons & Competitions Participated" }
];


const Home = () => {
  const { isMuted } = useAudio();
  const [showScroll, setShowScroll] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
        "service_1n85l74",
        "template_s2gdt4j",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "bk117134@gmail.com",
        },
        "Udl5iGWEv35i-ZtfU"
    )
        .then(() => setIsSubmitted(true))
        .catch((error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        });
  };

  return (
      <PageLayout>
        {/* HERO */}
        <section id="home" className="relative min-h-screen flex items-center justify-center">
          <div className="absolute top-[72px] right-6 z-20">
            <AudioToggle />
          </div>
          <ParticlesBackground />
          <AnimatedGradient />
          <img
              src={braj}
              alt="Background image"
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-full object-cover z-0 opacity-20"
          />
          <div className="relative z-10 px-4 max-w-6xl mx-auto text-center">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
            >
              <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("Brajesh Kumar...").start();
                  }}
              />
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
            >
              <Typewriter
                  options={{
                    strings: [
                      "I'm a Fullstack Developer",
                      "I'm a Software Engineer",
                      "I'm a Software Developer",
                      "I'm a Cloud & DevOps Engineer",
                      "I'm an Introductory Dapp Developer",
                      "Innovative Problem Solver"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
              />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col md:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg"
              >
                View My Work
              </motion.button>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 border border-white rounded-full font-semibold text-white hover:bg-white/10"
              >
                Contact Me
              </motion.button>
              <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={resume}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-green-500 rounded-full font-semibold text-green-400 hover:bg-green-500/10"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() => scrollToSection("about")}
          >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 hover:text-white transition-colors"
            >
              ↓ Scroll to explore
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative min-h-screen py-20 px-6 sm:px-10 bg-black-900/50">
          <ParticlesBackground />
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20 relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate developer creating digital experiences that matter
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
            {/* Avatar */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
            >
              <div className="flex flex-col items-center relative">
                <div className="w-40 sm:w-64 md:w-80 lg:w-96 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl overflow-hidden">
                  <img src={brajesh} alt="Your Avatar" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Bio + highlighted skills */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 text-center lg:text-left"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Full-Stack Developer</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                I'm a passionate Fullstack Developer and Software Engineer with strong skills in React, Node.js, Python, and modern web technologies.
                I have experience building functional, user-friendly applications, working with databases like MongoDB and PostgreSQL,
                and exploring cloud platforms such as AWS and Google Cloud.
                I'm also growing as a Cloud & DevOps Engineer and an Introductory Dapp Developer,
                continuously learning and solving problems to create impactful projects.
              </p>

              {/* Just show some top skills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
                {categories["🚀 Frontend Development"].slice(0, 4).map((skill) => (
                    <motion.span
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      <skill.icon className="text-lg" />
                      {skill.name}
                    </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 z-10"
          >
            {achievementsStats.map((achievement, index) => (
                <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-blue-700"
                >
                  <motion.h4
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      className="text-3xl font-bold text-purple-400 mb-2"
                  >
                    {achievement.number}
                  </motion.h4>
                  <p className="text-gray-300">{achievement.label}</p>
                </motion.div>
            ))}
          </motion.div>
        </section>


        {/* PROJECTS */}
        <section
            id="projects"
            className="min-h-screen bg-black-800/50 flex items-center justify-center"
        >
          <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold font-serif mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                My Projects
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A showcase of my recent work and creative solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                  <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="group relative cursor-pointer"
                      onClick={() =>
                          setSelectedProject(
                              selectedProject === project.id ? null : project.id
                          )
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
                            <span className="text-white text-xs">No Image</span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
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

                      {selectedProject === project.id && (
                          <div className="mt-4 flex gap-4">
                            {project.liveDemo && (
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
                                >
                                  Live Demo
                                </a>
                            )}
                          </div>
                      )}
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ACHIEVEMENTS */}
        <section id="achievements" className="min-h-screen bg-black-900/50 flex items-center justify-center">
          <div className="container mx-auto px-4 py-20">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Achievements
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Highlights of my proudest accomplishments and milestones
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-12">
              {achievements.map((item, index) => (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }} whileHover={{ y: -5 }} className="bg-black-800/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-700 cursor-pointer shadow-lg">
                    <div className={`grid ${item.images.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"} gap-4 mb-6`}>
                      {item.images.map((imgSrc, idx) => (
                          <div key={idx} className={`w-full overflow-hidden rounded-xl border border-gray-600 bg-gray-800 ${item.title.includes("UCEV") || item.title.includes("Nehru College") ? "aspect-[4/3]" : ""}`}>
                            <img src={imgSrc} alt={`${item.title} ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-3">{item.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.position}</span>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="min-h-screen bg-black-800/50 flex items-center justify-center">
          <div className="container mx-auto px-4 py-20">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                My Skills
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Technologies and tools I work with
              </p>
            </motion.div>

            {/* Categories */}
            <div className="max-w-5xl mx-auto space-y-12">
              {Object.entries(categories).map(([category, skills], catIndex) => (
                  <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: catIndex * 0.2 }}
                      viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-purple-400 mb-6">{category}</h3>

                    <div className="space-y-6">
                      {skills.map((skill, index) => (
                          <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8, delay: index * 0.1 }}
                              viewport={{ once: true }}
                          >
                            {/* Skill name + percentage */}
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-white">
                                <skill.icon className="text-2xl text-purple-400" />
                                {skill.name}
                              </h4>
                              <span className="text-gray-400 text-sm md:text-base">{skill.level}%</span>
                            </div>

                            {/* Progress bar */}
                            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
                              <motion.div
                                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                                  viewport={{ once: true }}
                              />
                            </div>
                          </motion.div>
                      ))}
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* PROFILES */}
        <section id="profiles" className="min-h-[60vh] bg-black-900/50 flex items-center justify-center">
          <div className="container mx-auto px-4 py-20">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 font-serif bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Profiles
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Connect with me across different platforms
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {profiles.map((profile, index) => (
                  <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer" className="block">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -10 }} className="group cursor-pointer">
                      <div className={`bg-gradient-to-br ${profile.color} p-8 rounded-xl shadow-2xl relative overflow-hidden`}>
                        <div className="text-6xl mb-4">{profile.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
                        <p className="text-gray-200 mb-4">{profile.description}</p>
                        <p className="text-sm text-gray-300 font-semibold">{profile.stats}</p>
                        <motion.div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={false} />
                      </div>
                    </motion.div>
                  </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative min-h-screen bg-black-900/50 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-end pointer-events-none z-0">
            <img src={bk} alt="Background" className="w-[500px] sm:w-[600px] md:w-[700px] xl:w-[800px] object-contain opacity-20 mb-0" style={{ maxHeight: "80vh" }} />
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                HIRE ME
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                I'm always open to new opportunities and collaborations. Feel free to reach out! <br />
                & <br />I want to be a part of your journey
              </p>
            </motion.div>
            <div className="max-w-2xl mx-auto">
              {!isSubmitted ? (
                  <motion.form initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input type="text" placeholder=" Enter your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors" required />
                    </div>
                    <div>
                      <input type="email" placeholder=" Enter your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors" required />
                    </div>
                    <div>
                      <textarea placeholder="Tell me how can I assist you" rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none" required />
                    </div>
                    <motion.button type="submit" whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }} whileTap={{ scale: 0.95 }} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg">
                      Let's Connect
                    </motion.button>
                  </motion.form>
              ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="text-center py-20">
                    <div className="text-6xl mb-6">❤️</div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                  </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* SCROLL-TO-TOP BUTTON */}
        {showScroll && (
            <button aria-label="Scroll to top" onClick={handleScrollTop} className="fixed bottom-6 right-6 z-40 p-0.5 sm:p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center">
              <FaArrowUp className="text-white text-2xl sm:text-3xl" />
            </button>
        )}

        {/* FOOTER */}
        <footer className="w-full mt-10 py-6 bg-black bg-opacity-60 text-center text-lg text-gray-200 font-semibold tracking-wide">
          This website is Made by <span className="text-pink-400">Brajesh Kumar </span>
        </footer>
      </PageLayout>
  );
};

export default Home;
