const { render, screen } = require("@testing-library/react")
import Contact from "../src/Components/Contact"
import "@testing-library/jest-dom"

test("Testing contact component heading", () => {
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument()
})


test("Testing contact component button", () => {
    render(<Contact/>)

    const btn = screen.getByText("Submit");
    expect(btn).toBeInTheDocument()
})

test("Testing contact component input placeholder", () => {
    render(<Contact/>)

    const inputPlaceholder = screen.getByPlaceholderText("Please enter name");
    expect(inputPlaceholder).toBeInTheDocument()
})

test("Testing all input loaded", () => {
    render(<Contact/>)

    const inputBoxesArray = screen.getAllByRole("textbox");
    

    expect(inputBoxesArray.length).toBe(2)
})