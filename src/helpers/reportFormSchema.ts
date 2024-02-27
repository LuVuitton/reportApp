import * as yup from "yup";

export const reportFormSchema = () => {
  return yup.object({
    abusedURL: yup.string().required().url(),
    email: yup.string().required().email(),
    reportType: yup.string().required("Please choose option from list"),
    captchaToken: yup.string().required(),
    clientToken: yup.string().required(),
  });
};
