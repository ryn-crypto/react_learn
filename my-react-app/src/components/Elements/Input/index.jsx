import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { title, type, name } = props;
  return (
    <div className="mb-3">
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} type={type} />
    </div>
  );
};

export default InputForm;
