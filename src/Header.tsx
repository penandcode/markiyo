import { useState } from "react";

const Header = (props: { tab: string; tabBool: (arg0: boolean) => void; }) => {
  const [on, setOn] = useState(false)
  return (
    <div className="text-white flex w-[85%] justify-between mx-auto pt-5">
      <div>{props.tab}</div>
      <div
        className={`w-6 h-3.5 grid border border-solid border-slate-800 justify-items-stretch rounded-lg transition-transform duration-500 ${on ? "bg-gray-200" : "bg-gray-600"}`}
        onClick={() => { setOn(prev => !prev); props.tabBool(on) }}
      >
        <div className={`h-3 w-3 rounded-lg bg-gray-300 border boder-solid border-slate-800 ${on ? "translate-x-3" : "translate-x-0"}`}>
        </div>
      </div>
    </div>
  );
};

export default Header;
