
import {toyWork} from '../../data/toywork'
import ComingSoonCard from "./ComingSoonCard";
import ToyWorkCard from "./ToyWorkCard";

const ToyWork = () => {
  return (
    <div className="competency grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
      {toyWork.map((item) => (
        <ToyWorkCard key={item.id} item={item}/>
        
      ))}
      <ComingSoonCard/>
      
    </div>
  );
};

export default ToyWork;
