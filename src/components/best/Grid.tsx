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

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white text-sm">{item.summary}</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-sm text-subText-color">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Grid;