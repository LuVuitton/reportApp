import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { CreateReportDTO, useCreateReportMutation } from "../../api/report.api";
import { reportFormSchema } from "../../helpers/reportFormSchema";
import { reportRadioOptions } from "../../data";
import useCaptchaToken from "../../hooks/getCaptchaToken";
import { FormInput, RadioGroup, CountriesSelect } from "../";

export default function ReportForm() {
  const [radioValue, setRadioValue] = useState<string | null>(null);
  const captcha3Token = useCaptchaToken("abuse");
  const clientToken = localStorage.getItem("clientToken");
  const [addReport] = useCreateReportMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateReportDTO>({
    resolver: yupResolver(reportFormSchema()),
  });

  useEffect(() => {
    clientToken && setValue("clientToken", clientToken);
    captcha3Token && setValue("captchaToken", captcha3Token);
  }, [captcha3Token, clientToken]);

  const onSubmit = handleSubmit(async (data) => {
    data.reportType !== "gambling" && setValue("targetCountry", null);
    data.reportType !== "spam" && setValue("spamProof", null);
    addReport(data);
  });

  const radioHasChanged = (value: string) => {
    setRadioValue(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormInput
        type="url"
        error={errors.abusedURL}
        errorMessage={errors.abusedURL?.message}
        placeholder="Abused URL"
        register={register}
        registerName="abusedURL"
      />
      <FormInput
        type="email"
        error={errors.email}
        errorMessage={errors.email?.message}
        placeholder="Your Email"
        register={register}
        registerName="email"
      />
      <RadioGroup
        register={register}
        registerName="reportType"
        options={reportRadioOptions}
        error={errors.reportType}
        errorMessage={errors.reportType?.message}
        callback={radioHasChanged}
      />
      {radioValue === "gambling" && (
        <CountriesSelect register={register} registerName="reportType" />
      )}
      {radioValue === "spam" && (
        <FormInput
          type="text"
          error={errors.spamProof}
          errorMessage={errors.spamProof?.message}
          placeholder="You can type proof here"
          register={register}
          registerName="spamProof"
          isTextarea
        />
      )}

      <input type="submit" />
    </form>
  );
}
