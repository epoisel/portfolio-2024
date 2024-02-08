import React, { useState, useEffect } from 'react';
import { IonCard, IonCardContent, IonButton, IonImg, IonFabButton, IonFabList } from '@ionic/react';
import './Bio.css'; // Import the CSS file for styling

const Bio: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = 'profile.jpg';

    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <IonCard>
      <IonCardContent className="ion-text-center">
      
        <div className="profile-picture">
          <IonImg className="profile-img" src="profile.jpg" alt="Profile" />
          
        </div>
        
        <div className="bio-content">
          <h2>About Me</h2>
          <h1>William Poisel</h1>
          <p className="bio-subtitle">Experienced Data Analyst | Software Developer | UX Designer</p>

          <section className="bio-section">
            <h3>Data Analyst Extraordinaire</h3>
            <ul className="bio-list">
              <li>Project Alignment: Aligning project objectives with data-driven insights to optimize performance and fuel business growth.</li>
              <li>Data Mastery: Gathering, analyzing, and interpreting complex data sets.</li>
              <li>Influential Communicator: Conveying findings and recommendations in a clear and concise manner to influence key stakeholders.</li>
            </ul>
          </section>

          <section className="bio-section">
            <h3>Bridging Data and Design</h3>
            <ul className="bio-list">
              <li>Development Skills: Proficiency in HTML, CSS, JavaScript, and frameworks like React and Angular.</li>
              <li>User-Centric Solutions: Building interactive dashboards, data-driven web applications, and software solutions to enhance user experiences and accessibility.</li>
              <li>Visual Storytelling: Leveraging design skills with tools such as Adobe Creative Suite to create visually engaging data visualizations, reports, and presentations.</li>
            </ul>
          </section>

          <section className="bio-section">
            <h3>Collaborative Innovator</h3>
            <ul className="bio-list">
              <li>Cross-Functional Teams: Effective collaboration with diverse teams to achieve project goals.</li>
              <li>Attention to Detail: Meticulous work with a commitment to delivering high-quality solutions.</li>
              <li>Continuous Learning: Staying updated with the latest trends and best practices in software development and design to drive innovation.</li>
            </ul>
          </section>

          <p className="bio-connect">
            Let's connect and explore how my unique skill set can contribute to your software development and data-driven needs, enhancing user experiences and achieving your business objectives.
          </p>
        </div>
        <IonButton >
          Contact Me
        </IonButton>
        
      </IonCardContent>
    </IonCard>
  );
}

export default Bio;