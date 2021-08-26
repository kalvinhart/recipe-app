import React, { useRef } from "react";
import { Form, SearchWrapper } from "./Search.styles";
import { SearchInput } from "../../styles/formStyles";
import Button from "./Button";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <SearchWrapper>
      <Form onSubmit={onFormSubmit}>
        <SearchInput
          id="search"
          name="search"
          placeholder="Search for a recipe..."
          ref={inputRef}
        ></SearchInput>
        <Button width="40px" text="Go" click={() => null} />
      </Form>
    </SearchWrapper>
  );
};

export default Search;
