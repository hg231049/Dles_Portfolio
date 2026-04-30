const SectionTitle = ({
  step,
  label,
  title,
  align = "center",
  subColor = "text-white",
  color = "text-white",
}) => {
  const isCenter = align === "center";

  return (
    <div className={`pb-10 lg:pb-20 ${isCenter ? "text-center" : "text-left"}`}>
      <p className={`${subColor}  text-base lg:text-2xl font-medium`}>
        {step}. {label}
      </p>

      <h2
        className={`${color} text-[34px] lg:text-[56px] font-black tracking-tight`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
