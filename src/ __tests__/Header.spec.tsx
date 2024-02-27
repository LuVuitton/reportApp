import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "../components";
import { BrowserRouter } from "react-router-dom";

describe("Header component", () => {
  test("renders navigation links correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const createReportLink = screen.getByText(/create report/i);
    const reportListLink = screen.getByText(/report list/i);

    expect(createReportLink).toBeInTheDocument();
    expect(reportListLink).toBeInTheDocument();
  });
});
