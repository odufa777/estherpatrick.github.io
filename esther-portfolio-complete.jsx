import React, { useState } from 'react';
import { X, Eye } from 'lucide-react';

const Portfolio = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Base64 images embedded directly
  const images = {
    skimakeResearch: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAPbWAAEAAAAA0y1hZG9iZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL/9sAhwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAIQABQQEBQQEBQQEBQQFBAUEBAUGBAUFBAcGBwcFBwcHBwcFBwcIBwcHBwcHCAgICAgICAcICAkJCQkICAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ/8AABQAEAQAAAAAAAAAAAAAAAAAAAAv/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8AAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    notionTravelOverview: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAPbWAAEAAAAA0y1hZG9iZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL/9sAhwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAIQABQQEBQQEBQQEBQQFBAUEBAUGBAUFBAcGBwcFBwcHBwcFBwcIBwcHBwcHCAgICAgICAcICAkJCQkICAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ/8AABQAEAQAAAAAAAAAAAAAAAAAAAAv/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8AAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    googleCalendar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAPbWAAEAAAAA0y1hZG9iZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL/9sAhwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAIQABQQEBQQEBQQEBQQFBAUEBAUGBAUFBAcGBwcFBwcHBwcFBwcIBwcHBwcHCAgICAgICAcICAkJCQkICAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ/8AABQAEAQAAAAAAAAAAAAAAAAAAAAv/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8AAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    airtableLeads: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAPbWAAEAAAAA0y1hZG9iZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL/9sAhwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAIQABQQEBQQEBQQEBQQFBAUEBAUGBAUFBAcGBwcFBwcHBwcFBwcIBwcHBwcHCAgICAgICAcICAkJCQkICAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ/8AABQAEAQAAAAAAAAAAAAAAAAAAAAv/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8AAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    zyonnelForm: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAPbWAAEAAAAA0y1hZG9iZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL/9sAhwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAIQABQQEBQQEBQQEBQQFBAUEBAUGBAUFBAcGBwcFBwcHBwcFBwcIBwcHBwcHCAgICAgICAcICAkJCQkICAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ/8AABQAEAQAAAAAAAAAAAAAAAAAAAAv/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8AAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    skimakeSystem: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAPbWAAEAAAAA0y1hZG9iZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL/9sAhwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAIQABQQEBQQEBQQEBQQFBAUEBAUGBAUFBAcGBwcFBwcHBwcFBwcIBwcHBwcHCAgICAgICAcICAkJCQkICAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJ/8AABQAEAQAAAAAAAAAAAAAAAAAAAAv/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8AAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  };

  // Projects with CORRECT order and REAL work only
  const projects = [
    {
      id: 1,
      title: "Calendar Management & Scheduling",
      client: "Executive Stakeholders",
      jobRequirement: "Scheduling & Calendar Management",
      description: "Google Calendar management with daily scheduling, time blocking, and coordination. 8+ meetings per day with zero conflicts.",
      screenshot: images.googleCalendar,
      tools: ["Google Calendar", "Zoom", "Google Meet"],
      outcomes: [
        "Color-coded daily schedule with clear meeting prioritization",
        "8+ meetings daily coordinated across multiple platforms",
        "Strategic time blocks: Focus Sprints, Deep Work, Team Syncs, Breaks",
        "Zero scheduling conflicts maintained consistently",
        "Multi-timezone coordination for global teams"
      ]
    },
    {
      id: 2,
      title: "Travel Budget & Admin Operations",
      client: "Startup Founder Business Trip",
      jobRequirement: "Admin & Financial Tasks",
      description: "Managed budget tracking and financial documentation for 9-country business travel (31 days). Organized accommodations, flights, and logistics with detailed budgeting.",
      screenshot: images.travelPlanTitle,
      tools: ["Notion", "Google Sheets", "Gmail"],
      outcomes: [
        "Coordinated 9-country travel: Nigeria → London → Dubai → Chiang Rai → Singapore → Berlin → Granada → Nairobi → São Paulo",
        "Budget tracking for flights, accommodations, ground transportation",
        "Managed critical logistics across 9 destinations",
        "Organized all travel documentation and booking confirmations",
        "Prepared detailed financial summary for executive review"
      ]
    },
    {
      id: 3,
      title: "Customer Support & Client Relations",
      client: "Zyonnel Events",
      jobRequirement: "Customer Support",
      description: "Designed professional event booking form and client communication systems. Manages inquiries, follow-ups, and professional correspondence.",
      screenshot: images.zyonnelForm,
      tools: ["Google Forms", "Gmail", "Slack"],
      outcomes: [
        "Built professional event booking form with clear data capture",
        "Created client-focused messaging emphasizing professionalism",
        "Managed 17+ active client relationships",
        "Reduced response time through structured follow-up system",
        "Maintained consistent professional communication standards"
      ]
    },
    {
      id: 4,
      title: "General VA Tasks & Project Coordination",
      client: "Multiple Executive Partners",
      jobRequirement: "General VA Tasks",
      description: "Handles diverse administrative work including travel coordination, competitive research, documentation, and operational support.",
      screenshot: images.notionTravelOverview,
      tools: ["Notion", "Google Workspace", "Canva"],
      outcomes: [
        "9-country executive travel coordination with zero errors",
        "Competitive research: 6-platform analysis (Amazon, TikTok Shop, Jumia, LTK, PiggyVest, Uber)",
        "Strategic documentation and presentation preparation",
        "Project organization and timeline management",
        "Email and inbox management with proper prioritization"
      ]
    },
    {
      id: 5,
      title: "Lead Management & CRM Systems (Bonus)",
      client: "Soteria Edutech",
      jobRequirement: "Advanced Systems",
      description: "Designed and implemented Airtable-based lead management system. Tracks 17+ leads with multi-channel source tracking and status workflows.",
      screenshot: images.airtableLeads,
      tools: ["Airtable", "Gmail", "Slack"],
      outcomes: [
        "Built color-coded lead status tracking system",
        "Implemented 5-star lead scoring for prioritization",
        "Tracked 6 lead sources with automated workflows",
        "Reduced lead response time significantly",
        "Created structured follow-up processes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-blue-500/20 py-4">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            ESTHER PATRICK
          </h1>
          <p className="text-slate-400 text-sm mt-1">Executive Virtual Assistant | Remote | Part-time</p>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          <span className="text-blue-400 text-sm font-mono">5+ YEARS PROFESSIONAL SUPPORT</span>
          <h2 className="text-6xl font-black leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Your Executive Assistant
            </span>
            <br />
            <span className="text-3xl text-slate-300">Scheduling • Admin • Support</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl">
            Proactive VA managing schedules, admin operations, financial tasks, and customer support. I eliminate conflicts, organize operations, and handle details—so you focus on strategy.
          </p>
          
          {/* Contact Info - PROMINENT */}
          <div className="mt-8 p-6 rounded-lg bg-blue-500/10 border border-blue-400/30">
            <p className="text-lg"><span className="font-bold text-blue-300">📧 </span><a href="mailto:odufapatrickbawa@gmail.com" className="text-blue-300 hover:underline">odufapatrickbawa@gmail.com</a></p>
            <p className="text-lg mt-2"><span className="font-bold text-blue-300">📱 </span><a href="tel:+2347011172322" className="text-blue-300 hover:underline">+234 701 117 2322</a></p>
            <p className="text-sm text-slate-400 mt-3">Remote • Part-time (~20 hrs/week) • PST-friendly • Based in Nigeria</p>
          </div>
        </div>
      </section>

      {/* Job Match */}
      <section className="py-12 px-6 bg-slate-900/50 border-y border-blue-500/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Job Requirements Match</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { req: "Scheduling & Calendar Management", match: "✓ Google Calendar expertise, 8+ daily events, zero conflicts" },
              { req: "Admin & Financial Tasks", match: "✓ Travel budget coordination, documentation, logistics" },
              { req: "Customer Support", match: "✓ Client forms, inquiry management, professional communication" },
              { req: "General VA Tasks", match: "✓ Email, docs, research, travel, project coordination" },
              { req: "Excellent English", match: "✓ Professional writing and communication proven" },
              { req: "5+ Years Experience", match: "✓ FECSTUF, Adel House, ADRAP, Soteria Edutech" }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <div className="font-bold text-slate-100">{item.req}</div>
                <div className="text-slate-400 text-sm mt-2">{item.match}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Featured Work & Proof</h3>
          
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} onClick={() => setExpandedProject(expandedProject === idx ? null : idx)} className="cursor-pointer">
                <div className={`p-6 rounded-lg border transition-all ${expandedProject === idx ? 'bg-slate-800/80 border-blue-400/50' : 'bg-slate-800/30 border-slate-700/50 hover:border-blue-400/30'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block text-xs font-bold px-3 py-1 rounded bg-blue-500/30 text-blue-300 mb-3">
                        {project.jobRequirement}
                      </span>
                      <h4 className="text-2xl font-bold">{project.title}</h4>
                      <p className="text-blue-300 text-sm mt-1">{project.client}</p>
                    </div>
                    <span className="text-4xl font-bold text-slate-600">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{project.description}</p>

                  {expandedProject === idx && (
                    <div className="mt-6 pt-6 border-t border-slate-700 space-y-6">
                      {/* Screenshot */}
                      <div>
                        <h5 className="text-sm font-bold text-blue-300 mb-3 flex items-center gap-2">
                          <Eye size={16} /> VISUAL PROOF
                        </h5>
                        <img
                          src={project.screenshot}
                          alt={project.title}
                          className="w-full rounded-lg border border-slate-600 cursor-pointer hover:opacity-80 transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFullscreenImage(project.screenshot);
                          }}
                        />
                        <p className="text-xs text-slate-500 mt-2">Click image to expand</p>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h5 className="font-bold text-blue-300 mb-3">What Was Delivered</h5>
                        <ul className="space-y-2">
                          {project.outcomes.map((outcome, i) => (
                            <li key={i} className="flex gap-3 text-slate-300">
                              <span className="text-cyan-400 flex-shrink-0">→</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div>
                        <h5 className="font-bold text-blue-300 mb-3">Tools Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded text-blue-200 text-sm">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setFullscreenImage(null)}>
          <div className="relative max-w-4xl w-full">
            <button onClick={() => setFullscreenImage(null)} className="absolute -top-10 right-0 text-white hover:text-gray-300">
              <X size={32} />
            </button>
            <img src={fullscreenImage} alt="Full screenshot" className="w-full rounded-lg" />
          </div>
        </div>
      )}

      {/* Experience */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12">Professional Background</h3>
          
          <div className="space-y-4">
            {[
              { role: "Executive Virtual Assistant", company: "Soteria Edutech", period: "Dec 2024 - Present" },
              { role: "Virtual Assistant", company: "ADRAP", period: "Jul 2024 - Dec 2024" },
              { role: "Personal Assistant & Home Manager", company: "Adel House", period: "May 2021 - Aug 2023" },
              { role: "Admin & Client Relations Officer", company: "FECSTUF", period: "Jan 2020 - May 2021" }
            ].map((exp, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold text-lg">{exp.role}</p>
                    <p className="text-blue-300">{exp.company}</p>
                  </div>
                  <span className="text-slate-400 text-sm">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-950/50 to-slate-950 text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to Work Together?</h3>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how I can manage your calendar, admin operations, customer support, and day-to-day tasks with excellence.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="mailto:odufapatrickbawa@gmail.com" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold">
            Email Me
          </a>
          <a href="https://linkedin.com/in/estheropat" className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-bold">
            LinkedIn
          </a>
          <a href="tel:+2347011172322" className="px-8 py-3 border border-slate-600 text-slate-300 hover:border-slate-400 rounded-lg font-bold">
            Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
        <p>© 2026 Esther Patrick | Executive Virtual Assistant</p>
        <p className="mt-2">Scheduling • Admin Operations • Customer Support • Professional Excellence</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
        * { font-family: 'Sora', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default Portfolio;