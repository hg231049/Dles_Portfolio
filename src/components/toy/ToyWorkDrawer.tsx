import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ToyWorkItems,DescItems } from '../../data/toywork';

interface ToyWorkDrawerProps {
  item:ToyWorkItems;
}

const ToyWorkDrawer  = ({item}:ToyWorkDrawerProps) => {
    return (
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
                  {item.desc.map((descItem:DescItems, idx:number) => (
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
                  <Button className="w-full  bg-field-color hover:text-white cursor-pointer hover:bg-white hover:text-text-color">
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
    )
}

export default ToyWorkDrawer ;