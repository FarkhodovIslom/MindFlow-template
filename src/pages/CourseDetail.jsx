
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, Users, Star, Play, ChevronDown, ChevronRight, 
  CheckCircle, ArrowLeft, BookOpen, Award, Shield
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import courses from '../data/courses.json';
import testimonials from '../data/testimonials.json';

export default function CourseDetail() {
  const { slug } = useParams();
  const [openSections, setOpenSections] = useState([0]);
  const [activeTab, setActiveTab] = useState('curriculum');

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">Курс не найден</h1>
          <Link to="/courses" className="text-primary hover:underline">
            ← Вернуться к курсам
          </Link>
        </div>
      </div>
    );
  }

  const courseTestimonials = testimonials.filter((t) => t.course === course.title);
  const relatedCourses = courses.filter((c) => c.id !== course.id && c.category === course.category).slice(0, 3);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container-custom relative z-10">
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-2 text-muted hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Все курсы
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Course Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="primary" size="lg" className="mb-4">
                  {course.category === 'productivity' && 'Продуктивность'}
                  {course.category === 'focus' && 'Фокус'}
                  {course.category === 'energy' && 'Энергия'}
                  {course.category === 'management' && 'Управление'}
                  {course.category === 'project-management' && 'Проекты'}
                </Badge>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
                  {course.title}
                </h1>

                <p className="text-lg text-muted mb-8">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(course.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-muted">({course.reviews} отзывов)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <Users className="w-5 h-5" />
                    <span>{course.students.toLocaleString()} студентов</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <BookOpen className="w-5 h-5" />
                    <span>{course.lessons} уроков</span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-4">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{course.instructor.name}</div>
                    <div className="text-sm text-muted">{course.instructor.role}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-28"
              >
                <Card className="overflow-hidden">
                  <div className="relative aspect-video mb-6">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                      <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-foreground ml-1" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-primary">
                        {course.price.toLocaleString()} ₽
                      </span>
                      {course.oldPrice && (
                        <>
                          <span className="text-lg text-muted line-through">
                            {course.oldPrice.toLocaleString()} ₽
                          </span>
                          <Badge variant="success">
                            -{Math.round((1 - course.price / course.oldPrice) * 100)}%
                          </Badge>
                        </>
                      )}
                    </div>
                  </div>

                  <Button className="w-full mb-4" size="lg">
                    Записаться на курс
                  </Button>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-secondary" />
                      <span>Гарантия возврата 30 дней</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-secondary" />
                      <span>Сертификат по окончании</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span>Доступ навсегда</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs & Content */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          {/* Tabs */}
          <div className="flex gap-1 mb-8 p-1 bg-foreground/5 rounded-xl w-fit">
            {['curriculum', 'instructor', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-white shadow-sm text-foreground'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {tab === 'curriculum' && 'Программа'}
                {tab === 'instructor' && 'Автор'}
                {tab === 'reviews' && 'Отзывы'}
              </button>
            ))}
          </div>

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl"
            >
              <h3 className="text-xl font-semibold mb-6">
                {course.curriculum.length} модулей • {course.lessons} уроков • {course.duration}
              </h3>

              <div className="space-y-4">
                {course.curriculum.map((section, sectionIndex) => (
                  <Card key={sectionIndex} padding="none" className="overflow-hidden">
                    <button
                      onClick={() => toggleSection(sectionIndex)}
                      className="w-full p-6 flex items-center justify-between text-left"
                    >
                      <div>
                        <h4 className="font-semibold">{section.title}</h4>
                        <p className="text-sm text-muted mt-1">
                          {section.lessons.length} уроков
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openSections.includes(sectionIndex) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {openSections.includes(sectionIndex) && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="border-t border-foreground/5"
                      >
                        {section.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="p-4 px-6 flex items-center justify-between hover:bg-foreground/5 transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                lesson.preview
                                  ? 'bg-primary/10 text-primary'
                                  : 'bg-foreground/5 text-muted'
                              }`}>
                                {lesson.preview ? (
                                  <Play className="w-4 h-4" />
                                ) : (
                                  <BookOpen className="w-4 h-4" />
                                )}
                              </div>
                              <span className="font-medium">{lesson.title}</span>
                            </div>
                            <span className="text-sm text-muted">{lesson.duration}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {/* Instructor Tab */}
          {activeTab === 'instructor' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl"
            >
              <Card>
                <div className="flex flex-col md:flex-row gap-8">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-32 h-32 rounded-2xl object-cover mx-auto md:mx-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-semibold mb-2">
                      {course.instructor.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {course.instructor.role}
                    </p>
                    <p className="text-muted mb-6">
                      {course.instructor.bio}
                    </p>
                    <Button variant="secondary" size="sm">
                      Все курсы автора
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl"
            >
              {courseTestimonials.length > 0 ? (
                <div className="space-y-6">
                  {courseTestimonials.map((testimonial) => (
                    <Card key={testimonial.id}>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <blockquote className="text-foreground/80 mb-4">
                        «{testimonial.quote}»
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted">{testimonial.role}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <p className="text-muted">
                    Пока нет отзывов. Будьте первым, кто оставит отзыв!
                  </p>
                </Card>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <SectionTitle
              subtitle="Рекомендуем"
              title="Похожие курсы"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse) => (
                <Link key={relatedCourse.id} to={`/courses/${relatedCourse.slug}`}>
                  <Card className="overflow-hidden group cursor-pointer" padding="none">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={relatedCourse.image}
                        alt={relatedCourse.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedCourse.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {relatedCourse.duration}
                        </span>
                        <span className="font-bold text-primary">
                          {relatedCourse.price.toLocaleString()} ₽
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
