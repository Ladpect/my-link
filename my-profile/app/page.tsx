"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Sparkles, ExternalLink } from "lucide-react";

export default function Home() {
  const profile = {
    name: "John Doe",
    role: "Full-stack Developer",
    location: "Seoul, Korea",
    bio: "Passionate about building beautiful, accessible, and high-performance web applications. Currently focused on Next.js, React, and Tailwind CSS.",
    email: "hello@example.com",
    github: "https://github.com",
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <motion.div 
      variants={itemVariants}
      className={`bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 overflow-hidden relative ${className}`}
    >
      {/* Glossy reflection effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 dark:via-white/10 to-transparent"></div>
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#f1f5f9] dark:bg-[#0a0a0a] selection:bg-indigo-500/30 text-zinc-900 dark:text-zinc-50 relative overflow-hidden flex items-center justify-center p-4 sm:p-8 md:p-12 font-sans">
      {/* Background ambient gradients */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 dark:bg-indigo-600/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/20 dark:bg-purple-600/20 blur-[120px] pointer-events-none" />

      <motion.main 
        className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)] z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Hero Card */}
        <Card className="col-span-1 sm:col-span-2 md:col-span-2 row-span-2 flex flex-col justify-between group">
          <div className="flex justify-between items-start mb-6">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white relative overflow-hidden">
               {profile.name.split(' ').map(n => n[0]).join('')}
               <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
            </div>
            <div className="flex items-center gap-2 bg-white/80 dark:bg-zinc-800/80 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              {profile.availability}
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
              {profile.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-4">
              {profile.role}
            </p>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium max-w-sm">
              {profile.bio}
            </p>
          </div>
        </Card>

        {/* Location & Experience */}
        <Card className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1 flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Location</p>
              <p className="text-lg font-bold">{profile.location}</p>
            </div>
          </div>
        </Card>

        {/* Social Links */}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="block outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-3xl">
          <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors duration-300 cursor-pointer h-full group">
            <GithubIcon className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-semibold">GitHub</span>
          </Card>
        </a>

        <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="block outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-3xl">
          <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-300 cursor-pointer h-full group">
            <TwitterIcon className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-semibold">Twitter</span>
          </Card>
        </a>

        {/* Skills Bento Box */}
        <Card className="col-span-1 sm:col-span-2 md:col-span-2 row-span-2 group">
          <div className="flex items-center gap-2 mb-6 text-zinc-400 dark:text-zinc-500">
            <Sparkles className="h-5 w-5 group-hover:text-amber-500 transition-colors" />
            <h2 className="text-sm font-bold uppercase tracking-widest">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-default relative overflow-hidden group/skill"
              >
                <span className="relative z-10">{skill}</span>
                <div className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/30 scale-y-0 group-hover/skill:scale-y-100 transition-transform origin-bottom"></div>
              </span>
            ))}
          </div>
        </Card>

        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="block outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-3xl">
          <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center hover:bg-blue-700 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors duration-300 cursor-pointer h-full group">
            <LinkedinIcon className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-semibold">LinkedIn</span>
          </Card>
        </a>

        <a href={`mailto:${profile.email}`} className="block outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-3xl">
          <Card className="col-span-1 row-span-1 flex flex-col items-center justify-center hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-colors duration-300 cursor-pointer h-full group">
            <Mail className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-semibold">Email</span>
          </Card>
        </a>

        {/* Footer / CTA Box */}
        <Card className="col-span-1 sm:col-span-2 md:col-span-4 row-span-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 !p-1 group flex flex-col sm:flex-row items-center justify-between sm:!p-2">
            <div className="w-full text-center sm:text-left sm:pl-8 py-4 sm:py-0">
               <p className="text-lg sm:text-xl font-bold mb-1">Ready to build something amazing?</p>
               <p className="text-indigo-100 text-sm font-medium">Let's collaborate on your next big project.</p>
            </div>
            <a href={`mailto:${profile.email}`} className="w-full sm:w-auto mt-2 sm:mt-0 bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-95 shadow-xl shadow-indigo-900/20">
              Start a Conversation <ExternalLink className="h-5 w-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
        </Card>

        {/* Global Footer */}
        <div className="col-span-1 sm:col-span-2 md:col-span-4 flex justify-center mt-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            © {new Date().getFullYear()} {profile.name}. Crafted with Next.js, Tailwind v4 & Framer Motion.
          </p>
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
