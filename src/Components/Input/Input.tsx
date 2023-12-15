import { TextField } from "@mui/material";

interface InputProps {
  labelName: string;
  type: string;
  value: string;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  err?: string | null;
  className: string;
}
const MyInput: React.FC<InputProps> = ({
  labelName,
  type,
  value,
  name,
  onChange,
  placeholder,
  className,
  err,
}) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label={labelName}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="outlined"
        name={name}
        className={`w-[300px] ${className}`}
      />
    </div>
  );
};
export default MyInput;
