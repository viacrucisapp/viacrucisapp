import React from 'react';
import { IonCard, IonRow, IonCol, IonGrid, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/react';
import { useTranslation } from "react-i18next"
import { type } from 'os';

type LectureCardProps = {
    title: string;
    subTitle: string;
}

export const LectureCard = ({title, subTitle} : LectureCardProps) => {

    const [t, i18n] = useTranslation("lectures");

    return (
        <IonCard>
            <IonRow>
                <IonCol>
                    <img alt="Artist painting" src="https://i.ibb.co/NS7QXDx/Frame-5.png" />
                </IonCol>
                <IonCol>
                    <IonCardTitle>{title}</IonCardTitle>
                    <IonCardContent>{subTitle}</IonCardContent>
                </IonCol>
            </IonRow>
        </IonCard>
    )
}

