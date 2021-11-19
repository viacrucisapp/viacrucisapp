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

  const dynamicNavigate = (path, direction) =>{
    const action = direction == "forward" ? "push" : "pop";
    router.push(path, direction, action)
  }

  const navigateBack = () => {
    if(router.canGoBack()){
      router.goBack();
      console.log('puedo');
      return 
    }
    console.log('entra?')
    router.push("/lectures", "back", "push")
  }


  const previousLecture = () => {
    if(arrayLectures[currentIndex].id !== 0){
      router.push(`/lectures/${arrayLectures[currentIndex-1].title}`, "forward", "push");
      //setCurrentIndex(estacion.id);
    }
    return
  }

 

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


useIonViewDidEnter(() => {
  console.log('ionViewDidEnter event fired');
});

useIonViewDidLeave(() => {
  console.log('ionViewDidLeave event fired');
});

useIonViewWillEnter(() => {
  console.log('ionViewWillEnter event fired');
});

useIonViewWillLeave(() => {
  console.log('ionViewWillLeave event fired');
});





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
      <IonBackButton color="primary">back</IonBackButton>
      <IonButton disabled={arrayLectures[currentIndex].id === 0 ? true : false} routerLink={arrayLectures[currentIndex].id !== 0 ? `/lectures/${arrayLectures[currentIndex-1].title}` : null}>
        {arrayLectures[currentIndex].id === 0 ? '--' : (arrayLectures[currentIndex-1].title)}
      </IonButton>
      </IonContent>

      
    </IonPage>
  );
};

export default Page;
