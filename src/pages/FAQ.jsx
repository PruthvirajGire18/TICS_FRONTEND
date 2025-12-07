import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What services does TICS offer?',
      answer: 'TICS offers comprehensive AI and Software Development services including Staff Augmentation, Cybersecurity Solutions, Cloud Solutions, Strategic IT Planning, Systems Integration, IT Support & Management, Data Analytics & BI, and Digital Transformation services.'
    },
    {
      question: 'What is Staff Augmentation?',
      answer: 'Staff Augmentation is hiring external talent to temporarily augment an organization\'s existing workforce, typically to fill skill gaps or scale up projects. At TICS, we help you scale up with the right talent instantly, without the need for upskilling.'
    },
    {
      question: 'How does the consultation process work?',
      answer: 'We begin with a thorough consultation to identify your objectives, assess your current technology landscape, and provide a roadmap to optimize your IT investments for maximum impact. Our experts work closely with you to understand your business goals and tailor solutions accordingly.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'TICS serves businesses across various industries including technology, finance, healthcare, retail, manufacturing, and more. We provide innovative AI and software solutions tailored to your specific industry needs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. We provide detailed timelines during our consultation phase. Our team is committed to delivering quality solutions within agreed timeframes while maintaining flexibility to adapt to changing requirements.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive IT Support & Management services including technical support, network management, IT helpdesk services, system maintenance, and performance monitoring to ensure smooth IT operations.'
    },
    {
      question: 'What is your client retention rate?',
      answer: 'We maintain a 98%+ client retention rate, demonstrating our commitment to delivering exceptional results and building long-term partnerships with our clients.'
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy! Simply contact us through our contact form, request a quote, or call us directly. We\'ll schedule a consultation to discuss your needs and provide a tailored solution for your business.'
    },
    {
      question: 'Do you work with remote teams?',
      answer: 'Yes, we work with teams globally. Our Staff Augmentation services are designed to seamlessly integrate with your existing team, whether they\'re local or remote, ensuring smooth collaboration and communication.'
    },
    {
      question: 'What makes TICS different from other IT companies?',
      answer: 'TICS is an award-winning digital agency with a focus on People, Culture, and Technology. We combine technical expertise with business acumen, measure success by client achievements, and are passionate about collaboration and personalized strategies that drive meaningful results.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Find answers to common questions about our services and solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-xl font-heading font-semibold text-neo-dark pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FiChevronUp className="text-primary flex-shrink-0 text-2xl" />
                  ) : (
                    <FiChevronDown className="text-primary flex-shrink-0 text-2xl" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-neo-dark/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center glass-card p-8"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-neo-dark/70 mb-6">
              Can't find the answer you're looking for? Please get in touch with our friendly team.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

