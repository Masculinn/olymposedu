import { useRef, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export const FaqCard = ({ idx, faqList }) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqList.q}
        {state ? (
          <CiCircleMinus className="w-8 h-8" />
        ) : (
          <CiCirclePlus className="w-8 h-8" />
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqList.a}</p>
        </div>
      </div>
    </div>
  );
};
