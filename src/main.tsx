import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const clientSecretKey = import.meta.env.VITE_SCLIENT_SECRET;


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GoogleReCaptchaProvider reCaptchaKey={clientSecretKey}>
      <App />
    </GoogleReCaptchaProvider>
  </Provider>
);
