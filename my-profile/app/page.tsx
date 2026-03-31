"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Sparkles, ExternalLink } from "lucide-react";

export default function Home() {
  const profile = {
    name: "Ladpect",
    role: "Full-stack Developer",
    location: "Seoul, Korea",
    bio: "Passionate about building beautiful, accessible, and high-performance web applications. Currently focused on Next.js, React, and Tailwind CSS.",
    email: "hello@example.com",
    github: "https://github.com/Ladpect",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Framer Motion", "Git"],
    experience: "3+ Years",
    availability: "Available for new projects"
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  interface CardProps {
    children: React.ReactNode;
    className?: string;
    bgColor?: string;
  }

  const Card = ({ children, className = "", bgColor = "bg-white dark:bg-zinc-800" }: CardProps) => (
    <motion.div 
      variants={itemVariants}
      className={`border-4 border-black dark:border-white shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#fff] p-6 md:p-8 relative ${bgColor} ${className}`}
    >
      {className.includes('hover:') && (
        <div className="absolute inset-0 bg-transparent transition-transform duration-200"></div>
      )}
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#f4f4f0] dark:bg-[#121212] text-black dark:text-white p-4 sm:p-8 md:p-12 font-mono selection:bg-pink-400 selection:text-black">
      <motion.main 
        className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[minmax(120px,auto)]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Hero Card */}
        <Card bgColor="bg-yellow-300 dark:bg-yellow-600/20" className="col-span-1 sm:col-span-2 md:col-span-2 row-span-2 flex flex-col justify-between group text-black dark:text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
            {/* 깃허브 프로필 사진 */}
            <div className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] overflow-hidden bg-white shrink-0 self-start">
               <img src="https://github.com/Ladpect.png" alt="Ladpect Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            
            <div className="flex items-center gap-2 bg-white dark:bg-black px-4 py-2 border-2 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap self-start">
              <span className="h-3 w-3 border-2 border-black rounded-full bg-green-500 animate-pulse"></span>
              {profile.availability}
            </div>
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-2 break-all sm:break-normal">
              {profile.name}
            </h1>
            <p className="text-xl sm:text-2xl font-bold bg-white dark:bg-black dark:text-white text-black leading-none inline-block px-2 py-1 border-2 border-black dark:border-white shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff] mb-4">
              {profile.role}
            </p>
            <p className="text-sm sm:text-base font-medium leading-relaxed max-w-sm mt-4 border-l-4 border-black dark:border-white pl-4">
              {profile.bio}
            </p>
          </div>
        </Card>

        {/* Location Box */}
        <Card bgColor="bg-blue-300 dark:bg-blue-800/40" className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1 flex items-center group">
          <div className="flex items-center gap-4 text-black dark:text-white w-full">
            <div className="h-16 w-16 border-4 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] bg-white dark:bg-black rounded-full flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-300">
              <MapPin className="h-8 w-8 stroke-[3]" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest border-b-2 border-black dark:border-white inline-block mb-1">Base</p>
              <p className="text-2xl sm:text-3xl font-black uppercase tracking-tight">{profile.location}</p>
            </div>
          </div>
        </Card>

        {/* Social Links */}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="block outline-none focus-visible:ring-4 focus-visible:ring-pink-500">
          <Card bgColor="bg-white dark:bg-zinc-800" className="col-span-1 row-span-1 flex flex-col items-center justify-center cursor-pointer h-full group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#000] dark:hover:shadow-[12px_12px_0px_#fff] active:translate-y-1 active:translate-x-1 active:shadow-[4px_4px_0px_#000] dark:active:shadow-[4px_4px_0px_#fff] transition-all">
            <GithubIcon className="h-10 w-10 mb-3 group-hover:scale-110 transition-transform duration-300 text-black dark:text-white" />
            <span className="text-lg font-black uppercase text-black dark:text-white">GitHub</span>
          </Card>
        </a>

        <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="block outline-none focus-visible:ring-4 focus-visible:ring-pink-500">
          <Card bgColor="bg-[#1DA1F2]" className="text-black col-span-1 row-span-1 flex flex-col items-center justify-center cursor-pointer h-full group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#000] dark:hover:shadow-[12px_12px_0px_#fff] active:translate-y-1 active:translate-x-1 active:shadow-[4px_4px_0px_#000] dark:active:shadow-[4px_4px_0px_#fff] transition-all">
            <TwitterIcon className="h-10 w-10 mb-3 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg font-black uppercase">Twitter</span>
          </Card>
        </a>

        {/* Skills Bento Box */}
        <Card bgColor="bg-pink-300 dark:bg-pink-800/40" className="col-span-1 sm:col-span-2 md:col-span-2 row-span-2 flex flex-col group text-black dark:text-white">
          <div className="flex items-center gap-3 mb-6 bg-white dark:bg-black self-start px-4 py-2 border-2 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff]">
            <Sparkles className="h-6 w-6 stroke-[3]" />
            <h2 className="text-lg font-black uppercase tracking-widest">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="bg-white dark:bg-black border-2 border-black dark:border-white px-4 py-2 text-sm sm:text-base font-bold shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_#000] dark:hover:shadow-[6px_6px_0px_#fff] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[2px_2px_0px_#000] dark:active:shadow-[2px_2px_0px_#fff] transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>

        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="block outline-none focus-visible:ring-4 focus-visible:ring-pink-500">
          <Card bgColor="bg-[#0A66C2]" className="text-white dark:text-white col-span-1 row-span-1 flex flex-col items-center justify-center cursor-pointer h-full group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#000] dark:hover:shadow-[12px_12px_0px_#fff] active:translate-y-1 active:translate-x-1 active:shadow-[4px_4px_0px_#000] dark:active:shadow-[4px_4px_0px_#fff] transition-all">
            <LinkedinIcon className="h-10 w-10 mb-3 group-hover:scale-110 transition-transform duration-300 fill-white" />
            <span className="text-lg font-black uppercase">LinkedIn</span>
          </Card>
        </a>

        <a href={`mailto:${profile.email}`} className="block outline-none focus-visible:ring-4 focus-visible:ring-pink-500">
          <Card bgColor="bg-green-400 dark:bg-green-700/60" className="col-span-1 row-span-1 flex flex-col items-center justify-center cursor-pointer h-full group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#000] dark:hover:shadow-[12px_12px_0px_#fff] active:translate-y-1 active:translate-x-1 active:shadow-[4px_4px_0px_#000] dark:active:shadow-[4px_4px_0px_#fff] transition-all text-black dark:text-white">
            <Mail className="h-10 w-10 mb-3 group-hover:scale-110 transition-transform duration-300 stroke-[3]" />
            <span className="text-lg font-black uppercase">Email</span>
          </Card>
        </a>

        {/* Footer / CTA Box */}
        <a href={`mailto:${profile.email}`} className="col-span-1 sm:col-span-2 md:col-span-4 row-span-1 block outline-none focus-visible:ring-4 focus-visible:ring-pink-500 group mt-4 sm:mt-0">
          <Card bgColor="bg-[#ff4f00] dark:bg-[#e64600]" className="w-full text-black dark:text-white h-full flex flex-col sm:flex-row items-center justify-between group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[12px_12px_0px_#000] dark:group-hover:shadow-[12px_12px_0px_#fff] transition-all">
              <div className="w-full text-center sm:text-left py-4 sm:py-0">
                 <p className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2 border-b-4 border-black dark:border-white inline-block">Need a Developer?</p>
                 <p className="text-lg font-bold">Let's build something brutally good.</p>
              </div>
              <div className="w-full sm:w-auto mt-4 sm:mt-0 bg-white dark:bg-black text-black dark:text-white border-4 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] px-8 py-4 font-black uppercase text-xl flex items-center justify-center gap-3 transition-all">
                Hire Me <ExternalLink className="h-6 w-6 stroke-[3]" />
              </div>
          </Card>
        </a>

        {/* Global Footer */}
        <div className="col-span-1 sm:col-span-2 md:col-span-4 flex justify-center mt-8 mb-4">
          <div className="bg-white dark:bg-black border-2 border-black dark:border-white shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] px-6 py-3">
             <p className="text-sm font-bold uppercase tracking-widest text-black dark:text-white flex items-center gap-2">
               © {new Date().getFullYear()} {profile.name} <span className="inline-block w-2 h-2 bg-black dark:bg-white rounded-full"></span> Brutal UX
             </p>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={`fill-current ${className}`} viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
