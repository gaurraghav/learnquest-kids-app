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
    },
    {
      id: 'gk-seasons',
      title: 'Seasons & Weather',
      subtitle: 'Explore Summer, Winter, Monsoon, and more!',
      icon: '🌦️',
      ncertChapter: 'EVS Seasons',
      color: '#42A5F5',
      conceptExplanation: {
        title: 'All About Seasons and Weather',
        steps: [
          {
            text: 'Sometimes it is very hot and we eat ice cream! That is Summer.',
            textHindi: 'कभी-कभी बहुत गर्मी होती है और हम आइसक्रीम खाते हैं! वह गर्मी (Summer) का मौसम है।',
            visualDescription: 'A bright sun shining over kids eating ice cream.'
          },
          {
            text: 'When it rains, we use umbrellas and wear raincoats. This is the Monsoon season.',
            textHindi: 'जब बारिश होती है, हम छतरी और रेनकोट का उपयोग करते हैं। यह मानसून (Monsoon) का मौसम है।',
            visualDescription: 'Children splashing in puddles wearing yellow raincoats and holding umbrellas.'
          },
          {
            text: 'In Winter, it is cold! We wear warm sweaters and sometimes see snow.',
            textHindi: 'सर्दियों में ठंड होती है! हम गर्म स्वेटर पहनते हैं और कभी-कभी बर्फ देखते हैं।',
            visualDescription: 'A snowy day with a snowman and kids wearing scarves and gloves.'
          }
        ]
      },
      questions: [
        {
          id: 'gk-sea-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What do we use to protect ourselves from rain?',
          questionHindi: 'हम खुद को बारिश से बचाने के लिए क्या इस्तेमाल करते हैं?',
          options: ['SUNGLASSES', 'UMBRELLA', 'SWEATER', 'MUFFLER'],
          correctAnswer: 'UMBRELLA',
          hint: 'You hold it over your head to stay dry.',
          hintHindi: 'सूखा रहने के लिए आप इसे अपने सिर के ऊपर पकड़ते हैं।',
          explanation: 'We use an UMBRELLA to stay dry during the rain!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'In which season do we like to eat cold ice cream?',
          questionHindi: 'हम किस मौसम में ठंडी आइसक्रीम खाना पसंद करते हैं?',
          options: ['WINTER', 'SUMMER', 'MONSOON', 'AUTUMN'],
          correctAnswer: 'SUMMER',
          hint: 'It is the hottest season.',
          hintHindi: 'यह सबसे गर्म मौसम है।',
          explanation: 'We love cold ice cream in SUMMER when it is very hot.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What do we wear when it is very cold?',
          questionHindi: 'जब बहुत ठंड होती है तो हम क्या पहनते हैं?',
          options: ['SHORTS', 'T-SHIRT', 'SWEATER', 'RAINCOAT'],
          correctAnswer: 'SWEATER',
          hint: 'It is made of wool and keeps us warm.',
          hintHindi: 'यह ऊन से बना होता है और हमें गर्म रखता है।',
          explanation: 'We wear a SWEATER in winter to stay warm.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-4',
          type: 'true-false',
          difficulty: 'medium',
          question: 'True or False: We build a snowman in the summer.',
          questionHindi: 'सही या गलत: हम गर्मियों में स्नोमैन (snowman) बनाते हैं।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'Does snow fall when it is hot?',
          hintHindi: 'क्या गर्मी होने पर बर्फ गिरती है?',
          explanation: 'False! We build a snowman in WINTER when it snows.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-5',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'What colorful thing appears in the sky after it rains?',
          questionHindi: 'बारिश के बाद आसमान में कौन सी रंगीन चीज़ दिखाई देती है?',
          options: ['CLOUD', 'SUN', 'RAINBOW', 'MOON'],
          correctAnswer: 'RAINBOW',
          hint: 'It has seven beautiful colors!',
          hintHindi: 'इसमें सात सुंदर रंग हैं!',
          explanation: 'A RAINBOW appears when the sun shines after the rain.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-6',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which of these fruits do we mostly eat in summer?',
          questionHindi: 'इनमें से कौन सा फल हम ज़्यादातर गर्मियों में खाते हैं?',
          options: ['MANGO', 'APPLE', 'GRAPES', 'ORANGE'],
          correctAnswer: 'MANGO',
          hint: 'It is known as the king of fruits!',
          hintHindi: 'इसे फलों का राजा कहा जाता है!',
          explanation: 'MANGO is a delicious summer fruit.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-7',
          type: 'true-false',
          difficulty: 'medium',
          question: 'True or False: Leaves fall from trees during Autumn.',
          questionHindi: 'सही या गलत: पतझड़ (Autumn) के मौसम में पेड़ों से पत्ते गिरते हैं।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Autumn is also called "Fall".',
          hintHindi: 'पतझड़ को "Fall" भी कहा जाता है।',
          explanation: 'True! Trees lose their leaves in Autumn before winter comes.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-8',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What do we drink to stay warm during winter?',
          questionHindi: 'सर्दियों में गर्म रहने के लिए हम क्या पीते हैं?',
          options: ['COLD DRINK', 'HOT SOUP', 'ICE WATER', 'JUICE'],
          correctAnswer: 'HOT SOUP',
          hint: 'It is hot and yummy.',
          hintHindi: 'यह गर्म और स्वादिष्ट होता है।',
          explanation: 'HOT SOUP keeps our body warm in winter.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-9',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which bird loves to dance when it rains?',
          questionHindi: 'बारिश होने पर कौन सा पक्षी नाचना पसंद करता है?',
          options: ['PARROT', 'CROW', 'PEACOCK', 'PIGEON'],
          correctAnswer: 'PEACOCK',
          hint: 'It has very beautiful, colorful feathers.',
          hintHindi: 'इसके बहुत सुंदर, रंगीन पंख होते हैं।',
          explanation: 'The PEACOCK spreads its feathers and dances in the rain!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-10',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'What do we wear on our hands when playing in the snow?',
          questionHindi: 'बर्फ में खेलते समय हम अपने हाथों में क्या पहनते हैं?',
          options: ['SOCKS', 'GLOVES', 'SHOES', 'CAP'],
          correctAnswer: 'GLOVES',
          hint: 'They keep our fingers warm.',
          hintHindi: 'ये हमारी उंगलियों को गर्म रखते हैं।',
          explanation: 'We wear GLOVES to keep our hands warm in winter.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-11',
          type: 'true-false',
          difficulty: 'easy',
          question: 'True or False: We sweat a lot in summer.',
          questionHindi: 'सही या गलत: हमें गर्मियों में बहुत पसीना आता है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Summer is the hot season.',
          hintHindi: 'गर्मी (Summer) का मौसम गर्म होता है।',
          explanation: 'True! Because it is hot, we sweat and need to drink lots of water.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-12',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which season comes right after Winter?',
          questionHindi: 'सर्दियों के ठीक बाद कौन सा मौसम आता है?',
          options: ['SUMMER', 'MONSOON', 'SPRING', 'AUTUMN'],
          correctAnswer: 'SPRING',
          hint: 'In this season, new flowers begin to bloom.',
          hintHindi: 'इस मौसम में नए फूल खिलने लगते हैं।',
          explanation: 'SPRING comes after Winter, bringing beautiful blooming flowers!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-13',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'What kind of clothes are best for the Summer season?',
          questionHindi: 'गर्मियों के मौसम के लिए किस तरह के कपड़े सबसे अच्छे होते हैं?',
          options: ['WOOLEN CLOTHES', 'COTTON CLOTHES', 'RAINCOATS', 'JACKETS'],
          correctAnswer: 'COTTON CLOTHES',
          hint: 'They are light and let our skin breathe.',
          hintHindi: 'ये हल्के होते हैं और हमारी त्वचा को सांस लेने देते हैं।',
          explanation: 'COTTON CLOTHES are light and keep us cool in the summer heat.',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-14',
          type: 'true-false',
          difficulty: 'medium',
          question: 'True or False: A fan or AC is mostly used in the Winter.',
          questionHindi: 'सही या गलत: पंखा या एसी (AC) ज़्यादातर सर्दियों में इस्तेमाल किया जाता है।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'Do you need a fan when it is already cold?',
          hintHindi: 'क्या आपको ठंड होने पर पंखे की ज़रूरत है?',
          explanation: 'False! Fans and ACs keep us cool, so we use them in Summer.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sea-15',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is another name for the Rainy season?',
          questionHindi: 'बारिश के मौसम का दूसरा नाम क्या है?',
          options: ['WINTER', 'MONSOON', 'SUMMER', 'SPRING'],
          correctAnswer: 'MONSOON',
          hint: 'It starts with the letter M.',
          hintHindi: 'यह M अक्षर से शुरू होता है।',
          explanation: 'The rainy season is also called the MONSOON season.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        }
      ]
    },
    {
      id: 'gk-space',
      title: 'Our Universe',
      subtitle: 'Discover the Sun, Moon, and Planets!',
      icon: '🚀',
      ncertChapter: 'EVS Universe',
      color: '#7E57C2',
      conceptExplanation: {
        title: 'Up in the Sky',
        steps: [
          {
            text: 'During the day, we see the bright Sun! It gives us light and keeps us warm.',
            textHindi: 'दिन के समय, हम चमकता हुआ सूरज देखते हैं! यह हमें रोशनी और गर्मी देता है।',
            visualDescription: 'A smiling, glowing sun in a bright blue sky.'
          },
          {
            text: 'At night, the sky gets dark. We can see the Moon and many twinkling Stars.',
            textHindi: 'रात में आसमान में अंधेरा हो जाता है। हम चाँद और कई टिमटिमाते तारे देख सकते हैं।',
            visualDescription: 'A dark night sky filled with stars and a crescent moon.'
          },
          {
            text: 'We live on a beautiful planet called Earth! It is the only planet with water and life.',
            textHindi: 'हम पृथ्वी (Earth) नामक एक सुंदर ग्रह पर रहते हैं! यह एकमात्र ग्रह है जिस पर पानी और जीवन है।',
            visualDescription: 'A cartoon Earth character waving, showing green land and blue oceans.'
          }
        ]
      },
      questions: [
        {
          id: 'gk-sp-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What gives us bright light during the day?',
          questionHindi: 'दिन के दौरान हमें तेज़ रोशनी कौन देता है?',
          options: ['MOON', 'STARS', 'SUN', 'CLOUDS'],
          correctAnswer: 'SUN',
          hint: 'It is a big, hot, yellow ball in the sky.',
          hintHindi: 'यह आसमान में एक बड़ा, गर्म, पीला गोला है।',
          explanation: 'The SUN shines bright and gives us light and heat during the day.',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What do we see twinkling in the night sky?',
          questionHindi: 'हम रात के आसमान में क्या टिमटिमाते हुए देखते हैं?',
          options: ['SUN', 'STARS', 'CLOUDS', 'BIRDS'],
          correctAnswer: 'STARS',
          hint: 'There are millions of them shining at night.',
          hintHindi: 'रात में लाखों चमकते हैं।',
          explanation: 'STARS twinkle in the sky at night!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is the name of our home planet?',
          questionHindi: 'हमारे घर (ग्रह) का क्या नाम है?',
          options: ['MARS', 'JUPITER', 'EARTH', 'VENUS'],
          correctAnswer: 'EARTH',
          hint: 'It is the planet with oceans and land.',
          hintHindi: 'यह महासागरों और भूमि वाला ग्रह है।',
          explanation: 'We live on planet EARTH!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-4',
          type: 'true-false',
          difficulty: 'medium',
          question: 'True or False: The moon changes its shape in the sky.',
          questionHindi: 'सही या गलत: चाँद आसमान में अपना आकार बदलता है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Sometimes it is round, sometimes it looks like a banana.',
          hintHindi: 'कभी यह गोल होता है, कभी केले जैसा दिखता है।',
          explanation: 'True! The moon has different phases and seems to change shape.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-5',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'How many planets are there in our solar system?',
          questionHindi: 'हमारे सौर मंडल में कितने ग्रह हैं?',
          options: ['SIX', 'SEVEN', 'EIGHT', 'NINE'],
          correctAnswer: 'EIGHT',
          hint: 'It is one less than nine.',
          hintHindi: 'यह नौ से एक कम है।',
          explanation: 'There are EIGHT planets circling the Sun!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-6',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which is the biggest planet in our solar system?',
          questionHindi: 'हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?',
          options: ['EARTH', 'JUPITER', 'MARS', 'SATURN'],
          correctAnswer: 'JUPITER',
          hint: 'It starts with the letter J.',
          hintHindi: 'यह J अक्षर से शुरू होता है।',
          explanation: 'JUPITER is the giant of our solar system!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-7',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which planet is known as the "Red Planet"?',
          questionHindi: 'किस ग्रह को "लाल ग्रह" के रूप में जाना जाता है?',
          options: ['MARS', 'VENUS', 'EARTH', 'MERCURY'],
          correctAnswer: 'MARS',
          hint: 'It has a rusty red color.',
          hintHindi: 'इसका रंग लाल (rusty red) है।',
          explanation: 'MARS looks red because of its rusty dust!',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-8',
          type: 'true-false',
          difficulty: 'medium',
          question: 'True or False: The Sun is actually a star.',
          questionHindi: 'सही या गलत: सूर्य वास्तव में एक तारा है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'It is the closest star to Earth.',
          hintHindi: 'यह पृथ्वी के सबसे करीब का तारा है।',
          explanation: 'True! The Sun is a very big, hot star at the center of our solar system.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-9',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'What do we call a person who travels to space?',
          questionHindi: 'अंतरिक्ष की यात्रा करने वाले व्यक्ति को हम क्या कहते हैं?',
          options: ['PILOT', 'DOCTOR', 'ASTRONAUT', 'TEACHER'],
          correctAnswer: 'ASTRONAUT',
          hint: 'They wear special spacesuits.',
          hintHindi: 'वे विशेष स्पेससूट पहनते हैं।',
          explanation: 'An ASTRONAUT goes to space in a rocket.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-10',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What shape is the Earth?',
          questionHindi: 'पृथ्वी का आकार कैसा है?',
          options: ['SQUARE', 'FLAT', 'ROUND', 'TRIANGLE'],
          correctAnswer: 'ROUND',
          hint: 'It looks like a ball.',
          hintHindi: 'यह एक गेंद की तरह दिखता है।',
          explanation: 'The Earth is ROUND, just like a giant ball!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-11',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which of these is NOT a planet?',
          questionHindi: 'इनमें से कौन सा ग्रह नहीं है?',
          options: ['EARTH', 'SUN', 'MARS', 'VENUS'],
          correctAnswer: 'SUN',
          hint: 'The planets revolve around it.',
          hintHindi: 'ग्रह इसके चारों ओर घूमते हैं।',
          explanation: 'The SUN is a star, not a planet.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-12',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Where does the Moon get its light from?',
          questionHindi: 'चाँद को अपनी रोशनी कहाँ से मिलती है?',
          options: ['STARS', 'IT HAS ITS OWN LIGHT', 'THE SUN', 'THE EARTH'],
          correctAnswer: 'THE SUN',
          hint: 'It acts like a giant mirror reflecting sunlight.',
          hintHindi: 'यह सूरज की रोशनी को प्रतिबिंबित करने वाले एक बड़े दर्पण की तरह काम करता है।',
          explanation: 'The Moon has no light of its own. It reflects the light of the SUN.',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-13',
          type: 'true-false',
          difficulty: 'medium',
          question: 'True or False: Stars are very tiny objects in space.',
          questionHindi: 'सही या गलत: तारे अंतरिक्ष में बहुत छोटी वस्तुएं हैं।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'They are actually huge, but very far away.',
          hintHindi: 'वे वास्तव में विशाल हैं, लेकिन बहुत दूर हैं।',
          explanation: 'False! Stars are huge! They just look tiny because they are very far away.',
          stars: 2,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-14',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which vehicle takes astronauts to space?',
          questionHindi: 'कौन सा वाहन अंतरिक्ष यात्रियों को अंतरिक्ष में ले जाता है?',
          options: ['AIRPLANE', 'ROCKET', 'HELICOPTER', 'CAR'],
          correctAnswer: 'ROCKET',
          hint: 'It blasts off with lots of fire and smoke.',
          hintHindi: 'यह बहुत सारी आग और धुएं के साथ उड़ता है।',
          explanation: 'A ROCKET is built to fly all the way into space!',
          stars: 1,
          visualType: 'none',
          objects: 'none'
        },
        {
          id: 'gk-sp-15',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which planet has beautiful rings around it?',
          questionHindi: 'किस ग्रह के चारों ओर सुंदर छल्ले (rings) हैं?',
          options: ['EARTH', 'MARS', 'SATURN', 'JUPITER'],
          correctAnswer: 'SATURN',
          hint: 'The rings are made of ice and rock.',
          hintHindi: 'छल्ले बर्फ और चट्टान से बने हैं।',
          explanation: 'SATURN is famous for the beautiful glowing rings around it!',
          stars: 3,
          visualType: 'none',
          objects: 'none'
        }
      ]
    }
  ]
};

export const gkTopics = [
  { chapterId: 'gk-animals', adventureName: 'The Animal Kingdom', adventureIcon: '🦁', characterGuide: 'Ginu the Owl' },
  { chapterId: 'gk-seasons', adventureName: 'Seasons & Weather', adventureIcon: '🌦️', characterGuide: 'Breezy the Butterfly' },
  { chapterId: 'gk-space', adventureName: 'Our Universe', adventureIcon: '🚀', characterGuide: 'Astro the Alien' }
];
