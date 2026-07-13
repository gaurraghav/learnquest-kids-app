'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../store/useStore';
import WelcomeScreen from '../components/WelcomeScreen';
import ChildSelector from '../components/ChildSelector';
import Dashboard from '../components/Dashboard';
import ChapterSelect from '../components/ChapterSelect';
import ConceptScreen from '../components/ConceptScreen';
import PracticeScreen from '../components/PracticeScreen';
import SessionComplete from '../components/SessionComplete';
import RewardShop from '../components/RewardShop';
import ParentDashboard from '../components/ParentDashboard';

const PARTICLE_EMOJIS = ['✨', '⭐', '🌟', '💫', '🌙', '🪐', '🚀', '💎'];

function FloatingParticles() {
  // Generate particles only on the client to avoid hydration mismatch
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        emoji: PARTICLE_EMOJIS[i % PARTICLE_EMOJIS.length],
        left: `${Math.random() * 100}%`,
        size: `${0.8 + Math.random() * 1}rem`,
        duration: `${15 + Math.random() * 20}s`,
        delay: `${Math.random() * 15}s`,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
};

export default function Home() {
  const currentScreen = useStore((s) => s.currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen key="welcome" />;
      case 'select-child':
        return <ChildSelector key="select-child" />;
      case 'dashboard':
        return <Dashboard key="dashboard" />;
      case 'chapter-select':
        return <ChapterSelect key="chapter-select" />;
      case 'concept':
        return <ConceptScreen key="concept" />;
      case 'practice':
        return <PracticeScreen key="practice" />;
      case 'session-complete':
        return <SessionComplete key="session-complete" />;
      case 'reward-shop':
        return <RewardShop key="reward-shop" />;
      case 'parent-dashboard':
        return <ParentDashboard key="parent-dashboard" />;
      default:
        return <WelcomeScreen key="welcome" />;
    }
  };

  return (
    <>
      <div className="animated-bg" />
      <FloatingParticles />
      <div className="page-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
