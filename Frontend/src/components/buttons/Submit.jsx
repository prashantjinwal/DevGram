export const SButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="m-auto mt-3 cursor-pointer flex justify-center w-[60%] sm:w-[45%] rounded-sm py-2 bg-white text-black font-medium text-sm sm:text-base
                 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 hover:bg-purple-300"
    >
      {text}
    </button>
  );
};
