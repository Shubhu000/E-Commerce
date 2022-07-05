import React, { useState } from "react";
import { Collapse } from "reactstrap";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Collapse isOpen={isOpen}>
        <h1>Hello</h1>
      </Collapse>
    </div>
  );
};

export default SearchModal;
