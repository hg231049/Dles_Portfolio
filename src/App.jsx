import './App.css'
import React, { useRef } from 'react';
import BackgroundScene from './components/BackgroundScene';

function App() {
  const mainRef = useRef(null);  // 이미지 참조

  return (
    <>
      <main ref={mainRef} className="relative w-full">
      {/* 배경 컴포넌트에 참조 전달 */}
      <BackgroundScene scrollContainer={mainRef} />

      {/* 실제 콘텐츠 섹션들 */}
      <div className="relative z-10">
        <section className="section-step h-screen flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">깊은 밤</h1>
        </section>

        <section className="section-step h-screen flex items-center justify-center">
          <h1 className="text-blue-900 text-5xl font-bold">밝은 낮</h1>
        </section>

        <section className="section-step h-screen flex items-center justify-center">
          <h1 className="text-pink-600 text-5xl font-bold">봄꽃 피는 거리</h1>
        </section>

        <section className="section-step h-screen flex items-center justify-center">
          <h1 className="text-green-800 text-5xl font-bold">푸른 들판</h1>
        </section>
        
      </div>
    </main>
    </>
  )
}

export default App
