// ============================================================================
// LearnQuest - General Knowledge (GK) Curriculum Content
// Target: CBSE Grade 1 (Age 7)
// Designed for Amay & Ayra
// ============================================================================

export const gkContent = {
  subject: 'General Knowledge',
  grade: 1,
  board: 'CBSE',
  chapters: [
    {
      id: 'gk-animals',
      title: 'The Animal Kingdom',
      subtitle: 'Learn about wild animals, pets, and their babies!',
      icon: '🦁',
      ncertChapter: 'EVS Unit 1',
      color: '#FFB300',
      conceptExplanation: {
        title: 'Animals Around Us',
        steps: [
          {
            text: 'There are many types of animals! Some live in the jungle, like lions and tigers. They are called Wild Animals.',
            textHindi: 'कई प्रकार के जानवर होते हैं! कुछ जंगल में रहते हैं, जैसे शेर और बाघ। इन्हें जंगली जानवर (Wild Animals) कहा जाता है।',
            visualDescription: 'A scene showing a lion and a tiger in a dense green jungle.'
          },
          {
            text: 'Some animals live with us in our homes, like dogs and cats. They are called Pet Animals!',
            textHindi: 'कुछ जानवर हमारे साथ हमारे घरों में रहते हैं, जैसे कुत्ते और बिल्लियाँ। इन्हें पालतू जानवर (Pet Animals) कहा जाता है!',
            visualDescription: 'A cozy living room with a dog sleeping on a rug and a cat playing with yarn.'
          },
          {
            text: 'Just like us, animals have babies! A dog\'s baby is a Puppy, and a cat\'s baby is a Kitten.',
            textHindi: 'हमारी तरह, जानवरों के भी बच्चे होते हैं! कुत्ते के बच्चे को Puppy और बिल्ली के बच्चे को Kitten कहते हैं।',
            visualDescription: 'A dog with a small puppy, and a cat with a tiny kitten beside it.'
          }
        ]
      },
      questions: [
        {
          id: 'gk-an-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which of these is a Pet Animal?',
          questionHindi: 'इनमें से पालतू जानवर (Pet Animal) कौन सा है?',
          options: ['LION', 'DOG', 'TIGER', 'ELEPHANT'],
          correctAnswer: 'DOG',
          hint: 'Which animal can live inside your house?',
          hintHindi: 'कौन सा जानवर आपके घर के अंदर रह सकता है?',
          explanation: 'A DOG is a pet animal. Lions, tigers, and elephants live in the jungle!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-an-2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What do we call a baby dog?',
          questionHindi: 'हम कुत्ते के बच्चे को क्या कहते हैं?',
          options: ['KITTEN', 'CUB', 'PUPPY', 'CALF'],
          correctAnswer: 'PUPPY',
          hint: 'It starts with the letter P.',
          hintHindi: 'यह P अक्षर से शुरू होता है।',
          explanation: 'A baby dog is called a PUPPY!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-an-3',
          type: 'true-false',
          difficulty: 'medium',
          question: 'True or False: A Lion lives in the jungle.',
          questionHindi: 'सही या गलत: शेर जंगल में रहता है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Is a lion a wild animal or a pet animal?',
          hintHindi: 'शेर एक जंगली जानवर है या पालतू जानवर?',
          explanation: 'True! Lions are wild animals and they live in the jungle.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-an-4',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'What is the baby of a cow called?',
          questionHindi: 'गाय के बच्चे को क्या कहा जाता है?',
          options: ['CALF', 'KITTEN', 'PUPPY', 'FOAL'],
          correctAnswer: 'CALF',
          hint: 'It rhymes with "half".',
          hintHindi: 'इसकी आवाज़ "half" से मिलती है।',
          explanation: 'A baby cow is called a CALF.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-an-5',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which of these birds can NOT fly?',
          questionHindi: 'इनमें से कौन सा पक्षी उड़ नहीं सकता?',
          options: ['PIGEON', 'OSTRICH', 'PARROT', 'CROW'],
          correctAnswer: 'OSTRICH',
          hint: 'It is a very big bird that runs really fast.',
          hintHindi: 'यह एक बहुत बड़ा पक्षी है जो बहुत तेज़ दौड़ता है।',
          explanation: 'Ostriches are too heavy to fly, but they can run very fast!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        }
      ]
    }
  ]
};

export const gkTopics = [
  { chapterId: 'gk-animals', adventureName: 'The Animal Kingdom', adventureIcon: '🦁', characterGuide: 'Ginu the Owl' }
];
