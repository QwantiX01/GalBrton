import { forwardRef } from "react";

interface CheckboxProps {
  children: string;
  id: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children = "Check this", id = "" }, ref) => {
    return (
      <div className="relative flex">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className="opacity-0 invisible absolute peer"
        />
        <label
          htmlFor={id}
          className="relative cursor-pointer pl-10 pr-4 py-1 inline-flex items-center
                     transition-all duration-300 ease-in-out
                     peer-checked:pl-7
                     before:content-[''] before:absolute before:top-1/2 before:left-2
                     before:-translate-y-1/2 before:block before:w-5 before:h-5
                     before:border-2 before:border-gray-400 before:rounded-md
                     before:transition-all before:duration-300 before:ease-in-out
                     before:bg-transparent
                     peer-checked:before:w-full
                     peer-checked:before:h-full
                     peer-checked:before:top-0
                     peer-checked:before:translate-y-0
                     peer-checked:before:bg-emerald-100/5
                     peer-checked:before:border-emerald-500"
        >
          {children}
        </label>
      </div>
    );
  },
);
export default Checkbox;
