'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../store/useStore';
import PinPad from './PinPad';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

export default function WelcomeScreen() {
  const setScreen = useStore((s) => s.setScreen);
  const goToParentDashboard = useStore((s) => s.goToParentDashboard);
  const [showPinPad, setShowPinPad] = useState(false);

  // Use environment variable for Parent PIN (fallback to 1234)
  const PARENT_PIN = process.env.NEXT_PUBLIC_PARENT_PIN || '1234';

  const handleParentModeSuccess = () => {
    setShowPinPad(false);
    goToParentDashboard();
  };

  return (
    <>
      <div className="page-center" style={{ minHeight: '100vh', gap: '0' }}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ textAlign: 'center', maxWidth: 600 }}
      >
        {/* Logo */}
        <motion.div variants={item}>
          <motion.span
            style={{ fontSize: '5rem', display: 'block', marginBottom: '8px' }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            🚀
          </motion.span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #A29BFE, #48DBFB, #FECA57)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '8px',
            lineHeight: 1.1,
          }}
        >
          LearnQuest
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
          }}
        >
          The Adventure Awaits! ✨
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-muted)',
            marginBottom: '48px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Learn · Play · Grow · Together
        </motion.p>

        {/* Start Button */}
        <motion.div variants={item}>
          <motion.button
            className="btn btn-primary btn-large"
            onClick={() => setScreen('select-child')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: 'var(--text-xl)',
              padding: '20px 48px',
              gap: '12px',
            }}
          >
            <span>🎮</span>
            Start Adventure
          </motion.button>
        </motion.div>

        {/* Parent Mode */}
        <motion.div variants={item} style={{ marginTop: '24px' }}>
          <motion.button
            className="btn btn-ghost btn-small"
            onClick={() => setShowPinPad(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ opacity: 0.7 }}
          >
            👨‍👩‍👧‍👦 Parent Mode
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          variants={item}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '48px',
            fontSize: '2rem',
            opacity: 0.4,
          }}
        >
          {['📚', '🧮', '🎯', '⭐', '🏆'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      </div>

      <AnimatePresence>
        {showPinPad && (
          <PinPad
            key="parent-pinpad"
            title="Enter Parent PIN"
            expectedPin={PARENT_PIN}
            onSuccess={handleParentModeSuccess}
            onCancel={() => setShowPinPad(false)}
            theme="default"
          />
        )}
      </AnimatePresence>
    </>
  );
}
