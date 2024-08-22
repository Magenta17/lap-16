import React, { useState } from 'react';

function FrequentQuestion({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const hasAnswer = typeof answer === 'string' && answer.trim() !== '';

  return (
    <div class= "frequent-question">
      <h3 onClick={toggleExpand}>{question} {isExpanded ? '-' : '+'}</h3>
      {hasAnswer ? (
        <p className={isExpanded ? 'expanded' : 'collapsed' }>
          {answer}
        </p>) : (
        <p className='collapsed'>
          no answer available
        </p>)}
    </div>
  );
}

export default FrequentQuestion;