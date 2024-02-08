import React from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const Projects: React.FC = () => {
  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Projects</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {/* Add your project details here */}
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
}

export default Projects;
