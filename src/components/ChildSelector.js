'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../store/useStore';
import { getTTS } from '../utils/tts';
import PinPad from './PinPad';

export default function ChildSelector() {
  const setScreen = useStore((s) => s.setScreen);
  const selectChild = useStore((s) => s.selectChild);
  const children = useStore((s) => s.children);
  const [targetChild, setTargetChild] = useState(null);

  // Use environment variables for Child PINs
  const PIN_AMAY = process.env.NEXT_PUBLIC_AMAY_PIN || '1111';
  const PIN_AYRA = process.env.NEXT_PUBLIC_AYRA_PIN || '2222';

  const handleChildClick = (childId) => {
    setTargetChild(childId);
  };

  const handlePinSuccess = () => {
    if (!targetChild) return;
    const name = children[targetChild].name;
    try {
      getTTS().speakWelcome(name);
    } catch (e) {}
    selectChild(targetChild);
  };

  return (
    <>
      <div className="page-center" style={{ minHeight: '100vh' }}>
      {/* Back Button */}
      <motion.button
        className="btn btn-ghost btn-small"
        onClick={() => setScreen('welcome')}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ position: 'absolute', top: 24, left: 24 }}
      >
        ← Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center' }}
      >
        <h1
          className="page-title text-gradient-primary"
          style={{ fontSize: 'var(--text-4xl)', marginBottom: '8px' }}
        >
          Who&apos;s Playing Today?
        </h1>
        <p className="page-subtitle" style={{ marginBottom: '48px' }}>
          Choose your hero! 🎮
        </p>
      </motion.div>

      <div style={{
        display: 'flex',
        gap: '32px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        {/* Amay Card */}
        <motion.div
          className="avatar-card amay"
          onClick={() => handleChildClick('amay')}
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: 'spring', bounce: 0.4 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="avatar-emoji">🦸‍♂️</span>
          <span className="avatar-name" style={{ color: 'var(--amay-primary)' }}>
            Amay
          </span>
          <span className="avatar-subtitle">Superhero</span>

          {children.amay.currentStreak > 0 && (
            <div className="streak-display" style={{ marginTop: '16px', justifyContent: 'center' }}>
              <span className="streak-fire">🔥</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                {children.amay.currentStreak} day streak
              </span>
            </div>
          )}

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            marginTop: '12px',
          }}>
            <span className="stat-badge stars" style={{ fontSize: 'var(--text-sm)' }}>
              <span className="icon">⭐</span> {children.amay.totalStars}
            </span>
            <span className="stat-badge gems" style={{ fontSize: 'var(--text-sm)' }}>
              <span className="icon">💎</span> {children.amay.gems}
            </span>
          </div>
        </motion.div>

        {/* Ayra Card */}
        <motion.div
          className="avatar-card ayra"
          onClick={() => handleChildClick('ayra')}
          initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.35, type: 'spring', bounce: 0.4 }}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="avatar-emoji">👸</span>
          <span className="avatar-name" style={{ color: 'var(--ayra-primary)' }}>
            Ayra
          </span>
          <span className="avatar-subtitle">Princess</span>

          {children.ayra.currentStreak > 0 && (
            <div className="streak-display" style={{ marginTop: '16px', justifyContent: 'center' }}>
              <span className="streak-fire">🔥</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                {children.ayra.currentStreak} day streak
              </span>
            </div>
          )}

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            marginTop: '12px',
          }}>
            <span className="stat-badge stars" style={{ fontSize: 'var(--text-sm)' }}>
              <span className="icon">⭐</span> {children.ayra.totalStars}
            </span>
            <span className="stat-badge gems" style={{ fontSize: 'var(--text-sm)' }}>
              <span className="icon">💎</span> {children.ayra.gems}
            </span>
          </div>
        </motion.div>
      </div>
      </div>

      <AnimatePresence>
        {targetChild && (
          <PinPad
            title={`Enter ${children[targetChild].name}'s PIN`}
            expectedPin={targetChild === 'amay' ? PIN_AMAY : PIN_AYRA}
            onSuccess={handlePinSuccess}
            onCancel={() => setTargetChild(null)}
            theme={targetChild}
          />
        )}
      </AnimatePresence>
    </>
  );
}
