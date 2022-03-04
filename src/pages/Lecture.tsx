import {  
  IonButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonToolbar,
  useIonViewWillEnter,
  useIonViewWillLeave,
  useIonViewDidLeave,
  IonModal, 
  IonIcon,
  Gesture,
  createGesture,
  NavContext,
  isPlatform
 } from '@ionic/react';
import { useRouteMatch } from 'react-router';
import './Lecture.css';
import { useTranslation, Trans } from "react-i18next";
import  imageData  from '../assets/images/imageData'; 
import { useState, useRef, useEffect, useContext } from 'react';
import languages from '../translations/es/lectures.json';
import { useHistory } from 'react-router-dom';
import { arrowBackOutline, chevronBackOutline, chevronForwardOutline, paperPlaneOutline } from 'ionicons/icons';

const Page: React.FC = () => {
  let history = useHistory();
  const match: any = useRouteMatch('/lectures/:name');
  const [t, i18n] = useTranslation("lectures");
  const [tGlobal] = useTranslation("global");

  const [showModal, setShowModal] = useState(false);
  const [lecturaIndex, setLecturaIndex] = useState<number>(0);
  const [btnLinks, setBtnLinks] = useState<{next?: string , prev?: string }>({});
  const [backBtnDisable, setBackBtn] = useState<boolean>(false);
  const [nextBtnDisable, setNextBtn] = useState<boolean>(false);
  const contentRef = useRef<HTMLIonContentElement | null>(null);
  const heightRef = useRef<HTMLDivElement | null>(null);
  const scrollableRef = useRef<HTMLDivElement | null>(null);
  const prevBtnRef = useRef<HTMLIonButtonElement| null>(null);
  const nextBtnRef = useRef<HTMLIonButtonElement | null>(null);
  const {navigate} = useContext(NavContext)

  
  useIonViewWillEnter(()=>{
    let current;
    current = languages.list.find(lecture => lecture.title === match.params.name);
    if(current){
      setLecturaIndex(current.id);
      setBtnLinks({
        next: current.id < 13 ? `/lectures/${languages.list[current.id+1].title}` : '/lectures', 
        prev: current.id > 0 ? `/lectures/${languages.list[current.id-1].title}` : '/lectures'
      });
      indexCheck(current);
      scrollToTop();
      scrollableRef.current.scrollTop = 0      
      scrollableRef.current.style.top = `0px`
    }
    
    else{
      history.replace('/lectures')
    }
  }, [match?.params])

  const scrollToTop = () => {
    contentRef.current && contentRef.current.scrollToTop(500);
    
  }

  useIonViewWillLeave(()=>{
    scrollableRef.current.scrollTop = 0;
    scrollableRef.current.style.top = `0px`
  }, [contentRef])
 
  useIonViewDidLeave(()=>{
  }, [match?.params])

  const indexCheck = (current) => {
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


const scrollingFn = () => {
  
  if(scrollableRef.current.scrollTop < 50) {    
        heightRef.current.style.marginTop = `-${scrollableRef.current.scrollTop}px`;
        heightRef.current.style.borderRadius= `${scrollableRef.current.scrollTop/2}px`
  }
  else {
    heightRef.current.style.marginTop = `-50px`;
    heightRef.current.style.borderRadius= `25px`
  }
}

useEffect(() => {
  const gesture: Gesture = createGesture({
    el: contentRef.current!,
    gestureName: 'my-gest',
    threshold: 70,
    gesturePriority: 42,
    onMove: (detail: any) => {
      onMove(detail);
    }
  });
;
  gesture.enable();
  return() => {gesture.destroy()}

});

const onMove = (detail) => {

  if(detail.currentX < detail.startX) {
    navigate(btnLinks.next, 'forward')
  }
  if(detail.currentX > detail.startX) {
    navigate(btnLinks.prev, 'back')
  }
}

  return (
    <IonPage>
      
      <IonHeader mode={isPlatform('ios') ? 'ios' : 'md'} className="ion-no-border lecture_header">
        <IonToolbar mode="md" >
        <IonButtons slot="start">
          <IonButton mode="md" routerLink="/lectures" routerDirection="back" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '200px'}}>
            <IonIcon slot="icon-only" icon={arrowBackOutline}  >
            </IonIcon>
            
          </IonButton>
        </IonButtons>
          <IonButtons slot="end" >
            <IonMenuButton mode="md" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}} className="menuBtn" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false} forceOverscroll={true} class="lectureWrapper" ref={contentRef} scrollEvents={true} fullscreen>
        
        <img className="lecture_image" src={imageData[lecturaIndex].full} alt="artist painting"/>
        <div className="lecture_contentCard" ref={heightRef}>
          <div className="lecture_text-wrapper" onScroll={scrollingFn}  ref={scrollableRef}>
          <div className="topFade"></div>  


            
            <div className="textContent">
              <h1 className="lecture_title">{t(`list.${lecturaIndex}.title`)}</h1>
              <h2 className="lecture_subTitle">{t(`list.${lecturaIndex}.subTitle`)}</h2>
              <Trans>
              {t(`list.${lecturaIndex}.body`)}
              </Trans>
            </div>
            <div className="lecture_buttons">
                
              <IonButton 
                mode="md"
                size="default" 
                disabled={backBtnDisable} 
                color="primary" 
                ref={prevBtnRef}
                routerLink={btnLinks.prev}                             
                routerDirection="back"
                class="lecture_navBtn"
                shape="round"              
                style={ { visibility: backBtnDisable ? 'hidden' : 'visible'} }
              >
                {languages.list[lecturaIndex-1] ? languages.list[lecturaIndex-1].title : '-'}
                <IonIcon slot="start" icon={chevronBackOutline}  />               
              </IonButton>

              
              <IonButton 
                size="default" 
                disabled={nextBtnDisable} 
                color="primary" 
                ref={nextBtnRef}
                routerLink={btnLinks.next}
                routerDirection="forward"
                class="lecture_navBtn"
                shape="round"
                style={ { visibility: nextBtnDisable ? 'hidden' : 'visible'} }
                mode="md"
              >  
                {languages.list[lecturaIndex+1] ? languages.list[lecturaIndex+1].title : '-'}
                <IonIcon slot="end" icon={chevronForwardOutline}  />    
              </IonButton>
              
            </div>
            <div className="bottomFade"></div>  
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;