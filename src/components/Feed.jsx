import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Videos, SideBar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loading from "./Loading";
function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos,setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => {
        setVideos(data.items);
        setLoading(false);
      }
    );
  }, [selectedCategory]);
  console.log(videos)
  if (loading) {
    return <Loading/>
  }
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          copywright 2023 @ AS Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory}{' '}
          <span
            style={{
              color: "#F31503",
            }}
          >
            videos
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;