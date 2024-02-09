import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

function Videos({ videos, direction }) {
  return (
    <Stack
      sx={{
        flexWrap: "wrap",
        justifyContent: { xs:"center",md:"flex-start"},
        gap: {xs:'20px', md:"10px"},
      }}
      direction={direction || "row"}
    >
      {videos?.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
}

export default Videos;
