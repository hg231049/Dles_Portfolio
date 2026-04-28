import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { bestWork1, bestWorkMo1 } from '../assets/img';

gsap.registerPlugin(ScrollTrigger);

const BestWork = () => {
  const sectionRef = useRef(null);

  const Work_list = [
    { 
        id:1, 
        name: "슬룸(SLOOM)", 
        date: "25.04.22~25.05.27", 
        link:"https://sleeplab.co.kr/home-backup",
        thumb: bestWork1,
        thumbMo:bestWorkMo1,
     },
     // ... 데이터들
  ];

  useGSAP(() => {
    const track = document.querySelector("#horizontal-track");
  
    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth), 
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        // 1000px 정도의 여유를 주어 마지막 카드에서 멈춤 효과
        end: () => "+=" + (track.scrollWidth + 1000), 
        invalidateOnRefresh: true,
      },
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0a0a0a] py-20">
      <div className="h-screen flex items-center">
        {/* 가로 트랙 */}
        <div id="horizontal-track" className="flex gap-[10vw] px-[10vw] items-center will-change-transform">

          {Work_list.map((item, idx) => (
            <div 
              key={idx} 
              className="card group flex-shrink-0 w-[70vw] md:w-[50vw] lg:w-[40vw]"
            >
                {/* 썸네일 영역: 상대 수치 대신 고정 비율 컨테이너 권장 */}
                <div className="thumb relative block w-full aspect-[4/3]">
                    {/* PC 썸네일 */}
                    <span className="pc-thumb block w-full h-full border-[1px] border-white/20 rounded-[20px] overflow-hidden bg-gray-900 shadow-2xl">
                        <a href={item.link} target="_blank" rel="noreferrer" className="block w-full h-full overflow-hidden">
                           <img
                                src={item.thumb}
                                alt={item.name}
                                className='w-full hover:translate-y-[-50%] transition-transform duration-[3s] ease-in-out cursor-pointer'
                            />
                        </a>
                    </span>

                    {/* MO 썸네일: absolute 위치 조정 */}
                    <span className="mo-thumb absolute -bottom-10 -right-10 w-[30%] aspect-[9/19] border-[1px] border-white/20 rounded-[15px] overflow-hidden bg-gray-800 shadow-2xl hidden md:block">
                        <a href={item.link} target="_blank" rel="noreferrer" className="block w-full h-full overflow-hidden">
                            <img
                                src={item.thumbMo}
                                alt={`${item.name} mobile`}
                                className='w-full hover:translate-y-[-50%] transition-transform duration-[3s] ease-in-out cursor-pointer'
                            />
                        </a>
                    </span>
                </div>

                {/* 텍스트 정보 영역 */}
                <div className="description mt-12 space-y-2">
                    <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">{item.name}</h3>
                    <span className="text-gray-500 font-mono">{item.date}</span>
                </div>
            </div>
          ))}

          {/* 마지막 여백용 Spacer */}
          <div className="flex-shrink-0 w-[10vw] md:w-[20vw]" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default BestWork;