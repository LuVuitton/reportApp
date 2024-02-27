import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, ProgressLine, SnackBar } from "./components";
import { ReportForm, ReportList } from "./components";
import { generateClientToken } from "./helpers/clientToken";

export default function App() {
  generateClientToken();

  return (
    <BrowserRouter>
      <Header />
      <ProgressLine />
      <Routes>
        <Route path="/" element={<ReportForm />} />
        <Route path="/reports" element={<ReportList />} />
      </Routes>
      <SnackBar />
    </BrowserRouter>
  );
}
