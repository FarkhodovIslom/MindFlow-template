
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-28 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="text-8xl md:text-9xl font-display font-bold gradient-text mb-8">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-display mb-4">
          Страница не найдена
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Возможно, страница была перемещена или удалена. 
          Попробуйте вернуться на главную страницу.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button icon={Home}>На главную</Button>
          </Link>
          <Button 
            variant="secondary" 
            icon={ArrowLeft}
            onClick={() => window.history.back()}
          >
            Назад
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
