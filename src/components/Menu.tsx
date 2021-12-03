import {
  IonContent,
  IonList,
  IonMenu,
  IonMenuToggle,
  useIonViewWillEnter,  
  useIonViewWillLeave
} from '@ionic/react';

import './Menu.css';
import { AccordionList } from "./AccordionList";




const Menu = ({audioController, audioState}) => {
 

  return (
    <IonMenu  contentId="main" type="overlay" side="end">
      <IonContent>
        <IonList id="inbox-list">  
              <IonMenuToggle autoHide={false} >                
              </IonMenuToggle>
              < AccordionList audioController={audioController} audioState={audioState} />                  
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
