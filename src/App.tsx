import { IonApp, IonRouterOutlet, IonSplitPane, IonModal, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import InfoModal from './components/InfoModal';
import Lecture from './pages/Lecture';
import Home from './pages/Home';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { App as AppIon } from '@capacitor/app'



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
import { useEffect, useState, useRef, useLayoutEffect } from 'react';



const App: React.FC = () => {
  const [t, i18n] = useTranslation("global");  
  //const [audioState, setAudioState] = useStateWithCallbackLazy('menu.musicNo'); 
  const [audioState, setAudioState] = useState('menu.musicNo'); 
  const audioRef = useRef<HTMLAudioElement>();  
  let fadeTimer  = useRef<any>(undefined);
  const [showModal, setShowModal] = useState(false);
  const firstUpdate = useRef(true);

  AppIon.addListener('appStateChange', ({ isActive }) => {
    if(!isActive) {
      setAudioState('menu.musicNo'); 
      console.log('MINIMIZADA')
    } else {
      
      
    };
  });

  const audioController = () => {
    
    if( audioRef.current.paused ){
      console.log('play'); 
      console.log(audioRef.current.paused)     
      setAudioState('menu.musicYes');      
    }
    else{
      console.log('stop');     
      setAudioState('menu.musicNo')          
    }
  }
    

const playAudio = () => {
  audioRef.current.play(); 
}



const pauseAudio = () => {
  audioRef.current.pause(); 
} 

/*
  const playAudio = () => {
    console.log('playaudioFN');
    clearTimeout(fadeTimer.current);

    audioRef.current.volume = 0; 
    audioRef.current.play();
    aud_fade_in()
  }

  var aud_fade_in = function() {
    console.log('fadeinFN')
    if (audioRef.current.volume < 0.995) {
      audioRef.current.volume = Math.min(1, audioRef.current.volume+ 0.005);
        fadeTimer.current = setTimeout(aud_fade_in, 5);
    } else {
      console.log('else de audfadein')
      audioRef.current.volume = 1;
     
    }
};

  const pauseAudio = () => {    
    clearTimeout(fadeTimer.current);
    if (audioRef.current.volume > 0.005) {
      audioRef.current.volume = Math.min(1, audioRef.current.volume - 0.005);
      fadeTimer.current = setTimeout(pauseAudio, 5);
  } else {
      audioRef.current.volume = 0;
      audioRef.current.pause();
      console.log('corriendo el else de pauseaudio')
     
  }
  };
*/

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    // do side effects
    if( audioState === 'menu.musicYes') {
      console.log('FIREEEEEEEEEEEEEEEEEEE')
      console.log(`menu music is yes: ${audioState} and audio is paused(true??) ${audioRef.current.paused}`)
      playAudio()
      console.log(`after playAudio() audio is playing ${!audioRef.current.paused}`)
    } else {
      console.log(`menu music is no: ${audioState} and audio is playing(false??) ${audioRef.current.paused}`)
      pauseAudio();
      console.log(`after pauseAudio() audio is paused ${audioRef.current.paused}`)

    }
  }, [audioState]);
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
