import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

interface ContactProps {
  onBackToBioClick: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBackToBioClick }) => {
  return (
    <IonCard>
      <IonCardContent className="ion-text-center">
        {/* Add your contact information or form here */}
        <p>
          You can contact me at example@email.com.
        </p>
        {/* Add your contact form or other details here */}
        <IonButton expand="full" onClick={onBackToBioClick} color="primary">
          Back to Bio
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
}

export default Contact;
