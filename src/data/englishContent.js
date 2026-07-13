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
    },
    {
      id: 'eng-reading',
      title: 'Story Time Station',
      subtitle: 'Read short stories and answer fun questions!',
      icon: '📚',
      ncertChapter: 'Marigold Unit 3',
      color: '#FF7043',
      conceptExplanation: {
        title: 'Reading Comprehension',
        steps: [
          {
            text: 'Welcome to Story Time Station! When we read, it is important to understand what the story is about.',
            textHindi: 'स्टोरी टाइम स्टेशन में आपका स्वागत है! जब हम पढ़ते हैं, तो यह समझना ज़रूरी है कि कहानी किस बारे में है।',
            visualDescription: 'A friendly owl reading a storybook to little animals.'
          },
          {
            text: 'Look for the Who, Where, and What in the story. Who is in it? Where are they? What are they doing?',
            textHindi: 'कहानी में कौन (Who), कहाँ (Where) और क्या (What) खोजें। इसमें कौन है? वे कहाँ हैं? वे क्या कर रहे हैं?',
            visualDescription: 'Magnifying glasses pointing to characters, places, and actions in a picture book.'
          },
          {
            text: 'Let us read short stories and see how much we can remember!',
            textHindi: 'आइए छोटी कहानियाँ पढ़ें और देखें कि हमें कितना याद रहता है!',
            visualDescription: 'A child thinking with a lightbulb over their head.'
          }
        ]
      },
      questions: [
        {
          id: 'eng-rd-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Read this: "Tom has a big red ball. He plays in the park." What color is the ball?',
          questionHindi: 'इसे पढ़ें: "Tom has a big red ball. He plays in the park." गेंद का रंग क्या है?',
          options: ['Red', 'Blue', 'Green', 'Yellow'],
          correctAnswer: 'Red',
          hint: 'The story says "big red ball".',
          hintHindi: 'कहानी में "big red ball" लिखा है।',
          explanation: 'Tom\'s ball is red!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-2',
          type: 'true-false',
          difficulty: 'easy',
          question: 'Read this: "Tom has a big red ball. He plays in the park." True or False: Tom plays in the house.',
          questionHindi: 'इसे पढ़ें: "Tom has a big red ball. He plays in the park." सही या गलत: टॉम घर में खेलता है।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'Where does the story say he plays?',
          hintHindi: 'कहानी में क्या लिखा है कि वह कहाँ खेलता है?',
          explanation: 'False! The story says he plays in the park.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-3',
          type: 'fill-blank',
          difficulty: 'easy',
          question: 'Read this: "Tom has a big red ball." Fill in the blank: Tom has a big red ____.',
          questionHindi: 'इसे पढ़ें: "Tom has a big red ball." खाली स्थान भरें: Tom has a big red ____.',
          correctAnswer: 'ball',
          hint: 'What does Tom have?',
          hintHindi: 'टॉम के पास क्या है?',
          explanation: 'Tom has a big red ball!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-4',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Read this: "Ria loves apples. She eats a sweet apple every day." What does Ria eat?',
          questionHindi: 'इसे पढ़ें: "Ria loves apples. She eats a sweet apple every day." रिया क्या खाती है?',
          options: ['An apple', 'A banana', 'A grape', 'An orange'],
          correctAnswer: 'An apple',
          hint: 'It is a red, sweet fruit mentioned in the story.',
          hintHindi: 'यह कहानी में बताया गया एक लाल, मीठा फल है।',
          explanation: 'Ria eats a sweet apple!',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-5',
          type: 'fill-blank',
          difficulty: 'medium',
          question: 'Read this: "Ria loves apples. She eats a sweet apple every day." Fill in: Ria eats a sweet apple every ____.',
          questionHindi: 'इसे पढ़ें: "Ria loves apples..." खाली स्थान भरें: Ria eats a sweet apple every ____.',
          correctAnswer: 'day',
          hint: 'When does she eat it?',
          hintHindi: 'वह इसे कब खाती है?',
          explanation: 'She eats it every day!',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-6',
          type: 'true-false',
          difficulty: 'medium',
          question: 'Read this: "Ria loves apples." True or False: Ria loves mangoes.',
          questionHindi: 'इसे पढ़ें: "Ria loves apples." सही या गलत: रिया को आम पसंद हैं।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'Read carefully what fruit Ria loves.',
          hintHindi: 'ध्यान से पढ़ें कि रिया को कौन सा फल पसंद है।',
          explanation: 'False! Ria loves apples, not mangoes.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-7',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Read this: "A little cat sits on the mat. The cat is sleeping." Where does the cat sit?',
          questionHindi: 'इसे पढ़ें: "A little cat sits on the mat. The cat is sleeping." बिल्ली कहाँ बैठती है?',
          options: ['On the mat', 'In the box', 'Under the bed', 'On the chair'],
          correctAnswer: 'On the mat',
          hint: 'What does the cat sit on?',
          hintHindi: 'बिल्ली किस चीज़ पर बैठती है?',
          explanation: 'The cat sits on the mat!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Read this: "A little cat sits on the mat. The cat is sleeping." What is the cat doing?',
          questionHindi: 'इसे पढ़ें: "A little cat sits on the mat. The cat is sleeping." बिल्ली क्या कर रही है?',
          options: ['Sleeping', 'Eating', 'Playing', 'Jumping'],
          correctAnswer: 'Sleeping',
          hint: 'Look at the last word in the story.',
          hintHindi: 'कहानी के आखिरी शब्द को देखें।',
          explanation: 'The story says the cat is sleeping.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-9',
          type: 'true-false',
          difficulty: 'hard',
          question: 'Read this: "A little cat sits on the mat." True or False: The cat is big.',
          questionHindi: 'इसे पढ़ें: "A little cat sits on the mat." सही या गलत: बिल्ली बड़ी है।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'What describing word is used for the cat?',
          hintHindi: 'बिल्ली के लिए किस शब्द का प्रयोग किया गया है?',
          explanation: 'False! The story says it is a "little" cat.',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-10',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Read this: "Sam sees a green frog. The frog jumps in the pond." Who sees a frog?',
          questionHindi: 'इसे पढ़ें: "Sam sees a green frog. The frog jumps in the pond." मेंढक को कौन देखता है?',
          options: ['Sam', 'Tom', 'Ria', 'Maya'],
          correctAnswer: 'Sam',
          hint: 'Whose name is at the start of the story?',
          hintHindi: 'कहानी की शुरुआत में किसका नाम है?',
          explanation: 'Sam sees the frog!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-11',
          type: 'fill-blank',
          difficulty: 'medium',
          question: 'Read this: "The frog jumps in the pond." Fill in: The frog jumps in the ____.',
          questionHindi: 'इसे पढ़ें: "The frog jumps in the pond." खाली स्थान भरें: The frog jumps in the ____.',
          correctAnswer: 'pond',
          hint: 'Where does it jump?',
          hintHindi: 'यह कहाँ कूदता है?',
          explanation: 'The frog jumps in the pond.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-12',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Read this: "Maya paints a picture. She paints a bright yellow sun." What does Maya paint first?',
          questionHindi: 'इसे पढ़ें: "Maya paints a picture. She paints a bright yellow sun." माया क्या पेंट करती है?',
          options: ['A picture', 'A wall', 'A book', 'A car'],
          correctAnswer: 'A picture',
          hint: 'The first sentence tells you what she paints.',
          hintHindi: 'पहला वाक्य आपको बताता है कि वह क्या पेंट करती है।',
          explanation: 'Maya paints a picture!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-13',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Read this: "Maya paints a bright yellow sun." What color is the sun?',
          questionHindi: 'इसे पढ़ें: "Maya paints a bright yellow sun." सूरज का रंग क्या है?',
          options: ['Yellow', 'Red', 'Blue', 'Green'],
          correctAnswer: 'Yellow',
          hint: 'What color word is next to "sun"?',
          hintHindi: '"sun" के पास कौन सा रंग वाला शब्द है?',
          explanation: 'The sun is yellow!',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-14',
          type: 'fill-blank',
          difficulty: 'hard',
          question: 'Read this: "Maya paints a picture." Fill in: Maya ____ a picture.',
          questionHindi: 'इसे पढ़ें: "Maya paints a picture." खाली स्थान भरें: Maya ____ a picture.',
          correctAnswer: 'paints',
          hint: 'What is the action word?',
          hintHindi: 'काम (action) वाला शब्द क्या है?',
          explanation: 'She paints a picture.',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-rd-15',
          type: 'true-false',
          difficulty: 'hard',
          question: 'Read this: "Maya paints a bright yellow sun." True or False: Maya paints a blue sun.',
          questionHindi: 'इसे पढ़ें: "Maya paints a bright yellow sun." सही या गलत: माया एक नीला सूरज पेंट करती है।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'Check the color of the sun in the story.',
          hintHindi: 'कहानी में सूरज का रंग जाँचें।',
          explanation: 'False! She paints a yellow sun.',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        }
      ]
    },
    {
      id: 'eng-opposites',
      title: 'Opposites & Sight Words',
      subtitle: 'Learn tricky words and words that mean the opposite!',
      icon: '🔄',
      ncertChapter: 'Marigold Unit 4',
      color: '#4DB6AC',
      conceptExplanation: {
        title: 'Opposites & Sight Words',
        steps: [
          {
            text: 'Opposites are words that are completely different from each other. Like BIG and SMALL, or HOT and COLD!',
            textHindi: 'उल्टे शब्द (Opposites) वे शब्द हैं जो एक-दूसरे से बिल्कुल अलग होते हैं। जैसे बड़ा (BIG) और छोटा (SMALL), या गर्म (HOT) और ठंडा (COLD)!',
            visualDescription: 'An elephant and an ant showing BIG and SMALL, next to a fire and an ice cube showing HOT and COLD.'
          },
          {
            text: 'Sight Words are special words that we see very often when we read. Words like "the", "and", "is", and "are".',
            textHindi: 'दृष्टि शब्द (Sight Words) वे खास शब्द हैं जिन्हें हम पढ़ते समय बहुत बार देखते हैं। जैसे "the", "and", "is" और "are"।',
            visualDescription: 'Common sight words flashing like bright stars on the screen.'
          },
          {
            text: 'Learning these words helps us read faster and understand sentences better!',
            textHindi: 'इन शब्दों को सीखने से हमें तेज़ी से पढ़ने और वाक्यों को बेहतर ढंग से समझने में मदद मिलती है!',
            visualDescription: 'A child reading a book very fast with a happy smile.'
          }
        ]
      },
      questions: [
        {
          id: 'eng-op-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is the opposite of HOT?',
          questionHindi: 'HOT (गर्म) का उल्टा (opposite) क्या है?',
          options: ['COLD', 'SUN', 'WARM', 'FIRE'],
          correctAnswer: 'COLD',
          hint: 'Ice cream is very...',
          hintHindi: 'आइसक्रीम बहुत ... होती है।',
          explanation: 'The opposite of hot is cold! Like hot soup and cold ice.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which word completes this: "I see ___ dog"?',
          questionHindi: 'कौन सा शब्द इसे पूरा करता है: "I see ___ dog"?',
          options: ['the', 'is', 'am', 'are'],
          correctAnswer: 'the',
          hint: 'It is a very common sight word starting with T.',
          hintHindi: 'यह T से शुरू होने वाला एक बहुत ही सामान्य दृष्टि शब्द है।',
          explanation: 'The correct sentence is "I see the dog".',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-3',
          type: 'fill-blank',
          difficulty: 'easy',
          question: 'Fill in the letters: The opposite of UP is D _ W N.',
          questionHindi: 'अक्षर भरें: UP (ऊपर) का उल्टा D _ W N है।',
          correctAnswer: 'O',
          hint: 'It rhymes with clown.',
          hintHindi: 'यह clown के साथ तुकबंदी करता है।',
          explanation: 'The opposite of UP is DOWN!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-4',
          type: 'true-false',
          difficulty: 'easy',
          question: 'True or False: The opposite of BIG is SMALL.',
          questionHindi: 'सही या गलत: BIG (बड़ा) का उल्टा SMALL (छोटा) है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Think of an elephant and an ant.',
          hintHindi: 'एक हाथी और एक चींटी के बारे में सोचें।',
          explanation: 'True! An elephant is big and an ant is small.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-5',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which word completes this: "___ are you?"',
          questionHindi: 'कौन सा शब्द इसे पूरा करता है: "___ are you?"',
          options: ['How', 'Who', 'Why', 'What'],
          correctAnswer: 'How',
          hint: 'A polite way to ask someone if they are okay.',
          hintHindi: 'किसी से यह पूछने का विनम्र तरीका कि वे ठीक हैं या नहीं।',
          explanation: 'We say "How are you?" to ask about someone.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-6',
          type: 'fill-blank',
          difficulty: 'medium',
          question: 'The opposite of FAST is S L O _.',
          questionHindi: 'FAST (तेज़) का उल्टा S L O _ है।',
          correctAnswer: 'W',
          hint: 'A turtle is very...',
          hintHindi: 'एक कछुआ बहुत ... होता है।',
          explanation: 'The opposite of fast is SLOW!',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-7',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which of these is a sight word?',
          questionHindi: 'इनमें से कौन सा दृष्टि शब्द (sight word) है?',
          options: ['And', 'Elephant', 'Banana', 'Helicopter'],
          correctAnswer: 'And',
          hint: 'Sight words are usually short and very common.',
          hintHindi: 'दृष्टि शब्द आमतौर पर छोटे और बहुत आम होते हैं।',
          explanation: '"And" is a sight word we use all the time to connect words!',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-8',
          type: 'true-false',
          difficulty: 'medium',
          question: 'True or False: The opposite of HAPPY is SAD.',
          questionHindi: 'सही या गलत: HAPPY (खुश) का उल्टा SAD (उदास) है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Think about how you feel when you smile vs when you cry.',
          hintHindi: 'सोचें कि जब आप मुस्कुराते हैं और जब आप रोते हैं तो आपको कैसा लगता है।',
          explanation: 'True! Happy and sad are opposites.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-9',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'What is the opposite of WET?',
          questionHindi: 'WET (गीला) का उल्टा क्या है?',
          options: ['DRY', 'WATER', 'RAIN', 'COLD'],
          correctAnswer: 'DRY',
          hint: 'After using a towel, you are...',
          hintHindi: 'तौलिये का उपयोग करने के बाद, आप ... हो जाते हैं।',
          explanation: 'The opposite of wet is dry!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-10',
          type: 'fill-blank',
          difficulty: 'hard',
          question: 'The opposite of DAY is N I G _ T.',
          questionHindi: 'DAY (दिन) का उल्टा N I G _ T है।',
          correctAnswer: 'H',
          hint: 'When the moon comes out, it is...',
          hintHindi: 'जब चाँद निकलता है, तो ... होती है।',
          explanation: 'The opposite of DAY is NIGHT.',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-11',
          type: 'true-false',
          difficulty: 'hard',
          question: 'True or False: The opposite of IN is UNDER.',
          questionHindi: 'सही या गलत: IN (अंदर) का उल्टा UNDER (नीचे) है।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'Think about going IN a room and going ___ of it.',
          hintHindi: 'कमरे के अंदर जाने और उसके ___ जाने के बारे में सोचें।',
          explanation: 'False! The opposite of IN is OUT.',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-12',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which word completes this: "Look ___ the bird!"?',
          questionHindi: 'कौन सा शब्द इसे पूरा करता है: "Look ___ the bird!"?',
          options: ['at', 'on', 'in', 'to'],
          correctAnswer: 'at',
          hint: 'A two-letter sight word.',
          hintHindi: 'दो अक्षरों वाला दृष्टि शब्द।',
          explanation: 'We say "Look at the bird!".',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-13',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is the opposite of OPEN?',
          questionHindi: 'OPEN (खुला) का उल्टा क्या है?',
          options: ['CLOSE', 'DOOR', 'WINDOW', 'UP'],
          correctAnswer: 'CLOSE',
          hint: 'When you are done with a book, you ___ it.',
          hintHindi: 'जब आप कोई किताब पढ़ लेते हैं, तो आप उसे ___ करते हैं।',
          explanation: 'The opposite of open is close (or shut)!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-14',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which word completes this: "We ___ playing."?',
          questionHindi: 'कौन सा शब्द इसे पूरा करता है: "We ___ playing."?',
          options: ['are', 'is', 'am', 'be'],
          correctAnswer: 'are',
          hint: 'Used for more than one person.',
          hintHindi: 'एक से अधिक लोगों के लिए उपयोग किया जाता है।',
          explanation: '"We are playing" is correct!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'eng-op-15',
          type: 'true-false',
          difficulty: 'hard',
          question: 'True or False: The opposite of NEW is OLD.',
          questionHindi: 'सही या गलत: NEW (नया) का उल्टा OLD (पुराना) है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Think of a new toy and an old toy.',
          hintHindi: 'एक नए खिलौने और एक पुराने खिलौने के बारे में सोचें।',
          explanation: 'True! New and old are opposites.',
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
  { chapterId: 'eng-grammar', adventureName: 'Grammar Grove', adventureIcon: '✍️', characterGuide: 'Tara the Goat' },
  { chapterId: 'eng-reading', adventureName: 'Story Time Station', adventureIcon: '📚', characterGuide: 'Raya the Fox' },
  { chapterId: 'eng-opposites', adventureName: 'Opposites & Sight Words', adventureIcon: '🔄', characterGuide: 'Leo the Lion' }
];
