import { IonCard, IonRow, IonCol, IonGrid, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';
import { useTranslation } from "react-i18next"
import { type } from 'os';
import { useEffect, useState } from 'react';
import './AccordionList.css';

interface AccordionListProps {
    audioController: Function;
  audioState: string;
  showModal: Function;
  showViaInfoModal: Function;
  showDonateModal: Function;
}

const languages: { id: string, label: string }[] = [
    { "id": "es", "label": "Español" },
    { "id": "en", "label": "English" },
    { "id": "pt", "label": "português" },
    { "id": "it", "label": "Italiano" }
    //{ "id": "de", "label": "Deutsch" },
    //{ "id": "fr", "label": "Français" }        
];

export const AccordionList:React.FC<AccordionListProps> = ({audioController, audioState, showModal, showViaInfoModal, showDonateModal}) => {
    

    const [clicked, setClicked] = useState(undefined);   

    const showel = e => {  
        if (clicked === e.currentTarget.id) {
            return setClicked(null)
        }
        setClicked(e.currentTarget.id)
    }
    const [t, i18n] = useTranslation("global");
    

    return (
       <div>

            <div className="listGroup" id="language" onClick={(e) => {showel(e)}}>
                <IonItem detail={false} button className="item-stable" lines="none">
                        <IonLabel id="music">{t('menu.language')}</IonLabel>
                </IonItem>
            <div className={`subMenu-group ${clicked === 'language' ? 'active' : ''}`}> 
            {(languages.map((language, index) => (
                <IonItem detail={false} button color={i18n.language === language.id ? 'primary' : 'light'} onClick={() => i18n.changeLanguage(language.id)} className="item-accordion" lines="none" key={index}>
                    <IonLabel >{language.label}</IonLabel>
                </IonItem>
                )))}
            </div> 
            </div>
               
            <div className="listGroup" id="music" onClick={(e) => {showel(e); audioController()}}>
                <IonItem detail={false} button className="item-stable" lines="none">
                        <IonLabel>{t('menu.music')}: {t(audioState)}</IonLabel>
                </IonItem>
            </div>

            <IonMenuToggle autoHide={false} >             
            <div className="listGroup" id="info" onClick={(e) => {showel(e); showModal()}}>
                    <IonItem detail={false} button className="item-stable" lines="none">
                            <IonLabel>{t('menu.info')}</IonLabel>
                    </IonItem>
            </div>
            </IonMenuToggle>

            <IonMenuToggle autoHide={false} >             
            <div className="listGroup" id="info" onClick={(e) => {showel(e); showViaInfoModal()}}>
                    <IonItem detail={false} button className="item-stable" lines="none">
                            <IonLabel>{t('menu.viaInfo')}</IonLabel>
                    </IonItem>
            </div>
            </IonMenuToggle>
            <IonMenuToggle autoHide={false} >  
            <div className="listGroup" id="donate" onClick={(e) => {showel(e); showDonateModal()}}>
                    <IonItem detail={false} button className="item-stable" lines="none">
                            <IonLabel>{t('menu.donate')}</IonLabel>
                    </IonItem>
            </div>
            </IonMenuToggle>
            <div className="listGroup" id="rate" onClick={(e) => {showel(e)}}>
                    <IonItem detail={false} button className="item-stable" lines="none">
                            <IonLabel>{t('menu.rate')}</IonLabel>
                    </IonItem>
            </div>

            
       </div>


       
    )
}
