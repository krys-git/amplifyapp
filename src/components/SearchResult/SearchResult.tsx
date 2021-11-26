import React, { useState } from "react";
import {} from "@aws-amplify/ui-react";
import { Table } from "@awsui/components-react";
import Amplify, { API } from "aws-amplify";
import awsconfig from "../../aws-exports";

import "./SearchResult.css"

Amplify.configure(awsconfig);
//var data= [{eventid: "event 1"}];
const apiName = "apiAmplify2Lambda";
const path = "/events";

// const COLUMN_DEFINITIONS = [
//   {
//     id: "eventid",
//     header: "Event ID",
//     cell: (e: { eventid: any; }) => e.eventid,
//     sortingField: "eventid"
//   },
//   {
//     id: "objectid",
//     header: "Object ID",
//     cell: (e: { objectid: any; }) => e.objectid,
//     sortingField: "objectid"
//   },
//   {
//     id: "timestamp",
//     header: "Datetime",
//     cell: e => e.timestamp,
//     sortingField: "timestamp"
//   },
//   {
//     id: "latitude",
//     header: "latitude",
//     cell: (e: { latitude: any; }) => e.latitude,
//     sortingField: "latitude"
//   },
//   {
//     id: "longitude",
//     header: "longitude",
//     cell: (e: { longitude: any; }) => e.longitude,
//     sortingField: "longitude"
//   },

function SearchResult() {
  const initData = [
    { eventid: "", objectid: "", timestamp: 0, latitude: 0.0, longitude: 0.0 },
  ];
  const [data, setData] = useState(initData);
  API.get(apiName, path, {}).then((d) => {
    console.log(d.Items);
    setData(d.Items);
  });

  return (
    <div className="SearchResult">
      <table> 
        <thead>
          <tr>
            <th>EventId</th>
            <th>ObjectId</th>
            <th>Timestamp</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => {
            return (
              <tr>
                <td>{x.eventid}</td>
                <td>{x.objectid}</td>
                <td>{new Date(x.timestamp).toUTCString()}</td>
                <td>{x.latitude}</td>
                <td>{x.longitude}</td>
              </tr>
            );
          })}
        </tbody>
      </table>    
    </div>
  );
}

export default SearchResult;
