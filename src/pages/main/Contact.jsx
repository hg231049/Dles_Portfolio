import React from "react";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-step min-h-screen flex items-center justify-center py-20 lg:py-32"
    >
      <div className="inner w-full">
        <SectionTitle
          step="05"
          label=" 함께 만들 다음 경험"
          title="Let's Build Tomorrow"
          align="center"
          color="text-white"
          subColor="text-ground-color"
        />

        {/* 메인 박스 */}
        <div className="mt-14 max-w-4xl mx-auto rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-md p-8 lg:p-14 text-center shadow-xl">
          {/* 메시지 */}
          <p className="text-white text-[18px] lg:text-[28px] font-bold leading-relaxed">
            사용자 경험을 완성하는 퍼블리셔,
            <br className="hidden lg:block" />
            이은서입니다.
          </p>

          <p className="mt-5 text-white/70 text-sm lg:text-lg leading-relaxed">
            새로운 프로젝트, 협업, 채용 제안 등
            <br className="lg:hidden" />
            언제든 편하게 연락 주세요.
          </p>

          {/* 연락 버튼 */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dmstj3156@naver.com"
              className="px-8 py-4 rounded-full bg-ground-color text-white font-semibold hover:scale-105 transition-all"
            >
              이메일 보내기
            </a>

            <a
              href="https://github.com/hg231049"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all"
            >
              GitHub 보기
            </a>
          </div>

          {/* 하단 정보 */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm lg:text-base">
            <div>
              <p className="text-white/40 mb-1">EMAIL</p>
              <p className="text-white">dmstj3156@naver.com</p>
            </div>

            <div>
              <p className="text-white/40 mb-1">PHONE</p>
              <p className="text-white">010-2526-5140</p>
            </div>

            <div>
              <p className="text-white/40 mb-1">LOCATION</p>
              <p className="text-white">SEOUL, KOREA</p>
            </div>
          </div>
        </div>

        {/* 카피라이트 */}
        <p className="text-center text-white/30 text-xs lg:text-sm mt-10">
          © 2026 Lee Eunseo Portfolio. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
