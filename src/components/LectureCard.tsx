import React from 'react';
import { IonCard, IonRow, IonCol, IonGrid, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/react';
import { useTranslation } from "react-i18next"
import './LectureCard.css'

type LectureCardProps = {
    title: string;
    subTitle: string;
    lecture: {title, subTitle, body, images:{miniature, full}, audio, id};
    images: any
}

export const LectureCard = ({lecture, images} : LectureCardProps) => {

    const [t, i18n] = useTranslation("lectures");
    console.log(lecture.images.miniature)

    return (
        <IonCard className="lecture-card">
            <IonRow>
                <IonCol>
                    <img className="lecture-card__image" alt="Artist painting" src={images.imagesHome[lecture.id].default} />
                </IonCol>
                <IonCol>
                    <IonCardTitle className="lecture-card__title">{t(lecture.title)}</IonCardTitle>
                    <IonCardContent className="lecture-card__subtitle">{t(lecture.subTitle)}</IonCardContent>
                </IonCol>
            </IonRow>
        </IonCard>
    )
}

