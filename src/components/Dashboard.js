'use client';

import { motion } from 'framer-motion';
import useStore from '../store/useStore';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Dashboard() {
  const currentChild = useStore((s) => s.currentChild);
  const children = useStore((s) => s.children);
  const goToChapterSelect = useStore((s) => s.goToChapterSelect);
  const goToRewardShop = useStore((s) => s.goToRewardShop);
  const goToParentDashboard = useStore((s) => s.goToParentDashboard);
  const setScreen = useStore((s) => s.setScreen);
  const logout = useStore((s) => s.logout);

  const child = children[currentChild];
  if (!child) return null;

  const isAmay = currentChild === 'amay';
  const emoji = isAmay ? '🦸‍♂️' : '👸';
  const themeGradient = isAmay
    ? 'linear-gradient(135deg, #1E88E5, #42A5F5)'
    : 'linear-gradient(135deg, #E040FB, #CE93D8)';
  const accuracy = child.totalQuestionsAttempted > 0
    ? Math.round((child.totalCorrect / child.totalQuestionsAttempted) * 100)
    : 0;

  return (
    <div className="page-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="top-bar-logo">🚀 LearnQuest</span>
          <span style={{
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-sm)',
          }}>
            {child.name}&apos;s Quest
          </span>
        </div>
        <div className="top-bar-right">
          <span className="stat-badge stars">
            <span className="icon">⭐</span> {child.totalStars}
          </span>
          <span className="stat-badge gems">
            <span className="icon">💎</span> {child.gems}
          </span>
          {child.currentStreak > 0 && (
            <span className="stat-badge streak">
              <span className="icon">🔥</span> {child.currentStreak}
            </span>
          )}
          <motion.button
            className="btn btn-ghost btn-small"
            onClick={logout}
            whileTap={{ scale: 0.95 }}
            style={{ fontSize: 'var(--text-sm)' }}
          >
            🔄 Switch
          </motion.button>
        </div>
      </div>

      <div className="page-content">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Welcome Section */}
          <motion.div
            variants={item}
            style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}
          >
            <motion.span
              style={{ fontSize: '4rem', display: 'block', marginBottom: '8px' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              {emoji}
            </motion.span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              marginBottom: '8px',
            }}>
              Hello, {child.name}!
            </h1>

            {child.currentStreak > 0 ? (
              <div className="streak-display" style={{
                display: 'inline-flex',
                margin: '0 auto',
              }}>
                <span className="streak-fire">🔥</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                  {child.currentStreak} day streak!
                </span>
                {child.currentStreak >= 3 && <span> 🎉</span>}
              </div>
            ) : (
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-lg)' }}>
                Ready for today&apos;s adventure? 🌟
              </p>
            )}
          </motion.div>

          {/* Missions Grid */}
          <motion.h2
            variants={item}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              fontWeight: 600,
              marginBottom: '20px',
              textAlign: 'center',
            }}
          >
            Today&apos;s Missions
          </motion.h2>

          <div className="dashboard-grid" style={{ marginBottom: '40px' }}>
            {/* Math Mission */}
            <motion.div
              variants={item}
              className="glass-card"
              style={{ padding: '28px', cursor: 'pointer' }}
              onClick={() => goToChapterSelect('math')}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
              }}>
                <span style={{
                  fontSize: '3rem',
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.05))',
                  borderRadius: 'var(--radius-lg)',
                  padding: '12px',
                  display: 'flex',
                }}>
                  🧮
                </span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                  }}>
                    Math Mission
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Numbers, Addition & more
                  </p>
                </div>
              </div>

              <div className="progress-bar" style={{ marginBottom: '12px' }}>
                <div
                  className="progress-bar-fill green"
                  style={{
                    width: `${Object.keys(child.topicProgress).length > 0
                      ? Math.min(100, Object.keys(child.topicProgress).length * 50)
                      : 0}%`
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
                  {child.chaptersCompleted.length}/2 chapters done
                </span>
                <span className="btn btn-success btn-small" style={{ pointerEvents: 'none' }}>
                  Play →
                </span>
              </div>
            </motion.div>

            {/* English Adventure */}
            <motion.div
              variants={item}
              className="glass-card"
              style={{ padding: '28px', cursor: 'pointer' }}
              onClick={() => goToChapterSelect('english')}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
              }}>
                <span style={{
                  fontSize: '3rem',
                  background: 'linear-gradient(135deg, rgba(84, 160, 255, 0.2), rgba(84, 160, 255, 0.05))',
                  borderRadius: 'var(--radius-lg)',
                  padding: '12px',
                  display: 'flex',
                }}>
                  📖
                </span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                  }}>
                    English Adventure
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Reading, Writing & Speaking
                  </p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
                <span className="btn btn-primary btn-small" style={{ pointerEvents: 'none', background: 'var(--accent-blue)' }}>
                  Play →
                </span>
              </div>
            </motion.div>

            {/* Curiosity Corner */}
            <motion.div
              variants={item}
              className="glass-card"
              style={{ padding: '28px', cursor: 'pointer' }}
              onClick={() => goToChapterSelect('gk')}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
              }}>
                <span style={{
                  fontSize: '3rem',
                  background: 'linear-gradient(135deg, rgba(254, 202, 87, 0.2), rgba(254, 202, 87, 0.05))',
                  borderRadius: 'var(--radius-lg)',
                  padding: '12px',
                  display: 'flex',
                }}>
                  🔍
                </span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                  }}>
                    Curiosity Corner
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Fun facts & GK quizzes
                  </p>
                </div>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
                <span className="btn btn-primary btn-small" style={{ pointerEvents: 'none', background: 'var(--accent-yellow)' }}>
                  Play →
                </span>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div variants={item}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 600,
              marginBottom: '16px',
              textAlign: 'center',
              color: 'var(--text-secondary)',
            }}>
              Your Stats
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
              maxWidth: '600px',
              margin: '0 auto 40px',
            }}>
              {[
                { label: 'Total Stars', value: child.totalStars, icon: '⭐', color: 'var(--star-gold)' },
                { label: 'Sessions', value: child.sessionsCompleted, icon: '🎮', color: 'var(--accent-green)' },
                { label: 'Accuracy', value: `${accuracy}%`, icon: '🎯', color: 'var(--accent-cyan)' },
                { label: 'Best Streak', value: child.longestStreak, icon: '🔥', color: 'var(--streak-orange)' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{ padding: '16px', textAlign: 'center' }}
                >
                  <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '4px' }}>
                    {stat.icon}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: stat.color,
                    display: 'block',
                  }}>
                    {stat.value}
                  </span>
                  <span style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-muted)',
                  }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Actions */}
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              paddingBottom: '40px',
            }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={goToRewardShop}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              🎁 Reward Shop
            </motion.button>
            <motion.button
              className="btn btn-ghost"
              onClick={goToParentDashboard}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              📊 Parent Dashboard
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
