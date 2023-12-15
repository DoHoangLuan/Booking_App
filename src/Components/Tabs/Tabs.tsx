import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./tabs.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  title?: string;
}

interface BasicTabsProps {
  menuTab: string[];
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, title, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs: React.FC<BasicTabsProps> = ({ menuTab }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {menuTab.map((menu, index) => (
            <Tab key={index} label={menu.title} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {menuTab.map((menu, index) => {
        return (
          <CustomTabPanel value={value} index={index} title={menu.title}>
            <Typography>{menu.children}</Typography>
          </CustomTabPanel>
        );
      })}
    </Box>
  );
};
export default BasicTabs;
