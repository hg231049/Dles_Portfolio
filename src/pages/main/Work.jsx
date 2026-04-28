import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BestWork from '../../components/BestWork';
const Work = () => { 
    return (
        <section className="section-step min-h-screen flex justify-center p-[50px_0] lg:p-[100px_0]">
            <div className="inner">
                <div className="main-title p-[0_0_40px] lg:p-[0_0_80px] text-center">
                    <p className='text-spring-color text-[16px] lg:text-[25px] font-medium'>주요 프로젝트</p>
                    <h2 className='text-[#334155] text-[25px] lg:text-[55px] font-bold'>Main Projects</h2>
                </div>
                <BestWork/>
            </div>
        </section>
        
    )
}

export default Work;