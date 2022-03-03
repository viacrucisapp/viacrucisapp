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
  } from '@ionic/react';
  
  import './InfoModal.css'

  import logoNew from '../assets/images/logoNew.svg' 


  import { useTranslation, Trans } from "react-i18next"
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
            
        <IonModal onDidDismiss={() => {closeModal()}} isOpen={showDonateModal}>
          <IonHeader mode="md" translucent className="ion-no-border">
            <IonToolbar mode='md'>

              <IonButtons slot="start">
                <IonButton mode='md' onClick={() => {closeModal()}}>
                  <IonIcon color='dark' mode='md' slot="icon-only" icon={arrowBackOutline}  >
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
                    <img className='DonateModal__VCLogo' src={logoNew} alt="app icon" />      
                    <div className="ion-text-center modal_textContent">                        
                      <Trans>
                       {t('main.donateBody')}
                      </Trans> 
                      <IonButton href='https://viacrucisapp.carrd.co'  class='donateModal__donateBtn' mode='md' color="primary" >{t('main.donateBtn')}</IonButton>   

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
  