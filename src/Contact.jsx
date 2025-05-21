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
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
          setTimeout(() => setIsError(false), 3000);
        }
      );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Custom easing for smoother motion
      }
    }
  };

  const notificationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const buttonHover = {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const buttonTap = {
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 mt-12">
      {/* Animated background elements - now using Framer Motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -Math.random() * 100],
              x: [0, Math.random() * 50 - 25]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1] // Custom spring-like easing
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-4xl mx-auto glass-morphism-background p-8 rounded-3xl backdrop-blur-2xl bg-white/5 shadow-2xl border border-white/10 hover:border-white/20 transition-all"
      >
        <motion.h2 
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200 mb-12 text-center"
          whileHover={{
            backgroundPosition: '100%',
            transition: { duration: 1.5, ease: "linear" }
          }}
          style={{
            backgroundSize: '200% auto'
          }}
        >
          Get In Touch
        </motion.h2>

        <motion.form 
          ref={form} 
          onSubmit={sendEmail} 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 'name', icon: PersonOutlined, label: 'Your Name', name: 'user_name', type: 'text' },
              { id: 'email', icon: EmailOutlined, label: 'Email', name: 'user_email', type: 'email' },
              { id: 'mobile', icon: PhoneIphoneOutlined, label: 'Mobile Number', name: 'user_mobile', type: 'tel' },
              { id: 'subject', icon: SubjectOutlined, label: 'Subject', name: 'subject', type: 'text' },
            ].map((field, index) => (
              <motion.div
                key={field.id}
                variants={itemVariants}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 group-focus-within:text-pink-300 transition-colors z-10"
                >
                  <field.icon className="text-2xl" />
                </motion.div>
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
            variants={itemVariants}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-4 top-6 text-purple-400 group-focus-within:text-pink-300 transition-colors z-10"
            >
              <ChatBubbleOutlineOutlined className="text-2xl" />
            </motion.div>
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
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl font-semibold text-white tracking-wide hover:shadow-xl flex items-center justify-center gap-3"
          >
            <motion.span
              animate={{
                x: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <SendOutlined className="text-2xl" />
            </motion.span>
            Send Message
          </motion.button>
        </motion.form>

        {/* Status indicators */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              variants={notificationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-green-500/90 backdrop-blur-sm rounded-full text-white font-medium shadow-lg z-50"
            >
              Message sent successfully! 🎉
            </motion.div>
          )}
          {isError && (
            <motion.div
              variants={notificationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-red-500/90 backdrop-blur-sm rounded-full text-white font-medium shadow-lg z-50"
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