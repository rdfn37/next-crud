interface InputProps {
  type?: "text" | "number";
  text: string;
  value: any;
  readonly?: boolean;
  valueChange?: (value: any) => void
}

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="mb-4">{props.text}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readonly}
        onChange={e => props.valueChange?.(e.target.value)}
        className={`
            border border-purple-500 rounded-lg
            focus:outline-none bg-gray-100 px-4 py-2
            ${props.readonly ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  );
};

export default Input;