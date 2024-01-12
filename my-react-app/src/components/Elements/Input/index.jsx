import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-3">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} id={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
