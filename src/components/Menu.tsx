import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import { useTranslation } from "react-i18next";
import { AccordionList } from "./AccordionList"



const languages: string[] = ['Español', 'English', 'Deutsch', 'Italiano', 'Français'];

const Menu: React.FC = () => {
  const location = useLocation();
  const [t, i18n] = useTranslation("global");

  return (
    <IonMenu  contentId="main" type="overlay" side="end">
      <IonContent>
        <IonList id="inbox-list">  
              <IonMenuToggle autoHide={false} >                
              </IonMenuToggle>
              < AccordionList />                  
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
