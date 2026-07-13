import { mathContent } from './src/data/mathContent.js';
import { englishContent } from './src/data/englishContent.js';
import { gkContent } from './src/data/gkContent.js';

const all = [mathContent, englishContent, gkContent];
let hasError = false;

all.forEach(s => {
  if (!s || !s.chapters) {
    console.log('Missing chapters array in a subject!');
    hasError = true;
    return;
  }
  s.chapters.forEach(c => {
    if (!c.conceptExplanation) {
      console.log('Missing conceptExplanation in:', c.id);
      hasError = true;
    } else if (!c.conceptExplanation.title || !c.conceptExplanation.steps) {
      console.log('Malformed conceptExplanation in:', c.id);
      hasError = true;
    }
    
    if (!c.questions) {
      console.log('Missing questions in:', c.id);
      hasError = true;
    }
  });
});

if (!hasError) {
  console.log('All data structures are perfectly formed!');
}
