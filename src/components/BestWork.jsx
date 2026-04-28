import React, { useRef,useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { bestWork1, bestWorkMo1 } from '../assets/img';

gsap.registerPlugin(ScrollTrigger);

const BestWork = () => {
  const sectionRef = useRef(null);
  const [isMore,setIsMore] = useState(false);

  const openPopup = (work) => {
    setIsMore(work);
    document.body.style.overflow = 'hidden';
  }
const closePopup = (work) => {
    setIsMore(null);
    document.body.style.overflow = 'auto';
  }

  const Work_list = [
    { 
        id:1, 
        name: "슬룸(SLOOM)", 
        date: "25.04.22~25.05.27", 
        link:"https://sleeplab.co.kr/home-backup",
        thumb: bestWork1,
        thumbMo:bestWorkMo1,
     },
     { 
        id:2, 
        name: "슬룸(SLOOM)", 
        date: "25.04.22~25.05.27", 
        link:"https://sleeplab.co.kr/home-backup",
        thumb: bestWork1,
        thumbMo:bestWorkMo1,
     },
     { 
        id:2, 
        name: "슬룸(SLOOM)", 
        date: "25.04.22~25.05.27", 
        link:"https://sleeplab.co.kr/home-backup",
        thumb: bestWork1,
        thumbMo:bestWorkMo1,
     },

  ];

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
    <div ref={sectionRef} className="relative overflow-hidden z-10" >
      <div className="min-h-screen flex items-center">
        {/* 가로 트랙 */}
        <div id="horizontal-track" className="flex gap-[150px] will-change-transform">

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
                                className='w-full hover:translate-y-[-50%] transition-transform duration-[3s] ease-in-out cursor-pointer align-top'
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
                    <h3 className="text-3xl font-bold text-text-color group-hover:text-spring-color transition-colors">{item.name}</h3>
                    <span className="text-gray-500 font-mono">{item.date}</span>
                </div>
                {/* 팝업 버튼 */}
                <div className="more-btn mt-10">
                    <button 
                  onClick={() => openPopup(item)} 
                  className='inline-block px-6 py-3 text-spring-color border border-spring-color rounded-[50px] hover:text-white hover:bg-spring-color transition-all font-medium cursor-pointer'
                >
                  자세히보기</button>
                </div>
            </div>
            ))}
            
          {/* 마지막 여백용 Spacer */}
          <div className="flex-shrink-0 w-[10vw] md:w-[20vw]" aria-hidden="true"></div>
        </div>
        {/* 팝업 모달 (Portal 없이도 섹션 바깥쪽에 배치하면 됨) */}
            {isMore && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                {/* 배경 어둡게 */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closePopup}></div>
                
                {/* 팝업 본체 */}
                <div className="relative w-full max-w-2xl max-h-[80vh] bg-white rounded-[30px] p-10 overflow-y-auto shadow-2xl">
                    <button className="absolute top-6 right-6 text-2xl cursor-pointer" onClick={closePopup}>✕</button>
                    <h2 className="text-3xl font-bold mb-4">{isMore.name}</h2>
                    <p className="text-gray-500 mb-6 font-mono">{isMore.date}</p>
                    <div className="text-gray-700 leading-relaxed text-lg">
                    {isMore.detail}
                    </div>
                </div>
                </div>
            )}
      </div>
    </div>
  );
};

export default BestWork;