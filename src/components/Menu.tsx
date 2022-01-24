import {
  IonContent,
  IonList,
  IonMenu,
  IonMenuToggle,
  useIonViewWillEnter,  
  useIonViewWillLeave,

} from '@ionic/react';

import './Menu.css';
import { AccordionList } from "./AccordionList";


interface MenuProps {
  audioController: Function;
  audioState: string;
  showModal: Function;
  showViaInfoModal: Function;
  showDonateModal: Function
}


const Menu: React.FC<MenuProps> = ({audioController, audioState, showModal, showViaInfoModal, showDonateModal}) => {
  

  return (
    <IonMenu swipeGesture={false}  contentId="main" type="overlay" side="end">
      <IonContent>
        <IonList id="inbox-list">  
              <IonMenuToggle autoHide={false} >                
              </IonMenuToggle>
              < AccordionList audioController={audioController} audioState={audioState} showModal={showModal} showViaInfoModal={showViaInfoModal} showDonateModal={showDonateModal} />                  
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
