import React from "react";
import { useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Videos, SideBar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";
function Feed() {
  const {
    selectedCategory,
    setSelectedCategory,
    loading,
    setLoading,
    videos,
    setVideos,
  } = useGlobalContext();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [selectedCategory]);

  if (loading) {
    return <Loading />;
  }

  const year = new Date().getFullYear();
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
          {`copywright ${year} @ SABATUBE`}
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 1 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
          }}
        >
          {selectedCategory}{" "}
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
