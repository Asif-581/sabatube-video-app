import React from "react";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";

function SearchFeed() {
  
  const { videos, setVideos } = useGlobalContext();
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items)});
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search Results for :
        <span
          style={{
            color: "#F31503",
          }}
        >
          {' '}{searchTerm}
        </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
