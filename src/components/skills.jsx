// src/components/Skills.jsx
import { FaPython, FaReact, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiJavascript, SiDocker, SiMysql } from 'react-icons/si';

const skills = [
  { icon: <FaPython size={40} />, name: 'Python' },
  { icon: <SiJavascript size={40} />, name: 'JavaScript' },
  { icon: <FaReact size={40} />, name: 'React' },
  { icon: <SiVite size={40} />, name: 'Vite' },
  { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS' },
  { icon: <FaLinux size={40} />, name: 'Linux' },
  { icon: <FaGitAlt size={40} />, name: 'Git' },
  { icon: <SiDocker size={40} />, name: 'Docker' },
  { icon: <SiMysql size={40} />, name: 'MySQL' },
];

export default function Skills() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-500 mb-12">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 hover:scale-110 transition">
            <div className="text-pink-400">{skill.icon}</div>
            <p className="text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
