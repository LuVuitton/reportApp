import { FieldError, UseFormRegister } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";
import InputError from "../inputError";

const FormInput: React.FC<Props> = ({
  register,
  registerName,
  placeholder,
  error,
  errorMessage,
  type,
  isTextarea = false,
  rows,
}) => {
  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <>
      <InputComponent
        type={type}
        {...register(registerName)}
        placeholder={placeholder}
        rows={rows}
      />
      <InputError error={error} errorMessage={errorMessage} />
    </>
  );
};

export default FormInput;

type Props = {
  register: UseFormRegister<any>;
  registerName: string;
  placeholder: string;
  error: FieldError | undefined;
  errorMessage: string | undefined;
  type?: HTMLInputTypeAttribute;
  isTextarea?: boolean;
  rows?: number;
};
