import React, { useEffect, useState } from "react";
import { AmplifyButton } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router";

import {
  Button,
  Form,
  Header,
  SpaceBetween,
  Container,
  FormField,
  Select,
  DatePicker,
  Checkbox,
  ColumnLayout,
  Tiles,
} from "@awsui/components-react";

import "./SearchBox.css";

function SearchBox() {
  const navigate = useNavigate();

  const sceneOptions = [
    { id: 1, label: "Scene 1", checked: true },
    { id: 2, label: "Scene 2", checked: false },
    { id: 3, label: "Scene 3", checked: false },
    { id: 4, label: "Scene 4", checked: false },
    { id: 5, label: "Scene 5", checked: false },
    { id: 6, label: "Scene 6", checked: false },
    { id: 7, label: "Scene 7", checked: false },
  ];

  const scenes = [
    "Scene 1",
    "Scene 2",
    "Scene 3",
    "Scene 4",
    "Scene 5",
    "Scene 6",
    "Scene 7",
  ];

  // const [dataCheckList, setDataCheckList] =
  //   useState<Array<{ id: number; label: string; checked: boolean }>>(
  //     sceneOptions
  //   );

  // const checkboxHandle = function () {
  //   let cloneList = { ...dataCheckList };
  //   cloneList[2].checked = true;
  //   console.log(dataCheckList);
  // };

  return (
    <div style={{ width: "50%", minWidth: "1000px" }}>
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="primary" onClick={() => navigate("/events")}>
              List all
            </Button>
          </SpaceBetween>
        }
        header={<Header variant="h1">SEARCH</Header>}
      >
        <Container header={<Header variant="h2">SEARCH DATA</Header>}>
          <SpaceBetween direction="vertical" size="m">
            <b>Scene</b>

            <ColumnLayout borders="none" columns={4}>
              {scenes.map((item, index) => {
                return (
                  <Checkbox key={index} checked={false}>
                    {item}
                  </Checkbox>
                );
              })}
            </ColumnLayout>
          </SpaceBetween>
        </Container>
      </Form>
    </div>
  );
}

export default SearchBox;
