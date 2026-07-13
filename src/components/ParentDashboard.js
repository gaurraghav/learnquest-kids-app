'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../store/useStore';
import { mathContent, mathTopics } from '../data/mathContent';
import { BADGES } from '../data/badges';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
};

export default function ParentDashboard() {
  const exitParentMode = useStore((s) => s.exitParentMode);
  const logout = useStore((s) => s.logout);
  const children = useStore((s) => s.children);
  const rewards = useStore((s) => s.rewards);
  const fulfillReward = useStore((s) => s.fulfillReward);
  const currentChild = useStore((s) => s.currentChild);

  const allBadges = BADGES;

  const [activeTab, setActiveTab] = useState(currentChild || 'amay');

  const child = children[activeTab];
  const accuracy = child.totalQuestionsAttempted > 0
    ? Math.round((child.totalCorrect / child.totalQuestionsAttempted) * 100)
    : 0;

  const getTopicName = (chapterId) => {
    const topic = mathTopics.find(t => t.chapterId === chapterId);
    return topic?.adventureName || chapterId;
  };

  return (
    <div className="page-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
          }}>
            📊 Parent Dashboard
          </span>
        </div>
        <div className="top-bar-right">
          <motion.button
            className="btn btn-ghost btn-small"
            onClick={currentChild ? exitParentMode : logout}
            whileTap={{ scale: 0.95 }}
          >
            {currentChild ? '← Back to App' : '← Home'}
          </motion.button>
        </div>
      </div>

      <div className="page-content" style={{ maxWidth: '800px' }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Child Tabs */}
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              gap: '0',
              marginBottom: '32px',
              background: 'var(--bg-glass)',
              borderRadius: 'var(--radius-full)',
              padding: '4px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {[
              { id: 'amay', name: 'Amay', emoji: '🦸‍♂️', color: 'var(--amay-primary)' },
              { id: 'ayra', name: 'Ayra', emoji: '👸', color: 'var(--ayra-primary)' },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  padding: '12px 20px',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: 'none',
                  background: activeTab === tab.id
                    ? 'var(--bg-glass-strong)'
                    : 'transparent',
                  color: activeTab === tab.id ? tab.color : 'var(--text-muted)',
                  transition: 'all 0.3s ease',
                }}
                whileTap={{ scale: 0.97 }}
              >
                {tab.emoji} {tab.name}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Overview Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '12px',
                marginBottom: '28px',
              }}>
                {[
                  { label: 'Total Stars', value: child.totalStars, icon: '⭐', color: 'var(--star-gold)' },
                  { label: 'Total Gems', value: child.gems, icon: '💎', color: 'var(--gem-blue)' },
                  { label: 'Current Streak', value: `${child.currentStreak} days`, icon: '🔥', color: 'var(--streak-orange)' },
                  { label: 'Accuracy', value: `${accuracy}%`, icon: '🎯', color: accuracy >= 70 ? 'var(--accent-green)' : 'var(--accent-orange)' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card"
                    style={{ padding: '20px', textAlign: 'center' }}
                  >
                    <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '8px' }}>
                      {stat.icon}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-2xl)',
                      fontWeight: 700,
                      color: stat.color,
                      display: 'block',
                      marginBottom: '4px',
                    }}>
                      {stat.value}
                    </span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Session Summary */}
              <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}>
                  📈 Learning Summary
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  textAlign: 'center',
                }}>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-2xl)',
                      fontWeight: 700,
                      display: 'block',
                    }}>
                      {child.sessionsCompleted}
                    </span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                      Sessions
                    </span>
                  </div>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-2xl)',
                      fontWeight: 700,
                      display: 'block',
                    }}>
                      {child.totalQuestionsAttempted}
                    </span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                      Questions
                    </span>
                  </div>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-2xl)',
                      fontWeight: 700,
                      color: 'var(--accent-green)',
                      display: 'block',
                    }}>
                      {child.totalCorrect}
                    </span>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                      Correct
                    </span>
                  </div>
                </div>

                {/* Longest streak */}
                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  background: 'var(--bg-glass)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
                    🏆 Longest Streak: <strong style={{ color: 'var(--streak-orange)' }}>{child.longestStreak} days</strong>
                  </span>
                </div>
              </div>

              {/* Topic Progress */}
              <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}>
                  📚 Topic Progress
                </h3>

                {Object.keys(child.topicProgress).length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {Object.entries(child.topicProgress).map(([topicId, progress]) => (
                      <div key={topicId}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '6px',
                        }}>
                          <span style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 600,
                            fontSize: 'var(--text-base)',
                          }}>
                            {getTopicName(topicId)}
                          </span>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                              {progress.attempts} attempt{progress.attempts !== 1 ? 's' : ''}
                            </span>
                            {progress.bestAccuracy >= 0.8 && (
                              <span style={{
                                background: 'rgba(0, 210, 160, 0.15)',
                                color: 'var(--accent-green)',
                                padding: '2px 8px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--text-xs)',
                                fontWeight: 600,
                              }}>
                                ✅ Mastered
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="progress-bar" style={{ height: '10px' }}>
                          <div
                            className={`progress-bar-fill ${progress.bestAccuracy >= 0.8 ? 'green' : progress.bestAccuracy >= 0.6 ? 'gold' : 'pink'}`}
                            style={{ width: `${Math.round(progress.bestAccuracy * 100)}%` }}
                          />
                        </div>
                        <span style={{
                          fontSize: 'var(--text-xs)',
                          color: 'var(--text-muted)',
                          marginTop: '4px',
                          display: 'block',
                        }}>
                          Best Accuracy: {Math.round(progress.bestAccuracy * 100)}%
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px' }}>
                    No topics attempted yet. Start a practice session! 🚀
                  </p>
                )}
              </div>

              {/* Badges */}
              <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}>
                  🏅 Badges ({child.badges.length}/{allBadges.length})
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                  gap: '12px',
                }}>
                  {allBadges.map((badge) => {
                    const isEarned = child.badges.includes(badge.id);
                    return (
                      <div
                        key={badge.id}
                        style={{ textAlign: 'center' }}
                      >
                        <div
                          className={`badge-display ${isEarned ? 'earned' : 'locked'}`}
                          style={{
                            margin: '0 auto',
                            width: '56px',
                            height: '56px',
                            fontSize: '1.8rem',
                          }}
                        >
                          {badge.icon}
                        </div>
                        <p style={{
                          fontSize: 'var(--text-xs)',
                          color: isEarned ? 'var(--text-secondary)' : 'var(--text-muted)',
                          marginTop: '6px',
                          fontWeight: isEarned ? 600 : 400,
                        }}>
                          {badge.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Pending Rewards (Parent Approval) */}
              {child.rewardsPurchased.length > 0 && (
                <div className="glass-card" style={{ padding: '24px', marginBottom: '24px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}>
                    🎁 Reward Requests
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {child.rewardsPurchased.map((pr, index) => {
                      const reward = rewards.find(r => r.id === pr.rewardId);
                      if (!reward) return null;
                      const date = new Date(pr.purchasedAt);
                      return (
                        <div
                          key={index}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 16px',
                            background: 'var(--bg-glass)',
                            borderRadius: 'var(--radius-md)',
                          }}
                        >
                          <span style={{ fontSize: '1.5rem' }}>{reward.icon}</span>
                          <div style={{ flex: 1 }}>
                            <span style={{
                              fontFamily: 'var(--font-display)',
                              fontWeight: 600,
                              display: 'block',
                            }}>
                              {reward.name}
                            </span>
                            <span style={{
                              fontSize: 'var(--text-xs)',
                              color: 'var(--text-muted)',
                            }}>
                              {date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                            </span>
                          </div>
                          {pr.fulfilled ? (
                            <span style={{
                              color: 'var(--accent-green)',
                              fontWeight: 600,
                              fontSize: 'var(--text-sm)',
                            }}>
                              ✅ Done
                            </span>
                          ) : (
                            <motion.button
                              className="btn btn-success btn-small"
                              onClick={() => fulfillReward(activeTab, index)}
                              whileTap={{ scale: 0.95 }}
                            >
                              ✅ Fulfill
                            </motion.button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Insights */}
              <div className="glass-card" style={{ padding: '24px', marginBottom: '40px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: '12px',
                }}>
                  💡 Insights for {child.name}
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                }}>
                  {child.totalQuestionsAttempted === 0 ? (
                    <p>🚀 {child.name} hasn&apos;t started yet. Encourage them to begin their first session!</p>
                  ) : (
                    <>
                      {accuracy >= 80 ? (
                        <p>🌟 Excellent performance! {child.name} is mastering concepts well.</p>
                      ) : accuracy >= 60 ? (
                        <p>📈 Good progress! Consider revisiting topics with lower accuracy for reinforcement.</p>
                      ) : (
                        <p>💪 {child.name} is building foundations. Consistent daily practice will show improvement quickly.</p>
                      )}
                      {child.currentStreak >= 5 && (
                        <p>🔥 Amazing {child.currentStreak}-day streak! Consistency is paying off.</p>
                      )}
                      {child.longestStreak > child.currentStreak && child.currentStreak < 3 && (
                        <p>⚡ Previous best streak was {child.longestStreak} days. Let&apos;s get back on track!</p>
                      )}
                      {activeTab === 'ayra' && accuracy < 70 && (
                        <p>🇮🇳 Tip: Enable Hindi translations during practice to help Ayra understand questions better.</p>
                      )}
                      {activeTab === 'amay' && accuracy >= 80 && (
                        <p>🧠 Tip: Amay is doing great! Encourage him to explain his reasoning — this builds deeper understanding.</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
