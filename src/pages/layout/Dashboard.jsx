import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const BestWork = () => {
  const sectionRef = useRef(null);

  // 데이터 배열화 (유지보수 용이)
  const Work_list = [
    { id:1, label: "총 클릭수", value: "1,820", prev: "365", icon: "🖱️", diff: "+1,455 click", rate: "399%", width: "100%" },
    { label: "총 노출수", value: "54,000", prev: "10,300", icon: "🔍", diff: "+43,700 UP", rate: "424%", width: "100%" },
    { label: "평균 순위", value: "4.4", prev: "5.0", icon: "🏅", diff: "0.6 상승", rate: "0.6", width: "85%" },
  ];

  useGSAP(() => {
    const track = document.querySelector("#horizontal-track");
  
  const scrollTween = gsap.to(track, {
    // 이동 거리를 마지막 카드가 보일 때까지만 계산
    x: () => -(track.scrollWidth - window.innerWidth), 
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.current,
      pin: true,
      scrub: 1,
      start: "top top",
      // ★ 이동 거리보다 end 값을 더 길게 잡으면 마지막 카드에서 멈춘 듯한 효과가 납니다.
      end: () => "+=" + (track.scrollWidth + 1000), 
      invalidateOnRefresh: true,
    },
  });

    // 2. 가로 스크롤 도중 프로그레스 바 애니메이션
    const bars = gsap.utils.toArray(".progress-bar");
    bars.forEach((bar) => {
      gsap.to(bar, {
        width: bar.dataset.width,
        duration: 1.5,
        scrollTrigger: {
          trigger: bar,
          containerAnimation: scrollTween, // ★ 가로 스크롤 내부 트리거의 핵심
          start: "left center", // 화면 중앙에 올 때 시작
          toggleActions: "play none none reverse",
        }
      });
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="h-screen flex items-center">
        {/* 가로 트랙 */}
        <div id="horizontal-track" className="flex gap-10 will-change-transform">

          {/* 스탯 카드 반복 생성 */}
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className="card group flex-shrink-0 w-[85vw] md:w-[40vw] bg-white dark:bg-slate-800 p-10 rounded-[40px] shadow-2xl border border-gray-100 dark:border-slate-700 transition-all hover:-translate-y-4"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-sm text-gray-500 mb-2 font-medium">{item.label}</p>
                  <div className="flex items-end gap-3">
                    <h3 className="text-5xl font-extrabold text-brand tracking-tighter">{item.value}</h3>
                    <span className="text-sm text-gray-400 mb-2">이전 {item.prev}</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-purple-500/10 text-purple-500 rounded-[24px] flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
              </div>

              <div className="mt-12">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-base font-bold text-brand">{item.diff}</span>
                  <div className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 text-xs font-black uppercase">
                    ▲ {item.rate}
                  </div>
                </div>
                {/* 프로그레스 바 배경 */}
                <div className="w-full h-4 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden p-1">
                  <div 
                    className="progress-bar h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all" 
                    data-width={item.width}
                  ></div>
                </div>
              </div>
            </div>

          ))}
          <div className="flex-shrink-0 w-[20vw] md:w-[30vw] h-full" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default BestWork;