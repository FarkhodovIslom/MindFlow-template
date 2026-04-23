
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, Users, MessageCircle, CheckCircle, ChevronDown, 
  ChevronRight, Calendar, Video, Phone
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import coaches from '../data/coaches.json';

const pricingPlans = [
  {
    id: 'single',
    name: 'Разовая сессия',
    price: 5000,
    description: 'Попробуйте формат коучинга',
    features: [
      '60 минут индивидуальной работы',
      'Анализ текущей ситуации',
      'Персональные рекомендации',
      'Запись сессии',
    ],
    available: true,
  },
  {
    id: 'package-5',
    name: 'Пакет 5 сессий',
    price: 22000,
    originalPrice: 25000,
    description: 'Оптимальный вариант для старта',
    features: [
      '5 сессий по 60 минут',
      'Индивидуальный план развития',
      'Поддержка между сессиями',
      'Записи всех сессий',
      'Бонус: мини-курс в подарок',
    ],
    available: true,
    popular: true,
  },
  {
    id: 'package-10',
    name: 'Пакет 10 сессий',
    price: 40000,
    originalPrice: 50000,
    description: 'Глубокая трансформация',
    features: [
      '10 сессий по 60 минут',
      'Полная программа развития',
      'Приоритетная поддержка 24/7',
      'Все записи и материалы',
      'Бесплатный доступ к курсам',
      'Сертификат о прохождении',
    ],
    available: true,
  },
];

const faqItems = [
  {
    question: 'Как проходит коучинг?',
    answer: 'Сессии проходят онлайн через Zoom или Google Meet. После каждой сессии вы получаете запись и домашние задания для закрепления материала.',
  },
  {
    question: 'Сколько времени нужно, чтобы увидеть результат?',
    answer: 'Большинство клиентов отмечают первые изменения уже после 2-3 сессий. Для глубокой трансформации рекомендуем пройти минимум 5 сессий.',
  },
  {
    question: 'Могу ли я сменить коуча?',
    answer: 'Да, если вы чувствуете, что не находите общий язык с выбранным коучем, мы бесплатно поможем подобрать другого специалиста.',
  },
  {
    question: 'Что если мне не подойдёт формат?',
    answer: 'Мы уверены в качестве нашего коучинга, поэтому предлагаем гарантию: если после первой сессии вы поймёте, что формат вам не подходит — вернём 100% оплаты.',
  },
  {
    question: 'Как выбрать коуча?',
    answer: 'Вы можете выбрать коуча на основе его специализации и опыта. Также доступна бесплатная 15-минутная ознакомительная звонок с любым коучем.',
  },
];

export default function Coaching() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge variant="primary" size="lg" className="mb-4">
              Персональный подход
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display mb-6">
              Коучинг, который{' '}
              <span className="gradient-text">изменяет жизнь</span>
            </h1>
            <p className="text-lg text-muted">
              Индивидуальная работа с профессиональным коучем поможет вам 
              достичь целей быстрее, чем самостоятельное обучение. 
              Персональный план развития, регулярная обратная связь и поддержка на каждом этапе.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Наши коучи"
            title="Выберите своего наставника"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="relative mb-6">
                    <img
                      src={coach.avatar}
                      alt={coach.name}
                      className="w-full aspect-[4/3] object-cover rounded-xl"
                    />
                    {!coach.available && (
                      <div className="absolute inset-0 bg-foreground/60 rounded-xl flex items-center justify-center">
                        <span className="text-white font-medium">Скоро будет доступен</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-1">
                    {coach.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{coach.role}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {coach.specialization.map((spec) => (
                      <Badge key={spec} variant="default" size="sm">
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-muted text-sm mb-6">{coach.bio}</p>

                  <div className="flex items-center gap-6 mb-6 text-sm">
                    <div>
                      <div className="font-semibold">{coach.experience}</div>
                      <div className="text-muted">опыта</div>
                    </div>
                    <div>
                      <div className="font-semibold">{coach.clients}</div>
                      <div className="text-muted">клиентов</div>
                    </div>
                  </div>

                  {coach.available ? (
                    <Button className="w-full" variant="secondary">
                      Записаться
                    </Button>
                  ) : (
                    <Button className="w-full" variant="ghost" disabled>
                      Ожидание
                    </Button>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container-custom">
          <SectionTitle
            subtitle="Тарифы"
            title="Выберите подходящий формат"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${plan.popular ? 'border-2 border-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="primary">Популярный</Badge>
                    </div>
                  )}

                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">
                        {plan.price.toLocaleString()} ₽
                      </span>
                      {plan.originalPrice && (
                        <span className="text-muted line-through">
                          {plan.originalPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'primary' : 'secondary'}
                  >
                    Выбрать
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Форматы"
            title="Как проходит коучинг"
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: 'Видео-сессия',
                description: '60 минут через Zoom или Google Meet с видеосвязью',
              },
              {
                icon: Phone,
                title: 'Аудио-сессия',
                description: 'Для тех, кто предпочитает голосовые звонки',
              },
              {
                icon: MessageCircle,
                title: 'Текстовый чат',
                description: 'Асинхронная работа через мессенджер',
              },
            ].map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <format.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{format.title}</h3>
                  <p className="text-muted text-sm">{format.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <SectionTitle
            subtitle="FAQ"
            title="Частые вопросы"
            alignment="center"
          />

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card padding="none" className="overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold pr-4">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="px-6 pb-6 text-muted"
                    >
                      {item.answer}
                    </motion.div>
                  )}
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
              Готовы к личной трансформации?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Запишитесь на бесплатную ознакомительную сессию и узнайте, 
              как коучинг может помочь вам достичь целей.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              icon={Calendar}
            >
              Записаться на консультацию
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
