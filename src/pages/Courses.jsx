
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Users, Star, X, ChevronDown } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import courses from '../data/courses.json';

const categories = [
  { id: 'all', label: 'Все курсы' },
  { id: 'productivity', label: 'Продуктивность' },
  { id: 'focus', label: 'Фокус' },
  { id: 'energy', label: 'Энергия' },
  { id: 'management', label: 'Управление' },
  { id: 'project-management', label: 'Проекты' },
];

const levels = [
  { id: 'all', label: 'Все уровни' },
  { id: 'beginner', label: 'Начинающий' },
  { id: 'intermediate', label: 'Средний' },
  { id: 'advanced', label: 'Продвинутый' },
];

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedLevel]);

  const hasActiveFilters = selectedCategory !== 'all' || selectedLevel !== 'all' || searchQuery !== '';

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSearchQuery('');
  };

  return (
    <div className="pt-28 pb-20">
      {/* Hero */}
      <section className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            Все курсы
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            Выберите программу обучения, которая подходит именно вам. 
            От начинающих до продвинутых — для каждого найдётся свой путь.
          </p>
        </motion.div>
      </section>

      {/* Filters & Search */}
      <section className="container-custom mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Поиск курсов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-foreground/10 
                       bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                       transition-all placeholder:text-muted"
            />
          </div>

          {/* Filter Toggle (Mobile) */}
          <Button
            variant="secondary"
            className="lg:hidden"
            icon={Filter}
            onClick={() => setShowFilters(!showFilters)}
          >
            Фильтры
          </Button>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 rounded-xl border border-foreground/10 
                         bg-white cursor-pointer hover:border-foreground/20 transition-colors
                         focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none" />
            </div>

            {/* Level Filter */}
            <div className="relative">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 rounded-xl border border-foreground/10 
                         bg-white cursor-pointer hover:border-foreground/20 transition-colors
                         focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {levels.map((level) => (
                  <option key={level.id} value={level.id}>{level.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none" />
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button variant="ghost" icon={X} onClick={clearFilters}>
                Очистить
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 p-6 bg-white rounded-2xl border border-foreground/10"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Фильтры</h3>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-sm text-primary">
                  Очистить всё
                </button>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Категория</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                        ${selectedCategory === cat.id
                          ? 'bg-primary text-white'
                          : 'bg-foreground/5 text-foreground hover:bg-foreground/10'
                        }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Уровень</label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                        ${selectedLevel === level.id
                          ? 'bg-primary text-white'
                          : 'bg-foreground/5 text-foreground hover:bg-foreground/10'
                        }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* Courses Grid */}
      <section className="container-custom">
        {filteredCourses.length > 0 ? (
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
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Link to={`/courses/${course.slug}`}>
                  <Card className="overflow-hidden group cursor-pointer h-full" padding="none">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="primary">
                          {course.level === 'beginner' && 'Начинающий'}
                          {course.level === 'intermediate' && 'Средний'}
                          {course.level === 'advanced' && 'Продвинутый'}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      
                      <p className="text-muted text-sm mb-4 flex-grow">
                        {course.shortDescription}
                      </p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-4 text-sm text-muted">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {course.students.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(course.rating)
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{course.rating}</span>
                          <span className="text-sm text-muted">({course.reviews} отзывов)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-foreground/5">
                        <div className="flex items-center gap-2">
                          <img
                            src={course.instructor.avatar}
                            alt={course.instructor.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm font-medium">{course.instructor.name}</span>
                        </div>
                        <div className="text-right">
                          {course.oldPrice && (
                            <span className="text-sm text-muted line-through mr-2">
                              {course.oldPrice.toLocaleString()} ₽
                            </span>
                          )}
                          <span className="text-xl font-bold text-primary">
                            {course.price.toLocaleString()} ₽
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Курсы не найдены</h3>
            <p className="text-muted mb-4">
              Попробуйте изменить параметры поиска или очистить фильтры.
            </p>
            <Button onClick={clearFilters}>Очистить фильтры</Button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
