interface ButtonProps {
  color?: "green" | "blue" | "gray";
  children: any;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const color = props.color ?? "gray";
  return (
    <button
      onClick={props.onClick}
      className={`
        px-4 py-2 mb-4 bg-gradient-to-r from-${color}-400 to-${color}-700
        rounded-md text-gray-100
  `}
    >
      {props.children}
    </button>
  );
};

export default Button;
