import React from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>My Portfolio</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export default Header;
