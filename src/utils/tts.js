// Text-to-Speech utility for LearnQuest
// Supports Hindi and English using Web Speech API

class TTSService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.currentUtterance = null;
    this.voices = [];
    this.hindiVoice = null;
    this.englishVoice = null;
    this.isReady = false;

    if (this.synth) {
      this.loadVoices();
      this.synth.onvoiceschanged = () => this.loadVoices();
    }
  }

  loadVoices() {
    this.voices = this.synth.getVoices();

    // Find Hindi voice
    this.hindiVoice = this.voices.find(v => v.lang === 'hi-IN') ||
      this.voices.find(v => v.lang.startsWith('hi'));

    // Find English (India) voice, fallback to any English
    this.englishVoice = this.voices.find(v => v.lang === 'en-IN') ||
      this.voices.find(v => v.lang === 'en-US') ||
      this.voices.find(v => v.lang.startsWith('en'));

    this.isReady = true;
  }

  speak(text, lang = 'en', options = {}) {
    if (!this.synth) return Promise.resolve();

    return new Promise((resolve) => {
      // Cancel any ongoing speech
      this.synth.cancel();

      // Clean text for dictation (e.g., replace '___' with 'blank')
      const cleanedText = text ? text.replace(/_+/g, lang === 'hi' ? 'खाली स्थान' : 'blank') : '';

      const utterance = new SpeechSynthesisUtterance(cleanedText);

      if (lang === 'hi') {
        utterance.voice = this.hindiVoice;
        utterance.lang = 'hi-IN';
      } else {
        utterance.voice = this.englishVoice;
        utterance.lang = 'en-IN';
      }

      // Kid-friendly settings: slightly slower, slightly higher pitch
      utterance.rate = options.rate || 0.85;
      utterance.pitch = options.pitch || 1.1;
      utterance.volume = options.volume || 1;

      utterance.onend = () => {
        this.currentUtterance = null;
        resolve();
      };

      utterance.onerror = () => {
        this.currentUtterance = null;
        resolve();
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    });
  }

  speakQuestion(question, showHindi = false) {
    if (showHindi && question.questionHindi) {
      return this.speak(question.questionHindi, 'hi');
    }
    return this.speak(question.question, 'en');
  }

  speakFeedback(isCorrect) {
    const correctPhrases = [
      'Excellent! That\'s correct!',
      'Well done! You got it right!',
      'Amazing! Keep going!',
      'Super! You\'re a star!',
      'Fantastic answer!',
    ];

    const incorrectPhrases = [
      'Good try! Let\'s try the next one.',
      'Almost there! Don\'t worry, keep going!',
      'That\'s okay! Practice makes perfect!',
      'Nice effort! You\'ll get the next one!',
    ];

    const phrases = isCorrect ? correctPhrases : incorrectPhrases;
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    return this.speak(phrase, 'en', { rate: 0.9 });
  }

  speakCelebration(starsEarned) {
    return this.speak(
      `Wow! You earned ${starsEarned} stars! You're doing amazing!`,
      'en',
      { rate: 0.85, pitch: 1.2 }
    );
  }

  speakWelcome(name) {
    return this.speak(
      `Welcome back, ${name}! Ready for today's adventure?`,
      'en',
      { rate: 0.85, pitch: 1.1 }
    );
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  get isSpeaking() {
    return this.synth ? this.synth.speaking : false;
  }
}

// Singleton instance
let ttsInstance = null;

export function getTTS() {
  if (!ttsInstance) {
    ttsInstance = new TTSService();
  }
  return ttsInstance;
}

export default TTSService;
