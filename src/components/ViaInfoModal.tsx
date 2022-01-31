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
import { arrowBackOutline } from 'ionicons/icons';
import logoNew from '../assets/images/logoNew.svg' 

  interface ModalProps {
    showViaInfoModal,
    setShowViaInfoModal
  }  

  
  const ViaInfoModal: React.FC<ModalProps> = ({setShowViaInfoModal, showViaInfoModal}) => {
    const [t, i18n] = useTranslation("global");  

    const closeModal = () => {
      setShowViaInfoModal(false);
    }   

    return (
            
        <IonModal onDidDismiss={() => {closeModal()}} class=""  isOpen={showViaInfoModal}>
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
                  <img className='DonateModal__VCLogo' src={logoNew} alt="app icon" />                     

                    <div className="ion-text-center modal_textContent">
                      <div className="">
                        <h2 className='modalSubTitle'>{t('main.viaCrucisInfoTitle')}</h2>
                        <Trans>{t('main.viaCrucisInfo')}</Trans>
                        <h2 className='modalSubTitle'>{t('main.howTo')}</h2>
                        <Trans>
                         {t('main.howToBody')}
                        </Trans>                                     
                                            </div>
                      </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
            

          </IonContent> 
        </IonModal>  
        
    );
  };
  
  export default ViaInfoModal;
  