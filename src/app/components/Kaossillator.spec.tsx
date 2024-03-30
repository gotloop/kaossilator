import * as React from "react";
import { render } from "@testing-library/react";

import { Kaossillator } from "./Kaossillator";

test("renders hidden title", () => {
  const { getByText } = render(<Kaossillator />);
  const linkElement = getByText(/Kaossilator/i);
  expect(linkElement).toBeInTheDocument();
});
