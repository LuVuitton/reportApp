import { FieldError, UseFormRegister } from "react-hook-form";
import InputError from "../inputError";
import { ReportRadioOption } from "../../data";
import styles from "./index.module.scss";

const RadioGroup = ({
  register,
  registerName,
  options,
  error,
  errorMessage,
  callback,
}: Props) => {
  const onClickHandler = (value: string) => callback(value);

  const mappedRadio = options.map((e) => (
    <div key={e.id} className={styles.radio}>
      <label>
        <input
          type="radio"
          value={e.value}
          {...register(registerName)}
          onClick={() => onClickHandler(e.value)}
        />
        {e.label}
      </label>
    </div>
  ));

  return (
    <div className={styles.wrapper} >
      {mappedRadio}

      <div>
        <InputError error={error} errorMessage={errorMessage} />
      </div>
    </div>
  );
};

export default RadioGroup;

export type Props = {
  register: UseFormRegister<any>;
  registerName: string;
  options: ReportRadioOption[];
  error: FieldError | undefined;
  errorMessage: string | undefined;
  callback: (radioValue: string) => void;
};
