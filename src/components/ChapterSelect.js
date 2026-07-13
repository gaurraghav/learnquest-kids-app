'use client';

import { motion } from 'framer-motion';
import useStore from '../store/useStore';
import { mathContent, mathTopics } from '../data/mathContent';
import { englishContent, englishTopics } from '../data/englishContent';
import { gkContent, gkTopics } from '../data/gkContent';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function ChapterSelect() {
  const goHome = useStore((s) => s.goHome);
  const selectChapter = useStore((s) => s.selectChapter);
  const currentChild = useStore((s) => s.currentChild);
  const children = useStore((s) => s.children);

  const child = children[currentChild];
  if (!child) return null;

  const currentSubject = useStore((s) => s.currentSubject) || 'math';
  
  let content = mathContent;
  let topics = mathTopics;
  let headerTitle = '🧮 Math Mission';
  
  if (currentSubject === 'english') {
    content = englishContent;
    topics = englishTopics;
    headerTitle = '📖 English Adventure';
  } else if (currentSubject === 'gk') {
    content = gkContent;
    topics = gkTopics;
    headerTitle = '🔍 Curiosity Corner';
  }

  const chapters = content.chapters;

  const isChapterUnlocked = (index) => {
    if (index === 0) return true;
    const prevChapter = chapters[index - 1];
    return child.chaptersCompleted.includes(prevChapter.id);
  };

  const getChapterStatus = (chapter, index) => {
    if (child.chaptersCompleted.includes(chapter.id)) return 'completed';
    if (!isChapterUnlocked(index)) return 'locked';
    return 'available';
  };

  const getTopicForChapter = (chapterId) => {
    return topics.find(t => t.chapterId === chapterId);
  };

  return (
    <div className="page-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <motion.button
            className="btn btn-ghost btn-small"
            onClick={goHome}
            whileTap={{ scale: 0.95 }}
          >
            ← Back
          </motion.button>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
          }}>
            {headerTitle}
          </span>
        </div>
        <div className="top-bar-right">
          <span className="stat-badge stars">
            <span className="icon">⭐</span> {child.totalStars}
          </span>
          <span className="stat-badge gems">
            <span className="icon">💎</span> {child.gems}
          </span>
        </div>
      </div>

      <div className="page-content" style={{ maxWidth: '700px' }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div variants={item} style={{ textAlign: 'center', margin: '20px 0 32px' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              marginBottom: '8px',
            }}>
              Choose Your Adventure
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Complete each chapter to unlock the next! 🗺️
            </p>
          </motion.div>

          {/* Chapter Trail */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            position: 'relative',
          }}>
            {/* Connecting trail line */}
            <div style={{
              position: 'absolute',
              left: '40px',
              top: '80px',
              bottom: '80px',
              width: '3px',
              background: 'linear-gradient(180deg, var(--accent-green), var(--border-subtle))',
              borderRadius: '2px',
              zIndex: 0,
            }} />

            {chapters.map((chapter, index) => {
              const status = getChapterStatus(chapter, index);
              const topic = getTopicForChapter(chapter.id);
              const progress = child.topicProgress[chapter.id];
              const isLocked = status === 'locked';
              const isCompleted = status === 'completed';

              return (
                <motion.div
                  key={chapter.id}
                  variants={item}
                  className="chapter-card"
                  onClick={() => !isLocked && selectChapter(chapter.id)}
                  whileHover={!isLocked ? { scale: 1.02, x: 8 } : {}}
                  whileTap={!isLocked ? { scale: 0.98 } : {}}
                  style={{
                    opacity: isLocked ? 0.4 : 1,
                    cursor: isLocked ? 'not-allowed' : 'pointer',
                    position: 'relative',
                    zIndex: 1,
                    borderColor: isCompleted
                      ? 'rgba(0, 210, 160, 0.4)'
                      : isLocked
                        ? 'var(--border-subtle)'
                        : 'rgba(108, 92, 231, 0.3)',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}>
                    {/* Status Icon */}
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--radius-lg)',
                      background: isCompleted
                        ? 'linear-gradient(135deg, rgba(0, 210, 160, 0.2), rgba(0, 230, 118, 0.1))'
                        : isLocked
                          ? 'var(--bg-glass)'
                          : `linear-gradient(135deg, rgba(108, 92, 231, 0.2), rgba(162, 155, 254, 0.1))`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      flexShrink: 0,
                    }}>
                      {isCompleted ? '✅' : isLocked ? '🔒' : (topic?.adventureIcon || chapter.icon)}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        marginBottom: '4px',
                      }}>
                        {topic?.adventureName || chapter.title}
                      </h3>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        marginBottom: '4px',
                      }}>
                        {chapter.subtitle}
                      </p>
                      <p style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--text-muted)',
                      }}>
                        📚 {chapter.ncertChapter} · {chapter.questions.length} questions
                      </p>

                      {/* Progress bar for attempted topics */}
                      {progress && (
                        <div style={{ marginTop: '8px' }}>
                          <div className="progress-bar" style={{ height: '8px' }}>
                            <div
                              className={`progress-bar-fill ${isCompleted ? 'green' : ''}`}
                              style={{ width: `${Math.round(progress.bestAccuracy * 100)}%` }}
                            />
                          </div>
                          <span style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--text-muted)',
                            marginTop: '4px',
                            display: 'block',
                          }}>
                            Best: {Math.round(progress.bestAccuracy * 100)}% · {progress.attempts} attempt{progress.attempts !== 1 ? 's' : ''}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Arrow */}
                    {!isLocked && (
                      <span style={{
                        fontSize: 'var(--text-2xl)',
                        color: 'var(--text-muted)',
                      }}>
                        →
                      </span>
                    )}
                  </div>

                  {isLocked && (
                    <p style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--accent-yellow)',
                      marginTop: '8px',
                      textAlign: 'center',
                    }}>
                      🔐 Complete the previous chapter first!
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Character Guide */}
          <motion.div
            variants={item}
            className="glass-card"
            style={{
              padding: '20px',
              marginTop: '32px',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <span style={{ fontSize: '2rem' }}>🦉</span>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              marginTop: '8px',
            }}>
              &quot;Choose a chapter and begin your adventure! I&apos;ll guide you through each one.&quot;
              <br />
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                — Ginu the Owl 🦉
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
