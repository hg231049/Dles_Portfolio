import BestWork from '../../components/BestWork';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const Work = () => { 
    const sectionRef = useRef(null);
    useGSAP(() => {
    const track = document.querySelector("#horizontal-track");
  
    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth), 
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        pinSpacing: true, 
        scrub: 1,
        start: "top top",
        // 1000px 정도의 여유를 주어 마지막 카드에서 멈춤 효과
        end: () => "+=" + (track.scrollWidth + 1000), 
        invalidateOnRefresh: true,
      },
    });

  }, { scope: sectionRef });
    return (
        <section id="horizontal-section" ref={sectionRef} className="section-step min-h-[80vh] flex justify-center p-[50px_0] lg:p-[0] z-10" >
            <div  className="overflow-hidden">
                <div className="main-title p-[0_0_40px] lg:p-[0] text-center">
                    <p className='text-spring-color text-[16px] lg:text-[25px] font-medium'>주요 프로젝트</p>
                    <h2 className='text-[#334155] text-[25px] lg:text-[55px] font-bold'>Main Projects</h2>
                </div>
                <BestWork/>
            </div>
        </section>
        
    )
}

export default Work;