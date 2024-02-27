import { UseFormRegister } from "react-hook-form";
import { useGetCountryNamesQuery } from "../../api/countries.api";
import SelectForm from "../selectForm";

const CountriesSelect = ({ register, registerName }: Props) => {
  const { data, isLoading } = useGetCountryNamesQuery();

  if (isLoading) {
    <div>loading...</div>;
  }

  if (data)
    return (
      <SelectForm
        register={register}
        registerName={registerName}
        options={data}
      />
    );
};

export default CountriesSelect;

type Props = {
  register: UseFormRegister<any>;
  registerName: string;
};
