import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewWillLeave, useIonViewWillEnter } from '@ionic/react';
import { useParams } from 'react-router';
import './Home.css';
import { useTranslation } from "react-i18next";
import { LectureCard } from '../components/LectureCard';
import  imageData  from '../assets/images/imageData';
import { Iimages, Ilectures} from "../common/types" 

const Home: React.FC = () => {

  
  const [t, i18n] = useTranslation("lectures");
  let arrayLectures: Ilectures[] = t("list", { returnObjects: true });
  const [tMain] = useTranslation("global");
  useIonViewWillEnter(()=>{
    
    console.log('enter home')
    
  })

  useIonViewWillLeave(()=>{
    
    console.log('leave home')
    
  })
  return (
    <IonPage>
    <IonToolbar color="light" mode="md">
        
        <IonTitle class="toolbarTitle" color="tertiary" size="large">{tMain('main.stations')}</IonTitle>
        <IonButtons slot="end">
        <IonMenuButton />
        </IonButtons>
    </IonToolbar>

      <IonContent forceOverscroll={true} class="mainContent" fullscreen color="light">


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


