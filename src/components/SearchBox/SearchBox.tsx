import * as React from "react";
import { AmplifyFormField, AmplifyButton } from "@aws-amplify/ui-react";

import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

function SearchBox() {
  return (
    <div>
      <p>Search</p>
      <div style={{ display: "flex" }}>
        <DateTimeRangePickerWrapper />
      </div>
      <AmplifyButton onClick={() => alert("Searching...")}>
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
        onChange={onChange}
        value={value}
      />
    </div>
  );

}


export default SearchBox;
