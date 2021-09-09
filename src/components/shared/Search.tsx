import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import { Form, SearchWrapper } from "./Search.styles";
import { SearchInput } from "../../styles/formStyles";
import Button from "./Button";

const Search: React.FC = () => {
  const history = useHistory();
  const inputRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      inputRef.current?.focus();
      return;
    }
    history.push(`/search/${inputRef.current.value}`);
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
