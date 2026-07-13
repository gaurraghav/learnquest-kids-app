'use client';

import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import useStore from '../store/useStore';
import { getTTS } from '../utils/tts';
import { BADGES } from '../data/badges';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const CONFETTI = ['🎉', '🎊', '✨', '🌟', '💫', '⭐', '🥳', '🎈'];

export default function SessionComplete() {
  const sessionAnswers = useStore((s) => s.sessionAnswers);
  const goHome = useStore((s) => s.goHome);
  const goToChapterSelect = useStore((s) => s.goToChapterSelect);
  const currentChild = useStore((s) => s.currentChild);
  const children = useStore((s) => s.children);

  const allBadges = BADGES;

  const child = children[currentChild];

  const stats = useMemo(() => {
    const totalQuestions = sessionAnswers.length;
    const correctAnswers = sessionAnswers.filter(a => a.isCorrect).length;
    const starsEarned = sessionAnswers.reduce((sum, a) => sum + a.stars, 0);
    const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    const totalTime = sessionAnswers.reduce((sum, a) => sum + a.timeTaken, 0);
    const avgTime = totalQuestions > 0 ? Math.round(totalTime / totalQuestions / 1000) : 0;
    const totalMinutes = Math.round(totalTime / 60000);
    const totalSeconds = Math.round((totalTime % 60000) / 1000);

    // Calculate best streak in this session
    let bestStreak = 0;
    let currentStreak = 0;
    sessionAnswers.forEach(a => {
      if (a.isCorrect) {
        currentStreak++;
        bestStreak = Math.max(bestStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });

    // Gems earned
    let gemsEarned = 0;
    if (accuracy >= 80) gemsEarned = 5;
    else if (accuracy >= 60) gemsEarned = 3;
    else gemsEarned = 1;

    return {
      totalQuestions,
      correctAnswers,
      starsEarned,
      accuracy,
      totalMinutes,
      totalSeconds,
      avgTime,
      bestStreak,
      gemsEarned,
    };
  }, [sessionAnswers]);

  // Speak celebration on mount
  useEffect(() => {
    try {
      getTTS().speakCelebration(stats.starsEarned);
    } catch (e) { /* TTS not available */ }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getTitle = () => {
    if (stats.accuracy >= 80) return { text: 'Excellent Work!', emoji: '🏆' };
    if (stats.accuracy >= 60) return { text: 'Good Job!', emoji: '👏' };
    return { text: 'Keep Practicing!', emoji: '💪' };
  };

  const title = getTitle();

  // Find recently earned badges
  const recentBadges = allBadges.filter(b => child?.badges?.includes(b.id));

  return (
    <div className="celebration-overlay" style={{ overflow: 'auto', padding: '20px' }}>
      {/* Confetti particles */}
      {stats.accuracy >= 60 && (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1 }}>
          {Array.from({ length: 20 }, (_, i) => (
            <motion.span
              key={i}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800),
                y: -50,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: (typeof window !== 'undefined' ? window.innerHeight : 600) + 50,
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3,
              }}
              style={{ position: 'absolute', fontSize: '1.5rem' }}
            >
              {CONFETTI[i % CONFETTI.length]}
            </motion.span>
          ))}
        </div>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}
      >
        {/* Title */}
        <motion.div variants={item}>
          <motion.span
            style={{ fontSize: '5rem', display: 'block', marginBottom: '8px' }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {title.emoji}
          </motion.span>
          <h1 className="celebration-title">
            {title.text}
          </h1>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          variants={item}
          className="glass-card-strong"
          style={{ padding: '28px', marginBottom: '24px' }}
        >
          {/* Stars earned */}
          <div className="stars-earned-display" style={{ marginBottom: '20px', fontSize: 'var(--text-3xl)' }}>
            {Array.from({ length: Math.min(stats.starsEarned, 10) }, (_, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + i * 0.1, type: 'spring', bounce: 0.6 }}
              >
                ⭐
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              +{stats.starsEarned}
            </motion.span>
          </div>

          {/* Stats grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', display: 'block' }}>
                Questions
              </span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
              }}>
                {stats.correctAnswers}/{stats.totalQuestions}
              </span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', display: 'block' }}>
                Accuracy
              </span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                color: stats.accuracy >= 80 ? 'var(--accent-green)' : stats.accuracy >= 60 ? 'var(--accent-orange)' : 'var(--accent-yellow)',
              }}>
                {stats.accuracy}%
              </span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', display: 'block' }}>
                Gems Earned
              </span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                color: 'var(--gem-blue)',
              }}>
                💎 +{stats.gemsEarned}
              </span>
            </div>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', display: 'block' }}>
                Time
              </span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
              }}>
                {stats.totalMinutes}m {stats.totalSeconds}s
              </span>
            </div>
          </div>

          {/* Accuracy progress bar */}
          <div style={{ marginTop: '20px' }}>
            <div className="progress-bar" style={{ height: '12px' }}>
              <motion.div
                className={`progress-bar-fill ${stats.accuracy >= 80 ? 'green' : stats.accuracy >= 60 ? 'gold' : 'pink'}`}
                initial={{ width: 0 }}
                animate={{ width: `${stats.accuracy}%` }}
                transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
          </div>

          {/* Best streak */}
          {stats.bestStreak >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{
                marginTop: '16px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <span className="stat-badge streak">
                <span className="streak-fire">🔥</span>
                Best Streak: {stats.bestStreak} in a row!
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Badges */}
        {recentBadges.length > 0 && (
          <motion.div
            variants={item}
            className="glass-card"
            style={{ padding: '20px', marginBottom: '24px' }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-lg)',
              fontWeight: 600,
              marginBottom: '12px',
            }}>
              🏅 Your Badges
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
            }}>
              {recentBadges.slice(-4).map((badge) => (
                <motion.div
                  key={badge.id}
                  className="badge-display earned"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.5 }}
                  title={badge.description}
                  style={{ width: '56px', height: '56px', fontSize: '1.8rem' }}
                >
                  {badge.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          variants={item}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            className="btn btn-primary"
            onClick={goToChapterSelect}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            🔄 Play Again
          </motion.button>
          <motion.button
            className="btn btn-ghost"
            onClick={goHome}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            🏠 Go Home
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
