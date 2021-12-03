import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Lecture from './pages/Lecture';
import Home from './pages/Home';


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
import { useEffect, useState } from 'react';



const App = () => {
  const [t, i18n] = useTranslation("global");
  const audio = new Audio(soundtrack); 
  audio.loop = true;
  const [audioState, setAudioState] = useState('menu.musicNo');
  const [audioOn, setAudio] = useState(audio.paused)

  

  const audioController = () => {
    
    if( audioOn === true){
      console.log('play');
      playAudio();
      setAudioState('menu.musicYes');
      console.log(audio.paused);
      setAudio(audio.paused)
      
    }
    else{
      console.log('stop');
      pauseAudio();
      setAudioState('menu.musicNo')
      setAudio(audio.paused)
          
    }
  }
  
  useEffect(()=>{
    console.log('useffect')
  
    console.log(audioOn)
  }, [audioOn])
  
  const playAudio = () => {
    audio.play()
  }

  const pauseAudio = () => {
    audio.pause();
  };

  

  return (
    <IonApp>
      
        
      
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu audioController={audioController} audioState={audioState}/>
          
          <IonRouterOutlet id="main">
            <Route path="/" exact>
              <Redirect to="/lectures" />
            </Route>
            <Route path="/lectures" exact component={Home}></Route>
            <Route path="/lectures/:name" >
              <Lecture />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
