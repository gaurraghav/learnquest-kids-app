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
    },

    // ========================================================================
    // CHAPTER 3: Subtraction
    // NCERT Math Magic Ch 4
    // ========================================================================
    {
      id: 'ch-subtraction',
      title: 'Subtraction',
      subtitle: 'Learn to take away numbers and solve fun problems',
      icon: '➖',
      ncertChapter: 'Math Magic Ch 4',
      color: '#F44336',
      conceptExplanation: {
        title: 'Understanding Subtraction',
        steps: [
          {
            text: 'Subtraction means taking things away! When you take some things from a group, you have less left. We use the - sign to subtract.',
            textHindi: 'घटाव का मतलब है चीज़ें निकाल लेना! जब आप एक समूह से कुछ चीज़ें ले लेते हैं, तो कम बचती हैं। हम घटाने के लिए - चिह्न का इस्तेमाल करते हैं।',
            visualDescription: 'A plate of 5 cookies. A hand takes 2 cookies away. The remaining 3 cookies stay on the plate with the equation 5 - 2 = 3.'
          },
          {
            text: 'You can use your fingers to subtract! Hold up 5 fingers. Put 2 fingers down. Count how many are still up!',
            textHindi: 'तुम घटाने के लिए अपनी उँगलियों का इस्तेमाल कर सकते हो! 5 उँगलियाँ उठाओ। 2 उँगलियाँ नीचे करो। गिनो कि कितनी बची हैं!',
            visualDescription: 'A hand showing 5 fingers. 2 fingers go down. The remaining 3 fingers are highlighted with the answer 3.'
          },
          {
            text: 'A number line helps too! Start at the big number and jump backwards by the smaller number.',
            textHindi: 'संख्या रेखा भी मदद करती है! बड़ी संख्या से शुरू करो और छोटी संख्या जितना पीछे कूदो।',
            visualDescription: 'A cute frog starts at 8 on a number line and hops backwards 3 times landing on 5. The equation 8 - 3 = 5 appears.'
          },
          {
            text: 'When you subtract 0, the number stays the same! If you have 4 apples and eat 0 apples, you still have 4 apples!',
            textHindi: 'जब तुम 0 घटाते हो, तो संख्या वही रहती है! अगर तुम्हारे पास 4 सेब हैं और तुमने 0 खाए, तो तुम्हारे पास 4 ही सेब बचेंगे!',
            visualDescription: 'A boy holding a basket of 4 apples. A speech bubble shows him thinking of 0 apples eaten. The basket still has 4 apples.'
          }
        ]
      },
      questions: [
        // --- EASY (10 questions) ---
        {
          id: 'sub-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is 5 - 2?',
          questionHindi: '5 - 2 कितना होता है?',
          options: ['2', '3', '4', '5'],
          correctAnswer: '3',
          hint: 'Hold up 5 fingers and put 2 down. How many are left?',
          hintHindi: '5 उँगलियाँ उठाओ और 2 नीचे करो। कितनी बचीं?',
          explanation: '5 - 2 = 3. Five take away two is three!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'fingers'
        },
        {
          id: 'sub-2',
          type: 'fill-blank',
          difficulty: 'easy',
          question: '7 - 1 = ___',
          questionHindi: '7 - 1 = ___',
          options: null,
          correctAnswer: '6',
          hint: 'Count backward 1 from 7.',
          hintHindi: '7 से 1 पीछे गिनो।',
          explanation: '7 - 1 = 6. One less than seven is six.',
          stars: 1,
          visualType: 'number-line',
          objects: 'frogs'
        },
        {
          id: 'sub-3',
          type: 'word-problem',
          difficulty: 'easy',
          question: 'Ayra had 4 chocolates. She ate 1 chocolate. How many are left?',
          questionHindi: 'आयरा के पास 4 चॉकलेट थीं। उसने 1 चॉकलेट खा ली। कितनी बचीं?',
          options: ['2', '3', '4', '5'],
          correctAnswer: '3',
          hint: 'Take away 1 from 4. 4 - 1 = ?',
          hintHindi: '4 में से 1 घटाओ। 4 - 1 = ?',
          explanation: '4 - 1 = 3. Ayra has 3 chocolates left.',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'chocolates'
        },
        {
          id: 'sub-4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is 6 - 0?',
          questionHindi: '6 - 0 कितना होता है?',
          options: ['0', '5', '6', '7'],
          correctAnswer: '6',
          hint: 'If you take away zero (nothing), the number stays the same!',
          hintHindi: 'अगर तुम शून्य (कुछ नहीं) घटाते हो, तो संख्या वही रहती है!',
          explanation: '6 - 0 = 6. Taking away zero leaves the number unchanged.',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'apples'
        },
        {
          id: 'sub-5',
          type: 'true-false',
          difficulty: 'easy',
          question: 'True or False: 8 - 8 = 0',
          questionHindi: 'सही या गलत: 8 - 8 = 0',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'If you have 8 toys and you give all 8 away, how many are left?',
          hintHindi: 'अगर तुम्हारे पास 8 खिलौने हैं और तुम 8 दे देते हो, तो कितने बचेंगे?',
          explanation: 'Yes! Any number minus itself is 0.',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'toys'
        },
        {
          id: 'sub-6',
          type: 'fill-blank',
          difficulty: 'easy',
          question: '10 - 2 = ___',
          questionHindi: '10 - 2 = ___',
          options: null,
          correctAnswer: '8',
          hint: 'Count back 2 from 10: 9, 8!',
          hintHindi: '10 से 2 पीछे गिनो: 9, 8!',
          explanation: '10 - 2 = 8. Ten take away two is eight.',
          stars: 1,
          visualType: 'number-line',
          objects: 'kangaroos'
        },
        {
          id: 'sub-7',
          type: 'word-problem',
          difficulty: 'easy',
          question: 'Amay had 5 balloons. 2 balloons flew away. How many balloons are left?',
          questionHindi: 'अमय के पास 5 गुब्बारे थे। 2 गुब्बारे उड़ गए। कितने गुब्बारे बचे?',
          options: ['2', '3', '4', '5'],
          correctAnswer: '3',
          hint: 'Subtract 2 from 5. 5 - 2 = ?',
          hintHindi: '5 में से 2 घटाओ। 5 - 2 = ?',
          explanation: '5 - 2 = 3. There are 3 balloons left.',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'balloons'
        },
        {
          id: 'sub-8',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Find the answer: 9 - 4 = ?',
          questionHindi: 'जवाब ढूँढो: 9 - 4 = ?',
          options: ['4', '5', '6', '7'],
          correctAnswer: '5',
          hint: 'Use 9 fingers, then put down 4.',
          hintHindi: '9 उँगलियाँ लो, फिर 4 नीचे करो।',
          explanation: '9 - 4 = 5. Nine take away four is five.',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'fingers'
        },
        {
          id: 'sub-9',
          type: 'fill-blank',
          difficulty: 'easy',
          question: '3 - 2 = ___',
          questionHindi: '3 - 2 = ___',
          options: null,
          correctAnswer: '1',
          hint: 'You have 3, you take away 2. How many left?',
          hintHindi: 'तुम्हारे पास 3 हैं, तुमने 2 निकाल लिए। कितने बचे?',
          explanation: '3 - 2 = 1. Just 1 is left!',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'blocks'
        },
        {
          id: 'sub-10',
          type: 'word-problem',
          difficulty: 'easy',
          question: 'There were 6 birds on a tree. 3 birds flew away. How many birds are on the tree now?',
          questionHindi: 'पेड़ पर 6 पक्षी थे। 3 पक्षी उड़ गए। अब पेड़ पर कितने पक्षी हैं?',
          options: ['2', '3', '4', '5'],
          correctAnswer: '3',
          hint: 'What is 6 - 3?',
          hintHindi: '6 - 3 कितना होता है?',
          explanation: '6 - 3 = 3. There are 3 birds left on the tree.',
          stars: 1,
          visualType: 'counting-objects',
          objects: 'birds'
        },
        // --- MEDIUM (3 questions) ---
        {
          id: 'sub-11',
          type: 'fill-blank',
          difficulty: 'medium',
          question: '15 - 5 = ___',
          questionHindi: '15 - 5 = ___',
          options: null,
          correctAnswer: '10',
          hint: 'Take away the 5 ones from 15.',
          hintHindi: '15 में से 5 इकाइयाँ निकाल दो।',
          explanation: '15 - 5 = 10. If you take away 5 from 15, you are left with 10.',
          stars: 2,
          visualType: 'number-line',
          objects: 'kangaroos'
        },
        {
          id: 'sub-12',
          type: 'word-problem',
          difficulty: 'medium',
          question: 'Ayra has 12 colored pencils. She gives 4 to her friend. How many colored pencils does Ayra have now?',
          questionHindi: 'आयरा के पास 12 रंगीन पेंसिलें हैं। वह 4 अपनी दोस्त को दे देती है। अब आयरा के पास कितनी रंगीन पेंसिलें हैं?',
          options: ['7', '8', '9', '10'],
          correctAnswer: '8',
          hint: 'Count backward 4 times from 12.',
          hintHindi: '12 से 4 बार पीछे गिनो।',
          explanation: '12 - 4 = 8. Ayra has 8 pencils left.',
          stars: 2,
          visualType: 'counting-objects',
          objects: 'pencils'
        },
        {
          id: 'sub-13',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'What is 14 - 6?',
          questionHindi: '14 - 6 कितना होता है?',
          options: ['7', '8', '9', '10'],
          correctAnswer: '8',
          hint: 'First take away 4 to get to 10, then take away 2 more.',
          hintHindi: 'पहले 10 तक पहुँचने के लिए 4 घटाओ, फिर 2 और घटाओ।',
          explanation: '14 - 6 = 8. (14 - 4 = 10, then 10 - 2 = 8).',
          stars: 2,
          visualType: 'number-line',
          objects: 'frogs'
        },
        // --- HARD (2 questions) ---
        {
          id: 'sub-14',
          type: 'word-problem',
          difficulty: 'hard',
          question: 'Amay baked 18 cookies. His friends ate some. Now he has 9 cookies left. How many cookies did his friends eat?',
          questionHindi: 'अमय ने 18 कुकीज़ बनाईं। उसके दोस्तों ने कुछ खा लीं। अब उसके पास 9 कुकीज़ बची हैं। उसके दोस्तों ने कितनी कुकीज़ खाईं?',
          options: ['7', '8', '9', '10'],
          correctAnswer: '9',
          hint: 'What number plus 9 gives 18? Or 18 - 9 = ?',
          hintHindi: 'कौन सी संख्या में 9 जोड़ने पर 18 आता है? या 18 - 9 = ?',
          explanation: '18 - 9 = 9. His friends ate 9 cookies.',
          stars: 3,
          visualType: 'counting-objects',
          objects: 'cookies'
        },
        {
          id: 'sub-15',
          type: 'fill-blank',
          difficulty: 'hard',
          question: '___ - 7 = 8',
          questionHindi: '___ - 7 = 8',
          options: null,
          correctAnswer: '15',
          hint: 'Add 7 and 8 together to find the starting number!',
          hintHindi: 'शुरुआती संख्या पता करने के लिए 7 और 8 को जोड़ो!',
          explanation: '15 - 7 = 8. Because 8 + 7 = 15.',
          stars: 3,
          visualType: 'number-line',
          objects: 'monkeys'
        }
      ]
    },

    // ========================================================================
    // CHAPTER 4: Shapes & Spaces
    // NCERT Math Magic Ch 6
    // ========================================================================
    {
      id: 'ch-shapes',
      title: 'Shapes & Spaces',
      subtitle: 'Discover shapes around you and spatial concepts',
      icon: '🔺',
      ncertChapter: 'Math Magic Ch 6',
      color: '#9C27B0',
      conceptExplanation: {
        title: 'Exploring Shapes and Spaces',
        steps: [
          {
            text: 'Shapes are everywhere! We have squares, circles, triangles, and rectangles. A square has 4 equal sides, and a circle is round like a ball.',
            textHindi: 'आकार हर जगह हैं! हमारे पास वर्ग, वृत्त, त्रिकोण और आयत हैं। वर्ग के 4 बराबर किनारे होते हैं, और वृत्त गेंद की तरह गोल होता है।',
            visualDescription: 'A house built with shapes: triangle roof, square windows, rectangular door, and a round circle sun in the sky.'
          },
          {
            text: 'We also learn about spaces: Top and Bottom, Inside and Outside, Near and Far. A bird is on top of a tree, while a dog is at the bottom!',
            textHindi: 'हम जगह के बारे में भी सीखते हैं: ऊपर और नीचे, अंदर और बाहर, पास और दूर। एक पक्षी पेड़ के ऊपर है, जबकि कुत्ता नीचे है!',
            visualDescription: 'A big tree with a blue bird sitting on the top branch. A dog is sleeping at the bottom near the roots.'
          },
          {
            text: 'Inside and Outside! When you are in your room, you are inside. When you go out to play in the garden, you are outside.',
            textHindi: 'अंदर और बाहर! जब तुम अपने कमरे में होते हो, तो तुम अंदर होते हो। जब तुम बगीचे में खेलने बाहर जाते हो, तो तुम बाहर होते हो।',
            visualDescription: 'A puppy is sitting inside a cozy dog house. Another puppy is playing outside in the grass.'
          },
          {
            text: 'Near and Far! A tree right next to you is near, but a mountain far away looks very small because it is far.',
            textHindi: 'पास और दूर! तुम्हारे बिल्कुल बगल का पेड़ पास है, लेकिन दूर का पहाड़ बहुत छोटा दिखता है क्योंकि वह दूर है।',
            visualDescription: 'A girl standing near a large apple tree. In the background, very small mountains are shown to indicate they are far away.'
          }
        ]
      },
      questions: [
        // --- EASY (10 questions) ---
        {
          id: 'shp-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which shape has exactly 3 sides?',
          questionHindi: 'किस आकार के ठीक 3 किनारे होते हैं?',
          options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
          correctAnswer: 'Triangle',
          hint: 'A slice of pizza looks like this shape!',
          hintHindi: 'पिज्जा का एक टुकड़ा इस आकार का दिखता है!',
          explanation: 'A triangle has 3 sides and 3 corners.',
          stars: 1,
          visualType: 'shapes',
          objects: 'triangle'
        },
        {
          id: 'shp-2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What shape is a coin (like a 1 Rupee coin)?',
          questionHindi: 'सिक्का (जैसे 1 रुपये का सिक्का) किस आकार का होता है?',
          options: ['Circle', 'Square', 'Triangle', 'Rectangle'],
          correctAnswer: 'Circle',
          hint: 'It is round and can roll!',
          hintHindi: 'यह गोल होता है और लुढ़क सकता है!',
          explanation: 'A coin is a circle. It is perfectly round with no corners.',
          stars: 1,
          visualType: 'shapes',
          objects: 'coin'
        },
        {
          id: 'shp-3',
          type: 'true-false',
          difficulty: 'easy',
          question: 'True or False: A book is shaped like a rectangle.',
          questionHindi: 'सही या गलत: किताब एक आयत के आकार की होती है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'Does a book have 4 sides where opposite sides are equal?',
          hintHindi: 'क्या किताब के 4 किनारे होते हैं जहाँ आमने-सामने के किनारे बराबर हों?',
          explanation: 'Yes! Most books are rectangles, with two long sides and two short sides.',
          stars: 1,
          visualType: 'shapes',
          objects: 'book'
        },
        {
          id: 'shp-4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'If the bird is flying high in the sky and the cat is on the ground, who is at the TOP?',
          questionHindi: 'अगर पक्षी आसमान में ऊँचा उड़ रहा है और बिल्ली ज़मीन पर है, तो सबसे ऊपर कौन है?',
          options: ['Bird', 'Cat'],
          correctAnswer: 'Bird',
          hint: 'Top means higher up.',
          hintHindi: 'ऊपर मतलब ज़्यादा ऊँचा।',
          explanation: 'The bird is in the sky, so it is at the top.',
          stars: 1,
          visualType: 'spatial',
          objects: 'top-bottom'
        },
        {
          id: 'shp-5',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The apples are in the basket. The apples are ______ the basket.',
          questionHindi: 'सेब टोकरी में हैं। सेब टोकरी के ______ हैं।',
          options: ['Inside', 'Outside', 'Above', 'Below'],
          correctAnswer: 'Inside',
          hint: 'They are placed in the basket.',
          hintHindi: 'वे टोकरी में रखे हैं।',
          explanation: 'The apples are inside the basket.',
          stars: 1,
          visualType: 'spatial',
          objects: 'inside-outside'
        },
        {
          id: 'shp-6',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which of these can ROLL?',
          questionHindi: 'इनमें से क्या लुढ़क सकता है?',
          options: ['A box', 'A ball', 'A book', 'A brick'],
          correctAnswer: 'A ball',
          hint: 'Things that are round can roll.',
          hintHindi: 'गोल चीज़ें लुढ़क सकती हैं।',
          explanation: 'A ball is round and can roll on the ground. Boxes and books slide.',
          stars: 1,
          visualType: 'shapes',
          objects: 'ball'
        },
        {
          id: 'shp-7',
          type: 'fill-blank',
          difficulty: 'easy',
          question: 'A square has ___ equal sides.',
          questionHindi: 'एक वर्ग के ___ बराबर किनारे होते हैं।',
          options: null,
          correctAnswer: '4',
          hint: 'Count the sides of a chessboard or a slice of bread.',
          hintHindi: 'शतरंज के बोर्ड या ब्रेड के टुकड़े के किनारे गिनो।',
          explanation: 'A square has 4 equal sides.',
          stars: 1,
          visualType: 'shapes',
          objects: 'square'
        },
        {
          id: 'shp-8',
          type: 'true-false',
          difficulty: 'easy',
          question: 'True or False: A ball can slide.',
          questionHindi: 'सही या गलत: गेंद खिसक सकती है।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'Round objects roll. Flat objects slide.',
          hintHindi: 'गोल चीज़ें लुढ़कती हैं। चपटी चीज़ें खिसकती हैं।',
          explanation: 'A ball rolls because it has a curved surface, it does not slide.',
          stars: 1,
          visualType: 'shapes',
          objects: 'ball'
        },
        {
          id: 'shp-9',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which is bigger? An elephant or a mouse?',
          questionHindi: 'कौन बड़ा है? एक हाथी या एक चूहा?',
          options: ['Elephant', 'Mouse', 'Both are same'],
          correctAnswer: 'Elephant',
          hint: 'Which animal takes up more space?',
          hintHindi: 'कौन सा जानवर ज़्यादा जगह लेता है?',
          explanation: 'An elephant is much bigger than a mouse!',
          stars: 1,
          visualType: 'comparison',
          objects: 'animals'
        },
        {
          id: 'shp-10',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The roots of a tree are ______ the ground.',
          questionHindi: 'पेड़ की जड़ें ज़मीन के ______ होती हैं।',
          options: ['Above', 'Below', 'Inside', 'On'],
          correctAnswer: 'Below',
          hint: 'Where do roots grow?',
          hintHindi: 'जड़ें कहाँ उगती हैं?',
          explanation: 'Roots grow below the ground.',
          stars: 1,
          visualType: 'spatial',
          objects: 'tree'
        },
        // --- MEDIUM (3 questions) ---
        {
          id: 'shp-11',
          type: 'word-problem',
          difficulty: 'medium',
          question: 'Amay is drawing a house. He draws a square for the room and a triangle for the roof. How many straight lines did he draw in total?',
          questionHindi: 'अमय एक घर बना रहा है। वह कमरे के लिए एक वर्ग और छत के लिए एक त्रिकोण बनाता है। उसने कुल कितनी सीधी रेखाएँ खींचीं?',
          options: ['5', '6', '7', '8'],
          correctAnswer: '7',
          hint: 'A square has 4 lines and a triangle has 3 lines. 4 + 3 = ?',
          hintHindi: 'एक वर्ग में 4 रेखाएँ होती हैं और त्रिकोण में 3 रेखाएँ। 4 + 3 = ?',
          explanation: '4 lines for the square + 3 lines for the triangle = 7 straight lines!',
          stars: 2,
          visualType: 'shapes',
          objects: 'house'
        },
        {
          id: 'shp-12',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'What shape is a chessboard?',
          questionHindi: 'शतरंज का बोर्ड किस आकार का होता है?',
          options: ['Circle', 'Rectangle', 'Triangle', 'Square'],
          correctAnswer: 'Square',
          hint: 'All 4 sides of a chessboard are equal!',
          hintHindi: 'शतरंज के बोर्ड के सभी 4 किनारे बराबर होते हैं!',
          explanation: 'A chessboard is a square, having 4 equal sides.',
          stars: 2,
          visualType: 'shapes',
          objects: 'chessboard'
        },
        {
          id: 'shp-13',
          type: 'true-false',
          difficulty: 'medium',
          question: 'True or False: You can stack balls on top of each other easily.',
          questionHindi: 'सही या गलत: तुम गेंदों को आसानी से एक के ऊपर एक रख सकते हो।',
          options: ['True', 'False'],
          correctAnswer: 'False',
          hint: 'Balls are round. Do they stay in place when placed on top of each other?',
          hintHindi: 'गेंदें गोल होती हैं। क्या वे एक के ऊपर एक रखने पर अपनी जगह पर टिकती हैं?',
          explanation: 'False. Because balls are round, they roll away and cannot be stacked easily. You can stack flat things like boxes.',
          stars: 2,
          visualType: 'spatial',
          objects: 'stacking'
        },
        // --- HARD (2 questions) ---
        {
          id: 'shp-14',
          type: 'word-problem',
          difficulty: 'hard',
          question: 'Ayra cut a square piece of paper exactly in half from corner to corner. What new shapes did she make?',
          questionHindi: 'आयरा ने एक वर्गाकार कागज़ को एक कोने से दूसरे कोने तक ठीक आधा काटा। उसने कौन से नए आकार बनाए?',
          options: ['2 Rectangles', '2 Triangles', '2 Circles', '4 Squares'],
          correctAnswer: '2 Triangles',
          hint: 'Draw a line from one corner of a square to the opposite corner. What does it look like?',
          hintHindi: 'एक वर्ग के एक कोने से दूसरे कोने तक एक रेखा खींचो। यह कैसा दिखता है?',
          explanation: 'Cutting a square from corner to corner creates 2 triangles!',
          stars: 3,
          visualType: 'shapes',
          objects: 'paper'
        },
        {
          id: 'shp-15',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A brick is shaped like a _____.',
          questionHindi: 'एक ईंट का आकार _____ जैसा होता है।',
          options: ['Cube', 'Cuboid', 'Sphere', 'Cylinder'],
          correctAnswer: 'Cuboid',
          hint: 'It is like a long box.',
          hintHindi: 'यह एक लंबे बक्से की तरह है।',
          explanation: 'A brick is a 3D shape called a cuboid (like a 3D rectangle).',
          stars: 3,
          visualType: 'shapes',
          objects: 'brick'
        }
      ]
    },

    // ========================================================================
    // CHAPTER 5: Measurement & Time
    // NCERT Math Magic Ch 7
    // ========================================================================
    {
      id: 'ch-measure',
      title: 'Measurement & Time',
      subtitle: 'Measure length, weight, and tell the time!',
      icon: '⏱️',
      ncertChapter: 'Math Magic Ch 7',
      color: '#FF9800',
      conceptExplanation: {
        title: 'Measuring Things and Time',
        steps: [
          {
            text: 'Measurement helps us answer: How long? How heavy? How much? We can measure the length of a table using our hands (handspan)!',
            textHindi: 'मापन हमें यह जानने में मदद करता है: कितना लंबा? कितना भारी? कितना ज़्यादा? हम अपने हाथों (बलिश्त) का उपयोग करके मेज़ की लंबाई नाप सकते हैं!',
            visualDescription: 'A child measuring the length of a desk by placing their hands end-to-end (handspans) across the desk.'
          },
          {
            text: 'Long and Short! A snake is long, but a caterpillar is short. Tall and Short! A giraffe is tall, but a dog is short.',
            textHindi: 'लंबा और छोटा! एक साँप लंबा होता है, लेकिन कैटरपिलर छोटा होता है। ऊँचा और छोटा! जिराफ़ ऊँचा होता है, लेकिन कुत्ता छोटा होता है।',
            visualDescription: 'A tall giraffe standing next to a small dog. Next to it, a long snake slithering near a tiny caterpillar.'
          },
          {
            text: 'Heavy and Light! An elephant is very heavy, so it goes down on a seesaw. A small mouse is light, so it goes up!',
            textHindi: 'भारी और हल्का! एक हाथी बहुत भारी होता है, इसलिए वह सीसॉ पर नीचे जाता है। एक छोटा चूहा हल्का होता है, इसलिए वह ऊपर जाता है!',
            visualDescription: 'An elephant and a mouse on a seesaw. The elephant side is down, the mouse side is up.'
          },
          {
            text: 'Time helps us know when to do things! Morning is when we wake up, Afternoon is for lunch, Evening is for playing, and Night is for sleeping.',
            textHindi: 'समय हमें बताता है कि हमें कब क्या करना है! सुबह हम उठते हैं, दोपहर को हम खाना खाते हैं, शाम को हम खेलते हैं, और रात को हम सोते हैं।',
            visualDescription: 'Four panels showing the time of day: Sun rising (morning), Sun high up (afternoon), Sun setting (evening), Moon and stars (night).'
          }
        ]
      },
      questions: [
        // --- EASY (10 questions) ---
        {
          id: 'msr-1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which is LONGER? A bus or a car?',
          questionHindi: 'कौन लंबा है? एक बस या एक कार?',
          options: ['Bus', 'Car', 'Both are same'],
          correctAnswer: 'Bus',
          hint: 'Think about which vehicle can fit more people inside.',
          hintHindi: 'सोचो किस वाहन में ज़्यादा लोग बैठ सकते हैं।',
          explanation: 'A bus is longer than a car.',
          stars: 1,
          visualType: 'comparison',
          objects: 'vehicles'
        },
        {
          id: 'msr-2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which is HEAVIER? A feather or a rock?',
          questionHindi: 'कौन भारी है? एक पंख या एक पत्थर?',
          options: ['Feather', 'Rock'],
          correctAnswer: 'Rock',
          hint: 'If you hold both, which one pulls your hand down more?',
          hintHindi: 'अगर तुम दोनों को पकड़ो, तो कौन सा तुम्हारे हाथ को नीचे खींचेगा?',
          explanation: 'A rock is heavier than a feather.',
          stars: 1,
          visualType: 'comparison',
          objects: 'weight'
        },
        {
          id: 'msr-3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'When do you usually eat breakfast?',
          questionHindi: 'तुम आमतौर पर नाश्ता कब करते हो?',
          options: ['Morning', 'Afternoon', 'Night'],
          correctAnswer: 'Morning',
          hint: 'It is the first meal after you wake up.',
          hintHindi: 'यह उठने के बाद पहला भोजन होता है।',
          explanation: 'We eat breakfast in the morning.',
          stars: 1,
          visualType: 'time',
          objects: 'meals'
        },
        {
          id: 'msr-4',
          type: 'true-false',
          difficulty: 'easy',
          question: 'True or False: A giraffe is TALLER than a cat.',
          questionHindi: 'सही या गलत: जिराफ़ बिल्ली से लंबा (ऊँचा) होता है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'A giraffe has a very long neck to eat leaves from high trees.',
          hintHindi: 'जिराफ़ की गर्दन बहुत लंबी होती है ताकि वह ऊँचे पेड़ों की पत्तियाँ खा सके।',
          explanation: 'True! Giraffes are very tall, much taller than cats.',
          stars: 1,
          visualType: 'comparison',
          objects: 'animals'
        },
        {
          id: 'msr-5',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which is THICKER? A thick dictionary book or a single sheet of paper?',
          questionHindi: 'कौन ज़्यादा मोटा है? एक मोटी डिक्शनरी किताब या कागज़ का एक पन्ना?',
          options: ['Dictionary', 'Sheet of paper'],
          correctAnswer: 'Dictionary',
          hint: 'A dictionary has hundreds of pages.',
          hintHindi: 'एक डिक्शनरी में सैकड़ों पन्ने होते हैं।',
          explanation: 'A dictionary is much thicker than one sheet of paper.',
          stars: 1,
          visualType: 'comparison',
          objects: 'thickness'
        },
        {
          id: 'msr-6',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'When do we go to sleep at the end of the day?',
          questionHindi: 'हम दिन के अंत में सोने कब जाते हैं?',
          options: ['Morning', 'Evening', 'Night'],
          correctAnswer: 'Night',
          hint: 'When the moon and stars are out.',
          hintHindi: 'जब चाँद और तारे निकले होते हैं।',
          explanation: 'We sleep at night.',
          stars: 1,
          visualType: 'time',
          objects: 'night'
        },
        {
          id: 'msr-7',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which glass holds MORE water?',
          questionHindi: 'किस गिलास में ज़्यादा पानी आता है?',
          options: ['A big jug', 'A small cup'],
          correctAnswer: 'A big jug',
          hint: 'Bigger things can hold more inside them.',
          hintHindi: 'बड़ी चीज़ों के अंदर ज़्यादा आ सकता है।',
          explanation: 'A big jug has more capacity and holds more water than a small cup.',
          stars: 1,
          visualType: 'comparison',
          objects: 'capacity'
        },
        {
          id: 'msr-8',
          type: 'true-false',
          difficulty: 'easy',
          question: 'True or False: A watermelon is heavier than a lemon.',
          questionHindi: 'सही या गलत: तरबूज नींबू से भारी होता है।',
          options: ['True', 'False'],
          correctAnswer: 'True',
          hint: 'A watermelon is very big and hard to lift with one hand.',
          hintHindi: 'तरबूज बहुत बड़ा होता है और एक हाथ से उठाना मुश्किल होता है।',
          explanation: 'True. A watermelon is much larger and heavier than a small lemon.',
          stars: 1,
          visualType: 'comparison',
          objects: 'fruits'
        },
        {
          id: 'msr-9',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'How do you measure the length of a pencil?',
          questionHindi: 'तुम एक पेंसिल की लंबाई कैसे नापोगे?',
          options: ['Using a weighing scale', 'Using a ruler', 'Using a clock'],
          correctAnswer: 'Using a ruler',
          hint: 'A ruler has centimeters to measure length.',
          hintHindi: 'रूलर में लंबाई नापने के लिए सेंटीमीटर होते हैं।',
          explanation: 'We use a ruler or measuring tape to measure length.',
          stars: 1,
          visualType: 'measurement',
          objects: 'tools'
        },
        {
          id: 'msr-10',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'When do you come back from school?',
          questionHindi: 'तुम स्कूल से वापस कब आते हो?',
          options: ['Afternoon', 'Midnight', 'Early Morning'],
          correctAnswer: 'Afternoon',
          hint: 'The sun is high up in the sky when school ends.',
          hintHindi: 'जब स्कूल खत्म होता है तब सूरज आसमान में ऊँचा होता है।',
          explanation: 'Most children come back from school in the afternoon.',
          stars: 1,
          visualType: 'time',
          objects: 'afternoon'
        },
        // --- MEDIUM (3 questions) ---
        {
          id: 'msr-11',
          type: 'word-problem',
          difficulty: 'medium',
          question: 'Ayra’s pencil is 4 erasers long. Amay’s pencil is 6 erasers long. Whose pencil is longer?',
          questionHindi: 'आयरा की पेंसिल 4 रबर जितनी लंबी है। अमय की पेंसिल 6 रबर जितनी लंबी है। किसकी पेंसिल ज़्यादा लंबी है?',
          options: ['Ayra', 'Amay', 'Both are equal'],
          correctAnswer: 'Amay',
          hint: 'Which number is bigger, 4 or 6?',
          hintHindi: 'कौन सी संख्या बड़ी है, 4 या 6?',
          explanation: '6 erasers is longer than 4 erasers, so Amay’s pencil is longer.',
          stars: 2,
          visualType: 'measurement',
          objects: 'pencils'
        },
        {
          id: 'msr-12',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which of the following activities takes MORE time?',
          questionHindi: 'निम्नलिखित में से किस काम में ज़्यादा समय लगता है?',
          options: ['Drinking a glass of water', 'Sleeping at night'],
          correctAnswer: 'Sleeping at night',
          hint: 'You drink water in seconds, but sleep for hours.',
          hintHindi: 'तुम पानी सेकंडों में पीते हो, लेकिन घंटों तक सोते हो।',
          explanation: 'Sleeping at night takes hours, which is much longer than drinking water.',
          stars: 2,
          visualType: 'time',
          objects: 'activities'
        },
        {
          id: 'msr-13',
          type: 'word-problem',
          difficulty: 'medium',
          question: 'Amay filled his bucket with 5 jugs of water. Ayra filled her bucket with 3 jugs of water. Whose bucket holds less water?',
          questionHindi: 'अमय ने अपनी बाल्टी 5 जग पानी से भरी। आयरा ने अपनी बाल्टी 3 जग पानी से भरी। किसकी बाल्टी में कम पानी आता है?',
          options: ['Amay', 'Ayra'],
          correctAnswer: 'Ayra',
          hint: '3 is less than 5.',
          hintHindi: '3, 5 से कम है।',
          explanation: 'Ayra’s bucket holds only 3 jugs, which is less than Amay’s 5 jugs.',
          stars: 2,
          visualType: 'capacity',
          objects: 'buckets'
        },
        // --- HARD (2 questions) ---
        {
          id: 'msr-14',
          type: 'word-problem',
          difficulty: 'hard',
          question: 'A red ribbon is 10 handspans long. A blue ribbon is 2 handspans shorter than the red ribbon. How long is the blue ribbon?',
          questionHindi: 'एक लाल रिबन 10 बलिश्त लंबा है। एक नीला रिबन लाल रिबन से 2 बलिश्त छोटा है। नीला रिबन कितना लंबा है?',
          options: ['8 handspans', '12 handspans', '10 handspans', '2 handspans'],
          correctAnswer: '8 handspans',
          hint: 'Subtract 2 from 10. 10 - 2 = ?',
          hintHindi: '10 में से 2 घटाओ। 10 - 2 = ?',
          explanation: 'The blue ribbon is 2 handspans shorter, so 10 - 2 = 8 handspans long.',
          stars: 3,
          visualType: 'measurement',
          objects: 'ribbons'
        },
        {
          id: 'msr-15',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'If yesterday was Sunday, what day is today?',
          questionHindi: 'अगर कल रविवार था, तो आज कौन सा दिन है?',
          options: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
          correctAnswer: 'Monday',
          hint: 'What day comes after Sunday?',
          hintHindi: 'रविवार के बाद कौन सा दिन आता है?',
          explanation: 'The days of the week go in order. After Sunday comes Monday.',
          stars: 3,
          visualType: 'time',
          objects: 'calendar'
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
  },
  {
    id: 'topic-subtraction',
    chapterId: 'ch-subtraction',
    topic: 'Subtraction',
    adventureName: 'The Minus Caves',
    adventureIcon: '🦇',
    adventureDescription: 'Explore the dark and mysterious Minus Caves where you take away numbers to find hidden treasure!',
    adventureDescriptionHindi: 'रहस्यमय माइनस गुफाओं की खोज करें जहाँ आप छिपे हुए खज़ाने को खोजने के लिए संख्याएँ घटाते हैं!',
    backgroundTheme: 'cave',
    characterGuide: 'Raju the Bat',
    totalStars: 30,
    milestones: [
      { stars: 5, reward: 'Cave Explorer Badge 🔦' },
      { stars: 15, reward: 'Subtraction Sleuth Badge 🕵️' },
      { stars: 30, reward: 'Treasure Hunter Crown 👑' }
    ]
  },
  {
    id: 'topic-shapes',
    chapterId: 'ch-shapes',
    topic: 'Shapes & Spaces',
    adventureName: 'The Geometry Kingdom',
    adventureIcon: '🏰',
    adventureDescription: 'Build castles, identify shapes, and explore spaces in the magical Geometry Kingdom!',
    adventureDescriptionHindi: 'जादुई ज्यामिति साम्राज्य में महल बनाएँ, आकार पहचानें और स्थानों का पता लगाएँ!',
    backgroundTheme: 'castle',
    characterGuide: 'Sir Square the Knight',
    totalStars: 30,
    milestones: [
      { stars: 5, reward: 'Shape Squire Badge 🛡️' },
      { stars: 15, reward: 'Knight of Geometry Badge ⚔️' },
      { stars: 30, reward: 'Castle King Crown 👑' }
    ]
  },
  {
    id: 'topic-measure',
    chapterId: 'ch-measure',
    topic: 'Measurement & Time',
    adventureName: 'The Time Machine',
    adventureIcon: '⏳',
    adventureDescription: 'Travel through time and measure giant dinosaurs in this epic measurement adventure!',
    adventureDescriptionHindi: 'समय की यात्रा करें और इस महाकाव्य मापन साहसिक कार्य में विशाल डायनासोर को मापें!',
    backgroundTheme: 'time-travel',
    characterGuide: 'Professor T-Rex',
    totalStars: 30,
    milestones: [
      { stars: 5, reward: 'Time Traveler Badge 🕰️' },
      { stars: 15, reward: 'Master Measurer Badge 📏' },
      { stars: 30, reward: 'Dino Lord Crown 👑' }
    ]
  }
];
