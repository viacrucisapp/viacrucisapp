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

    return (
        <IonCard button className="lecture-card" mode="ios"  routerLink={`/lectures/${lecture.title}`} >
            <IonGrid>
            <IonRow>
                <IonCol size="4">
                    <IonImg className="lecture-card__image" alt="Artist painting" src={images[lecture.id].small} />
                </IonCol>
                <IonCol size="8">
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

