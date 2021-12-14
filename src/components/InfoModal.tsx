import {
   
    IonModal,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonIcon
  
  } from '@ionic/react';
  
  import './InfoModal.css'
  import crossImg from '../assets/images/cross.svg'  
  import fluoLogo from '../assets/images/fluo.svg'  

  import { useTranslation } from "react-i18next"
  import { useState, useRef } from 'react';
import { trendingUpOutline } from 'ionicons/icons';
import { arrowBackOutline } from 'ionicons/icons';

  interface ModalProps {
    setShowModal,
    showModal
  }

  
  
  
  const InfoModal: React.FC<ModalProps> = ({setShowModal, showModal}) => {
    const [t, i18n] = useTranslation("global");  
    const [modalScreen, setModalScreen] = useState<string>('info')

    const closeModal = () => {
      setShowModal(false);
      setModalScreen('info')

    }


    const renderScreen = (modalScreen) => {
      switch (modalScreen) {
        case 'info':
          return (
            <div className="modal_info">
                <div className="ion-text-center ">
                    <img src={crossImg} alt="hand drawed cross" />
                    <p>Via Crucis App</p>
                    <p>Version 2.3.1</p>
                    <p onClick={() => {setModalScreen('privacy')}}><u>{t('main.privacy')}</u></p>
                    <p onClick={() => {setModalScreen('terms')}}><u>{t('main.terms')}</u></p>
                </div>
          
  
                <div className="ion-text-center">
                  <p>{t('main.developed')}</p>
                  <a href='https://fluo.digital'><img src={fluoLogo} alt='Fluo Logo'></img></a>                    
                </div>
              </div>
          )
          break;
      
        case 'terms':
          return (
            <div className="modal_textInfo ion-text-center">
              <h2> {t('main.terms')} </h2>
              <p>
                {t('main.termsBody')}
              </p>
            </div>
          )
          break
        case 'privacy':
          return (
            <div className="modal_textInfo ion-text-center">
              <h2> {t('main.privacy')} </h2>
              <p>
                {t('main.privacyBody')}
              </p>
            </div>
          )
          break
      }
    }

    return (
      
      
        <IonModal onDidDismiss={() => {closeModal()}} class=""  isOpen={showModal}>
          <IonHeader translucent className="ion-no-border">
            <IonToolbar>

              <IonButtons slot="start">
                <IonButton  onClick={modalScreen !== 'info' ? () => {setModalScreen('info')} : () => {closeModal()}}>
                  <IonIcon slot="icon-only" icon={arrowBackOutline}  >
                  </IonIcon>
                  
                </IonButton>
              </IonButtons>
              
            </IonToolbar>
          </IonHeader>
          <IonContent color="medium" fullscreen>
          
            <IonGrid>
              <IonRow class="ion-align-items-around">
                <IonCol class="columnModal">
                  {renderScreen(modalScreen)}
                </IonCol>
              </IonRow>
            </IonGrid>
            

          </IonContent> 
        </IonModal>  
        
    );
  };
  
  export default InfoModal;
  