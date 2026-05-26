import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {toyWork} from '../data/toywork'



const ToyWork = () => {
  return (
    <div className="competency grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
      {toyWork.map((item) => (
        <Drawer key={item.id}>
          {/* 1. 트리거: 카드의 전체 외형을 버튼처럼 사용 */}
          <DrawerTrigger asChild>
            <div className="card group bg-white/80 border border-green-100 shadow-md rounded-[8px] lg:rounded-[15px] overflow-hidden transition-all duration-300 h-fit cursor-pointer p-5 space-y-4 [&_.date]:text-subText-color [&_.label]:text-text-color [&_.date]:text-subText-color lg:[&:nth-child(n+3)_.label]:text-text-color lg:[&:nth-child(n+3)_.date]:text-subText-color">
              {/* 썸네일 */}
              <div className="competency-thumb w-full aspect-video bg-white/5 rounded-[8px] lg:rounded-[15px] overflow-hidden">
                <img
                  src={item.thumb}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 타이틀 영역 */}
              <div className="relative space-y-2 text-left">
                <h3 className="label text-[16px] lg:text-xl font-bold leading-tight">
                  {item.name}
                </h3>
                <p className="date w-[85%] min-h-[45.5px] text-[14px] lg:text-sm whitespace-pre-line leading-relaxed ">
                  {item.date}
                </p>
                {/* 플러스 아이콘이나 돋보기 아이콘 등으로 교체하면 좋습니다 */}
                <div className="absolute bottom-0 right-0">
                  <div className="text-xl font-light text-subText w-8 h-8 flex items-center justify-center bg-white rounded-full">
                    +
                  </div>
                </div>
              </div>
            </div>
          </DrawerTrigger>

          {/* 2. 상세 내용 Drawer */}
          <DrawerContent className="bg-white/70 backdrop-blur-md border-none text-text-color ">
            <div className="mx-auto w-full max-w-[860px] p-6 overflow-y-scroll scroll-hidden">
              <DrawerHeader className="px-0">
                <DrawerTitle className="text-2xl text-text-color font-bold">
                  {item.name}
                </DrawerTitle>
                <DrawerDescription className="text-subText-color">
                  {item.date}
                </DrawerDescription>
              </DrawerHeader>

              {/* 리스트 상세 내용 */}
              <div className="py-6 border-t border-white/10">
                <ul className="list-disc list-outside ml-4 space-y-4 text-sm leading-relaxed">
                  {item.desc.map((descItem, idx) => (
                    <li key={idx}>
                      {descItem.title && (
                        <strong className="block mb-1">
                          {descItem.title}
                        </strong>
                      )}

                      {descItem.text && (
                        <p className="text-sm leading-relaxed whitespace-pre-line">
                          {descItem.text}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <DrawerFooter className="px-0 pt-2 pb-6">
                {/* 링크 이동 버튼 (기존 화살표 링크 기능을 여기 넣으세요) */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-white text-text-color cursor-pointer hover:bg-field-color hover:text-white">
                    프로젝트 상세보기
                  </Button>
                </a>
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 cursor-pointer text-text-color hover:bg-white/10"
                  >
                    닫기
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      ))}
      {/* ✅ Coming Soon 카드 */}
      <div className="card group flex items-center justify-center bg-white/40 border border-dashed border-gray-300 rounded-[8px] lg:rounded-[15px] p-5 cursor-default relative overflow-hidden">
        {/* 애니메이션 링 */}
        <div className="absolute w-20 h-20 border border-gray-300 rounded-full animate-ping opacity-50"></div>

        {/* 메인 아이콘 */}
        <div className="flex flex-col items-center gap-3 z-10">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-2xl font-light text-gray-600 transition-transform duration-300 group-hover:scale-110">
            +
          </div>

          <p className="text-sm text-gray-100 tracking-wide">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default ToyWork;
