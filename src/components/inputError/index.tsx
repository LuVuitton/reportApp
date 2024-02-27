import { FieldError } from "react-hook-form";
import styles from "./index.module.scss";

const InputError: React.FC<Props> = ({ errorMessage, error }) => {
  return <>{error && <p className={styles.errorMessage}>{errorMessage}</p>}</>;
};

export default InputError;

type Props = {
  error: FieldError | undefined;
  errorMessage: string | undefined;
  className?: string;
};
