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
    IonIcon,
    IonTitle
  
  } from '@ionic/react';
  
  import './InfoModal.css'
  import prayIcon from '../assets/images/prayIcon.svg'  
  import fluoLogo from '../assets/images/fluo.svg' 
  import logoNew from '../assets/images/logoNew.png' 


  import { useTranslation, Trans } from "react-i18next"
  import { useState, useRef } from 'react';
import { trendingUpOutline } from 'ionicons/icons';
import { arrowBackOutline } from 'ionicons/icons';

  interface ModalProps {
    showDonateModal,
    setShowDonateModal
  }  
  
  
  const DonateModal: React.FC<ModalProps> = ({setShowDonateModal, showDonateModal}) => {
    const [t, i18n] = useTranslation("global");  

    const closeModal = () => {
      setShowDonateModal(false);
    }   

    return (
            
        <IonModal onDidDismiss={() => {closeModal()}} class=""  isOpen={showDonateModal}>
          <IonHeader mode="md" translucent className="ion-no-border">
            <IonToolbar mode='md'>

              <IonButtons slot="start">
                <IonButton mode='md' onClick={() => {closeModal()}}>
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
                  <div className="modal_info">
                    <div className="ion-text-center ">                        
                      <Trans>
                       {t('main.donateBody')}
                      </Trans> 
                    </div>
              
                    <IonButton class='donateModal__donateBtn' mode='md' color="primary" shape='round'>{t('main.donateBtn')}</IonButton>   
      
                    <div className="ion-text-center">
                      <img src={logoNew} alt="app icon" />                     
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
            

          </IonContent> 
        </IonModal>  
        
    );
  };
  
  export default DonateModal;
  