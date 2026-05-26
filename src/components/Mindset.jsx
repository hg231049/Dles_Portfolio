import { maindset } from '../data/mindset';
const Mindset = () => {
  return (
    <div className="space-y-12">
      <div className="mb-10 pb-6 border-b border-white/20 text-sunrise-color text-[18px] lg:text-[20px] font-bold">
        Q&A (Identity)
      </div>

      <div className="space-y-6">
        {maindset.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border-l border-white/30 p-5 lg:p-6 border border-white/10"
          >
            <p className="text-white text-[15px] lg:text-[20px] font-semibold">
              {item.question}
            </p>

            <p className="text-white/85 mt-3 text-[13px] lg:text-[16px] leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mindset;
