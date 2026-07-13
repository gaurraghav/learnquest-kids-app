import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_REWARDS = [
  { id: 'chocolate', name: 'Chocolate', nameHindi: 'चॉकलेट', icon: '🍫', cost: 20, category: 'treat' },
  { id: 'icecream', name: 'Ice Cream', nameHindi: 'आइसक्रीम', icon: '🍦', cost: 35, category: 'treat' },
  { id: 'pizza', name: 'Pizza Slice', nameHindi: 'पिज़्ज़ा', icon: '🍕', cost: 50, category: 'treat' },
  { id: 'tv-15', name: '15 min TV Time', nameHindi: '15 मिनट टीवी', icon: '📺', cost: 15, category: 'screen' },
  { id: 'tv-30', name: '30 min TV Time', nameHindi: '30 मिनट टीवी', icon: '📺', cost: 25, category: 'screen' },
  { id: 'mobile-15', name: '15 min Mobile', nameHindi: '15 मिनट मोबाइल', icon: '📱', cost: 20, category: 'screen' },
  { id: 'toy', name: 'Small Toy', nameHindi: 'छोटा खिलौना', icon: '🧸', cost: 100, category: 'toy' },
  { id: 'outing', name: 'Park Outing', nameHindi: 'पार्क की सैर', icon: '🎡', cost: 80, category: 'experience' },
];

// BADGES kept outside store — functions can't be serialized to localStorage
const BADGES = [
  { id: 'first-star', name: 'First Star', icon: '⭐', description: 'Earn your first star', condition: (child) => child.totalStars >= 1 },
  { id: 'counting-pro', name: 'Counting Champion', icon: '🔢', description: 'Complete Numbers & Counting', condition: (child) => child.chaptersCompleted?.includes('ch-numbers') },
  { id: 'addition-hero', name: 'Addition Hero', icon: '➕', description: 'Complete Addition chapter', condition: (child) => child.chaptersCompleted?.includes('ch-addition') },
  { id: 'streak-3', name: '3-Day Streak', icon: '🔥', description: 'Practice 3 days in a row', condition: (child) => child.currentStreak >= 3 },
  { id: 'streak-7', name: 'Week Warrior', icon: '💪', description: 'Practice 7 days in a row', condition: (child) => child.currentStreak >= 7 },
  { id: 'star-50', name: 'Star Collector', icon: '🌟', description: 'Earn 50 stars', condition: (child) => child.totalStars >= 50 },
  { id: 'star-100', name: 'Star Master', icon: '💫', description: 'Earn 100 stars', condition: (child) => child.totalStars >= 100 },
  { id: 'perfect-5', name: 'Perfect Five', icon: '🎯', description: 'Get 5 answers right in a row', condition: (child) => child.maxConsecutiveCorrect >= 5 },
  { id: 'gem-10', name: 'Gem Hunter', icon: '💎', description: 'Earn 10 gems', condition: (child) => child.gems >= 10 },
  { id: 'speed-star', name: 'Speed Star', icon: '⚡', description: 'Answer 3 questions in under 5 seconds each', condition: (child) => child.speedAnswers >= 3 },
];

const createChildProfile = (name, theme) => ({
  name,
  theme,
  totalStars: 0,
  gems: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  chaptersCompleted: [],
  badges: [],
  maxConsecutiveCorrect: 0,
  speedAnswers: 0,
  totalQuestionsAttempted: 0,
  totalCorrect: 0,
  sessionsCompleted: 0,
  topicProgress: {},
  rewardsPurchased: [],
  freezeShieldsAvailable: 1,
  avatarCustomizations: {},
});

const useStore = create(
  persist(
    (set, get) => ({
      // === App State ===
      currentScreen: 'welcome', // welcome | select-child | dashboard | chapter-select | concept | practice | session-complete | reward-shop | parent-dashboard
      currentChild: null, // 'amay' | 'ayra'
      isParentMode: false,

      // === Children Profiles ===
      children: {
        amay: createChildProfile('Amay', 'superhero'),
        ayra: createChildProfile('Ayra', 'princess'),
      },

      // === Session State ===
      currentSubject: 'math', // 'math' | 'english' | 'gk'
      currentSession: null,
      currentChapter: null,
      currentQuestionIndex: 0,
      sessionAnswers: [],
      showHint: false,
      showFeedback: null, // null | 'correct' | 'incorrect'
      consecutiveCorrect: 0,

      // === Rewards & Badges ===
      rewards: INITIAL_REWARDS,
      // NOTE: allBadges is NOT in the store — use getBadges() to access them
      // Functions can't survive localStorage serialization

      // === TTS State ===
      isSpeaking: false,
      showHindi: false,

      // === Actions ===
      setScreen: (screen) => set({ currentScreen: screen }),

      selectChild: (childId) => {
        const child = get().children[childId];
        const today = new Date().toISOString().split('T')[0];
        const lastActive = child.lastActiveDate;

        let updatedChild = { ...child, lastActiveDate: today };

        // Update streak
        if (lastActive) {
          const lastDate = new Date(lastActive);
          const todayDate = new Date(today);
          const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

          if (diffDays === 1) {
            updatedChild.currentStreak = child.currentStreak + 1;
            updatedChild.longestStreak = Math.max(updatedChild.currentStreak, child.longestStreak);
          } else if (diffDays > 1) {
            updatedChild.currentStreak = 1;
          }
        } else {
          updatedChild.currentStreak = 1;
          updatedChild.longestStreak = 1;
        }

        set({
          currentChild: childId,
          currentScreen: 'dashboard',
          children: { ...get().children, [childId]: updatedChild },
        });
      },

      selectChapter: (chapterId) => set({
        currentChapter: chapterId,
        currentScreen: 'concept',
      }),

      startPractice: () => set({
        currentScreen: 'practice',
        currentQuestionIndex: 0,
        sessionAnswers: [],
        showHint: false,
        showFeedback: null,
        consecutiveCorrect: 0,
        currentSession: {
          startedAt: Date.now(),
          type: 'math-practice',
        },
      }),

      answerQuestion: (answer, isCorrect, timeTaken, question) => {
        const state = get();
        const newAnswers = [...state.sessionAnswers, {
          questionId: question.id,
          answer,
          isCorrect,
          timeTaken,
          stars: isCorrect ? question.stars : 0,
        }];

        const newConsecutive = isCorrect ? state.consecutiveCorrect + 1 : 0;

        // Update child stats
        const childId = state.currentChild;
        const child = { ...state.children[childId] };
        if (isCorrect) {
          child.totalStars += question.stars;
          child.totalCorrect += 1;
          if (timeTaken < 5000) {
            child.speedAnswers = (child.speedAnswers || 0) + 1;
          }
        }
        child.totalQuestionsAttempted += 1;
        child.maxConsecutiveCorrect = Math.max(child.maxConsecutiveCorrect || 0, newConsecutive);

        // Award gems for milestones
        if (newConsecutive === 5) child.gems += 2;
        if (newConsecutive === 10) child.gems += 5;

        // Check for new badges (use constant BADGES, not store state)
        const newBadges = [...child.badges];
        BADGES.forEach(badge => {
          if (!newBadges.includes(badge.id) && badge.condition(child)) {
            newBadges.push(badge.id);
            child.gems += 3; // Bonus gems for new badge
          }
        });
        child.badges = newBadges;

        set({
          sessionAnswers: newAnswers,
          showFeedback: isCorrect ? 'correct' : 'incorrect',
          consecutiveCorrect: newConsecutive,
          children: { ...state.children, [childId]: child },
        });
      },

      nextQuestion: (totalQuestions) => {
        const state = get();
        if (state.currentQuestionIndex + 1 >= totalQuestions) {
          // Session complete
          const childId = state.currentChild;
          const child = { ...state.children[childId] };
          child.sessionsCompleted += 1;

          // Award gems for session completion
          const correctCount = state.sessionAnswers.filter(a => a.isCorrect).length;
          const accuracy = correctCount / totalQuestions;
          if (accuracy >= 0.8) child.gems += 5;
          else if (accuracy >= 0.6) child.gems += 3;
          else child.gems += 1;

          // Update topic progress
          const chapterId = state.currentChapter;
          const progress = child.topicProgress[chapterId] || { attempts: 0, bestAccuracy: 0 };
          progress.attempts += 1;
          progress.bestAccuracy = Math.max(progress.bestAccuracy, accuracy);
          child.topicProgress = { ...child.topicProgress, [chapterId]: progress };

          // Mark chapter as completed if accuracy > 70%
          if (accuracy >= 0.7 && !child.chaptersCompleted.includes(chapterId)) {
            child.chaptersCompleted = [...child.chaptersCompleted, chapterId];
          }

          // Check for new badges after session (use constant BADGES)
          const newBadges = [...child.badges];
          BADGES.forEach(badge => {
            if (!newBadges.includes(badge.id) && badge.condition(child)) {
              newBadges.push(badge.id);
              child.gems += 3;
            }
          });
          child.badges = newBadges;

          set({
            currentScreen: 'session-complete',
            children: { ...state.children, [childId]: child },
          });
        } else {
          set({
            currentQuestionIndex: state.currentQuestionIndex + 1,
            showFeedback: null,
            showHint: false,
          });
        }
      },

      toggleHint: () => set({ showHint: !get().showHint }),
      toggleHindi: () => set({ showHindi: !get().showHindi }),
      setSpeaking: (val) => set({ isSpeaking: val }),

      purchaseReward: (rewardId) => {
        const state = get();
        const reward = state.rewards.find(r => r.id === rewardId);
        const childId = state.currentChild;
        const child = { ...state.children[childId] };

        if (child.gems >= reward.cost) {
          child.gems -= reward.cost;
          child.rewardsPurchased = [...child.rewardsPurchased, {
            rewardId,
            purchasedAt: Date.now(),
            fulfilled: false,
          }];
          set({ children: { ...state.children, [childId]: child } });
          return true;
        }
        return false;
      },

      fulfillReward: (childId, index) => {
        const state = get();
        const child = { ...state.children[childId] };
        const purchased = [...child.rewardsPurchased];
        purchased[index] = { ...purchased[index], fulfilled: true };
        child.rewardsPurchased = purchased;
        set({ children: { ...state.children, [childId]: child } });
      },

      goHome: () => set({
        currentScreen: 'dashboard',
        currentChapter: null,
        currentQuestionIndex: 0,
        sessionAnswers: [],
        showFeedback: null,
        showHint: false,
        currentSession: null,
      }),

      goToChapterSelect: (subject = 'math') => set({ currentScreen: 'chapter-select', currentSubject: subject }),
      goToRewardShop: () => set({ currentScreen: 'reward-shop' }),
      goToParentDashboard: () => set({ currentScreen: 'parent-dashboard', isParentMode: true }),
      exitParentMode: () => set({ currentScreen: 'dashboard', isParentMode: false }),

      switchChild: () => {
        const state = get();
        const other = state.currentChild === 'amay' ? 'ayra' : 'amay';
        set({ currentChild: other });
      },

      logout: () => set({
        currentScreen: 'welcome',
        currentChild: null,
        isParentMode: false,
        currentChapter: null,
        currentQuestionIndex: 0,
        sessionAnswers: [],
      }),

      // Reset for testing
      resetAll: () => set({
        children: {
          amay: createChildProfile('Amay', 'superhero'),
          ayra: createChildProfile('Ayra', 'princess'),
        },
        currentScreen: 'welcome',
        currentChild: null,
      }),
    }),
    {
      name: 'learnquest-storage',
      partialize: (state) => ({
        // Only persist serializable data — exclude transient UI state
        children: state.children,
        rewards: state.rewards,
      }),
    }
  )
);

export default useStore;
