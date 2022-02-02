import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import InfoModal from './components/InfoModal';
import ViaInfoModal from  './components/ViaInfoModal';
import DonateModal from './components/DonateModal'
import Lecture from './pages/Lecture';
import Home from './pages/Home';
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


/* Theme variables */
import './theme/variables.css';
import { useState, useRef, useLayoutEffect } from 'react';




const App: React.FC = () => {
  //const [audioState, setAudioState] = useStateWithCallbackLazy('menu.musicNo'); 
  const [audioState, setAudioState] = useState('menu.musicNo'); 
  const audioRef = useRef<HTMLAudioElement>();  
  const [showModal, setShowModal] = useState(false);
  const [showViaInfoModal, setShowViaInfoModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const firstUpdate = useRef(true);

  setupIonicReact({
    mode: 'md'
  });

  AppIon.addListener('appStateChange', ({ isActive }) => {
    if(!isActive) {
      setAudioState('menu.musicNo'); 
      console.log('CLOSED')
    } else {
      
      
    };
  });

  const audioController = () => {
    
    if( audioRef.current.paused ){   
      setAudioState('menu.musicYes');      
    }
    else{
      setAudioState('menu.musicNo')          
    }
  }
    

const playAudio = () => {
  audioRef.current.play(); 
}



const pauseAudio = () => {
  audioRef.current.pause(); 
} 



  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    // do side effects
    if( audioState === 'menu.musicYes') {
      playAudio()
    } else {
      pauseAudio();
    }
  }, [audioState]);//setShowDonateModal, showDonateModal
  return (
    <IonApp>
      
        
      
      <IonReactRouter>
        
        <DonateModal setShowDonateModal={setShowDonateModal} showDonateModal={showDonateModal}></DonateModal>
        <InfoModal setShowModal={setShowModal} showModal={showModal}></InfoModal>
        <ViaInfoModal setShowViaInfoModal={setShowViaInfoModal} showViaInfoModal={showViaInfoModal}></ViaInfoModal>
        <Menu audioController={audioController} audioState={audioState} showModal={() => {setShowModal(true)}} showViaInfoModal={() => {setShowViaInfoModal(true)}} showDonateModal={() => {setShowDonateModal(true)}}/>
        <audio
          ref={audioRef}
          src={soundtrack}
          loop
        />
          <IonRouterOutlet id="main">
            <Route path="/" exact>
              <Redirect to="/lectures" />
            </Route>
            <Route path="/lectures" exact>
              <Home showDonateModal={() => {setShowDonateModal(true)}} showModal={() => {setShowModal(true)}} showViaInfoModal={() => {setShowViaInfoModal(true)}}/>
            </Route>
            <Route path="/lectures/:name" >
              <Lecture />
            </Route>
          </IonRouterOutlet>
        
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
