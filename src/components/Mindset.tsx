import { mindset,MindsetItems } from '@/data/mindset';
const Mindset = () => {
  return (
    <div className="space-y-12">
      <div className="mb-10 pb-6 border-b border-white/20 text-white text-[18px] [text-shadow:0_2px_5px_rgba(22,53,31,0.45)] lg:text-[20px] font-bold">
        Q&A (Identity)
      </div>

      <div className="space-y-6">
        {mindset.map((item:MindsetItems) => (
          <div
            key={item.id}
            className="rounded-2xl border border-white/15 border-l-white/40 p-5 lg:p-6"
          >
            <p className="text-white text-[15px] lg:text-[20px] font-semibold [text-shadow:0_1px_3px_rgba(22,53,31,0.3)]">
              {item.question}
            </p>

            <p className="text-white/80 mt-3 text-[13px] lg:text-[16px] leading-relaxed [text-shadow:0_1px_3px_rgba(22,53,31,0.3)]">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mindset;
