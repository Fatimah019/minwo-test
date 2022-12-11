import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import { Search } from "../components";

describe("<Search />", () => {
  const renderSearch = () => {
    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    return {
      input: screen.getByLabelText("search-product"),
      querySearchButton: screen.queryByTestId("search-button"),
      getSearchParams: () => {
        const searchParams = new URLSearchParams(window.location.search).get(
          "search"
        );

        return [searchParams];
      },
    };
  };

  it("disables search button on empty value", () => {
    const { input, querySearchButton } = renderSearch();

    expect(input).toBeInTheDocument();

    expect(input).toBeEmptyDOMElement();

    expect(querySearchButton).not.toBeInTheDocument();
  });

  it("enables search button when input is not empty", () => {
    const { input } = renderSearch();

    fireEvent.change(input, { target: { value: "laptop" } });

    expect(input).toHaveValue("laptop");

    expect(screen.getByTestId("search-button")).toBeInTheDocument();
  });

  it("changes url search param on search button click", () => {
    const { input, getSearchParams } = renderSearch();

    fireEvent.change(input, { target: { value: "laptop" } });

    expect(screen.getByTestId("search-button")).toBeInTheDocument();

    userEvent.click(screen.getByTestId("search-button"));

    const [searchParams] = getSearchParams();

    expect(searchParams).toBe("laptop");
  });
});
