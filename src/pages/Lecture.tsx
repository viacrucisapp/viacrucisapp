import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Lecture.css';
import { useTranslation, Trans } from "react-i18next";
import  imageData  from '../assets/images/imageData'; 
import { useEffect, useState } from 'react';
import { LectureCard } from '../components/LectureCard';

const Page: React.FC = () => {
 
  const { name } = useParams<{ name: string; }>();
  const [t, i18n] = useTranslation("lectures");
  interface arrayLecturesInterface {
    title: string, subTitle: string, body: string, images:{miniature, full}, audio, id: number
  }
  /*interface imageDataInterface {
    id: number, full: string, small: string
  }*/
  let arrayLectures: any = t("list", { returnObjects: true });
  //let firstArr = arrayLectures[0]
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const[currentImage, setCurrentImage] = useState<any>(imageData[0]);

useEffect(() => {
  arrayLectures.filter((estacion) => {
    if (estacion.title === name) { 
      setCurrentIndex(estacion.id);

      imageData.find((image) => {
        if(image.id === estacion.id){
        setCurrentImage(image)
        }
      })
    };
     
  })
}, [])




/*

<h2>{t(arrayLectures[currentIndex].title)}</h2>
        <h3>{t(arrayLectures[currentIndex].subTitle)}</h3>
        <Trans t={t}>
          {t(arrayLectures[currentIndex].body)}
        </Trans>

console.log(arrayLectures);
console.log(arrayLectures[0]);

console.log('array')
console.log(t(arrayLectures[0].subTitle))
console.log('state')
console.log(t(currentLecture.subTitle))

console.log('DATA')
console.log(data.subTitle)*/
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
        <img src={currentImage.full} alt="painting" />
        <h2>{t(arrayLectures[currentIndex].title)}</h2>
        <h3>{t(arrayLectures[currentIndex].subTitle)}</h3>
        <Trans t={t}>
          {t(arrayLectures[currentIndex].body)}
        </Trans>
      
      </IonContent>
    </IonPage>
  );
};

export default Page;
