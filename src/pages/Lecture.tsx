import { 
  IonBackButton, 
  IonButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Lecture.css';
import { useTranslation, Trans } from "react-i18next";
import  imageData  from '../assets/images/imageData'; 
import { useEffect, useState, useContext } from 'react';
import { NavContext, useIonRouter } from '@ionic/react'

const Page: React.FC = () => {
 
  const { name } = useParams<{ name: string; }>();
  const [t, i18n] = useTranslation("lectures");
  const router = useIonRouter();
  type lecturesType = {
    title: string, subTitle: string, id: number, body: string
  }
  type imageType = {
    id: number, full:string, small: string
  }
  
  let arrayLectures: lecturesType[] = t("list", { returnObjects: true });


let lectura: lecturesType, imagen: imageType;
   
arrayLectures.filter(lect => lect.title === name).map(filtered=> {
 console.log(filtered);
 lectura = filtered;
 imagen = imageData[filtered.id]
})    
  

const displayLecture = () => {
  return arrayLectures.filter(lect => lect.title === name).map(filtered=>      
       (
      <>
      <p>{t(filtered.subTitle)}</p>
      <Trans t={t}>
      {t(filtered.body)}
      </Trans>
      </>
      )
    )
}

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar >
          
        <IonButtons slot="start">
          <IonBackButton defaultHref="/lectures" />
        </IonButtons>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img src={imagen.full} alt="artist painting"/>
        <p>{lectura.subTitle}</p>  
        <Trans>    
          <p>{lectura.body}</p>
        </Trans>
        <IonButton size="large" color="dark">ANTERIOR</IonButton>
        <IonButton size="large" color="favorite" shape="round">SHARE</IonButton>
        <IonButton size="large" color="primary">SIGUIENTE</IonButton>
      </IonContent>

      
    </IonPage>
  );
};

export default Page;
