
import React, {useState} from "react";
import Select from 'react-select'

function SelectSearch(data) {

  const [options] = useState(data)

  return (
    <Select
      closeMenuOnSelect={false}
      isMulti
      name="colors"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
}
export default SelectSearch;


