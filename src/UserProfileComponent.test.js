import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserProfileComponent from "./UserProfileComponent";

describe("The User Profile Component", () => {
  test("displays an error message if first name blank", () => {
    render(<UserProfileComponent />);

    const firstNameInput = screen.getByLabelText("First Name*");
    fireEvent.change(firstNameInput, { target: { value: "" } });

    const submitButton = screen.getByText("Update");
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText(/First Name cannot be blank/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays an error message if last name blank", () => {
    render(<UserProfileComponent />);
    const firstNameInput = screen.getByLabelText("First Name*");
    fireEvent.change(firstNameInput, { target: { value: "Adam" } });

    const lastNameInput = screen.getByLabelText("Last Name*");
    fireEvent.change(lastNameInput, { target: { value: "" } });

    const submitButton = screen.getByText("Update");
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText(/Last Name cannot be blank/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays an error message if email is blank", () => {
    render(<UserProfileComponent />);
    const firstNameInput = screen.getByLabelText("First Name*");
    fireEvent.change(firstNameInput, { target: { value: "Adam" } });

    const lastNameInput = screen.getByLabelText("Last Name*");
    fireEvent.change(lastNameInput, { target: { value: "A" } });

    const emailInput = screen.getByLabelText("Email*");
    fireEvent.change(emailInput, { target: { value: "" } });

    const submitButton = screen.getByText("Update");
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText(/Email cannot be blank/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays an error message if email is invalid", () => {
    render(<UserProfileComponent />);
    const firstNameInput = screen.getByLabelText("First Name*");
    fireEvent.change(firstNameInput, { target: { value: "Adam" } });

    const lastNameInput = screen.getByLabelText("Last Name*");
    fireEvent.change(lastNameInput, { target: { value: "A" } });

    const emailInput = screen.getByLabelText("Email*");
    fireEvent.change(emailInput, { target: { value: "a@a.com" } });

    const regex = new RegExp(/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/);
    expect(emailInput.value).toMatch(regex);

    const submitButton = screen.getByText("Update");
    fireEvent.click(submitButton);
  });

  test("displays an error message if password is blank", () => {
    render(<UserProfileComponent />);
    const firstNameInput = screen.getByLabelText("First Name*");
    fireEvent.change(firstNameInput, { target: { value: "Adam" } });

    const lastNameInput = screen.getByLabelText("Last Name*");
    fireEvent.change(lastNameInput, { target: { value: "A" } });

    const emailInput = screen.getByLabelText("Email*");
    fireEvent.change(emailInput, { target: { value: "a@a.com" } });

    const passwordInput = screen.getByLabelText("Password*");
    fireEvent.change(passwordInput, { target: { value: "" } });

    const submitButton = screen.getByText("Update");
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText(/Password cannot be blank/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays an error message if password confirm blank", () => {
    render(<UserProfileComponent />);

    const firstNameInput = screen.getByLabelText("First Name*");
    fireEvent.change(firstNameInput, { target: { value: "Bob" } });

    const lastNameInput = screen.getByLabelText("Last Name*");
    fireEvent.change(lastNameInput, { target: { value: "Smith" } });

    const emailInput = screen.getByLabelText("Email*");
    fireEvent.change(emailInput, { target: { value: "abc@def.com" } });

    const passwordInput = screen.getByLabelText("Password*");
    fireEvent.change(passwordInput, { target: { value: "asdf" } });

    const submitButton = screen.getByText("Update");
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText(/Password Confirm cannot be blank/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays an error message if passwords are not matching", () => {
    render(<UserProfileComponent />);

    const firstNameInput = screen.getByLabelText("First Name*");
    fireEvent.change(firstNameInput, { target: { value: "Bob" } });

    const lastNameInput = screen.getByLabelText("Last Name*");
    fireEvent.change(lastNameInput, { target: { value: "Smith" } });

    const emailInput = screen.getByLabelText("Email*");
    fireEvent.change(emailInput, { target: { value: "abc@def.com" } });

    const passwordInput = screen.getByLabelText("Password*");
    fireEvent.change(passwordInput, { target: { value: "asdf" } });

    const passwordConfirmInput = screen.getByLabelText(
      "Password Confirmation*"
    );
    fireEvent.change(passwordConfirmInput, { target: { value: "asdfg" } });

    const submitButton = screen.getByText("Update");
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText(/Passwords do not match/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("displays an error message if passwords are not matching", () => {
    render(<UserProfileComponent />);

    const firstNameInput = screen.getByLabelText("First Name*");
    fireEvent.change(firstNameInput, { target: { value: "Bob" } });

    const lastNameInput = screen.getByLabelText("Last Name*");
    fireEvent.change(lastNameInput, { target: { value: "Smith" } });

    const emailInput = screen.getByLabelText("Email*");
    fireEvent.change(emailInput, { target: { value: "abc@def.com" } });

    const passwordInput = screen.getByLabelText("Password*");
    fireEvent.change(passwordInput, { target: { value: "asdf" } });

    const passwordConfirmInput = screen.getByLabelText(
      "Password Confirmation*"
    );
    fireEvent.change(passwordConfirmInput, { target: { value: "asdf" } });

    const submitButton = screen.getByText("Update");
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText(
      /Thank you, Bob Smith, for updating your profile!/i
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
