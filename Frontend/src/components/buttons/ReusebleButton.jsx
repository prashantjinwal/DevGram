const ResponsiveButton = ({ label, onClick, bgColor, textColor, border, hoverScale = "hover:scale-105" }) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold w-full md:w-[48%] py-3 my-3 rounded-md transition-all duration-150 ${textColor} ${bgColor} ${border} ${hoverScale}`}
    >
      {label}
    </button>
  );
};

export default ResponsiveButton;
