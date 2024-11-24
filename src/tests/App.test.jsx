import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Weather App", () => {
  it("renders the title", () => {
    render(<App />);
    expect(screen.getByText(/Weather App/i)).toBeInTheDocument();
  });
});
