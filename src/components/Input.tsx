interface InputProps {
  type?: "text" | "number";
  text: string;
  value: any;
  onlyRead?: boolean;
  className?: string;
  valueChanged?: (value: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.text}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.valueChanged?.(e.target.value)}
        readOnly={props.onlyRead}
        className={`
            border border-purple-500 rounded-lg
            focus:outline-none bg-gray-100 px-4 py-2
            ${props.onlyRead ? "" : "focus:bg-white"}
        `}
      />
    </div>
  );
}
