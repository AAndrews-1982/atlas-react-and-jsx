import React from 'react';

function Greeting() {
  const now = new Date();
  const hour = now.getHours();
  
  let greetingText;
  let imageSrc;

  if (hour >= 6 && hour < 12) {
    greetingText = "Good Morning!";
    imageSrc = '/src/assets/day.svg';
  } else if (hour >= 12 && hour < 17) {
    greetingText = "Good Afternoon!";
    imageSrc = '/src/assets/day.svg';
  } else if (hour >= 17 && hour < 21) {
    greetingText = "Good Evening!";
    imageSrc = '/src/assets/evening.svg';
  } else {
    greetingText = "Good Night!";
    imageSrc = '/src/assets/night.svg';
  }

  return (
    <h1 className="greeting">
      <img src={imageSrc} alt={greetingText} />
      {greetingText}
    </h1>
  );
}

export default Greeting;

