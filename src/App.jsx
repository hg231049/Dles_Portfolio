import './App.css'
import React, { useRef } from 'react';
import BackgroundScene from './components/BackgroundScene';
import Main from './pages/main/Main';

function App() {
  const mainRef = useRef(null);  // 이미지 참조

  return (
    <>
      <div ref={mainRef} className="relative w-full">
        {/* 배경 컴포넌트에 참조 전달 */}
        <BackgroundScene scrollContainer={mainRef} />
        <Main/>
      </div>
    </>
  )
}

export default App
