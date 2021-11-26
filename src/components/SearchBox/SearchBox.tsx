import * as React from "react";
import { AmplifyButton } from "@aws-amplify/ui-react";

import { useNavigate } from "react-router";
import "./SearchBox.css";

function SearchBox() {
  const navigate = useNavigate();
  return (
    <div className="SearchBox">
      <AmplifyButton
        className="SearchBox-searchbutton"
        onClick={() => {
          navigate("/events");
        }}
      >
        List All
      </AmplifyButton>
    </div>
  );
}

export default SearchBox;
