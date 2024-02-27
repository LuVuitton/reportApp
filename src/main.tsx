import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GoogleReCaptchaProvider reCaptchaKey="6LdO8JcUAAAAAJWQi_B27yDFuShbD2Cvq4AqcOCQ">
      <App />
    </GoogleReCaptchaProvider>
  </Provider>
);
