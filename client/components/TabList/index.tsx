import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import { default as TabListDefault } from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { ToggleButtonGroup } from "../ToggleButtonGroup";

export interface CardInterface {
  name: string;
  description: string;
}

interface CardSearcherProps {
  cards?: CardInterface[];
}

export const TabList: React.FC<CardSearcherProps> = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Box>
          <TabListDefault onChange={handleChange}>
            <Tab label="Debit cards" value="1" />
            <Tab label="Credit cards" value="2" />
          </TabListDefault>
        </Box>
        <TabPanel value="1">
          <ToggleButtonGroup />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </>
  );
};
