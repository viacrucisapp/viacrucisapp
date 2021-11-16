import React from 'react';
import { IonCard, IonRow, IonCol, IonGrid, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/react';
import { useTranslation } from "react-i18next"
import './LectureCard.css'

type LectureCardProps = {
    lecture: {title: string, subTitle: string, body: string, images:{miniature, full}, audio, id: number};
    images: any,

}

export const LectureCard = ({lecture, images} : LectureCardProps) => {

    const [t, i18n] = useTranslation("lectures");
    console.log(lecture.images.miniature)

    return (
        <IonCard className="lecture-card" href={`lectures/${lecture.title}`}>
            <IonRow>
                <IonCol>
                    <img className="lecture-card__image" alt="Artist painting" src={images[lecture.id].small} />
                </IonCol>
                <IonCol>
                    <IonCardTitle className="lecture-card__title">{t(lecture.title)}</IonCardTitle>
                    <IonCardContent className="lecture-card__subtitle">{t(lecture.subTitle)}</IonCardContent>
                </IonCol>
            </IonRow>
        </IonCard>
    )
}

