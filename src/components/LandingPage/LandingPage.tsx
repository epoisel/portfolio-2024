import React, { useState } from 'react';
import { IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonCardContent } from '@ionic/react'; // Import IonCard and IonCardContent
import './LandingPage.css'; // Import the CSS file for styling

interface LandingPageProps {
  onBufferComplete: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onBufferComplete }) => {
  const [animateBrackets, setAnimateBrackets] = useState(false);

  const handleBufferComplete = () => {
    // Trigger animation or any other actions here if needed
    setAnimateBrackets(true);
    setTimeout(() => {
      onBufferComplete();
    }, 500); // Delay the transition for the duration of the animation
  };

  const handlePageClick = () => {
    // Trigger the animation when any part of the page is clicked
    handleBufferComplete();
  };

  return (
    <IonCard
    className={`landing-page ${animateBrackets ? 'fade-out' : ''}`}
    onClick={handlePageClick}
  >

    <IonCardContent >
    <img src="/logo.png" alt="Your Logo" className="logo" />
    </IonCardContent>
  </IonCard>
  );
};

export default LandingPage;
