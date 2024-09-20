import React from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from ".";

const Navbar = () => (
  <Stack
    direction={{ xs: "column", sm: "row" }} // column on small screens, row on larger
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Box
      component={Link}
      to="/"
      reloadDocument
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none", // Remove default link underline
        color: "inherit", // Inherit text color
        marginBottom: { xs: "20px", sm: "10px" }, // Responsive marginBottom
        marginRight: "50px",
      }}
    >
      <img src={logo} alt="logo" height={45} />
      <Box
        component="span"
        sx={{
          color: "#fff",
          fontSize: "2rem",
        }}
      >
        YTFlare
      </Box>
    </Box>
    <SearchBar />
  </Stack>
);

export default Navbar;
