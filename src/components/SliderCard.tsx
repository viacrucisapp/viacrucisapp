import { IonCard, IonCardContent } from '@ionic/react';
import { useTranslation } from "react-i18next"
import './SliderCard.css'
import { Ilectures, Iimages} from "../common/types";

type LectureCardProps = {
    lecture: Ilectures;
    images: Iimages[],
}

export const SliderCard = ({lecture, images} : LectureCardProps) => {

    const [t, i18n] = useTranslation("lectures");
       
      return (
        <IonCard button style={{backgroundImage :`url(${(images[lecture.id].small)}`}}  class="slider-card" mode="ios"  routerLink={`/lectures/${lecture.title}`} >
            <IonCardContent class="slider-card__content">
                <h2 className="slider-card__title">{t(lecture.title)}</h2> 
                <h3 color="primary" className="slider-card__text">{t(lecture.subTitle)}</h3>
            </IonCardContent>
            <div className="slider-card__gradient"></div>
        </IonCard>
        
    )
}

