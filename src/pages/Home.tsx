import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Home.css';
import { useTranslation } from "react-i18next";
import { LectureCard } from '../components/LectureCard';
import  imageData  from '../assets/images/imageData'; 

const Home: React.FC = () => {

  
  const [t, i18n] = useTranslation("lectures");
  let arrayLectures: {title: string, subTitle: string, body: string, images:{miniature, full}, audio, id: number}[] = t("list", { returnObjects: true });

/*  function importAll(r) {
    return r.keys().map(r);
  }
// @ts-ignore
  const imagesHome = importAll(require.context('../assets/images/home', false, /\.(png|jpe?g|svg)$/))
  const imagesInner= importAll(require.context('../assets/images/inner', false, /\.(png|jpe?g|svg)$/))
*/
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          
          <IonTitle>Home</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
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


