import React, { useState, useEffect } from 'react';
import { 
  Terminal, Shield, Cpu, Database, Server, Code2, 
  ExternalLink, Github, Download, Volume2, VolumeX, 
  Send, Sparkles, Award, GraduationCap, Briefcase, ChevronRight
} from 'lucide-react';

export default function App() {
  const [activeAudio, setActiveAudio] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#090b0e] text-[#dcdedc] font-mono selection:bg-[#d4af37] selection:text-black overflow-x-hidden relative">
      
      {/* Sci-Fi CRT Grid & Glow Overlays */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.15),rgba(255,255,255,0))] z-0" />
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      {/* ===================== NAVBAR ===================== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090b0e]/80 border-b border-[#d4af37]/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#d4af37] bg-[#d4af37]/10 flex items-center justify-center font-bold text-[#d4af37] text-sm tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            CD
          </div>
          <span className="text-white font-bold tracking-widest text-sm uppercase hidden sm:inline">
            CHIRANJIB DHAL
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-gray-400">
          <a href="#about" className="hover:text-[#d4af37] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#d4af37] transition-colors">Projects</a>
          <a href="#skills" className="hover:text-[#d4af37] transition-colors">Skills</a>
          <a href="#experience" className="hover:text-[#d4af37] transition-colors">Experience</a>
          <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a>
        </nav>

        {/* Audio / Music Ticker */}
        <div className="flex items-center gap-3 text-xs bg-black/40 border border-[#d4af37]/30 px-3 py-1.5 rounded">
          <button 
            onClick={() => setActiveAudio(!activeAudio)}
            className="text-[#d4af37] hover:scale-110 transition-transform"
          >
            {activeAudio ? <Volume2 size={16} className="animate-pulse" /> : <VolumeX size={16} />}
          </button>
          <span className="text-[11px] text-gray-400 max-w-[140px] truncate">
            {activeAudio ? 'NOW PLAYING: Heisenberg • I Am The Danger' : 'AUDIO: MUTED'}
          </span>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-32">

        {/* ===================== HERO SECTION ===================== */}
        <section className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 pt-8">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/10 border border-[#d4af37]/40 text-[#d4af37] text-xs tracking-widest uppercase">
              <Sparkles size={14} /> Full Stack • AI • Systems Architecture
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
              I BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f7e07c] to-[#997f24] drop-shadow-[0_0_35px_rgba(212,175,55,0.4)]">
                DIGITAL
              </span> <br />
              EXPERIENCES
            </h1>

            <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
              I turn bold ideas into seamless digital experiences, where frontend elegance meets powerful distributed backend architectures, and clean code transforms vision into impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#fae075] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all"
              >
                Explore My Work <ChevronRight size={16} />
              </a>

              <a 
                href="#contact" 
                className="px-6 py-3 border border-[#d4af37]/50 text-[#d4af37] font-bold text-xs uppercase tracking-widest flex items-center gap-2 bg-black/40 hover:bg-[#d4af37]/10 hover:border-[#d4af37] transition-all"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

          {/* Holographic Cinematic Visual Frame */}
          <div className="w-full max-w-md lg:max-w-lg relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-amber-900 rounded-lg blur-lg opacity-30 animate-pulse" />
            <div className="relative border border-[#d4af37]/40 bg-[#0d1015] p-6 shadow-2xl">
              {/* HUD Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]" />

              <div className="aspect-[4/5] bg-gradient-to-t from-[#090b0e] via-transparent to-transparent relative overflow-hidden flex items-center justify-center border border-white/5">
                <div className="text-center p-6 space-y-4">
                  <div className="w-24 h-24 mx-auto border-2 border-[#d4af37] rounded-full flex items-center justify-center bg-[#d4af37]/5 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    <Terminal size={40} className="text-[#d4af37]" />
                  </div>
                  <h3 className="text-white text-lg font-bold tracking-widest uppercase">Chiranjib Dhal</h3>
                  <p className="text-xs text-gray-400">STATUS // SYSTEM ONLINE</p>
                  <p className="text-[11px] text-[#d4af37] border-t border-[#d4af37]/20 pt-3">
                    "Leave a mark on every line of code."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== ABOUT SECTION ===================== */}
        <section id="about" className="space-y-12">
          <div className="space-y-2">
            <p className="text-xs text-[#d4af37] tracking-widest uppercase">01 // ABOUT ME</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              I Don't Just Write Code. <br />
              <span className="text-[#d4af37]">I Build What's Next.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-[#0d1015] border border-[#d4af37]/20 p-8 relative">
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>
                I am a dedicated <strong className="text-white">Full Stack Developer & AI Engineer</strong> specialized in building scalable architectures, intuitive interfaces, and high-performance machine learning models.
              </p>
              <p>
                With a deep algorithmic foundation and an obsession with clean code, I bridge the gap between complex backend architectures and refined, cinematic user experiences.
              </p>
            </div>

            {/* Sci-Fi Stats Matrix */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/50 border border-[#d4af37]/30 text-center">
                <div className="text-3xl font-extrabold text-[#d4af37]">1200+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">DSA Solved</div>
              </div>
              <div className="p-4 bg-black/50 border border-[#d4af37]/30 text-center">
                <div className="text-3xl font-extrabold text-[#d4af37]">9.07</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">B.Tech CGPA</div>
              </div>
              <div className="p-4 bg-black/50 border border-[#d4af37]/30 text-center">
                <div className="text-3xl font-extrabold text-[#d4af37]">40+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Projects Built</div>
              </div>
              <div className="p-4 bg-black/50 border border-[#d4af37]/30 text-center">
                <div className="text-3xl font-extrabold text-[#d4af37]">TOP 100</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Global Rank</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== PROJECTS SECTION ===================== */}
        <section id="projects" className="space-y-12">
          <div className="space-y-2">
            <p className="text-xs text-[#d4af37] tracking-widest uppercase">02 // FEATURED WORK</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              Selected Works. Engineered Value.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-[#0d1015] border border-[#d4af37]/30 p-6 space-y-4 hover:border-[#d4af37] transition-all group">
              <div className="flex justify-between items-center text-xs text-[#d4af37]">
                <span>01 // AI & ML SYSTEM</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-ping" /> PROD-v2.1</span>
              </div>
              <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#d4af37] transition-colors">
                POLICYGUARD AI
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                AI-powered platform engineered for automated privacy policy analysis, legal contract auditing, and actionable risk intelligence across enterprise datasets.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['React.js', 'FastAPI', 'PyTorch', 'Docker', 'AWS'].map((tag) => (
                  <span key={tag} className="text-[10px] bg-black/60 border border-white/10 px-2 py-1 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 flex gap-4">
                <a href="#" className="text-xs text-[#d4af37] flex items-center gap-1 hover:underline">
                  <Github size={14} /> Repository
                </a>
                <a href="#" className="text-xs text-[#d4af37] flex items-center gap-1 hover:underline">
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#0d1015] border border-[#d4af37]/30 p-6 space-y-4 hover:border-[#d4af37] transition-all group">
              <div className="flex justify-between items-center text-xs text-[#d4af37]">
                <span>02 // CI/CD & DEVOPS</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> ACTIVE</span>
              </div>
              <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#d4af37] transition-colors">
                SOFTWARE RELEASE RISK HEATMAP
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Full-stack predictive release management dashboard assessing production risk with real-time commit heatmaps and automated rollback trigger algorithms.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind'].map((tag) => (
                  <span key={tag} className="text-[10px] bg-black/60 border border-white/10 px-2 py-1 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 flex gap-4">
                <a href="#" className="text-xs text-[#d4af37] flex items-center gap-1 hover:underline">
                  <Github size={14} /> Repository
                </a>
                <a href="#" className="text-xs text-[#d4af37] flex items-center gap-1 hover:underline">
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SKILLS SECTION ===================== */}
        <section id="skills" className="space-y-12">
          <div className="space-y-2">
            <p className="text-xs text-[#d4af37] tracking-widest uppercase">03 // TECH MATRIX</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              Architectural Mastery. Precision Applied.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Panel 1 */}
            <div className="bg-[#0d1015] border border-[#d4af37]/30 p-5 space-y-3">
              <Code2 className="text-[#d4af37]" size={24} />
              <h4 className="text-white text-sm font-bold uppercase">Frontend Architecture</h4>
              <p className="text-xs text-gray-400">React.js, Next.js, TypeScript, Tailwind CSS, Electron.js</p>
            </div>

            {/* Panel 2 */}
            <div className="bg-[#0d1015] border border-[#d4af37]/30 p-5 space-y-3">
              <Server className="text-[#d4af37]" size={24} />
              <h4 className="text-white text-sm font-bold uppercase">Distributed Backend</h4>
              <p className="text-xs text-gray-400">Node.js, Express, Spring Boot, Docker, Redis, REST APIs</p>
            </div>

            {/* Panel 3 */}
            <div className="bg-[#0d1015] border border-[#d4af37]/30 p-5 space-y-3">
              <Database className="text-[#d4af37]" size={24} />
              <h4 className="text-white text-sm font-bold uppercase">Data Platforms</h4>
              <p className="text-xs text-gray-400">PostgreSQL, MongoDB Atlas, MySQL, Supabase, Prisma ORM</p>
            </div>

            {/* Panel 4 */}
            <div className="bg-[#0d1015] border border-[#d4af37]/30 p-5 space-y-3">
              <Cpu className="text-[#d4af37]" size={24} />
              <h4 className="text-white text-sm font-bold uppercase">AI & Algorithms</h4>
              <p className="text-xs text-gray-400">Python, PyTorch, Scikit-Learn, OpenCV, NLP Pipelines</p>
            </div>
          </div>
        </section>

        {/* ===================== EXPERIENCE / MILESTONES ===================== */}
        <section id="experience" className="space-y-12">
          <div className="space-y-2">
            <p className="text-xs text-[#d4af37] tracking-widest uppercase">04 // EXPERIENCE & MILESTONES</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              Proven Track Record.
            </h2>
          </div>

          <div className="space-y-6 border-l-2 border-[#d4af37]/30 pl-6 ml-3">
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-3 h-3 bg-[#d4af37] rounded-full ring-4 ring-[#090b0e]" />
              <span className="text-[10px] text-[#d4af37] tracking-widest uppercase">2023 - PRESENT</span>
              <h3 className="text-lg font-bold text-white uppercase">Full Stack & AI Engineer</h3>
              <p className="text-xs text-gray-400 max-w-2xl">
                Developing high-performance microservices, machine learning classification modules, and scalable cloud-first web platforms.
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-3 h-3 bg-[#d4af37] rounded-full ring-4 ring-[#090b0e]" />
              <span className="text-[10px] text-[#d4af37] tracking-widest uppercase">EDUCATION</span>
              <h3 className="text-lg font-bold text-white uppercase">B.Tech in Computer Science / Data Science</h3>
              <p className="text-xs text-gray-400 max-w-2xl">
                Graduated with 9.07 CGPA. Specialization in Data Structures, Algorithms, Distributed Networks, and Machine Learning.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== CONTACT SECTION ===================== */}
        <section id="contact" className="space-y-12">
          <div className="space-y-2">
            <p className="text-xs text-[#d4af37] tracking-widest uppercase">05 // CONTACT</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase">
              Initialize Transmission.
            </h2>
            <p className="text-xs text-gray-400">
              Have an ambitious system to architect or a collaborative inquiry? Dispatch a message below.
            </p>
          </div>

          <form 
            onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} 
            className="max-w-2xl bg-[#0d1015] border border-[#d4af37]/40 p-8 space-y-6"
          >
            {formSent ? (
              <div className="p-4 bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] text-center text-sm font-bold uppercase tracking-wider">
                ✓ Transmission Dispatched Successfully.
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-xs text-[#d4af37] uppercase tracking-wider">[01] SENDER NAME</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 px-4 py-3 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-[#d4af37] uppercase tracking-wider">[02] SECURE FREQUENCY (EMAIL)</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 px-4 py-3 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-[#d4af37] uppercase tracking-wider">[03] DISPATCH SPECIFICATIONS</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Detail the mission or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 px-4 py-3 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs hover:bg-[#fae075] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Execute Dispatch &gt;
                </button>
              </>
            )}
          </form>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/20 py-8 text-center text-xs text-gray-500 space-y-2">
        <p>© {new Date().getFullYear()} CHIRANJIB DHAL. ALL RIGHTS RESERVED.</p>
        <p className="text-[10px] text-[#d4af37]/70">DESIGNED WITH CINEMATIC HUD ARCHITECTURE</p>
      </footer>

    </div>
  );
}
