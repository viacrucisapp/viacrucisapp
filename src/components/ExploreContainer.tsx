import './ExploreContainer.css';
import { LectureCard } from '../components/LectureCard';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  //let arrayLectures = t("list", { returnObjects: true });
return (<div></div>)
/*
  return (
    <div className="container">
     
    
      {
        
        arrayLectures.map((lecture, index) => (
          
          <LectureCard images={imageData} key={index} lecture={lecture} />
        ))
      }

    </div>
  );*/
};

export default ExploreContainer;
