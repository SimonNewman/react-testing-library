import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Button from "@/components/Button";
import renderer from "react-test-renderer";

const buttonText = "My Test Button";

test("Renders Button component and simulates click", async () => {
  // Mock function for button onClick
  const handleClick = jest.fn(() => console.log("Button was clicked"));

  // Render the Button component
  render(<Button onClick={handleClick}>{buttonText}</Button>);

  // Get the button element
  const button = screen.getByText(buttonText);

  // Simulate a user clicking the button
  fireEvent.click(button);

  // Verify click handler was called
  expect(handleClick).toHaveBeenCalled();

  // Snapshot
  const tree = renderer.create(<Button>{buttonText}</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
