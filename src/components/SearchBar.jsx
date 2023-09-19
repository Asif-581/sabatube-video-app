import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: { xs: 20 },
        border: "1px solid #e3e3e3",
        pl: {xs:1},
        boxShadow: "none",
        mr: {xs:2, sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        
      />
      <IconButton type="submit" sx={{ xs: { p: "0px" }, color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
