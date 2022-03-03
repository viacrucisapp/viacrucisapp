import { IonButtons, IonHeader, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar,  IonButton, IonGrid} from '@ionic/react';

import './Home.css';
import { useTranslation } from "react-i18next";
import { SliderCard } from '../components/SliderCard';
import  imageData  from '../assets/images/imageData';
import { Ilectures} from "../common/types" 
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { EffectCoverflow } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import '@ionic/react/css/ionic-swiper.css';


import viaCrucisLogo from "../assets/images/viaCrucisAppLogo.svg"
import { ActionCard } from '../components/ActionCard';
import aboutApp from "../assets/images/aboutApp.png";
import aboutVia from "../assets/images/aboutVia.png";

interface HomeProps {
  showModal: Function;
  showViaInfoModal: Function;
  showDonateModal: Function
}

const Home: React.FC<HomeProps> = ({showModal, showViaInfoModal, showDonateModal}) => {

  
  const [t, i18n] = useTranslation("lectures");
  let arrayLectures: Ilectures[] = t("list", { returnObjects: true });
  const [tMain] = useTranslation("global");


  return (
    <IonPage class="home__pageBg">
    
    <IonHeader mode="md" class="ion-no-border">
      <IonToolbar  mode="md">
          
          <IonTitle class="toolbarTitle" color="tertiary" size="large"><img src={viaCrucisLogo} /></IonTitle>
          <IonButtons slot="end">
          <IonMenuButton />
          </IonButtons>
      </IonToolbar>
    </IonHeader>
      <IonContent forceOverscroll={false} class="home_bg mainContent" fullscreen={false}>
        <IonGrid>
          <Swiper 
            centeredSlides={true}
            loop={true}
            slidesPerView= {1.25}
            spaceBetween={5}
            speed={500}
         

            
            
            
          >
            
          {
                    
            arrayLectures.map((lecture, index) => (
              <SwiperSlide key={index}>
                <SliderCard images={imageData}  lecture={lecture}/>
              </SwiperSlide>
              
            ))
          }
          </Swiper>

          <ActionCard body='main.aboutViaCard' image={aboutVia} actionLink={showViaInfoModal} ></ActionCard>
          <ActionCard body='main.aboutAppCard' image={aboutApp} actionLink={showModal} ></ActionCard>
          <IonButton class="home_donateBtn" color="tertiary" onClick={(e) => {showDonateModal()}} mode='ios'  expand='block' >{tMain('main.colaborateBtn')}</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home


