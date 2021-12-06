import {  
  IonButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonToolbar,
  useIonViewWillEnter,
  useIonViewDidEnter,
  useIonViewWillLeave,
  useIonViewDidLeave,
  IonModal, 
  IonIcon,
 } from '@ionic/react';
import { useParams, useRouteMatch } from 'react-router';
import './Lecture.css';
import { useTranslation, Trans } from "react-i18next";
import  imageData  from '../assets/images/imageData'; 
import { useState, useRef } from 'react';
import languages from '../translations/es/lectures.json';
import { useHistory } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';

const Page: React.FC = () => {
  let history = useHistory();
  //const isMounted = useRef(true)
  const match: any = useRouteMatch('/lectures/:name');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [t, i18n] = useTranslation("lectures");
  const [showModal, setShowModal] = useState(false);
  const [lecturaIndex, setLecturaIndex] = useState<number>(0);
  const [btnLinks, setBtnLinks] = useState<{next?: string , prev?: string }>({});
  const [backBtnDisable, setBackBtn] = useState<boolean>(false);
  const [nextBtnDisable, setNextBtn] = useState<boolean>(false);
  const contentRef = useRef<HTMLIonContentElement | null>(null);
  const heightRef = useRef<HTMLDivElement | null>(null);
  const scrollableRef = useRef<HTMLDivElement | null>(null);
  
  useIonViewWillEnter(()=>{
    let current;
    current = languages.list.find(lecture => lecture.title === match.params.name);
    if(current){
      setLecturaIndex(current.id);
      console.log('enter lecture');
      console.log(current)

      setBtnLinks({
        next: current.id < 13 ? `/lectures/${languages.list[current.id+1].title}` : '/lectures', 
        prev: current.id > 0 ? `/lectures/${languages.list[current.id-1].title}` : '/lectures'
      });
      indexCheck(current);
      scrollToTop()
      //window.addEventListener("ionScroll", getScroll)
    }
    
    else{
      console.error('LECTURE NOT FOUND')
      history.replace('/lectures')
    }
    
  }, [match?.params])


  const scrollToTop = () => {
    contentRef.current && contentRef.current.scrollToTop(500);
  }

  useIonViewWillLeave(()=>{
    console.log('will leave lecture');
    //window.removeEventListener("scroll", getScroll);

  }, [match?.params])

  useIonViewDidLeave(()=>{
    console.log('did leave lecture');
  }, [match?.params])

  const indexCheck = (current) => {
    console.log('indexCheck')
    if(current.id <= 0){
      setBackBtn(true);     
    };
    if(current.id >= 13){
      setNextBtn(true);      
    };
    if(current.id > 0){
      setBackBtn(false);     
    };
    if(current.id < 13){
      setNextBtn(false);     
    };
  }
  
  function getScroll() {
    if(scrollableRef.current && heightRef.current && scrollableRef.current.offsetHeight > heightRef.current.offsetHeight) {
      console.log('TOCA EL TOP!!!!!')
      console.log(heightRef.current.offsetTop)
      console.log(scrollableRef.current.offsetTop)
      console.log(contentRef.current.getScrollElement())
      return
    }
    
    else {
      console.log('no toca'); 
      console.log(heightRef.current)
    }
  }

  
  return (
    <IonPage>
      
      <IonHeader className="ion-no-border">
        <IonToolbar  >
        <IonButtons slot="start">
          <IonButton routerLink="/lectures" routerDirection="back" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '200px'}}>
            <IonIcon slot="icon-only" icon={arrowBackOutline}  >
            </IonIcon>
            
          </IonButton>
        </IonButtons>
          <IonButtons slot="end" >
            <IonMenuButton style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}} className="menuBtn" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef} scrollEvents={true} fullscreen>
        
        <img className="lecture_image" src={imageData[lecturaIndex].full} alt="artist painting"/>
        <div className="lecture_contentCard" ref={scrollableRef}>
          <p>{t(`list.${lecturaIndex}.subTitle`)}</p>  
          <Trans> 
          {t(`list.${lecturaIndex}.body`)}
          </Trans>
          <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <p>This is modal content</p>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>        
          <IonButton 
            size="default" 
            disabled={backBtnDisable} 
            color="dark" 
            routerLink={btnLinks.prev}                             
            routerDirection="back">
            ANTERIOR
          </IonButton>
          <IonButton 
            onClick={() => setShowModal(true)} 
            size="default" color="favorite" 
            shape="round">
            SHARE
          </IonButton>
          <IonButton 
            size="default" 
            disabled={nextBtnDisable} 
            color="primary" 
            routerLink={btnLinks.next}
            routerDirection="forward">  
          SIGUIENTE
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
