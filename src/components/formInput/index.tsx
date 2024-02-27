import { FieldError, UseFormRegister } from "react-hook-form";
import TextField from "@mui/material/TextField";
import style from "./index.module.scss";

const FormInput: React.FC<Props> = ({
  register,
  registerName,
  placeholder,
  error,
  errorMessage,
  isTextarea = false,
}) => {
  return (
    <div className={style.wrapper}>
      <TextField
        fullWidth
        error={!!error}
        id="outlined-basic"
        label={placeholder}
        multiline={isTextarea}
        rows={isTextarea ? 4 : 1}
        variant="outlined"
        {...register(registerName)}
        helperText={errorMessage}
      />
    </div>
  );
};

export default FormInput;

type Props = {
  register: UseFormRegister<any>;
  registerName: string;
  placeholder: string;
  error: FieldError | undefined;
  errorMessage: string | undefined;
  isTextarea?: boolean;
};
