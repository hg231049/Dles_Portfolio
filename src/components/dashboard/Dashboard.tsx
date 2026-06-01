import BoardTitle from "./BoardTitle";
import Metrics from "./Metrics";
import SeoResult from "./SeoResult";
import LighthouseResult from "./LighthouseResult";
import ChartBoard from "./ChartBoard";

const Dashboard = () => {
  
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-20 text-slate-900 dark:text-slate-50">
      <div className="inner max-w-[1520px] mx-auto px-5">
        
        <BoardTitle/>

        <Metrics/>
        <SeoResult/>

        <LighthouseResult/>
        <ChartBoard/>
        
      </div>
    </div>
  );
};

export default Dashboard;