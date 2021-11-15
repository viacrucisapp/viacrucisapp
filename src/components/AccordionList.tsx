import { IonCard, IonRow, IonCol, IonGrid, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonItem, IonLabel } from '@ionic/react';
import { useTranslation } from "react-i18next"
import { type } from 'os';
import { useState } from 'react';
import './AccordionList.css';

type LectureCardProps = {
    title: string;
    subTitle: string;
}

export const AccordionList = () => {
    

    const languages: { id: string, label: string }[] = [
        { "id": "es", "label": "Español" },
        { "id": "en", "label": "English" },
        { "id": "de", "label": "Deutsch" },
        { "id": "it", "label": "Italiano" },
        { "id": "fr", "label": "Français" }        
    ];

    const menuItems = [
        { "name": "language", "subMenu": languages},
        { "name": "music", "subMenu": null},
        { "name": "donate", "subMenu": null},
        { "name": "rate", "subMenu": null},
        { "name": "info", "subMenu": null},
    ]

    const [clicked, setClicked] = useState(undefined)

    //armar menu mappeable y cambiar id x index
    const toggle = id => {
        if (clicked === id) {
            return setClicked(null)
        }
        setClicked(id)
    }

    const [t, i18n] = useTranslation("global");

    return (
       <div>

            {menuItems.map((item, index) => (
                (item.subMenu) 
                ?
                (<div className="listGroup" onClick={() => toggle(index)} key={index}>
                <IonItem className="item-stable">
                        <IonLabel>{t(`menu.${item.name}`)}</IonLabel>
                </IonItem>

                
                <div className={`subMenu-group ${clicked === index ? 'active' : ''}`}> 
                {(languages.map((language, index) => (
                    <IonItem onClick={() => i18n.changeLanguage(language.id)} className="item-accordion" lines="none" key={index}>
                        <IonLabel class="ion-margin-start">{language.label}</IonLabel>
                    </IonItem>
                    )))}
                </div> 
                
                
                </div>
                )

                : 
                (<div className="listGroup" onClick={() => toggle(index)} key={index}>
           <IonItem className="item-stable">
                <IonLabel>{t(`menu.${item.name}`)}</IonLabel>
           </IonItem>
           </div>) 
                
                
            ))}
            
       </div>


       
    )
}
