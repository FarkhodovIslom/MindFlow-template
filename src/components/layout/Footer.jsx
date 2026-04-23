
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const footerLinks = {
  product: {
    title: 'Продукты',
    links: [
      { href: '/courses', label: 'Все курсы' },
      { href: '/coaching', label: 'Коучинг' },
      { href: '/blog', label: 'Блог' },
      { href: '/about', label: 'О нас' },
    ],
  },
  support: {
    title: 'Поддержка',
    links: [
      { href: '#', label: 'FAQ' },
      { href: '#', label: 'Связаться с нами' },
      { href: '#', label: 'Политика возврата' },
      { href: '#', label: 'Условия использования' },
    ],
  },
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                MindFlow
              </span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Онлайн-школа продуктивности нового поколения. Помогаем людям достигать 
              максимальных результатов без выгорания и хаоса.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-white/60">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>mindflow@hanzodev.uz</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+998 (90) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Ташкент, Узбекистан</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/40 text-sm">
              © 2026 MindFlow. Все права защищены.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                           hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/60" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
