import { IonApp, IonRouterOutlet, IonSplitPane, IonModal, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import InfoModal from './components/InfoModal';
import Lecture from './pages/Lecture';
import Home from './pages/Home';
import { useStateWithCallbackLazy } from 'use-state-with-callback';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
//import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import soundtrack from "./assets/audio/soundtrack.mp3";
import { useTranslation } from "react-i18next";

/* Theme variables */
import './theme/variables.css';
import { useEffect, useState, useRef } from 'react';



const App: React.FC = () => {
  const [t, i18n] = useTranslation("global");  
  const [audioState, setAudioState] = useStateWithCallbackLazy('menu.musicNo'); 
  const audioRef = useRef<HTMLAudioElement>();  
  let fadeTimer  = useRef<any>();
  const [showModal, setShowModal] = useState(false);

  

  const audioController = () => {
    
    if( audioRef.current.paused ){
      console.log('play'); 
      console.log(audioRef.current.paused)     
      setAudioState('menu.musicYes', () => {playAudio()});      
    }
    else{
      console.log('stop');     
      setAudioState('menu.musicNo', () => {pauseAudio()})          
    }
  }  
  
  const playAudio = () => {
    clearTimeout(fadeTimer.current);
    audioRef.current.volume = 0; 
    audioRef.current.play();
    aud_fade_in()
  }

  var aud_fade_in = function() {
    clearTimeout(fadeTimer.current);
    if (audioRef.current.volume < 9.995) {
      audioRef.current.volume = Math.min(1, audioRef.current.volume+ 0.005);
        fadeTimer.current = setTimeout(aud_fade_in,10);
    } else {
      audioRef.current.volume = 1;
    }
};

  const pauseAudio = () => {    
    clearTimeout(fadeTimer.current);
    if (audioRef.current.volume > 0.005) {
      audioRef.current.volume = Math.min(1, audioRef.current.volume - 0.005);
      fadeTimer.current = setTimeout(pauseAudio,5);
  } else {
      audioRef.current.volume = 0;
      audioRef.current.pause();
     
  }
  };
  

  return (
    <IonApp>
      
        
      
      <IonReactRouter>
        

        <InfoModal setShowModal={setShowModal} showModal={showModal}></InfoModal>
        
        <Menu audioController={audioController} audioState={audioState} showModal={() => {setShowModal(true)}}/>
        <audio
          ref={audioRef}
          src={soundtrack}
          loop
        />
          <IonRouterOutlet id="main">
            <Route path="/" exact>
              <Redirect to="/lectures" />
            </Route>
            <Route path="/lectures" exact component={Home}></Route>
            <Route path="/lectures/:name" >
              <Lecture />
            </Route>
          </IonRouterOutlet>
        
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
