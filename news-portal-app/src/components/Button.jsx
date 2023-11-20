const Button = ({ id, label, type, onClick }) => {
  return (
    <button
      id={id}
      type={type}
      className={`w-full h-full bg-green-900 text-white border-none hover:bg-orange-600 focus:outline-none flex items-center justify-center`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
