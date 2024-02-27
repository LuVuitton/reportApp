import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [value, setValue] = useState("/");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setValue(location.pathname);
  }, []);

  const handleChange = (_event: any, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", marginBottom: "20px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Create Report" value="/" />
            <Tab label="Report List" value="/reports" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
