import React, { useState, useEffect } from "react";
// import { Table, Box, SpaceBetween, Button, Header, PropertyFilter, Pagination, Icon, Link } from "@awsui/components-react"
import Amplify, { API } from "aws-amplify";

import awsconfig from "../../aws-exports";

import "./SearchResult.css";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
// import { Paper, TableContainer, TableBody, TableHead, TableRow, TableCell, Table } from "@mui/material";

Amplify.configure(awsconfig);
const apiName = "api64d91239";
const path = "/getterTest";
const payload = {
  condition: "AND",
  scenes: ["急加速", "右折"],
  fromDate: "12/07/2020",
  toDate: "12/07/2021",
  amountOfData: 5,
};

function SearchResult() {
  const initData = [
    // { eventid: "", objectid: "", timestamp: 0, latitude: 0.0, longitude: 0.0 },
    {
      profileid: "f9a639fd-c091-4188-a058-17ccf7fe34f0",
      vehicleid: 0,
      tripid: "trip02",
      eventtype: "1-1",
      scene: "速度超過",
      starttimestamp: "2021-07-19 16:05:58",
      endtimestamp: "2021-07-19 15:03:49",
      latitude: 43.1135996,
      longitude: -79.2169174,
    },
  ];
  const [data, setData] = useState(initData);
  useEffect(() => {
    // API.get(apiName, path, {'body': body}).then((d) => {
    //   console.log(d.Items);
    //   setData(d.Items);
    // });

    API.post(apiName, path, {
      // headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      body: payload,
    }).then((d) => {
      console.log(d);
      setData(d.body)
    });
  }, []);

  return (
    <div>
      <TableBody>
        {/* <TableHead>
          <TableRow>
            <TableCell>EventId</TableCell>
            <TableCell>ObjectId</TableCell>
            <TableCell>Timestamp</TableCell>
            <TableCell>Latitude</TableCell>
            <TableCell>Longitude</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {data.map((x) => {
            return (
              <TableRow>
                <TableCell>{Object.keys(x)[0]}</TableCell>
                {/* <TableCell>{x.objectid}</TableCell>
                <TableCell>{new Date(x.timestamp).toUTCString()}</TableCell>
                <TableCell>{x.latitude}</TableCell>
                <TableCell>{x.longitude}</TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </TableBody>
    </div>
  );
}

// export type ItemType = {
//   eventid: string,
//   title: string,
//   customer: string,
//   policyNumber: string,
//   status: string,
//   type: string,
//   occurredTime: string,
//   location: string
// }

// const SearchResult: React.FC = () => {
//   const [listItems, setListItems] = useState<ItemType[]>([]);
//   const [selectedItems, setSelectedItems] = useState<ItemType[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const history = useHistory();

//   const FILTERING_PROPERTIES = [
//     {
//       key: 'title',
//       operators: FILTERING_OPERATORS,
//       propertyLabel: 'Event title',
//       groupValuesLabel: 'Event title values',
//     },
//     {
//       key: 'customer',
//       operator: FILTERING_OPERATORS,
//       propertyLabel: 'Customer',
//       groupValuesLabel: 'customer values',
//     },
//     {
//       key: 'policyNumber',
//       operator: FILTERING_OPERATORS,
//       propertyLabel: 'PolicyNumber',
//       groupValuesLabel: 'policyNumber values',
//     },
//     {
//       key: 'status',
//       operator: FILTERING_OPERATORS,
//       propertyLabel: 'Status',
//       groupValuesLabel: 'status values',
//     },
//     {
//       key: 'type',
//       operator: FILTERING_OPERATORS,
//       propertyLabel: 'Type',
//       groupValuesLabel: 'type values',
//     },
//     {
//       key: 'occurredTime',
//       operator: FILTERING_OPERATORS,
//       propertyLabel: 'Date & Time',
//       groupValuesLabel: 'Date & Time values',
//     },
//     {
//       key: 'location',
//       operator: FILTERING_OPERATORS,
//       propertyLabel: 'Location',
//       groupValuesLabel: 'location values',
//     }
//   ];

//   const COLUMN_DEFINITIONS = [
//     {
//       id: "title",
//       header: "Event title",
//       cell: e => e.title,
//       sortingField: "title"
//     },
//     {
//       id: "customer",
//       header: "Customer",
//       cell: e => e.customer,
//       sortingField: "customer"
//     },
//     {
//       id: "policyNumber",
//       header: "Policy number",
//       cell: e => e.policyNumber,
//       sortingField: "policyNumber"
//     },
//     {
//       id: "status",
//       header: "Status",
//       cell: e => getStatusComponent(e),
//       sortingField: "status"
//     },
//     {
//       id: "type",
//       header: "Type",
//       cell: e => e.type,
//       sortingField: "type"
//     },
//     {
//       id: "occurredTime",
//       header: "Date & Time",
//       cell: e => new Date(e.occurredTime).toLocaleString(),
//       sortingField: "occurredTime"
//     },
//     {
//       id: "location",
//       header: "Location",
//       cell: e => e.location,
//       sortingField: "location"
//     },
//   ];

//   const VISIBLE_COLUMN = [
//     "title",
//     "customer",
//     "policyNumber",
//     "status",
//     "type",
//     "occurredTime",
//     "location",
//   ];

//   const TableEmptyState = () => (
//     <Box textAlign="center" color="inherit">
//       <b>No resources</b>
//       <Box
//         padding={{ bottom: "s" }}
//         variant="p"
//         color="inherit"
//       >
//         No resources to display.
//       </Box>
//     </Box>
//   );

//   const TableNoMatch = () => (
//     <Box margin={{ vertical: 'xs' }} textAlign="center" color="inherit">
//       <SpaceBetween size="xxs">
//         <div>
//           <b>No matches</b>
//           <Box variant="p" color="inherit">
//             We can't find a match.
//           </Box>
//         </div>
//         <Button onClick={() => actions.setPropertyFiltering({ tokens: [], operation: 'and' })}>Clear filter</Button>
//       </SpaceBetween>
//     </Box >
//   );

//   const TableHeader = () => (
//     <Header
//       variant="h2"
//       actions={
//         <SpaceBetween direction="horizontal" size="xs">
//           <Button variant="primary" disabled={!ableAnalyze} onClick={onClickHandler}>Run Analysis</Button>
//         </SpaceBetween>
//       }
//     >
//       EVENT LIST
//     </Header>
//   );

//   const { items, actions, filteredItemsCount, collectionProps, paginationProps, propertyFilterProps } = useCollection(
//     listItems,
//     {
//       propertyFiltering: {
//         filteringProperties: FILTERING_PROPERTIES,
//         empty: <TableEmptyState />,
//         noMatch: <TableNoMatch />,
//       },
//       pagination: { pageSize: COUNT.list },
//       sorting: {},
//       selection: {}
//     }
//   );

//   useEffect(() => {
//     async function fetchData() {
//       setLoading(true);
//       const list = await fetchEvents();
//       setListItems(list);
//       setLoading(false);
//     }
//     fetchData();
//   }, []);

//   async function onClickHandler(e) {
//     setLoading(true);
//     const res = await updateEvent(selectedItems[0].id);
//     if (res._error) {
//       setLoading(false);
//       alert('error');
//       console.error(res._error);
//     } else {
//       setLoading(false);
//       history.go(0);
//     }
//   }

//   const getFilterCounterText = count => `${count} ${count === 1 ? 'match' : 'matches'}`;
//   const ableAnalyze = selectedItems.length === 1 && selectedItems[0].status !== 'completed';
//   const getStatusComponent = (customerInfo) => {
//     switch (customerInfo.status) {
//       case 'analyzing':
//         return (
//           <>
//             <Icon name="status-pending" size="normal" variant="subtle" />
//             <span style={{ "color": "#687078", "fontWeight": "bolder" }}>&nbsp;Analyzing&nbsp;</span>
//           </>
//         );
//       case 'failed':
//         return (
//           <>
//             <Icon name="status-warning" size="normal" variant="warning" />
//             <span style={{ "color": "#D13212", "fontWeight": "bolder" }}>&nbsp;Failed&nbsp;</span>
//           </>
//         );
//       case 'completed':
//         return (
//           <>
//             <Icon name="status-positive" size="normal" variant="success" />
//             <span style={{ "color": "#1D8102", "fontWeight": "bolder" }}>&nbsp;Success&nbsp;</span>
//             <Link href={`${PREFIX_ROUTING}${URL.analyzer}?id=${customerInfo.id}&title=${customerInfo.title}&customer=${customerInfo.customer}&policyNumber=${customerInfo.policyNumber}&eventType=${customerInfo.type}&occurredTime=${customerInfo.occurredTime}&lct=${customerInfo.location}`}><Icon name="external" size="normal" variant="link" /></Link>
//           </>
//         );
//       case 'unanalyzed':
//         return (
//           <>
//             {/* <Icon name="status-pending" size="normal" variant="subtle" /> */}
//             <span style={{ "color": "#687078", "fontWeight": "bolder" }}>&nbsp;Unanalyzed&nbsp;</span>
//           </>
//         )
//       default:
//         return '-';
//     }
//   }

//   return (
//     <SpaceBetween direction="vertical" size="l">
//       <Table
//         {...collectionProps}
//         items={items}
//         columnDefinitions={COLUMN_DEFINITIONS}
//         visibleColumns={VISIBLE_COLUMN}
//         ariaLabels={{
//           selectionGroupLabel: "Items selection",
//           allItemsSelectionLabel: ({ selectedItems }) =>
//             `${selectedItems.length} ${selectedItems.length === 1 ? "item" : "items"} selected`,
//           itemSelectionLabel: ({ selectedItems }, item) => {
//             const isItemSelected = selectedItems.filter(
//               i => i.title === item.title
//             ).length;
//             return `${item.title} is ${isItemSelected ? "" : "not"} selected`;
//           }
//         }}
//         selectionType="multi"
//         stickyHeader={true}
//         header={<TableHeader />}
//         loading={loading}
//         loadingText="Loading Data..."
//         filter={
//           <PropertyFilter
//             i18nStrings={PROPERTY_FILTERING_I18N_CONSTANTS}
//             {...propertyFilterProps}
//             countText={getFilterCounterText(filteredItemsCount)}
//           />
//         }
//         pagination={
//           <Pagination
//             {...paginationProps}
//             ariaLabels={{
//               nextPageLabel: "Next page",
//               previousPageLabel: "Previous page",
//               pageLabel: pageNumber =>
//                 `Page ${pageNumber} of all pages`
//             }}
//           />
//         }

//         onSelectionChange={
//           ({ detail }) => {
//             if (detail && detail.selectedItems) setSelectedItems(detail.selectedItems);
//             else setSelectedItems([]);
//           }
//         }
//         selectedItems={selectedItems}
//       />
//     </SpaceBetween >
//   )
// }

export default SearchResult;
