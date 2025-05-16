import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  PersonOutlined,
  EmailOutlined,
  PhoneIphoneOutlined,
  SubjectOutlined,
  SendOutlined,
  ChatBubbleOutlineOutlined
} from '@mui/icons-material';

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsError(false);

    emailjs
      .sendForm(
        "service_cfoawn8", 
        "template_puyyp1t", 
        form.current, 
        "5mjZ1OkR3XNjZ0JYV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          e.target.reset();
          setTimeout(() => setIsSubmitted(false), 2000);
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
          setTimeout(() => setIsError(false), 2000);
        }
      );
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="relative py-20 px-4 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 mt-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto glass-morphism-background p-8 rounded-3xl backdrop-blur-2xl bg-white/5 shadow-2xl border border-white/10 hover:border-white/20 transition-all"
      >
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200 mb-12 text-center hover:bg-gradient-to-l transition-all duration-500">
          Get In Touch
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 'name', icon: PersonOutlined, label: 'Your Name', name: 'user_name', type: 'text' },
              { id: 'email', icon: EmailOutlined, label: 'Email', name: 'user_email', type: 'email' },
              { id: 'mobile', icon: PhoneIphoneOutlined, label: 'Mobile Number', name: 'user_mobile', type: 'tel' },
              { id: 'subject', icon: SubjectOutlined, label: 'Subject', name: 'subject', type: 'text' },
            ].map((field, index) => (
              <motion.div
                key={field.id}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 group-focus-within:text-pink-300 transition-colors z-10 text-2xl" />
                <input
                  required
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-purple-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200/20 transition-all group-hover:border-purple-400/50"
                  placeholder={field.label}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <ChatBubbleOutlineOutlined className="absolute left-4 top-6 text-purple-400 group-focus-within:text-pink-300 transition-colors z-10 text-2xl" />
            <textarea
              required
              id="message"
              name="message"
              rows="5"
              className="w-full pl-12 pr-4 py-4 bg-transparent border-2 border-purple-900/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200/20 transition-all group-hover:border-purple-400/50"
              placeholder="Your Message"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl font-semibold text-white tracking-wide hover:shadow-xl hover:shadow-pink-500/30 transition-all flex items-center justify-center gap-3"
          >
            <SendOutlined className="text-2xl animate-bounce-horizontal" />
            Send Message
          </motion.button>
        </form>

        {/* Status indicators */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-100 backdrop-blur-sm rounded-full text-green-400 font-medium shadow-lg"
            >
              Message sent successfully! 🎉
            </motion.div>
          )}
          {isError && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-red-500/90 backdrop-blur-sm rounded-full text-white font-medium shadow-lg"
            >
              Failed to send message. Please try again.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

 
    </section>
  );
};

export default Contact;