// ============================================================================
// LearnQuest - English Curriculum Content
// Target: CBSE Grade 1 (Age 7)
// Designed for Amay & Ayra
// ============================================================================

export const englishContent = {
  subject: 'English',
  grade: 1,
  board: 'CBSE',
  chapters: [
    {
      id: 'eng-phonics',
      title: 'The Phonics Forest',
      subtitle: 'Learn short & long vowels, and rhyming words!',
      icon: '🌲',
      ncertChapter: 'Marigold Unit 1',
      color: '#42A5F5',
      conceptExplanation: {
        title: 'Vowels & Sounds',
        steps: [
          {
            text: 'Welcome to the Phonics Forest! In English, there are 5 special letters called vowels: A, E, I, O, U.',
            textHindi: 'फ़ोनिक्स जंगल में आपका स्वागत है! अंग्रेजी में 5 खास अक्षर होते हैं जिन्हें स्वर (vowels) कहते हैं: A, E, I, O, U.',
            visualDescription: 'Animated letters A, E, I, O, U floating in a magical forest.'
          },
          {
            text: 'Vowels can make short sounds, like the "a" in "cat", or long sounds, like the "a" in "cake".',
            textHindi: 'स्वर छोटी आवाज़ें बना सकते हैं, जैसे "cat" में "a", या लंबी आवाज़ें, जैसे "cake" में "a".',
            visualDescription: 'A cat popping up for the short sound, and a birthday cake for the long sound.'
          },
          {
            text: 'Words that end with the same sound are called rhyming words. Like "Sun" and "Bun"!',
            textHindi: 'जिन शब्दों के अंत में एक जैसी आवाज़ आती है, उन्हें तुकबंदी वाले शब्द (rhyming words) कहते हैं। जैसे "Sun" और "Bun"!',
            visualDescription: 'A bright sun next to a sweet bun, with the "un" part highlighted in both words.'
          }
        ]
      },
      questions: [
        {
          id: 'eng-ph-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which word rhymes with CAT?',
          questionHindi: 'CAT के साथ कौन सा शब्द तुकबंदी (rhyme) करता है?',
          options: ['DOG', 'BAT', 'SUN', 'PIG'],
          correctAnswer: 'BAT',
          hint: 'Look for a word that ends with the "AT" sound.',
          hintHindi: 'ऐसा शब्द ढूँढें जिसके अंत में "AT" की आवाज़ आती हो।',
          explanation: 'CAT and BAT both end with the "AT" sound!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-ph-2',
          type: 'fill-blank',
          difficulty: 'easy',
          question: 'Fill in the missing vowel for D__G.',
          questionHindi: 'D__G में खाली स्वर (vowel) भरें।',
          correctAnswer: 'O',
          hint: 'It is an animal that barks! D-O-G.',
          hintHindi: 'यह भौंकने वाला जानवर है! D-O-G.',
          explanation: 'The word is DOG! O is the missing vowel.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-ph-3',
          type: 'true-false',
          difficulty: 'medium',
          question: 'Does "TREE" rhyme with "FREE"?',
          questionHindi: 'क्या "TREE" और "FREE" तुकबंदी (rhyme) करते हैं?',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Listen to the ending sound. Do they both end with "EE"?',
          hintHindi: 'अंत की आवाज़ सुनें। क्या दोनों के अंत में "EE" आता है?',
          explanation: 'Yes! Both TREE and FREE end with the "EE" sound.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-ph-4',
          type: 'fill-blank',
          difficulty: 'medium',
          question: 'Fill in the blank: B_N (like the Sun)',
          questionHindi: 'खाली स्थान भरें: B_N (Sun की तरह)',
          correctAnswer: 'U',
          hint: 'It rhymes with Sun. B-U-N.',
          hintHindi: 'यह Sun के साथ तुकबंदी करता है। B-U-N.',
          explanation: 'The word is BUN! U makes the short "uh" sound here.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-ph-5',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which of these is a long vowel word?',
          questionHindi: 'इनमें से कौन सा लंबा स्वर (long vowel) वाला शब्द है?',
          options: ['CAKE', 'CAT', 'PIG', 'CUP'],
          correctAnswer: 'CAKE',
          hint: 'In a long vowel word, the vowel says its own letter name.',
          hintHindi: 'लंबे स्वर वाले शब्द में, स्वर अपने अक्षर का नाम बोलता है।',
          explanation: 'In CAKE, the "A" says its name, making it a long vowel!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        }
      ]
    },
    {
      id: 'eng-grammar',
      title: 'Grammar Grove',
      subtitle: 'Naming words, action words, and sentences!',
      icon: '✍️',
      ncertChapter: 'Marigold Unit 2',
      color: '#AB47BC',
      conceptExplanation: {
        title: 'Nouns and Verbs',
        steps: [
          {
            text: 'Everything has a name! Naming words are called Nouns. People, places, animals, and things are nouns. Like "Amay", "Park", or "Dog".',
            textHindi: 'हर चीज़ का एक नाम होता है! नाम वाले शब्दों को संज्ञा (Nouns) कहते हैं। लोग, जगह, जानवर और चीज़ें संज्ञा हैं। जैसे "Amay", "पार्क", या "कुत्ता"।',
            visualDescription: 'Pictures of a boy (Amay), a park, a dog, and a book popping up.'
          },
          {
            text: 'Words that show action are called Verbs. These are things you can do! Like "Run", "Jump", or "Eat".',
            textHindi: 'जिन शब्दों से किसी काम का होना पता चलता है, उन्हें क्रिया (Verbs) कहते हैं। ये वो काम हैं जो आप कर सकते हैं! जैसे "भागना", "कूदना", या "खाना"।',
            visualDescription: 'An animation of a stick figure running, jumping, and eating an apple.'
          },
          {
            text: 'Sentences are groups of words that make a complete thought. They always start with a Capital Letter and end with a Full Stop (.)!',
            textHindi: 'वाक्य (Sentences) शब्दों का वो समूह है जिसका पूरा मतलब निकलता हो। ये हमेशा बड़े अक्षर (Capital Letter) से शुरू होते हैं और पूर्ण विराम (.) पर ख़त्म होते हैं!',
            visualDescription: 'The sentence "I love apples." with the capital I and the full stop highlighted.'
          }
        ]
      },
      questions: [
        {
          id: 'eng-gr-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which of these is a Naming Word (Noun)?',
          questionHindi: 'इनमें से नाम वाला शब्द (Noun) कौन सा है?',
          options: ['RUN', 'APPLE', 'JUMP', 'EAT'],
          correctAnswer: 'APPLE',
          hint: 'Look for a thing you can touch or hold.',
          hintHindi: 'ऐसी चीज़ ढूँढें जिसे आप छू या पकड़ सकते हैं।',
          explanation: 'APPLE is a naming word for a fruit!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-gr-2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which of these is an Action Word (Verb)?',
          questionHindi: 'इनमें से काम वाला शब्द (Verb) कौन सा है?',
          options: ['CAT', 'BALL', 'PLAY', 'HOUSE'],
          correctAnswer: 'PLAY',
          hint: 'Look for something you can DO.',
          hintHindi: 'ऐसा काम ढूँढें जो आप कर सकते हैं।',
          explanation: 'PLAY is an action! You can play with a ball.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-gr-3',
          type: 'true-false',
          difficulty: 'medium',
          question: 'True or False: "Amay is playing." is a complete sentence.',
          questionHindi: 'सही या गलत: "Amay is playing." एक पूरा वाक्य है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Does it start with a capital letter and end with a full stop?',
          hintHindi: 'क्या यह बड़े अक्षर से शुरू होता है और पूर्ण विराम पर ख़त्म होता है?',
          explanation: 'Yes! It starts with a capital A and ends with a full stop.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-gr-4',
          type: 'fill-blank',
          difficulty: 'medium',
          question: 'The bird ___ in the sky. (fly / flies)',
          questionHindi: 'पक्षी आसमान में ___ है। (fly / flies)',
          correctAnswer: 'flies',
          hint: 'For one bird, we use flies.',
          hintHindi: 'एक पक्षी के लिए, हम flies का उपयोग करते हैं।',
          explanation: 'Because it is one bird, we say "The bird flies".',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-gr-5',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Find the Adjective (describing word) in: "The red car is fast."',
          questionHindi: '"The red car is fast." में विशेषण (Adjective) ढूँढें।',
          options: ['CAR', 'RED', 'THE', 'IS'],
          correctAnswer: 'RED',
          hint: 'Which word tells us more about how the car looks?',
          hintHindi: 'कौन सा शब्द हमें बताता है कि कार कैसी दिखती है?',
          explanation: '"RED" tells us the color of the car, so it describes it!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        }
      ]
    }
  ]
};

export const englishTopics = [
  { chapterId: 'eng-phonics', adventureName: 'The Phonics Forest', adventureIcon: '🌲', characterGuide: 'Ginu the Owl' },
  { chapterId: 'eng-grammar', adventureName: 'Grammar Grove', adventureIcon: '✍️', characterGuide: 'Tara the Goat' }
];
