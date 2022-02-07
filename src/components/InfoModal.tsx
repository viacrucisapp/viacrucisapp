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
  import { useTranslation, Trans } from "react-i18next"
  import { useState } from 'react';
import { arrowBackOutline } from 'ionicons/icons';
import logoNew from '../assets/images/logoNew.svg' 

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

               
                <img className='DonateModal__VCLogo' src={logoNew} alt="app icon" /> 
                <div className="ion-text-center modal_textContent">                    
                      <Trans  t={t} i18nKey="main.aboutBody">
                       Text <a href="http://luzlibre.com.ar/"><u>Luz Libre</u></a> Text
                      </Trans>  
                    <p className='legalLinks' onClick={() => {setModalScreen('privacy')}}><u>{t('main.privacy')}</u></p>
                    <p className='legalLinks' onClick={() => {setModalScreen('terms')}}><u>{t('main.terms')}</u></p>
                </div>
          
  
              </div>
          )
      
        case 'terms':
          return (
            <div className="modal_textInfo ion-text-center">
              <h2 className='modalSubTitle'> {t('main.terms')} </h2>
              <Trans  t={t} i18nKey='main.termsBody'>                
              </Trans>
            </div>
          )

        case 'privacy':
          return (
            <div className="modal_textInfo ion-text-center">
              <h2 className='modalSubTitle'> {t('main.privacy')} </h2>
              <Trans  t={t} i18nKey='main.privacyBody'>                
              </Trans>
            </div>
          )
      }
    }

    return (
      
        <IonModal onDidDismiss={() => {closeModal()}}  isOpen={showModal}>
          <IonHeader mode="md" translucent className="ion-no-border">
            <IonToolbar color={modalScreen !== 'info' ? 'medium' : 'transparent'} mode='md'>

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
  