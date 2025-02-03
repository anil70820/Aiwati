import { useEffect, useRef, useState } from "react";
import Icons from "./Icons";

const Select = ({
  selectedOptionClass,
  selectClass,
  optionBoxClass,
  optionsClass,
  defaultShow,
  optionList,
}) => {
  const [selectOption, setSelectOption] = useState(defaultShow);
  const [showOption, setShowOption] = useState(true);
  const selectRef = useRef(null);

  useEffect(() => {
    // Function to close the select when clicking outside of it
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOption(true);
      }
    };

    // Add event listener to handle clicks on the body
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative inline-block">
      <div
        onClick={() => setShowOption(!showOption)}
        className={`cursor-pointer border-2 border-solid border-black flex items-center justify-between px-2 py-1 rounded-lg w-full gap-4 min-w-[150px] ${selectClass}`}
      >
        <p
          className={`text-black text-xl font-mono font-medium ${selectedOptionClass}`}
        >
          {selectOption}
        </p>
        <span
          className={`transition-all duration-300 ${
            showOption ? "" : "rotate-[180deg]"
          }`}
        >
          <Icons icon="selectArrow" />
        </span>
      </div>
      <div
        className={`bg-white shadow-xl rounded-lg w-full max-w-[150px] overflow-hidden absolute top-[105%] left-[50%] -translate-x-[50%] ${optionBoxClass} ${
          showOption ? "hidden" : "block"
        }`}
      >
        {optionList.map((obj, index) => {
          return (
            <p
              key={index}
              onClick={() => {
                setSelectOption(obj);
                setShowOption(true);
              }}
              className={`font-mono text-black text-lg font-medium cursor-pointer py-1 px-2 hover:bg-black hover:text-white transition-all duration-300 max-w-[150px] w-full ${optionsClass}`}
            >
              {obj}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
