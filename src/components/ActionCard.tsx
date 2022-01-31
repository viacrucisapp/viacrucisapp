import { IonCard, IonRow, IonCol, IonGrid, IonImg, IonCardContent, IonButton } from '@ionic/react';
import { useTranslation } from "react-i18next"
import './ActionCard.css'


type ActionCardProps = {
    body: any ;
    image: string,
    actionLink: Function

}


export const ActionCard = ({body, image, actionLink} : ActionCardProps) => {

    const [t, i18n] = useTranslation("global");

    return (
        <IonCard className="action-card" mode="ios" >
            <IonGrid class="action-card__grid">
            <IonRow class="action-card__grid">         
                <IonCol size="8">
                    <IonCardContent>
                        <h2 className="action-card__title">{t(body)}</h2> 
                        <IonButton color="primary"  onClick={(e) => {actionLink()}}>{t('main.moreBtn')} </IonButton>
                    </IonCardContent>
                </IonCol>
                <IonCol size="4" class="action-card__image-container">
                    <IonImg className="action-card__image" alt="Artist painting" src={image} />
                </IonCol>
            </IonRow>
            </IonGrid>
            
        </IonCard>
        
    )
}

