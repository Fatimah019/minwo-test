import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Categories } from "../components";

describe("<Categories />", () => {
  const renderCategories = () => {
    render(
      <BrowserRouter>
        <Categories />
      </BrowserRouter>
    );

    return {
      categoryList: screen.getByRole("list"),
      getSearchParams: () => {
        const searchParams = new URLSearchParams(window.location.search).get(
          "category"
        );

        return [searchParams];
      },
    };
  };

  it("has the correct list of categories", () => {
    const { categoryList } = renderCategories();
    const { getAllByRole } = within(categoryList);
    const categories = getAllByRole("listitem");

    expect(categories.length).toBe(11);

    const categoriesList = categories.map((category) => category.textContent);

    expect(categoriesList).toEqual([
      "Smartphones",
      "Laptops",
      "Fragrances",
      "Skincare",
      "Groceries",
      "Furniture",
      "Tops",
      "Sunglasses",
      "Automotive",
      "Motorcycle",
      "Lighting",
    ]);
  });

  it("changes url search param on category click", () => {
    const { categoryList, getSearchParams } = renderCategories();

    const { getAllByRole } = within(categoryList);
    const categories = getAllByRole("listitem");

    //  verify that Smartphones is first on the list of categories
    expect(
      categories.findIndex((category) => category.textContent === "Smartphones")
    ).toBe(0);

    userEvent.click(categories[0]);

    const [searchParams] = getSearchParams();

    expect(searchParams).toBe("Smartphones");
  });
});
