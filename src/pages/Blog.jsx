import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Leverage Content Marketing for Long-Term Growth',
      excerpt: 'Discover strategies to create compelling content that drives sustainable business growth and builds lasting customer relationships.',
      date: 'December 20, 2024',
      category: 'Uncategorized',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Importance of Data Analytics in Digital Marketing Success',
      excerpt: 'Learn how data analytics can transform your digital marketing efforts and help you make informed decisions that drive results.',
      date: 'December 20, 2024',
      category: 'Uncategorized',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Email Marketing Best Practices: Engage and Convert Your Audience',
      excerpt: 'Master the art of email marketing with proven strategies that engage your audience and convert leads into customers.',
      date: 'December 20, 2024',
      category: 'Uncategorized',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Elevating Brands: Highlights from Our Journey',
      excerpt: 'Explore success stories and case studies showcasing how we\'ve helped brands achieve digital excellence and drive growth.',
      date: 'December 15, 2024',
      category: 'Case Studies',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Client-Centric Solutions: Marketing That Delivers',
      excerpt: 'Learn how a client-centric approach to marketing can deliver measurable results and build stronger customer relationships.',
      date: 'December 10, 2024',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Powering Growth: A Showcase of Our Marketing Achievements',
      excerpt: 'Discover how innovative marketing strategies have powered business growth for our clients across various industries.',
      date: 'December 5, 2024',
      category: 'Success Stories',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop',
      readTime: '6 min read'
    }
  ]

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
              Our Latest News
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and success stories from TICS
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-neo-dark/60 mb-3">
                    <div className="flex items-center gap-2">
                      <FiCalendar />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiUser />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-neo-dark group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neo-dark/70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                  >
                    Read more
                    <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

