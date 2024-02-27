import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const useCaptchaToken = (action: string): string | null => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      if (executeRecaptcha) {
        const newToken = await executeRecaptcha(action);
        setToken(newToken);
      }
    };

    getToken();
  }, [executeRecaptcha, action]);

  return token;
};

export default useCaptchaToken;
