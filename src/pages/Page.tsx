import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { useTranslation } from "react-i18next";
import { LectureCard } from '../components/LectureCard';
import { image } from 'ionicons/icons';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [t, i18n] = useTranslation("lectures");

  function importAll(r) {
    return r.keys().map(r);
  }
// @ts-ignore
  const imagesHome = importAll(require.context('../assets/images/home', false, /\.(png|jpe?g|svg)$/))
  const imagesInner= importAll(require.context('../assets/images/inner', false, /\.(png|jpe?g|svg)$/))

  const allImages = {
    "imagesHome": imagesHome,
    "imagesInner": imagesInner
  }

  let arrayLectures = t("list", { returnObjects: true });
  console.log(arrayLectures)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          
          <IonTitle>{name}</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
        {// @ts-ignore 
        
          arrayLectures.map((lecture, index) => (
            // @ts-ignore 
            <LectureCard images={allImages} key={index} lecture={lecture} />
          ))
        }
      </IonContent>
    </IonPage>
  );
};

export default Page;
