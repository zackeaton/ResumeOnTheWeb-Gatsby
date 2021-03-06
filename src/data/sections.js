import {
  AiFillInstagram,
  AiFillSafetyCertificate,
  FaAward,
  FaBoxOpen,
  FaDev,
  FaInfoCircle,
  // FaSignLanguage,
  GoTools,
  IoIosDocument,
  IoIosJournal,
  // IoIosPaperPlane,
  MdMusicNote,
  MdPerson,
  MdSchool,
  MdWork,
} from "../components/Icons";

const sections = [
  { id: "about-me", title: "About Me", icon: MdPerson },
  { id: "resume", title: "Resume", icon: IoIosDocument },
  { id: "work", title: "Work", icon: MdWork },
  { id: "education", title: "Education", icon: MdSchool },
  { id: "skills", title: "Skills", icon: GoTools },
  { id: "projects", title: "Projects", icon: FaDev },
  { id: "achievements", title: "Achievements", icon: FaAward },
  {
    id: "certifications",
    title: "Certifications",
    icon: AiFillSafetyCertificate,
  },
  { id: "conferences", title: "Conferences", icon: FaBoxOpen },
  // { id: "languages", title: "Languages", icon: FaSignLanguage },
  { id: "photography", title: "Photography", icon: AiFillInstagram },
  { id: "blog", title: "Blog", icon: IoIosJournal },
  { id: "music", title: "Music", icon: MdMusicNote },
  // { id: "contact", title: "Contact", icon: IoIosPaperPlane },
  { id: "footer", title: "About", icon: FaInfoCircle },
];

export default sections;
