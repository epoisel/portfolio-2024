import React from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const About: React.FC = () => {
  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>About Me</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {/* Add your bio and information here */}
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
}

export default About;
