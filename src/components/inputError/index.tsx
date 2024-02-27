import { FieldError } from "react-hook-form";

const InputError: React.FC<Props> = ({ errorMessage, error }) => {
  return <>{error && <p>{errorMessage}</p>}</>;
};

export default InputError;

type Props = {
  error: FieldError | undefined;
  errorMessage: string | undefined;
  className?: string;
};
