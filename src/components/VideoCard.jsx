import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Box, Typography, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "370px", sm: "358px", md: "300px" },
        boxShadow: "10px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
              md: "300px",
            },
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Box display='flex' gap='5px'>
            <Typography
              variant="subtitle3"
              fontWeight="bold"
              color="grey"
              mt="10px"
              textAlign='center'
            >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle  fontSize="12px" />
            </Typography>
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
