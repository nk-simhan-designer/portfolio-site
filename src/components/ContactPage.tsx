import React from "react";
import { motion } from "motion/react";
import { Mail, Send, Phone, MessageSquare, ArrowLeft } from "lucide-react";

interface ContactPageProps {
  onBack: () => void;
  key?: string | number;
}

export const ContactPage = ({ onBack }: ContactPageProps) => {
  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "A standard landing page usually takes 1-2 weeks, while more complex web applications can range from 4-8 weeks depending on the scope and requirements."
    },
    {
      question: "Do you offer maintenance services?",
      answer: "Yes, I provide ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performing at its best."
    },
    {
      question: "Can you work with existing designs?",
      answer: "Absolutely! I frequently collaborate with designers and can translate your existing Figma, Adobe XD, or Sketch files into high-quality code."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-32 pb-24 bg-section-darker min-h-screen"
    >
      <div className="container mx-auto px-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 md:mb-8">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. If you have a project that needs a meticulous frontend touch, let's talk about how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 mb-32">
            <div className="space-y-12">
              <div className="space-y-8">
                {/* Email Option */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform duration-300">
                    <Mail size={28} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email Me</div>
                    <a href="mailto:nkavitharkikasimhan2006@gmail.com" className="text-base sm:text-xl font-bold hover:text-brand-secondary transition-colors block mb-1 break-all">nkavitharkikasimhan2006@gmail.com</a>
                    <p className="text-sm text-slate-500">For detailed project inquiries and formal proposals.</p>
                  </div>
                </div>

                {/* Call Option */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Call Me</div>
                    <a href="tel:+919876543210" className="text-xl font-bold hover:text-brand-secondary transition-colors block mb-1">+91 98765 43210</a>
                    <p className="text-sm text-slate-500">Available for quick consultations Mon-Fri, 9am - 6pm IST.</p>
                  </div>
                </div>

                {/* Message Option */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Direct Message</div>
                    <p className="text-xl font-bold text-slate-200 block mb-1">Social Media</p>
                    <p className="text-sm text-slate-500">Reach out via LinkedIn or X for a quick chat or casual networking.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">What to Expect</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                    Initial response within 24 hours
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                    Free 30-minute discovery call
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                    Detailed project estimate and timeline
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass p-8 md:p-12 rounded-[3rem] border-white/5">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Subject</label>
                  <input type="text" placeholder="Project Inquiry" className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Message</label>
                  <textarea rows={4} placeholder="Tell me about your project, goals, and timeline..." className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-colors resize-none" />
                </div>
                <button className="btn-primary w-full py-5 flex items-center justify-center gap-3 group">
                  Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Common Questions</h2>
              <p className="text-slate-400">Everything you need to know before we start.</p>
            </div>
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-8 md:p-10 rounded-[2.5rem] border-white/5"
                >
                  <h3 className="text-xl font-bold mb-4 text-slate-200">{faq.question}</h3>
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
