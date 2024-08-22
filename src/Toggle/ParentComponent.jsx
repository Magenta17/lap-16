import React from 'react';
import FrequentQuestion from './FrequentQuestion'; // Assuming FrequentQuestion.js is in the same directory

function ParentComponent() {
  const questions = [
    {
      question: 'Is this a good product?',
      answer: 'yess'
    },
    {
      question: 'How much does it cost?',
      answer: '19.99 dollers'
    }
  ];

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <ul>  {questions.map((question, index) => (
        <li key={index}>
          <FrequentQuestion key={index} question={question.question} answer={question.answer} /></li>
       
      ))}
        </ul>    
    </div>
  );
}

export default ParentComponent;
