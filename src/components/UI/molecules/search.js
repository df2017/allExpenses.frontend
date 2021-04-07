import React from "react";
import ButtonDinamic from "../atoms/buttons";
import InputDinamic from "../atoms/inputs";

function SearchBar() {
  const propButton = {};
  const propInput = {};

  return (
    <section>
      <form className="box">
        <div className="field is-grouped is-justify-content-flex-end">
          <div className="control">
            <InputDinamic
              classStyle="input is-normal"
              type="text"
              placeholder="e.g. alex@example.com"
            />
          </div>
          <ButtonDinamic type="submit" text="Search" classStyle="is-black" />
        </div>
      </form>
    </section>
  );
}
export default SearchBar;
