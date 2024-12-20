import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Types
interface TestimonialType {
  id: number;
  content: string;
  author: string;
  image: string;
  role: string;
}

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: TestimonialType[] = [
    {
      id: 1,
      content: "The platform's user interface is incredibly intuitive. I was able to navigate and find exactly what I needed within minutes.",
      author: "Michael Drake",
      role: "Senior Developer",
      image: "/api/placeholder/800/600"
    },
    {
      id: 2,
      content: "The responsiveness and organization of the platform made my job search efficient and effective.",
      author: "Charles Dickens",
      role: "UX Designer",
      image: "/api/placeholder/800/600"
    },
    {
      id: 3,
      content: "As a recruiter, this platform has streamlined our hiring process significantly.",
      author: "Rebecca Swartz",
      role: "HR Manager",
      image: "/api/placeholder/800/600"
    }
  ];

  const categories = [
    {
      title: 'Development',
      description: 'Web, Mobile & Software Development',
      jobCount: 120,
      icon: '💻'
    },
    {
      title: 'Design',
      description: 'UI/UX, Graphic & Product Design',
      jobCount: 85,
      icon: '🎨'
    },
    {
      title: 'Marketing',
      description: 'Digital Marketing & Social Media',
      jobCount: 95,
      icon: '📱'
    },
    {
      title: 'Management',
      description: 'Project & Product Management',
      jobCount: 75,
      icon: '📊'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header & Navigation */}
      <motion.header 
        className="bg-white shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <motion.div 
              className="flex-shrink-0 mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold text-blue-600">Logo</span>
            </motion.div>
            
            <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              {['Home', 'About', 'Company', 'Contact'].map((item, index) => (
                <motion.div
                  key={item}
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    {item}
                  </a>
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.span 
                className="text-blue-600 font-semibold"
                variants={itemVariants}
              >
                Transform Your Career Journey
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mt-4"
                variants={itemVariants}
              >
                Your Gateway to Professional Success
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Join thousands of professionals who have found their dream careers through our platform. 
                We connect talented individuals with opportunities that match their skills and aspirations.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <motion.div 
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold text-gray-900"
                variants={itemVariants}
              >
                Success Stories
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg text-gray-600"
                variants={itemVariants}
              >
                Hear from professionals who found their perfect match
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-48">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Categories Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-bold text-gray-900"
                variants={itemVariants}
              >
                Explore Opportunities
              </motion.h2>
              <motion.p 
                className="mt-4 text-lg text-gray-600"
                variants={itemVariants}
              >
                Discover roles across various industries and domains
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-4xl mb-4 block">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <p className="text-blue-600 font-medium">{category.jobCount}+ Jobs Available</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">We're dedicated to connecting talented professionals with innovative companies worldwide. Our platform makes job searching and hiring seamless and effective.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Company</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Street Name</li>
                <li>City, State 12345</li>
                <li>contact@example.com</li>
                <li>(123) 456-7890</li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
            variants={itemVariants}
          >
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default HomePage;