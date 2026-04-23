
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import blogPosts from '../data/blogPosts.json';

const categories = [
  { id: 'all', label: 'Все' },
  { id: 'productivity', label: 'Продуктивность' },
  { id: 'focus', label: 'Фокус' },
  { id: 'energy', label: 'Энергия' },
  { id: 'management', label: 'Управление' },
  { id: 'goal-setting', label: 'Целеполагание' },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      {/* Hero */}
      <section className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            Блог
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Статьи о продуктивности, управлении временем и достижении целей. 
            Практические советы и исследования от экспертов MindFlow.
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to={`/blog/${blogPosts[0].slug}`}>
            <Card className="overflow-hidden group cursor-pointer" padding="none">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="primary" className="w-fit mb-4">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-display mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>
      </section>

      {/* All Posts */}
      <section className="container-custom">
        <SectionTitle
          subtitle="Все статьи"
          title="Последние публикации"
        />

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.slice(1).map((post) => (
            <motion.div
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Link to={`/blog/${post.slug}`}>
                <Card className="overflow-hidden group cursor-pointer h-full" padding="none">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge 
                      variant="primary" 
                      className="absolute top-4 left-4"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted text-sm mb-4 flex-grow line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                        Читать
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
