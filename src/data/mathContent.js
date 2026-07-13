// ============================================================================
// LearnQuest - Math Curriculum Content
// Target: CBSE Grade 1 (Age 7) | Aligned to NCERT Math Magic
// Designed for Amay & Ayra
// ============================================================================

export const mathContent = {
  subject: 'Mathematics',
  grade: 1,
  board: 'CBSE',
  textbook: 'NCERT Math Magic',
  chapters: [
    // ========================================================================
    // CHAPTER 1: Numbers & Counting
    // NCERT Math Magic Chapters 1-3
    // ========================================================================
    {
      id: 'ch-numbers',
      title: 'Numbers & Counting',
      subtitle: 'Learn to count, compare, and order numbers up to 100',
      icon: '🔢',
      ncertChapter: 'Math Magic Ch 1-3',
      color: '#4CAF50',
      conceptExplanation: {
        title: 'Understanding Numbers',
        steps: [
          {
            text: 'Numbers are everywhere! We use them to count things around us — like fingers, toys, and stars in the sky.',
            textHindi: 'संख्याएँ हर जगह हैं! हम इनसे अपने आसपास की चीज़ें गिनते हैं — जैसे उँगलियाँ, खिलौने और आसमान के तारे।',
            visualDescription: 'Animated scene showing a child counting colorful objects: 5 fingers on a hand, 3 toy cars, and twinkling stars appearing one by one with numbers popping up beside each.'
          },
          {
            text: 'Every number has a place. Ones are single things, and Tens are groups of ten things together!',
            textHindi: 'हर संख्या की एक जगह होती है। इकाई का मतलब एक चीज़, और दहाई का मतलब दस चीज़ों का समूह!',
            visualDescription: 'Visual showing 10 mangoes grouped in a basket labeled "1 Ten" and 3 loose mangoes labeled "3 Ones", forming the number 13.'
          },
          {
            text: 'We can compare numbers using greater than (>), less than (<), and equal to (=). Think of it like a hungry crocodile — it always eats the bigger number!',
            textHindi: 'हम संख्याओं की तुलना कर सकते हैं — बड़ा (>), छोटा (<), और बराबर (=)। इसे भूखे मगरमच्छ की तरह सोचो — वो हमेशा बड़ी संख्या खाता है!',
            visualDescription: 'A friendly cartoon crocodile with its mouth open toward the larger number. Two examples: 8 > 5 and 3 < 7, with the crocodile facing the bigger number each time.'
          },
          {
            text: 'Numbers follow a pattern — they go in order! 1, 2, 3, 4... We can also count backwards: 10, 9, 8, 7...',
            textHindi: 'संख्याएँ एक क्रम में चलती हैं! 1, 2, 3, 4... हम उल्टा भी गिन सकते हैं: 10, 9, 8, 7...',
            visualDescription: 'A number line from 1 to 20 with a cartoon frog hopping forward on each number, then hopping backward. Numbers light up as the frog lands on them.'
          }
        ]
      },
      questions: [
        // --- EASY (12 questions) ---
        {
          id: 'num-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'How many apples are there? 🍎🍎🍎🍎🍎',
          questionHindi: 'कितने सेब हैं? 🍎🍎🍎🍎🍎',
          options: ['3', '4', '5', '6'],
          correctAnswer: '5',
          hint: 'Point to each apple and count one by one!',
          hintHindi: 'हर सेब को छूकर एक-एक करके गिनो!',
          explanation: 'There are 5 apples. When we count each one: 1, 2, 3, 4, 5!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'apples'
        },
        {
          id: 'num-2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What number comes after 7?',
          questionHindi: '7 के बाद कौन सी संख्या आती है?',
          options: ['6', '7', '8', '9'],
          correctAnswer: '8',
          hint: 'Count forward: 5, 6, 7, ...?',
          hintHindi: 'आगे गिनो: 5, 6, 7, ...?',
          explanation: 'After 7 comes 8. The numbers go in order: 7, 8, 9, 10...',
          stars: 1,
          visualType: 'number-line',
          objects: 'frogs'
        },
        {
          id: 'num-3',
          type: 'sequence',
          difficulty: 'easy',
          question: 'Fill in the missing number: 1, 2, 3, ___, 5',
          questionHindi: 'खाली जगह भरो: 1, 2, 3, ___, 5',
          options: null,
          correctAnswer: '4',
          hint: 'What comes between 3 and 5?',
          hintHindi: '3 और 5 के बीच क्या आता है?',
          explanation: 'The missing number is 4. The sequence is 1, 2, 3, 4, 5!',
          stars: 1,
          visualType: 'number-line',
          objects: 'stars'
        },
        {
          id: 'num-4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'How many balloons are there? 🎈🎈🎈',
          questionHindi: 'कितने गुब्बारे हैं? 🎈🎈🎈',
          options: ['2', '3', '4', '5'],
          correctAnswer: '3',
          hint: 'Count each balloon carefully!',
          hintHindi: 'हर गुब्बारे को ध्यान से गिनो!',
          explanation: 'There are 3 balloons. Count: 1, 2, 3!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'balloons'
        },
        {
          id: 'num-5',
          type: 'true-false',
          difficulty: 'easy',
          question: 'True or False: 3 is bigger than 5.',
          questionHindi: 'सही या गलत: 3, 5 से बड़ा है।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'Think about it — if you have 3 candies and your friend has 5, who has more?',
          hintHindi: 'सोचो — अगर तुम्हारे पास 3 टॉफ़ी हैं और दोस्त के पास 5, तो किसके पास ज़्यादा हैं?',
          explanation: '3 is NOT bigger than 5. In fact, 3 < 5. Five is the bigger number!',
          stars: 1,
          visualType: 'comparison',
          objects: 'candies'
        },
        {
          id: 'num-6',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What number comes before 10?',
          questionHindi: '10 से पहले कौन सी संख्या आती है?',
          options: ['7', '8', '9', '11'],
          correctAnswer: '9',
          hint: 'Count: 7, 8, ___, 10. What is missing?',
          hintHindi: 'गिनो: 7, 8, ___, 10। क्या छूट रहा है?',
          explanation: '9 comes just before 10. The numbers go 8, 9, 10!',
          stars: 1,
          visualType: 'number-line',
          objects: 'butterflies'
        },
        {
          id: 'num-7',
          type: 'fill-blank',
          difficulty: 'easy',
          question: 'Count the stars and write the number: ⭐⭐⭐⭐⭐⭐',
          questionHindi: 'तारे गिनो और संख्या लिखो: ⭐⭐⭐⭐⭐⭐',
          options: null,
          correctAnswer: '6',
          hint: 'Touch each star as you count!',
          hintHindi: 'गिनते समय हर तारे को छुओ!',
          explanation: 'There are 6 stars! ⭐1 ⭐2 ⭐3 ⭐4 ⭐5 ⭐6',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'stars'
        },
        {
          id: 'num-8',
          type: 'comparison',
          difficulty: 'easy',
          question: 'Which group has MORE? Group A: 🐟🐟🐟 or Group B: 🐟🐟🐟🐟🐟',
          questionHindi: 'किस समूह में ज़्यादा हैं? समूह A: 🐟🐟🐟 या समूह B: 🐟🐟🐟🐟🐟',
          options: ['Group A', 'Group B'],
          correctAnswer: 'Group B',
          hint: 'Count the fish in each group!',
          hintHindi: 'हर समूह में मछलियाँ गिनो!',
          explanation: 'Group B has 5 fish and Group A has only 3 fish. 5 > 3, so Group B has more!',
          stars: 1,
          visualType: 'grouping',
          objects: 'fish'
        },
        {
          id: 'num-9',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which number is the smallest? 9, 2, 7, 5',
          questionHindi: 'सबसे छोटी संख्या कौन सी है? 9, 2, 7, 5',
          options: ['9', '2', '7', '5'],
          correctAnswer: '2',
          hint: 'The smallest number is closest to 1.',
          hintHindi: 'सबसे छोटी संख्या 1 के सबसे करीब होती है।',
          explanation: '2 is the smallest number among 9, 2, 7, and 5. It is closest to 1!',
          stars: 1,
          visualType: 'number-line',
          objects: 'animals'
        },
        {
          id: 'num-10',
          type: 'sequence',
          difficulty: 'easy',
          question: 'What comes next? 2, 4, 6, ___',
          questionHindi: 'आगे क्या आएगा? 2, 4, 6, ___',
          options: ['7', '8', '9', '10'],
          correctAnswer: '8',
          hint: 'We are skip counting by 2! What is 6 + 2?',
          hintHindi: 'हम 2-2 करके गिन रहे हैं! 6 + 2 कितना होगा?',
          explanation: 'The pattern is counting by 2s: 2, 4, 6, 8! Each number is 2 more than the last.',
          stars: 1,
          visualType: 'number-line',
          objects: 'rabbits'
        },
        {
          id: 'num-11',
          type: 'true-false',
          difficulty: 'easy',
          question: 'True or False: 10 comes after 9 when counting.',
          questionHindi: 'सही या गलत: गिनती में 9 के बाद 10 आता है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Count slowly: 7, 8, 9, ...?',
          hintHindi: 'धीरे-धीरे गिनो: 7, 8, 9, ...?',
          explanation: 'Yes! 10 comes right after 9. The numbers go: ...8, 9, 10, 11...',
          stars: 1,
          visualType: 'number-line',
          objects: 'beads'
        },
        {
          id: 'num-12',
          type: 'fill-blank',
          difficulty: 'easy',
          question: 'Amay has 4 toy cars. Write the number: ____',
          questionHindi: 'अमय के पास 4 खिलौना गाड़ियाँ हैं। संख्या लिखो: ____',
          options: null,
          correctAnswer: '4',
          hint: 'The answer is right in the question!',
          hintHindi: 'जवाब सवाल में ही है!',
          explanation: 'Amay has 4 toy cars. The number is 4!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'toy-cars'
        },
        // --- MEDIUM (6 questions) ---
        {
          id: 'num-13',
          type: 'comparison',
          difficulty: 'medium',
          question: 'Put the correct sign: 15 ___ 12 (choose >, <, or =)',
          questionHindi: 'सही चिह्न लगाओ: 15 ___ 12 (>, <, या = चुनो)',
          options: ['>', '<', '='],
          correctAnswer: '>',
          hint: 'Think of the hungry crocodile! Which number is bigger — 15 or 12?',
          hintHindi: 'भूखे मगरमच्छ के बारे में सोचो! कौन सी संख्या बड़ी है — 15 या 12?',
          explanation: '15 > 12. Fifteen is greater than twelve. The crocodile opens its mouth toward 15!',
          stars: 2,
          visualType: 'comparison',
          objects: 'crocodile'
        },
        {
          id: 'num-14',
          type: 'sequence',
          difficulty: 'medium',
          question: 'Fill in the missing numbers: 10, 20, ___, 40, ___',
          questionHindi: 'खाली जगह भरो: 10, 20, ___, 40, ___',
          options: null,
          correctAnswer: '30, 50',
          hint: 'We are counting by 10s! What is 20 + 10?',
          hintHindi: 'हम 10-10 करके गिन रहे हैं! 20 + 10 कितना है?',
          explanation: 'The pattern is counting by 10s: 10, 20, 30, 40, 50! Each number is 10 more than the last.',
          stars: 2,
          visualType: 'number-line',
          objects: 'blocks'
        },
        {
          id: 'num-15',
          type: 'word-problem',
          difficulty: 'medium',
          question: 'Ayra sees 8 parrots on a tree and 6 parrots on another tree. Which tree has more parrots? How many more?',
          questionHindi: 'आयरा एक पेड़ पर 8 तोते और दूसरे पेड़ पर 6 तोते देखती है। किस पेड़ पर ज़्यादा तोते हैं? कितने ज़्यादा?',
          options: ['First tree, 2 more', 'Second tree, 2 more', 'Both are equal', 'First tree, 3 more'],
          correctAnswer: 'First tree, 2 more',
          hint: 'Count the parrots on each tree. Which number is bigger: 8 or 6?',
          hintHindi: 'हर पेड़ पर तोते गिनो। कौन सी संख्या बड़ी है: 8 या 6?',
          explanation: 'The first tree has 8 parrots and the second has 6. 8 > 6, so the first tree has more parrots. 8 - 6 = 2 more parrots!',
          stars: 2,
          visualType: 'counting-objects',
          objects: 'parrots'
        },
        {
          id: 'num-16',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'What is the number if there are 3 tens and 5 ones?',
          questionHindi: 'अगर 3 दहाई और 5 इकाई हो तो संख्या क्या होगी?',
          options: ['53', '35', '8', '305'],
          correctAnswer: '35',
          hint: 'Tens come first! 3 tens = 30, then add 5 ones.',
          hintHindi: 'दहाई पहले आती है! 3 दहाई = 30, फिर 5 इकाई जोड़ो।',
          explanation: '3 tens = 30 and 5 ones = 5. Together they make 30 + 5 = 35!',
          stars: 2,
          visualType: 'grouping',
          objects: 'blocks'
        },
        {
          id: 'num-17',
          type: 'sequence',
          difficulty: 'medium',
          question: 'Count backwards: 20, 18, 16, ___, ___',
          questionHindi: 'उल्टा गिनो: 20, 18, 16, ___, ___',
          options: null,
          correctAnswer: '14, 12',
          hint: 'We are going down by 2 each time!',
          hintHindi: 'हर बार 2 कम हो रहा है!',
          explanation: 'Counting backwards by 2: 20, 18, 16, 14, 12. Each number is 2 less than the one before!',
          stars: 2,
          visualType: 'number-line',
          objects: 'rockets'
        },
        {
          id: 'num-18',
          type: 'word-problem',
          difficulty: 'medium',
          question: 'During Diwali, Amay arranged 10 diyas in a row and 10 more in another row. How many diyas are there in all?',
          questionHindi: 'दिवाली पर अमय ने एक पंक्ति में 10 दिये और दूसरी पंक्ति में 10 दिये सजाए। कुल कितने दिये हैं?',
          options: ['10', '15', '20', '25'],
          correctAnswer: '20',
          hint: 'Count by tens: 10 and 10 more makes?',
          hintHindi: '10 और 10 मिलाकर कितने होते हैं?',
          explanation: '10 diyas + 10 diyas = 20 diyas! Two groups of ten make twenty.',
          stars: 2,
          visualType: 'grouping',
          objects: 'diyas'
        },
        // --- HARD (2 questions) ---
        {
          id: 'num-19',
          type: 'word-problem',
          difficulty: 'hard',
          question: 'Ayra is reading page 47 of her storybook. How many tens and ones are in 47?',
          questionHindi: 'आयरा अपनी कहानी की किताब का पन्ना 47 पढ़ रही है। 47 में कितनी दहाई और कितनी इकाई हैं?',
          options: ['4 tens and 7 ones', '7 tens and 4 ones', '47 tens and 0 ones', '40 tens and 7 ones'],
          correctAnswer: '4 tens and 7 ones',
          hint: 'The digit on the left is tens, and the digit on the right is ones!',
          hintHindi: 'बाईं तरफ़ का अंक दहाई है और दाईं तरफ़ का अंक इकाई है!',
          explanation: 'In 47: the 4 is in the tens place (4 tens = 40) and the 7 is in the ones place (7 ones). So 47 = 4 tens and 7 ones!',
          stars: 3,
          visualType: 'grouping',
          objects: 'blocks'
        },
        {
          id: 'num-20',
          type: 'sequence',
          difficulty: 'hard',
          question: 'Find the pattern and fill in: 5, 10, 15, ___, ___, 30',
          questionHindi: 'पैटर्न ढूँढो और भरो: 5, 10, 15, ___, ___, 30',
          options: null,
          correctAnswer: '20, 25',
          hint: 'How much are we adding each time? Look at 5, 10, 15...',
          hintHindi: 'हर बार कितना जोड़ रहे हैं? 5, 10, 15 को देखो...',
          explanation: 'The pattern is counting by 5s: 5, 10, 15, 20, 25, 30! We add 5 each time.',
          stars: 3,
          visualType: 'number-line',
          objects: 'flowers'
        }
      ]
    },

    // ========================================================================
    // CHAPTER 2: Addition
    // NCERT Math Magic Chapters 3, 5
    // ========================================================================
    {
      id: 'ch-addition',
      title: 'Addition',
      subtitle: 'Learn to add numbers and solve fun problems',
      icon: '➕',
      ncertChapter: 'Math Magic Ch 3, 5',
      color: '#2196F3',
      conceptExplanation: {
        title: 'Understanding Addition',
        steps: [
          {
            text: 'Addition means putting things together! When you combine two groups, you get a bigger group. We use the + sign to add.',
            textHindi: 'जोड़ का मतलब है चीज़ों को मिलाना! जब दो समूहों को मिलाते हैं, तो बड़ा समूह बनता है। हम + चिह्न से जोड़ते हैं।',
            visualDescription: 'Two groups of mangoes sliding together: 3 mangoes on the left and 2 on the right come together to form a group of 5. A big "+" appears between them, then "=" and the number 5.'
          },
          {
            text: 'You can use your fingers to add! To add 3 + 4, hold up 3 fingers on one hand and 4 on the other. Now count all your fingers!',
            textHindi: 'तुम उँगलियों से जोड़ सकते हो! 3 + 4 जोड़ने के लिए एक हाथ में 3 और दूसरे में 4 उँगलियाँ उठाओ। अब सब गिनो!',
            visualDescription: 'Two cartoon hands: left hand showing 3 fingers up, right hand showing 4 fingers up. Fingers light up one by one as counting happens: 1, 2, 3, 4, 5, 6, 7. Answer "7" appears with sparkles.'
          },
          {
            text: 'A number line can help too! Start at the first number and jump forward by the second number.',
            textHindi: 'संख्या रेखा भी मदद करती है! पहली संख्या पर खड़े हो जाओ और दूसरी संख्या जितना आगे कूदो।',
            visualDescription: 'A number line from 0 to 20. A cute kangaroo stands at 5, then makes 3 hops forward (landing on 6, 7, 8). The equation 5 + 3 = 8 appears above.'
          },
          {
            text: 'The order does not matter in addition! 2 + 5 is the same as 5 + 2. Both give us 7!',
            textHindi: 'जोड़ में क्रम से कोई फ़र्क नहीं पड़ता! 2 + 5 वही है जो 5 + 2 है। दोनों का जवाब 7 है!',
            visualDescription: 'Two scenes side by side: Left shows 2 blue blocks + 5 red blocks = 7 blocks. Right shows 5 red blocks + 2 blue blocks = 7 blocks. An equals sign connects both results.'
          }
        ]
      },
      questions: [
        // --- EASY (12 questions) ---
        {
          id: 'add-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is 2 + 3?',
          questionHindi: '2 + 3 कितना होता है?',
          options: ['4', '5', '6', '7'],
          correctAnswer: '5',
          hint: 'Hold up 2 fingers on one hand and 3 on the other. Count them all!',
          hintHindi: 'एक हाथ में 2 और दूसरे में 3 उँगलियाँ उठाओ। सब गिनो!',
          explanation: '2 + 3 = 5. Two things and three more things together make five things!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'fingers'
        },
        {
          id: 'add-2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is 1 + 4?',
          questionHindi: '1 + 4 कितना होता है?',
          options: ['3', '4', '5', '6'],
          correctAnswer: '5',
          hint: 'Start at 1 and count 4 more: 2, 3, 4, 5!',
          hintHindi: '1 से शुरू करो और 4 आगे गिनो: 2, 3, 4, 5!',
          explanation: '1 + 4 = 5. One plus four equals five!',
          stars: 1,
          visualType: 'number-line',
          objects: 'hops'
        },
        {
          id: 'add-3',
          type: 'fill-blank',
          difficulty: 'easy',
          question: '3 + 2 = ___',
          questionHindi: '3 + 2 = ___',
          options: null,
          correctAnswer: '5',
          hint: 'Put 3 and 2 together. You can use your fingers!',
          hintHindi: '3 और 2 को मिलाओ। उँगलियों का इस्तेमाल करो!',
          explanation: '3 + 2 = 5. Three and two make five!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'blocks'
        },
        {
          id: 'add-4',
          type: 'word-problem',
          difficulty: 'easy',
          question: 'Amay has 2 red crayons and 1 blue crayon. How many crayons does he have in all?',
          questionHindi: 'अमय के पास 2 लाल क्रेयॉन और 1 नीला क्रेयॉन है। उसके पास कुल कितने क्रेयॉन हैं?',
          options: ['2', '3', '4', '1'],
          correctAnswer: '3',
          hint: 'Add the red crayons and blue crayon together: 2 + 1 = ?',
          hintHindi: 'लाल और नीले क्रेयॉन जोड़ो: 2 + 1 = ?',
          explanation: '2 red crayons + 1 blue crayon = 3 crayons in all!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'crayons'
        },
        {
          id: 'add-5',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is 4 + 1?',
          questionHindi: '4 + 1 कितना होता है?',
          options: ['3', '4', '5', '6'],
          correctAnswer: '5',
          hint: 'Start at 4 and count one more!',
          hintHindi: '4 से शुरू करो और एक और गिनो!',
          explanation: '4 + 1 = 5. Four plus one is five!',
          stars: 1,
          visualType: 'number-line',
          objects: 'ladybugs'
        },
        {
          id: 'add-6',
          type: 'fill-blank',
          difficulty: 'easy',
          question: '5 + 0 = ___',
          questionHindi: '5 + 0 = ___',
          options: null,
          correctAnswer: '5',
          hint: 'Adding zero means nothing changes! The number stays the same.',
          hintHindi: 'शून्य जोड़ने से कुछ नहीं बदलता! संख्या वही रहती है।',
          explanation: '5 + 0 = 5. When we add zero to any number, the number stays the same. Zero is called the identity element of addition!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'cookies'
        },
        {
          id: 'add-7',
          type: 'word-problem',
          difficulty: 'easy',
          question: 'Ayra picks 3 flowers from the garden. Then she picks 3 more. How many flowers does she have now?',
          questionHindi: 'आयरा बगीचे से 3 फूल तोड़ती है। फिर 3 और तोड़ती है। अब उसके पास कितने फूल हैं?',
          options: ['3', '5', '6', '7'],
          correctAnswer: '6',
          hint: 'She has 3 flowers and gets 3 more. What is 3 + 3?',
          hintHindi: 'उसके पास 3 फूल हैं और 3 और आ गए। 3 + 3 = ?',
          explanation: '3 + 3 = 6. Ayra has 6 flowers! When you add a number to itself, it is called a double!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'flowers'
        },
        {
          id: 'add-8',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is 6 + 2?',
          questionHindi: '6 + 2 कितना होता है?',
          options: ['6', '7', '8', '9'],
          correctAnswer: '8',
          hint: 'Start at 6 on the number line and jump 2 times forward!',
          hintHindi: 'संख्या रेखा पर 6 से शुरू करो और 2 बार आगे कूदो!',
          explanation: '6 + 2 = 8. Starting from 6: one jump to 7, another jump to 8!',
          stars: 1,
          visualType: 'number-line',
          objects: 'kangaroo'
        },
        {
          id: 'add-9',
          type: 'true-false',
          difficulty: 'easy',
          question: 'True or False: 4 + 3 = 7',
          questionHindi: 'सही या गलत: 4 + 3 = 7',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Count 4, then count 3 more: 5, 6, 7. Is that right?',
          hintHindi: '4 गिनो, फिर 3 और: 5, 6, 7। क्या यह सही है?',
          explanation: 'Yes! 4 + 3 = 7. This is correct!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'bees'
        },
        {
          id: 'add-10',
          type: 'fill-blank',
          difficulty: 'easy',
          question: '1 + 1 = ___',
          questionHindi: '1 + 1 = ___',
          options: null,
          correctAnswer: '2',
          hint: 'One and one more. How many is that?',
          hintHindi: 'एक और एक और। कितने हुए?',
          explanation: '1 + 1 = 2. One plus one equals two! This is the simplest double.',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'ice-cream'
        },
        {
          id: 'add-11',
          type: 'word-problem',
          difficulty: 'easy',
          question: 'There are 4 ducks in a pond. 2 more ducks come to swim. How many ducks are in the pond now?',
          questionHindi: 'तालाब में 4 बतख हैं। 2 और बतख तैरने आती हैं। अब तालाब में कितनी बतख हैं?',
          options: ['4', '5', '6', '7'],
          correctAnswer: '6',
          hint: '4 ducks are already there, and 2 more join. What is 4 + 2?',
          hintHindi: '4 बतख पहले से हैं, और 2 और आ गईं। 4 + 2 = ?',
          explanation: '4 + 2 = 6. There are now 6 ducks swimming happily in the pond!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'ducks'
        },
        {
          id: 'add-12',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is 3 + 4?',
          questionHindi: '3 + 4 कितना होता है?',
          options: ['5', '6', '7', '8'],
          correctAnswer: '7',
          hint: 'Use your fingers! 3 on one hand, 4 on the other.',
          hintHindi: 'उँगलियों का इस्तेमाल करो! एक हाथ में 3, दूसरे में 4।',
          explanation: '3 + 4 = 7. Three plus four equals seven!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'marbles'
        },
        // --- MEDIUM (6 questions) ---
        {
          id: 'add-13',
          type: 'word-problem',
          difficulty: 'medium',
          question: 'In a cricket match, Amay scored 6 runs in the first over and 5 runs in the second over. How many runs did he score in total?',
          questionHindi: 'क्रिकेट मैच में अमय ने पहले ओवर में 6 रन और दूसरे ओवर में 5 रन बनाए। उसने कुल कितने रन बनाए?',
          options: ['9', '10', '11', '12'],
          correctAnswer: '11',
          hint: 'Add the runs from both overs: 6 + 5 = ?',
          hintHindi: 'दोनों ओवर के रन जोड़ो: 6 + 5 = ?',
          explanation: '6 + 5 = 11. Amay scored a total of 11 runs! Great batting!',
          stars: 2,
          visualType: 'counting-objects',
          objects: 'cricket-bat'
        },
        {
          id: 'add-14',
          type: 'fill-blank',
          difficulty: 'medium',
          question: '8 + ___ = 12',
          questionHindi: '8 + ___ = 12',
          options: null,
          correctAnswer: '4',
          hint: 'Start at 8 and count how many jumps to reach 12!',
          hintHindi: '8 से शुरू करो और गिनो कि 12 तक कितनी छलाँग लगेगी!',
          explanation: '8 + 4 = 12. We need 4 more to go from 8 to 12. Count: 9, 10, 11, 12 — that is 4 jumps!',
          stars: 2,
          visualType: 'number-line',
          objects: 'frogs'
        },
        {
          id: 'add-15',
          type: 'word-problem',
          difficulty: 'medium',
          question: 'At a birthday party, there are 7 samosas on one plate and 6 samosas on another plate. How many samosas are there in total?',
          questionHindi: 'जन्मदिन पार्टी में एक थाली में 7 समोसे और दूसरी थाली में 6 समोसे हैं। कुल कितने समोसे हैं?',
          options: ['11', '12', '13', '14'],
          correctAnswer: '13',
          hint: 'Add the samosas from both plates: 7 + 6 = ?',
          hintHindi: 'दोनों थालियों के समोसे जोड़ो: 7 + 6 = ?',
          explanation: '7 + 6 = 13. There are 13 yummy samosas at the party! 🥟',
          stars: 2,
          visualType: 'grouping',
          objects: 'samosas'
        },
        {
          id: 'add-16',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'What is 9 + 5?',
          questionHindi: '9 + 5 कितना होता है?',
          options: ['12', '13', '14', '15'],
          correctAnswer: '14',
          hint: 'Make 10 first! 9 + 1 = 10, and then add 4 more (since 5 = 1 + 4).',
          hintHindi: 'पहले 10 बनाओ! 9 + 1 = 10, फिर 4 और जोड़ो (क्योंकि 5 = 1 + 4)।',
          explanation: '9 + 5 = 14. A helpful trick: break 5 into 1 + 4, add 1 to 9 to make 10, then add 4 more: 10 + 4 = 14!',
          stars: 2,
          visualType: 'number-line',
          objects: 'monkeys'
        },
        {
          id: 'add-17',
          type: 'fill-blank',
          difficulty: 'medium',
          question: '___ + 6 = 10',
          questionHindi: '___ + 6 = 10',
          options: null,
          correctAnswer: '4',
          hint: 'What number plus 6 gives you 10? Count up from 6 to 10.',
          hintHindi: 'कौन सी संख्या में 6 जोड़ने से 10 आता है? 6 से 10 तक गिनो।',
          explanation: '4 + 6 = 10. From 6, we count: 7, 8, 9, 10 — that is 4 more!',
          stars: 2,
          visualType: 'number-line',
          objects: 'balloons'
        },
        {
          id: 'add-18',
          type: 'word-problem',
          difficulty: 'medium',
          question: 'Ayra has 5 stickers. Her friend gives her 8 more stickers. How many stickers does Ayra have now?',
          questionHindi: 'आयरा के पास 5 स्टिकर हैं। उसकी सहेली उसे 8 और स्टिकर देती है। अब आयरा के पास कितने स्टिकर हैं?',
          options: ['11', '12', '13', '14'],
          correctAnswer: '13',
          hint: 'She had 5 and got 8 more. What is 5 + 8?',
          hintHindi: 'उसके पास 5 थे और 8 और मिले। 5 + 8 = ?',
          explanation: '5 + 8 = 13. Ayra now has 13 stickers! You can also think: 8 + 5 = 8 + 2 + 3 = 10 + 3 = 13.',
          stars: 2,
          visualType: 'counting-objects',
          objects: 'stickers'
        },
        // --- HARD (2 questions) ---
        {
          id: 'add-19',
          type: 'word-problem',
          difficulty: 'hard',
          question: 'In a toy shop, Amay buys 7 toy soldiers and 8 toy animals. He already had 3 toys at home. How many toys does he have now in total?',
          questionHindi: 'खिलौने की दुकान से अमय 7 खिलौना सैनिक और 8 खिलौना जानवर खरीदता है। उसके पास घर पर पहले से 3 खिलौने थे। अब उसके पास कुल कितने खिलौने हैं?',
          options: ['15', '16', '17', '18'],
          correctAnswer: '18',
          hint: 'Add all three numbers: 7 + 8 + 3. First add 7 + 8, then add 3!',
          hintHindi: 'तीनों संख्याएँ जोड़ो: 7 + 8 + 3। पहले 7 + 8 जोड़ो, फिर 3 जोड़ो!',
          explanation: '7 + 8 = 15, and then 15 + 3 = 18. Amay has 18 toys in total! That is a lot of toys!',
          stars: 3,
          visualType: 'grouping',
          objects: 'toys'
        },
        {
          id: 'add-20',
          type: 'fill-blank',
          difficulty: 'hard',
          question: 'Find the missing number: 6 + ___ = 15',
          questionHindi: 'खाली जगह भरो: 6 + ___ = 15',
          options: null,
          correctAnswer: '9',
          hint: 'Start at 6 and count how many jumps you need to reach 15.',
          hintHindi: '6 से शुरू करो और गिनो कि 15 तक पहुँचने में कितनी छलाँग लगेंगी।',
          explanation: '6 + 9 = 15. From 6, count forward 9 times: 7, 8, 9, 10, 11, 12, 13, 14, 15. That is 9 jumps!',
          stars: 3,
          visualType: 'number-line',
          objects: 'rockets'
        }
      ]
    }
  ]
};

// ============================================================================
// Topic-to-Adventure World Mapping
// ============================================================================

export const mathTopics = [
  {
    id: 'topic-numbers',
    chapterId: 'ch-numbers',
    topic: 'Numbers & Counting',
    adventureName: 'The Counting Forest',
    adventureIcon: '🌲',
    adventureDescription: 'Explore the magical Counting Forest where every tree, flower, and creature helps you learn numbers!',
    adventureDescriptionHindi: 'जादुई गिनती के जंगल की खोज करो जहाँ हर पेड़, फूल और जीव तुम्हें संख्याएँ सिखाता है!',
    backgroundTheme: 'forest',
    characterGuide: 'Ginu the Owl',
    totalStars: 30,
    milestones: [
      { stars: 5, reward: 'Forest Explorer Badge 🌿' },
      { stars: 15, reward: 'Number Ninja Badge 🔢' },
      { stars: 30, reward: 'Counting Champion Crown 👑' }
    ]
  },
  {
    id: 'topic-addition',
    chapterId: 'ch-addition',
    topic: 'Addition',
    adventureName: 'The Addition Mountain',
    adventureIcon: '⛰️',
    adventureDescription: 'Climb the mighty Addition Mountain! Solve problems at each camp to reach the snowy peak!',
    adventureDescriptionHindi: 'शक्तिशाली जोड़ पर्वत पर चढ़ो! बर्फ़ीली चोटी तक पहुँचने के लिए हर कैंप पर सवाल हल करो!',
    backgroundTheme: 'mountain',
    characterGuide: 'Tara the Mountain Goat',
    totalStars: 30,
    milestones: [
      { stars: 5, reward: 'Base Camp Badge ⛺' },
      { stars: 15, reward: 'Summit Seeker Badge 🧗' },
      { stars: 30, reward: 'Mountain Master Crown 👑' }
    ]
  }
];
