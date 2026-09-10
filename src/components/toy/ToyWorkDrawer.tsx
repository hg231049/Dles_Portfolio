import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";

import {
  ToyWorkItems,
  DescItems,
} from "../../data/toywork";

interface ToyWorkDrawerProps {
  item: ToyWorkItems;
}

const ToyWorkDrawer = ({
  item,
}: ToyWorkDrawerProps) => {
  return (
    <DrawerContent className="bg-white/70 backdrop-blur-md border-none text-text-color">

      <div className="mx-auto w-full max-w-[860px] p-6 overflow-y-scroll scroll-hidden">

        {/* Header */}
        <DrawerHeader className="px-0">
          <DrawerTitle className="text-2xl text-text-color font-bold">
            {item.name}
          </DrawerTitle>

          <DrawerDescription className="text-subText-color">
            {item.date}
          </DrawerDescription>

          {/* Badge */}
          {item.badge && (
            <div className="flex flex-wrap gap-2 pt-3">
              {item.badge.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-spring-color px-3 py-1 text-xs text-white"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </DrawerHeader>

        {/* Content */}
        <div className="border-t border-white/10 py-6">

          <div className="space-y-6">
            {item.desc.map(
              (descItem: DescItems, idx: number) => (
                <div key={idx}>
                  {descItem.title && (
                    <h3 className="mb-1 font-bold text-sm">
                      {descItem.title}
                    </h3>
                  )}

                  {descItem.text && (
                    <p className="text-sm leading-6 text-subText-color whitespace-pre-line">
                      {descItem.text}
                    </p>
                  )}
                </div>
              )
            )}
          </div>

        </div>

        {/* Footer */}
        <DrawerFooter className="px-0 pt-2 pb-6">

          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <Button
              className="
                w-full
                bg-spring-color
                hover:bg-white
                hover:text-text-color
                cursor-pointer
              "
            >
              프로젝트 상세보기
            </Button>
          </a>

          <DrawerClose asChild>
            <Button
              variant="outline"
              className="
                w-full
                border-white/20
                cursor-pointer
                text-text-color
                hover:bg-white/10
              "
            >
              닫기
            </Button>
          </DrawerClose>

        </DrawerFooter>

      </div>
    </DrawerContent>
  );
};

export default ToyWorkDrawer;