import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import ParticlesBackground from "../components/ParticlesBackground";

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





interface Achievement {
  title: string;
  description: string;
  date: string;
  position: string;
  images: string[];
}

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


const Achievements: React.FC = () => {
  return (
      <PageLayout>
        <section id="achievements" className="min-h-screen bg-black-900/50 flex items-center justify-center">
          <ParticlesBackground />
          <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Achievements & Leadership
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Showcasing my leadership, mentorship, open-source contributions, and community building efforts.
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-12">
              {achievements.map((item, index) => (
                  <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      whileHover={{ y: -5 }}
                      className="bg-black-800/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-700 shadow-lg"
                  >
                    <div
                        className={`grid ${item.images.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"} gap-4 mb-6`}
                    >
                      {item.images.map((imgSrc, idx) => (
                          <div
                              key={idx}
                              className="w-full overflow-hidden rounded-xl border border-gray-600 bg-gray-800"
                          >
                            <img src={imgSrc} alt={`${item.title} ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-3 leading-relaxed">{item.description}</p>
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
      </PageLayout>
  );
};

export default Achievements;
