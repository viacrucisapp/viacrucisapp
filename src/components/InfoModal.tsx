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

  import { useTranslation, Trans } from "react-i18next"
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
                      <Trans>
                       {t('main.aboutBody')}
                      </Trans>  
                    <p onClick={() => {setModalScreen('privacy')}}><u>{t('main.privacy')}</u></p>
                    <p onClick={() => {setModalScreen('terms')}}><u>{t('main.terms')}</u></p>
                </div>
          
  
                <div className="ion-text-center developedDiv">
                  <p>{t('main.developed')}</p>
                  <a href='https://fluo.digital'><img src={fluoLogo} className='fluoLogo' alt='Fluo Logo'></img></a>                    
                </div>
              </div>
          )
          break;
      
        case 'terms':
          return (
            <div className="modal_textInfo ion-text-center">
              <h2 className='legalTitle'> {t('main.terms')} </h2>
              <p>
                {t('main.termsBody')}
              </p>
            </div>
          )
          break
        case 'privacy':
          return (
            <div className="modal_textInfo ion-text-center">
              <h2 className='legalTitle'> {t('main.privacy')} </h2>
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
          <IonHeader mode="md" translucent className="ion-no-border">
            <IonToolbar mode='md'>

              <IonButtons slot="start">
                <IonButton mode='md' onClick={modalScreen !== 'info' ? () => {setModalScreen('info')} : () => {closeModal()}}>
                  <IonIcon mode='md' slot="icon-only" icon={arrowBackOutline}  >
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
  