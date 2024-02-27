import { UseFormRegister } from "react-hook-form";

const SelectForm = ({ register, options }: Props) => {
  const countries = options.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  return <select {...register("targetCountry")}>{countries}</select>;
};

export default SelectForm;

type Props = {
  register: UseFormRegister<any>;
  registerName: string;
  options: string[];
};
