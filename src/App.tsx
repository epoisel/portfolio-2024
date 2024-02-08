import React, { useState } from 'react';
import { Redirect, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage/LandingPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);

  const handleBufferComplete = () => {
    setShowLanding(false);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Portfolio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {showLanding ? (
          <LandingPage onBufferComplete={handleBufferComplete} />
        ) : (
          <Bio />
        )}
      </IonContent>
    </IonApp>
  );
}

export default App;

