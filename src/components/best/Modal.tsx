import { BestWorkItems } from "../../data/bestWork";

interface ModalProps {
  selected: BestWorkItems | null;
  closeModal: () => void;
}

const Modal = ({
  selected,
  closeModal,
}: ModalProps) => {
  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[8px] bg-white p-8 animate-[fadeUp_0.3s_ease]">

        {/* Close */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 cursor-pointer text-xl"
          aria-label="모달 닫기"
        >
          ✕
        </button>

        {/* Header */}
        <header className="mb-8 pr-8">
          <h2 className="mb-2 text-2xl font-bold">
            {selected.name}
          </h2>

          <p className="text-sm text-gray-500">
            {selected.date}
          </p>

          {selected.badge && (
            <div className="mt-4 flex flex-wrap gap-2">
              {selected.badge.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="space-y-8 text-sm">

          {/* 01. 프로젝트 개요 */}
          {selected.overview && selected.overview.length > 0 && (
            <section>
              <SectionTitle
                number="01"
                english="PROJECT OVERVIEW"
                korean="프로젝트 개요"
              />

              <ul className="space-y-2">
                {selected.overview.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-wrap gap-x-2 gap-y-1"
                  >
                    <strong>
                      {item.title}
                    </strong>

                    <span>:</span>

                    <span>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 02. 프로젝트 진행 단계 */}
          {selected.phases && selected.phases.length > 0 && (
            <section>
              <SectionTitle
                number="02"
                english="PROJECT PHASE"
                korean="프로젝트 진행 단계"
              />

              <div className="space-y-5">
                {selected.phases.map((phase, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-gray-200 pl-4"
                  >
                    <p className="text-xs text-gray-400">
                      {phase.period}
                    </p>

                    <h4 className="mt-1 font-bold">
                      {phase.title}
                    </h4>

                    <p className="mt-1 leading-6 text-gray-600">
                      {phase.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 03. 문제 정의 */}
          {selected.problem && selected.problem.length > 0 && (
            <section>
              <SectionTitle
                number="03"
                english="PROBLEM"
                korean="문제 정의"
              />

              <ul className="space-y-3">
                {selected.problem.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-wrap gap-x-2 gap-y-1"
                  >
                    <strong>
                      {item.title}
                    </strong>

                    <span>:</span>

                    <p className="leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 04. 해결 과정 */}
          {selected.solution && selected.solution.length > 0 && (
            <section>
              <SectionTitle
                number="04"
                english="SOLUTION"
                korean="해결 과정"
              />

              <ul className="space-y-3">
                {selected.solution.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-wrap gap-x-2 gap-y-1"
                  >
                    <strong>
                      {item.title}
                    </strong>

                    <span>:</span>

                    <p className="leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 05. 주요 성과 */}
          {selected.results && selected.results.length > 0 && (
            <section>
              <SectionTitle
                number="05"
                english="RESULTS"
                korean="주요 성과"
              />

              <ul className="space-y-3">
                {selected.results.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-wrap gap-x-2 gap-y-1"
                  >
                    <strong>
                      {item.title}
                    </strong>

                    <span>:</span>

                    <p className="leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 06. 기술 스택 */}
          {selected.stack && selected.stack.length > 0 && (
            <section>
              <SectionTitle
                number="06"
                english="TECH STACK"
                korean="기술 스택"
              />

              <div className="flex flex-wrap gap-2">
                {selected.stack.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-md bg-gray-100 px-3 py-2 text-xs text-gray-600"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* 07. 참고사항 */}
          {selected.notice && selected.notice.length > 0 && (
            <section className="border-t pt-5">
              <SectionTitle
                number="07"
                english="NOTE"
                korean="참고사항"
              />

              <div className="space-y-1">
                {selected.notice.map((notice, index) => (
                  <p
                    key={index}
                    className="text-xs leading-5 text-gray-400"
                  >
                    {notice}
                  </p>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Site Link */}
        <a
          href={selected.link}
          target="_blank"
          rel="noreferrer"
          className="mt-8 block rounded-full bg-black py-3 text-center text-white transition-colors hover:bg-day-color"
        >
          사이트 보기
        </a>
      </div>
    </div>
  );
};


/* =========================================================
   Section Title
========================================================= */

interface SectionTitleProps {
  number: string;
  english: string;
  korean: string;
}

const SectionTitle = ({
  number,
  english,
  korean,
}: SectionTitleProps) => {
  return (
    <div className="mb-4 flex items-end gap-3 border-b border-gray-100 pb-2">
      <span className="text-xs font-medium text-gray-400">
        {number}
      </span>

      <h3 className="text-sm font-bold">
        {korean}
      </h3>

      <span className="text-[10px] tracking-[0.08em] text-gray-300">
        {english}
      </span>
    </div>
  );
};

export default Modal;