import { IonCard, IonRow, IonCol, IonGrid, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonItem, IonLabel } from '@ionic/react';
import { useTranslation } from "react-i18next"
import { type } from 'os';
import { useEffect, useState } from 'react';
import './AccordionList.css';

type AccordionListProps = {
    audioController: Function ;
}

const languages: { id: string, label: string }[] = [
    { "id": "es", "label": "Español" },
    { "id": "en", "label": "English" },
    { "id": "de", "label": "Deutsch" },
    { "id": "it", "label": "Italiano" },
    { "id": "fr", "label": "Français" }        
];

export const AccordionList = ({audioController, audioState}) => {
    

    const [clicked, setClicked] = useState(undefined);   

    const showel = e => {  
        if (clicked === e.currentTarget.id) {
            return setClicked(null)
        }
        setClicked(e.currentTarget.id)
    }
    const [t, i18n] = useTranslation("global");

    const playButton = (e) => {
        showel(e);
        audioController();
    }

    return (
       <div>

            <div className="listGroup" id="language" onClick={(e) => {showel(e)}}>
                <IonItem button className="item-stable" lines="none">
                        <IonLabel id="music">{t('menu.language')}</IonLabel>
                </IonItem>
            <div className={`subMenu-group ${clicked === 'language' ? 'active' : ''}`}> 
            {(languages.map((language, index) => (
                <IonItem button color={i18n.language === language.id ? 'primary' : 'light'} onClick={() => i18n.changeLanguage(language.id)} className="item-accordion" lines="none" key={index}>
                    <IonLabel class="ion-margin-start">{language.label}</IonLabel>
                </IonItem>
                )))}
            </div> 
            </div>
               
            <div className="listGroup" id="music" onClick={(e) => {showel(e); audioController()}}>
                <IonItem button className="item-stable" lines="none">
                        <IonLabel>{t('menu.music')}: {t(audioState)}</IonLabel>
                </IonItem>
            </div>

            <div className="listGroup" id="donate" onClick={(e) => {showel(e)}}>
                    <IonItem button className="item-stable" lines="none">
                            <IonLabel>{t('menu.donate')}</IonLabel>
                    </IonItem>
            </div>

            <div className="listGroup" id="rate" onClick={(e) => {showel(e)}}>
                    <IonItem button className="item-stable" lines="none">
                            <IonLabel>{t('menu.rate')}</IonLabel>
                    </IonItem>
            </div>

            <div className="listGroup" id="info" onClick={(e) => {showel(e)}}>
                    <IonItem button className="item-stable" lines="none">
                            <IonLabel>{t('menu.info')}</IonLabel>
                    </IonItem>
            </div>

            
       </div>


       
    )
}
