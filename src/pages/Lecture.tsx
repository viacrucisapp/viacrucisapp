import { 
  IonBackButton, 
  IonButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
  IonModal,
 } from '@ionic/react';
import { useParams, useRouteMatch } from 'react-router';
import './Lecture.css';
import { useTranslation, Trans } from "react-i18next";
import  imageData  from '../assets/images/imageData'; 
import { useIonRouter } from '@ionic/react';
import { Iimages, Ilectures} from "../common/types";
import { useEffect, useState, useRef } from 'react';
import languages from '../translations/es/lectures.json'

const Page: React.FC = () => {
  const isMounted = useRef(true)
  const { name } = useParams<{ name: string; }>();
  const match: any = useRouteMatch('/lectures/:name')
  const [t, i18n] = useTranslation("lectures");
  const [showModal, setShowModal] = useState(false);
  const [lecturaIndex, setLecturaIndex] = useState<number>(0);
  const [links, setLinks] = useState<{next?: string | boolean, prev?: string | boolean}>({})
  //let arrayLectures: Ilectures[] = t("list", { returnObjects: true });
  //const router = useIonRouter();
  useIonViewDidEnter(()=>{
    let current;
    current = languages.list.find(lecture => lecture.title === match.params.name);
    isMounted.current && setLecturaIndex(current.id);
    console.log('enter')
    console.log(isMounted.current)

    
  })



  //arrayLectures[currentIndex].id === 0
  useIonViewDidLeave(()=>{
    isMounted.current = false
    console.log('leave')
  })


  const indexCheck = (current) => {
    if(current.id <= 0){
      
    }
  }
  /*
  useEffect(()=>{
   
    let current;
    current = languages.list.find(lecture => lecture.title === match.params.name);
    //setLecturaIndex(current.id)
    console.log('%cLECTURA INDEX', "color: purple; background-color: yellow")
    console.log(match.params.name);
    console.log(current)
  }, [])*/
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
        <img src={imageData[lecturaIndex].full} alt="artist painting"/>
        <p>{t(`list.${lecturaIndex}.subTitle`)}</p>  
        <Trans> 
          
        {t(`list.${lecturaIndex}.body`)}
           
        </Trans>
        <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
      </IonModal>
        <IonButton size="large" color="dark">ANTERIOR</IonButton>
        <IonButton onClick={() => setShowModal(true)} size="large" color="favorite" shape="round">SHARE</IonButton>
        <IonButton size="large" color="primary">SIGUIENTE</IonButton>
      </IonContent>

      
    </IonPage>
  );
};

export default Page;
