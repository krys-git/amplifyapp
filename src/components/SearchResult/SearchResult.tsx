import React from 'react';
import {} from '@aws-amplify/ui-react'
import {Table} from '@awsui/components-react'
import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../aws-exports';

Amplify.configure(awsconfig);

const apiName = 'apiAmplify2Lambda';
const path = '/events';

const data = API.get(apiName, path, {});

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
  return (
    <div>
      <p>{typeof(data)}</p>
    </div>
  )

  //   <table>
  //       <thead>
  //         <tr>
  //             <th>EventId</th>
  //             <th>ObjectId</th>
  //             <th>Timestamp</th>
  //             <th>Latitude</th>
  //             <th>Longitude</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           mockData.map(item => {
  //               return (
  //                 <tr>
  //                   <td>{item.eventid}</td>
  //                   <td>{item.objectid}</td>
  //                   <td>{new Date(item.timestamp).toUTCString()}</td>
  //                   <td>{item.latitude}</td>
  //                   <td>{item.longitude}</td>
  //                 </tr>
  //               );
  //           })
  //         }
  //       </tbody>
  //   </table>
  // );
}

export default SearchResult;
