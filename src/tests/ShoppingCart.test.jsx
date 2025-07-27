import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "../components/ShoppingCart";

const mockProduct = {
  title: "Test Product",
  price: 49.99,
  images: ["https://example.com/test-image.jpg"],
};

describe("ShoppingCart component", () => {
  it("Renders image, title and price", () => {
    render(<ShoppingCart product={mockProduct} addToCart={() => {}} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$49.99")).toBeInTheDocument();

    const image = screen.getByAltText("Test Product");
    expect(image).toHaveAttribute("src", mockProduct.images[0]);
  });

  it("Calls addToCart when button is clicked", async () => {
    const addToCartMock = vi.fn();
    const user = userEvent.setup();

    render(<ShoppingCart product={mockProduct} addToCart={addToCartMock} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    await user.click(button);

    expect(addToCartMock).toHaveBeenCalledTimes(1);
    expect(addToCartMock).toHaveBeenCalledWith(mockProduct);
  });
});
