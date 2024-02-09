import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Stack
      direction="row"
      display='flex'
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <Typography
          color="white"
          sx={{
            marginLeft: { xs: "10px" },
            marginRight: { xs: "15px" },
            fontSize: { md: "20px", xs: "15px" },
          }}
          fontWeight="bold"
        >
          SABATUBE
        </Typography>
      </Link>

      <SearchBar />
    </Stack>
  );
}

export default Navbar;
