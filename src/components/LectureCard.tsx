import React from 'react';
import { IonCard, IonRow, IonCol, IonGrid, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonCardSubtitle } from '@ionic/react';
import { useTranslation } from "react-i18next"
import './LectureCard.css'
import { NavContext, useIonRouter } from '@ionic/react'

type LectureCardProps = {
    lecture: {title: string, subTitle: string, body: string, images:{miniature, full}, audio, id: number};
    images: any,

}


export const LectureCard = ({lecture, images} : LectureCardProps) => {

    const [t, i18n] = useTranslation("lectures");

    const router = useIonRouter();

    const dynamicNavigate = (path, direction) =>{
      const action = direction == "forward" ? "push" : "pop";
      router.push(path, direction, action)
    }
  
    const navigateBack = () => {
      if(router.canGoBack()){
        router.goBack();
        console.log('puedo')
      }
      return router.push("/", "back", "push")
    }

    return (
        <IonCard button className="lecture-card" mode="ios" color="danger"  onClick={() => {router.push(`lectures/${lecture.title}`, "forward", "push")}} >
            <IonGrid>
            <IonRow>
                <IonCol size="2">
                    <img className="lecture-card__image" alt="Artist painting" src={images[lecture.id].full} />
                </IonCol>
                <IonCol size="10">
                    
                        
                        <h2 className="lecture-card__title">{t(lecture.title)}</h2> 
                        <h3 color="primary" className="lecture-card__text">{t(lecture.subTitle)}</h3>
                        
                    
                </IonCol>
            </IonRow>
            </IonGrid>
            
        </IonCard>
        
    )
}

