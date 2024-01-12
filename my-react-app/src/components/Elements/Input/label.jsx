const Label = (props) => {
  const { htmlFor } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {props.children}
    </label>
  );
};

export default Label;
