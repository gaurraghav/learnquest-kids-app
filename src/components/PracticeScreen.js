'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../store/useStore';
import { mathContent } from '../data/mathContent';
import { englishContent } from '../data/englishContent';
import { gkContent } from '../data/gkContent';

const getChapter = (chapterId) => {
  const allChapters = [...mathContent.chapters, ...englishContent.chapters, ...gkContent.chapters];
  return allChapters.find(c => c.id === chapterId);
};
import { getTTS } from '../utils/tts';

const QUESTIONS_PER_SESSION = 10;
const CORRECT_EMOJIS = ['🎉', '🌟', '🎊', '💪', '🏆', '✨', '🥳', '👏'];
const INCORRECT_EMOJIS = ['💡', '🤔', '🌈', '📚'];
const CORRECT_MESSAGES = [
  'Awesome!', 'Brilliant!', 'Superb!', 'Amazing!', 'Fantastic!',
  'You\'re a star!', 'Well done!', 'Excellent!', 'Great job!',
];
const INCORRECT_MESSAGES = [
  'Good try!', 'Almost!', 'Keep going!', 'Nice effort!',
  'Don\'t worry!', 'You\'re learning!',
];

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Visual objects component for counting questions
function VisualObjects({ question }) {
  const emojiMap = {
    apples: '🍎', balloons: '🎈', stars: '⭐', fish: '🐟',
    flowers: '🌸', ducks: '🦆', parrots: '🦜', blocks: '🧱',
    toys: '🧸', fingers: '✋', cookies: '🍪', crayons: '🖍️',
    marbles: '🔮', bees: '🐝', butterflies: '🦋', rabbits: '🐰',
    rockets: '🚀', frogs: '🐸', diyas: '🪔', beads: '📿',
    'toy-cars': '🏎️', candies: '🍬', 'ice-cream': '🍦',
    stickers: '⭐', samosas: '🥟', animals: '🐾', monkeys: '🐵',
    hops: '🦘', ladybugs: '🐞', crocodile: '🐊', kangaroo: '🦘',
    'cricket-bat': '🏏',
  };

  const emoji = emojiMap[question.objects] || '⭐';

  // Only show visual objects for counting-type questions
  if (question.visualType === 'counting-objects' && question.type !== 'word-problem') {
    const count = parseInt(question.correctAnswer) || 5;
    const displayCount = Math.min(count, 20);

    return (
      <div className="visual-objects" style={{ marginBottom: '16px' }}>
        {Array.from({ length: displayCount }, (_, i) => (
          <motion.span
            key={i}
            className="visual-object"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.08, type: 'spring', bounce: 0.5 }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    );
  }

  return null;
}

export default function PracticeScreen() {
  const currentChapter = useStore((s) => s.currentChapter);
  const currentQuestionIndex = useStore((s) => s.currentQuestionIndex);
  const sessionAnswers = useStore((s) => s.sessionAnswers);
  const showHint = useStore((s) => s.showHint);
  const showFeedback = useStore((s) => s.showFeedback);
  const consecutiveCorrect = useStore((s) => s.consecutiveCorrect);
  const showHindi = useStore((s) => s.showHindi);
  const answerQuestion = useStore((s) => s.answerQuestion);
  const nextQuestion = useStore((s) => s.nextQuestion);
  const toggleHint = useStore((s) => s.toggleHint);
  const toggleHindi = useStore((s) => s.toggleHindi);
  const goHome = useStore((s) => s.goHome);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [fillBlankValue, setFillBlankValue] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [questions, setQuestions] = useState([]);
  const startTimeRef = useRef(Date.now());

  const chapter = getChapter(currentChapter);

  // Shuffle and pick questions for this session
  const sessionQuestions = useMemo(() => {
    if (!chapter) return [];
    return shuffleArray(chapter.questions).slice(0, QUESTIONS_PER_SESSION);
  }, [currentChapter]); // eslint-disable-line react-hooks/exhaustive-deps

  const totalQuestions = sessionQuestions.length;
  const question = sessionQuestions[currentQuestionIndex];

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setFillBlankValue('');
    setIsAnswered(false);
    startTimeRef.current = Date.now();
  }, [currentQuestionIndex]);

  // Speak question on mount
  useEffect(() => {
    if (question) {
      try {
        const tts = getTTS();
        tts.speakQuestion(question, showHindi);
      } catch (e) { /* TTS not available */ }
    }
  }, [currentQuestionIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!chapter || !question) return null;

  const handleAnswer = (answer) => {
    if (isAnswered) return;

    const timeTaken = Date.now() - startTimeRef.current;
    let correctAnswer = question.correctAnswer;
    let isCorrect = false;

    // Normalize answer comparison
    const normalizedAnswer = String(answer).trim().toLowerCase();
    const normalizedCorrect = String(correctAnswer).trim().toLowerCase();
    isCorrect = normalizedAnswer === normalizedCorrect;

    setSelectedAnswer(answer);
    setIsAnswered(true);
    answerQuestion(answer, isCorrect, timeTaken, question);

    // Speak feedback
    try {
      const tts = getTTS();
      setTimeout(() => tts.speakFeedback(isCorrect), 300);
    } catch (e) { /* TTS not available */ }
  };

  const handleFillBlankSubmit = () => {
    if (fillBlankValue.trim() === '') return;
    handleAnswer(fillBlankValue.trim());
  };

  const handleNext = () => {
    nextQuestion(totalQuestions);
  };

  const progress = ((currentQuestionIndex + (isAnswered ? 1 : 0)) / totalQuestions) * 100;
  const starsThisSession = sessionAnswers.reduce((sum, a) => sum + a.stars, 0);

  const randomCorrectEmoji = CORRECT_EMOJIS[Math.floor(Math.random() * CORRECT_EMOJIS.length)];
  const randomCorrectMsg = CORRECT_MESSAGES[Math.floor(Math.random() * CORRECT_MESSAGES.length)];
  const randomIncorrectEmoji = INCORRECT_EMOJIS[Math.floor(Math.random() * INCORRECT_EMOJIS.length)];
  const randomIncorrectMsg = INCORRECT_MESSAGES[Math.floor(Math.random() * INCORRECT_MESSAGES.length)];

  // Render answer input based on question type
  const renderAnswerInput = () => {
    switch (question.type) {
      case 'multiple-choice':
      case 'word-problem':
        return (
          <div className="options-grid">
            {(question.options || []).map((opt, i) => {
              let className = 'option-btn';
              if (isAnswered) {
                if (String(opt) === String(question.correctAnswer)) className += ' correct';
                else if (String(opt) === String(selectedAnswer)) className += ' incorrect';
              } else if (selectedAnswer === opt) {
                className += ' selected';
              }

              return (
                <motion.button
                  key={i}
                  className={className}
                  onClick={() => handleAnswer(opt)}
                  disabled={isAnswered}
                  whileHover={!isAnswered ? { scale: 1.03 } : {}}
                  whileTap={!isAnswered ? { scale: 0.97 } : {}}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {opt}
                </motion.button>
              );
            })}
          </div>
        );

      case 'true-false':
        return (
          <div className="options-grid" style={{ gridTemplateColumns: '1fr 1fr', maxWidth: '400px', margin: '0 auto' }}>
            {['True', 'False'].map((opt, i) => {
              let className = 'option-btn';
              if (isAnswered) {
                if (opt === question.correctAnswer) className += ' correct';
                else if (opt === selectedAnswer) className += ' incorrect';
              }
              return (
                <motion.button
                  key={opt}
                  className={className}
                  onClick={() => handleAnswer(opt)}
                  disabled={isAnswered}
                  whileHover={!isAnswered ? { scale: 1.03 } : {}}
                  whileTap={!isAnswered ? { scale: 0.97 } : {}}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {opt === 'True' ? '✅ True' : '❌ False'}
                </motion.button>
              );
            })}
          </div>
        );

      case 'comparison':
        return (
          <div className="options-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '400px', margin: '0 auto' }}>
            {(question.options || ['>', '<', '=']).map((opt, i) => {
              let className = 'option-btn';
              if (isAnswered) {
                if (opt === question.correctAnswer) className += ' correct';
                else if (opt === selectedAnswer) className += ' incorrect';
              }
              return (
                <motion.button
                  key={opt}
                  className={className}
                  onClick={() => handleAnswer(opt)}
                  disabled={isAnswered}
                  whileHover={!isAnswered ? { scale: 1.03 } : {}}
                  whileTap={!isAnswered ? { scale: 0.97 } : {}}
                  style={{ fontSize: 'var(--text-2xl)' }}
                >
                  {opt}
                </motion.button>
              );
            })}
          </div>
        );

      case 'fill-blank':
      case 'sequence':
        return (
          <div style={{ textAlign: 'center' }}>
            <input
              type="text"
              inputMode="numeric"
              className={`fill-blank-input ${isAnswered ? (showFeedback === 'correct' ? 'correct' : 'incorrect') : ''}`}
              value={fillBlankValue}
              onChange={(e) => setFillBlankValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleFillBlankSubmit()}
              disabled={isAnswered}
              placeholder="?"
              autoFocus
              style={{ width: '160px', marginBottom: '16px' }}
            />
            {!isAnswered && (
              <div>
                <motion.button
                  className="btn btn-primary"
                  onClick={handleFillBlankSubmit}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={fillBlankValue.trim() === ''}
                  style={{ opacity: fillBlankValue.trim() === '' ? 0.5 : 1 }}
                >
                  Check Answer ✓
                </motion.button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="page-container">
      {/* Top Bar */}
      <div className="top-bar" style={{ flexWrap: 'wrap', gap: '8px' }}>
        <div className="top-bar-left" style={{ gap: '8px' }}>
          <motion.button
            className="btn btn-ghost btn-small"
            onClick={goHome}
            whileTap={{ scale: 0.95 }}
            style={{ fontSize: 'var(--text-sm)', padding: '6px 12px', minHeight: 'auto' }}
          >
            ✕
          </motion.button>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-base)',
            fontWeight: 600,
            color: 'var(--text-secondary)',
          }}>
            Q {currentQuestionIndex + 1}/{totalQuestions}
          </span>
        </div>

        {/* Progress Bar */}
        <div style={{ flex: 1, minWidth: '120px', maxWidth: '300px' }}>
          <div className="progress-bar" style={{ height: '8px' }}>
            <div className="progress-bar-fill gold" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="top-bar-right" style={{ gap: '8px' }}>
          <span className="stat-badge stars" style={{ fontSize: 'var(--text-sm)', padding: '4px 10px' }}>
            ⭐ {starsThisSession}
          </span>
          <motion.button
            className="btn btn-ghost btn-small"
            onClick={toggleHindi}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: 'var(--text-xs)',
              padding: '4px 10px',
              minHeight: 'auto',
              borderColor: showHindi ? 'var(--accent-orange)' : 'var(--border-subtle)',
            }}
          >
            {showHindi ? 'हिं' : 'EN'}
          </motion.button>
        </div>
      </div>

      <div className="page-content" style={{ paddingTop: '24px' }}>
        {/* Consecutive Correct Streak */}
        <AnimatePresence>
          {consecutiveCorrect >= 3 && !isAnswered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                textAlign: 'center',
                marginBottom: '16px',
              }}
            >
              <span className="stat-badge streak" style={{ fontSize: 'var(--text-base)' }}>
                <span className="streak-fire">🔥</span>
                {consecutiveCorrect} in a row!
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            className="question-card"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Difficulty badge */}
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <span style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                background: question.difficulty === 'easy'
                  ? 'rgba(0, 210, 160, 0.15)'
                  : question.difficulty === 'medium'
                    ? 'rgba(255, 159, 67, 0.15)'
                    : 'rgba(255, 107, 107, 0.15)',
                color: question.difficulty === 'easy'
                  ? 'var(--accent-green)'
                  : question.difficulty === 'medium'
                    ? 'var(--accent-orange)'
                    : 'var(--accent-red)',
              }}>
                {question.difficulty === 'easy' ? '🌱' : question.difficulty === 'medium' ? '🌿' : '🌳'}
                {' '}{question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
                {' · '}{question.stars}⭐
              </span>
            </div>

            {/* Question Text */}
            <div style={{ position: 'relative' }}>
              <p className="question-text">
                {question.question}
              </p>
              {showHindi && question.questionHindi && (
                <p className="question-text-hindi">
                  {question.questionHindi}
                </p>
              )}

              {/* TTS Button */}
              <motion.button
                className="tts-btn"
                onClick={() => {
                  try {
                    getTTS().speakQuestion(question, showHindi);
                  } catch (e) {}
                }}
                whileTap={{ scale: 0.9 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                }}
              >
                🔈
              </motion.button>
            </div>

            {/* Visual Objects */}
            <VisualObjects question={question} />

            {/* Answer Area */}
            <div style={{ marginTop: '16px' }}>
              {renderAnswerInput()}
            </div>

            {/* Feedback */}
            <AnimatePresence>
              {isAnswered && showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', bounce: 0.4 }}
                  style={{ marginTop: '20px' }}
                >
                  {showFeedback === 'correct' ? (
                    <div className="feedback-correct">
                      <span className="emoji">{randomCorrectEmoji}</span>
                      <span className="message">{randomCorrectMsg}</span>
                      <div className="stars-earned-display" style={{ marginTop: '8px' }}>
                        {Array.from({ length: question.stars }, (_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2 + i * 0.15, type: 'spring', bounce: 0.6 }}
                          >
                            ⭐
                          </motion.span>
                        ))}
                        <span>+{question.stars}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="feedback-incorrect">
                      <span className="emoji">{randomIncorrectEmoji}</span>
                      <span className="message">{randomIncorrectMsg}</span>
                      <p style={{
                        marginTop: '8px',
                        fontSize: 'var(--text-base)',
                        color: 'var(--text-secondary)',
                      }}>
                        The answer is: <strong style={{ color: 'var(--accent-green)' }}>{question.correctAnswer}</strong>
                      </p>
                      <p style={{
                        marginTop: '4px',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-muted)',
                      }}>
                        {question.explanation}
                      </p>
                    </div>
                  )}

                  {/* Next Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ textAlign: 'center', marginTop: '16px' }}
                  >
                    <motion.button
                      className="btn btn-primary"
                      onClick={handleNext}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {currentQuestionIndex + 1 >= totalQuestions ? '🏆 See Results' : 'Next Question →'}
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hint Button (before answering) */}
            {!isAnswered && (
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <motion.button
                  className="btn btn-ghost btn-small"
                  onClick={toggleHint}
                  whileTap={{ scale: 0.95 }}
                  style={{ opacity: 0.7 }}
                >
                  💡 {showHint ? 'Hide Hint' : 'Need a Hint?'}
                </motion.button>

                <AnimatePresence>
                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="hint-box"
                      style={{ marginTop: '12px', textAlign: 'left' }}
                    >
                      <span className="hint-icon">💡</span>
                      <div>
                        <span className="hint-text">{question.hint}</span>
                        {showHindi && question.hintHindi && (
                          <p style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-muted)',
                            marginTop: '4px',
                            fontStyle: 'italic',
                          }}>
                            {question.hintHindi}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
