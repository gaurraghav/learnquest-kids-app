'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import useStore from '../store/useStore';
import { mathContent, mathTopics } from '../data/mathContent';
import { englishContent, englishTopics } from '../data/englishContent';
import { gkContent, gkTopics } from '../data/gkContent';

const getChapterData = (chapterId) => {
  const allChapters = [...mathContent.chapters, ...englishContent.chapters, ...gkContent.chapters];
  const allTopics = [...mathTopics, ...englishTopics, ...gkTopics];
  return {
    chapter: allChapters.find(c => c.id === chapterId),
    topic: allTopics.find(t => t.chapterId === chapterId)
  };
};
import { getTTS } from '../utils/tts';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ConceptScreen() {
  const currentChapter = useStore((s) => s.currentChapter);
  const goToChapterSelect = useStore((s) => s.goToChapterSelect);
  const startPractice = useStore((s) => s.startPractice);
  const showHindi = useStore((s) => s.showHindi);
  const toggleHindi = useStore((s) => s.toggleHindi);
  const [speakingStep, setSpeakingStep] = useState(-1);

  const { chapter, topic } = getChapterData(currentChapter);

  if (!chapter) return null;

  const speakStep = async (index) => {
    const step = chapter.conceptExplanation.steps[index];
    if (!step) return;
    setSpeakingStep(index);
    try {
      const tts = getTTS();
      if (showHindi && step.textHindi) {
        await tts.speak(step.textHindi, 'hi');
      } else {
        await tts.speak(step.text, 'en');
      }
    } catch (e) { /* TTS not available */ }
    setSpeakingStep(-1);
  };

  return (
    <div className="page-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <motion.button
            className="btn btn-ghost btn-small"
            onClick={goToChapterSelect}
            whileTap={{ scale: 0.95 }}
          >
            ← Back
          </motion.button>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-lg)',
            fontWeight: 600,
          }}>
            {topic?.adventureIcon} {topic?.adventureName || chapter.title}
          </span>
        </div>
        <div className="top-bar-right">
          <motion.button
            className={`btn btn-ghost btn-small`}
            onClick={toggleHindi}
            whileTap={{ scale: 0.95 }}
            style={{
              borderColor: showHindi ? 'var(--accent-orange)' : 'var(--border-subtle)',
              color: showHindi ? 'var(--accent-orange)' : 'var(--text-secondary)',
            }}
          >
            {showHindi ? '🇮🇳 Hindi ON' : '🇮🇳 हिंदी'}
          </motion.button>
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
            <span style={{ fontSize: '4rem', display: 'block', marginBottom: '8px' }}>
              {topic?.adventureIcon || '📘'}
            </span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              marginBottom: '8px',
            }}>
              {chapter.conceptExplanation.title}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)' }}>
              {topic?.characterGuide ? `${topic.characterGuide} will teach you!` : 'Let\'s learn something new!'} 
              {topic?.characterGuide === 'Ginu the Owl' ? ' 🦉' : ' 🐐'}
            </p>
          </motion.div>

          {/* Concept Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {chapter.conceptExplanation.steps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className="concept-step"
                style={{
                  opacity: 1,
                  animation: 'none',
                  flexDirection: 'column',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  width: '100%',
                }}>
                  <div className="concept-step-number">
                    {index + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p className="concept-step-text">
                      {step.text}
                    </p>
                    {showHindi && step.textHindi && (
                      <p className="concept-step-text-hindi">
                        {step.textHindi}
                      </p>
                    )}
                  </div>
                  <motion.button
                    className={`tts-btn ${speakingStep === index ? 'speaking' : ''}`}
                    onClick={() => speakStep(index)}
                    whileTap={{ scale: 0.9 }}
                    title="Read aloud"
                  >
                    {speakingStep === index ? '🔊' : '🔈'}
                  </motion.button>
                </div>

                {/* Visual description hint */}
                <div style={{
                  marginTop: '12px',
                  marginLeft: '64px',
                  padding: '10px 16px',
                  background: 'linear-gradient(135deg, rgba(108, 92, 231, 0.1), rgba(72, 219, 251, 0.05))',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                }}>
                  🎨 {step.visualDescription}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Start Practice Button */}
          <motion.div
            variants={item}
            style={{ textAlign: 'center', paddingBottom: '40px' }}
          >
            <motion.button
              className="btn btn-primary btn-large"
              onClick={startPractice}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontSize: 'var(--text-xl)',
                padding: '20px 48px',
                gap: '12px',
              }}
            >
              🎮 Start Practice!
            </motion.button>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: 'var(--text-sm)',
              marginTop: '12px',
            }}>
              {chapter.questions.length} questions await you! 💪
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
