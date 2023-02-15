import { FC } from "react";

const DropDown: FC = () => {
  return (
    <div className="w-full lg:max-w-sm">
      <select className="w-80 text-gray-500 outline-none">
        <option>ReactJS Dropdown</option>
        <option>Laravel 9 with React</option>
        <option>React with Tailwind CSS</option>
        <option>React With Headless UI</option>
      </select>
    </div>
  );
};

export default DropDown;
