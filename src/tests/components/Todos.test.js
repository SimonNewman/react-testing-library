import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Todos from "@/components/Todos";
import renderer from "react-test-renderer";

const newTodoText = "My first todo";

it("Renders Button component and simulates adding a todo", async () => {
  // Render the Todos component
  render(<Todos />);

  // Get the input and button elements
  const input = screen.getByLabelText("New Todo");
  const button = screen.getByRole("button");

  // Simulate user typing new todo
  fireEvent.change(input, { target: { value: newTodoText } });

  // Simulate a user clicking the button
  fireEvent.click(button);

  // Check if the new todo was added to the list
  const todos = screen.getByRole("list");
  expect(todos).toHaveTextContent(newTodoText);

  // Check that todo input has been cleared
  expect(input).toHaveTextContent("");

  // Snapshot
  const tree = renderer.create(<Todos />).toJSON();
  expect(tree).toMatchSnapshot();
});
