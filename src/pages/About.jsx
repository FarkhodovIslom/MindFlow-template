
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Users, Award, TrendingUp } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

const values = [
  {
    icon: Target,
    title: 'Результат',
    description: 'Мы измеряем успех не количеством учеников, а их достижениями. Каждый курс создан для реального результата.',
  },
  {
    icon: Heart,
    title: 'Забота',
    description: 'Мы понимаем, каково это — пытаться всё успеть. Наши программы созданы с заботой о вашем времени и энергии.',
  },
  {
    icon: Zap,
    title: 'Практика',
    description: 'Теория без практики — пустая трата времени. 80% нашего обучения — это работающие техники и упражнения.',
  },
];

const stats = [
  { value: '8,000+', label: 'выпускников', icon: Users },
  { value: '50+', label: 'курсов и программ', icon: Award },
  { value: '95%', label: 'довольных студентов', icon: Heart },
  { value: '4.8/5', label: 'средний рейтинг', icon: TrendingUp },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display mb-6">
              О MindFlow
            </h1>
            <p className="text-lg text-muted">
              Мы верим, что настоящая продуктивность — это не про большее количество часов 
              в сутках, а про осознанный выбор того, что действительно важно. 
              MindFlow создан для тех, кто готов инвестировать в своё развитие и достигать 
              результатов без выгорания.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Команда MindFlow"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display mb-6">
                Наша миссия
              </h2>
              <p className="text-muted mb-6">
                Мы создали MindFlow, чтобы помочь людям перестать чувствовать себя 
                заложниками своего же календаря. За 5 лет работы мы поняли главное: 
                продуктивность — это не про то, как много вы делаете. Это про то, 
                как осознанно вы выбираете, что делать, и как эффективно это реализуете.
              </p>
              <p className="text-muted">
                Каждый наш курс — это результат исследований, личного опыта и 
                обратной связи от тысяч студентов. Мы постоянно совершенствуем 
                программы, чтобы вы получали максимум пользы.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Ценности"
            title="Что мы ценим"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Присоединяйтесь к MindFlow
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Станьте частью сообщества людей, которые выбрали осознанный путь 
              к результатам. Начните прямо сейчас.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Начать обучение
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
