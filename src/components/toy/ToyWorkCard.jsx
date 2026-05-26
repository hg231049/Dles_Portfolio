import {
  Drawer,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ToyWorkDrawer from "./ToyWorkDrawer";

const ToyWorkCard = ({item}) => {
    return (
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
                <div className="absolute bottom-0 right-0">
                  <div className="text-xl font-light text-subText w-8 h-8 flex items-center justify-center bg-white rounded-full">
                    +
                  </div>
                </div>
              </div>
            </div>
          </DrawerTrigger>
          <ToyWorkDrawer item={item}/>
          
        </Drawer>
    )
}

export default ToyWorkCard;