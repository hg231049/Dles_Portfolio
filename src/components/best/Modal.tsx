import { BestWorkItems,OverviewItems,ResultsItems,SolutionItems,ProblemItems } from '../../data/bestWork'
interface ModalProps {
   selected:BestWorkItems| null;
   closeModal:() => void;
}

const Modal = ({selected,closeModal}:ModalProps) => {
    return (
      <>
        {selected && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />

            <div className="relative w-full max-w-4xl bg-white rounded-[8px] p-8 max-h-[85vh] overflow-y-auto animate-[fadeUp_0.3s_ease]">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-xl cursor-pointer"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
              <p className="text-sm text-gray-500 mb-6">{selected.date}</p>

              <div className="space-y-6 text-sm">
                {selected.overview && (
                  <div>
                    <h4 className="font-bold mb-2">📌 프로젝트 개요</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      {selected.overview.map((t:OverviewItems, i:number) => (
                        <li key={i} className="flex flex-wrap gap-1">
                          {t.title && (
                            <strong className="">
                              {t.title}
                            </strong>
                          )}
                          :
                          {t.text && (
                            <p className="">
                              {t.text}
                            </p>
                          )}
                      </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selected.stack && (
                  <div>
                    <h4 className="font-bold mb-2">🛠 기술 스택</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      {selected.stack.map((t:string, i:number) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selected.problem && (
                  <div>
                    <h4 className="font-bold mb-2">📝 문제 정의</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      {selected.problem.map((t:ProblemItems, i:number) => (
                        <li key={i} className="flex flex-wrap gap-1 lg:flex-row">
                          {t.title && (
                            <strong className="">
                              {t.title}
                            </strong>
                          )}
                          :
                          {t.text && (
                            <p className="whitespace-pre-line">
                              {t.text}
                            </p>
                          )}
                      </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selected.solution && (
                  <div>
                    <h4 className="font-bold mb-2">✔️ 해결 과정</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      {selected.solution.map((t:SolutionItems, i:number) => (
                        <li key={i} className="flex flex-wrap gap-1 lg:flex-row">
                          {t.title && (
                            <strong className="">
                              {t.title}
                            </strong>
                          )}
                          :
                          {t.text && (
                            <p className="whitespace-pre-line">
                              {t.text}
                            </p>
                          )}
                      </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selected.results && (
                  <div>
                    <h4 className="font-bold mb-2">🚀 주요 성과</h4>
                    <ul className="list-disc ml-5 space-y-1">
                      {selected.results.map((t:ResultsItems, i:number) => (
                        <li key={i} className="flex flex-wrap gap-1 lg:flex-row">
                          {t.title && (
                            <strong className="">
                              {t.title}
                            </strong>
                          )}
                          :
                          {t.text && (
                            <p className="whitespace-pre-line">
                              {t.text}
                            </p>
                          )}
                      </li>
                      ))}
                    </ul>
                  </div>
                )}


                {selected.notice && (
                  <div className="text-xs text-gray-400 border-t pt-3">
                    {selected.notice.map((t:string, i:number) => (
                      <p key={i}>{t}</p>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="block mt-6 text-center bg-black text-white py-3 rounded-full hover:bg-spring-color transition"
              >
                사이트 보기
              </a>
            </div>
          </div>
        )}
      </>
    )
}

export default Modal;