import { UseFormRegister } from "react-hook-form";
import styles from "./index.module.scss";

const SelectForm = ({ register, options }: Props) => {
  const countries = options.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  return (
    <select className={styles.customSelect} {...register("targetCountry")}>
      {countries}
    </select>
  );
};

export default SelectForm;

type Props = {
  register: UseFormRegister<any>;
  registerName: string;
  options: string[];
};
