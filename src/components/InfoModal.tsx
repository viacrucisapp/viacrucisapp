import {
   
    IonModal,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons
  
  } from '@ionic/react';
  
  import './InfoModal.css'
  import crossImg from '../assets/images/cross.svg'  
  import fluoLogo from '../assets/images/fluo.svg'  

  import { useTranslation } from "react-i18next"
  

  interface ModalProps {
    setShowModal,
    showModal
  }
  
  
  const InfoModal: React.FC<ModalProps> = ({setShowModal, showModal}) => {
    const [t, i18n] = useTranslation("global");  
  
    return (
      
      
        <IonModal class=""  isOpen={showModal}>
          <IonHeader translucent>
            <IonToolbar>
              
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)} color="primary">Cerrar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent color="medium" fullscreen>
          
            <IonGrid>
              <IonRow class="ion-align-items-around">
                <IonCol class="columnModal">
                  <div className="ion-text-center ">
                    <img src={crossImg} alt="hand drawed cross" />
                    <p>Via Crucis App</p>
                    <p>Version 2.3.1</p>
                    <p><a>{t('main.privacy')}</a></p>
                    <p><a>{t('main.terms')}</a></p>
                 </div>
            

            <div className="ion-text-center">
              <p>{t('main.developed')}</p>
              <img src={fluoLogo} alt='Fluo Logo'></img>
              
            </div>
            
                </IonCol>
              </IonRow>
            </IonGrid>
            

          </IonContent> 
        </IonModal>  
        
    );
  };
  
  export default InfoModal;
  