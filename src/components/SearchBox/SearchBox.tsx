import * as React from "react";
import { AmplifyFormField, AmplifyButton } from "@aws-amplify/ui-react";

import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";

import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="SearchBox">
      <div className="SearchBox-title">Please specify search range</div>
      <div className="SearchBox-datepicker">
        <DateTimeRangePickerWrapper />
      </div>
      <AmplifyButton 
        className="SearchBox-searchbutton"
        onClick={() => alert("Searching...")}>
        Search
      </AmplifyButton>
    </div>
  );
}

function DateTimeRangePickerWrapper() {
  const [value, onChange] = React.useState([new Date(), new Date()]);

  return (
    <div>
      <DateTimeRangePicker 
        onChange={() => {
          
        }} 
        value={[new Date(), new Date()]} />
    </div>
  );
}

export default SearchBox;
