import { BestWorkItems } from '../../data/bestWork'
interface GridProps {
   filtered:BestWorkItems[];
   openModal:(item:BestWorkItems) => void;
}


const Grid = ({filtered,openModal}:GridProps) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => openModal(item)}
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-[8px] bg-gray-900">
              <img
                src={item.thumb}
                alt={item.name}
                className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-sm text-subText-color">({item.date})</p>
              <div>
                {item.badge && (
                  <ul className="flex gap-2 text-xs  mt-3">
                    {item.badge.map((i:string, idx:number) => (
                      <li key={idx} className="px-2 py-1 text-white rounded-2xl bg-day-color">{i}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Grid;