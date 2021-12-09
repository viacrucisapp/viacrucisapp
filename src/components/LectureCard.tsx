import React from 'react';
import { IonCard, IonRow, IonCol, IonGrid, IonImg, IonCardContent } from '@ionic/react';
import { useTranslation } from "react-i18next"
import './LectureCard.css'
import { NavContext, useIonRouter } from '@ionic/react';
import { Ilectures, Iimages} from "../common/types";

type LectureCardProps = {
    lecture: Ilectures;
    images: Iimages[],

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
        <IonCard button className="lecture-card" mode="ios"  routerLink={`/lectures/${lecture.title}`} >
            <IonGrid>
            <IonRow>
                <IonCol size="3" >
                    <IonImg className="lecture-card__image" alt="Artist painting" src={images[lecture.id].full} />
                </IonCol>
                <IonCol size="9">
                    <IonCardContent>
                        <h2 className="lecture-card__title">{t(lecture.title)}</h2> 
                        <h3 color="primary" className="lecture-card__text">{t(lecture.subTitle)}</h3>
                    </IonCardContent>
                </IonCol>
            </IonRow>
            </IonGrid>
            
        </IonCard>
        
    )
}

