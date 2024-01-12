const Input = (props) => {
  const { type, name, id, placeholder } = props;
  return (
    <input
      type={type}
      id={id}
      name={name}
      className="w-full border border-slate-700 rounded px-3 py-2 outline-none opacity-50  focus:border-blue-500"
      placeholder={placeholder}
    />
  );
};

export default Input;
