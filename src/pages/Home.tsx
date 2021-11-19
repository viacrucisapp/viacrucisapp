import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Home.css';
import { useTranslation } from "react-i18next";
import { LectureCard } from '../components/LectureCard';
import  imageData  from '../assets/images/imageData';
import { Iimages, Ilectures} from "../common/types" 

const Home: React.FC = () => {

  
  const [t, i18n] = useTranslation("lectures");
  let arrayLectures: Ilectures[] = t("list", { returnObjects: true });
  

  return (
    <IonPage>
    <IonToolbar>
        
        <IonTitle>Estaciones</IonTitle>
        <IonButtons slot="end">
        <IonMenuButton />
        </IonButtons>
    </IonToolbar>

      <IonContent fullscreen color="light">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        {
          
          arrayLectures.map((lecture, index) => (
            
            <LectureCard images={imageData} key={index} lecture={lecture}/>
          ))
        }

      </IonContent>
    </IonPage>
  );
};

export default Home


