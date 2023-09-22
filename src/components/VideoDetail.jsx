import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";

function VideoDetail() {
  const { videoDetail, setVideoDetail, videos, setVideos, loading, setLoading } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    try {
      setLoading(true);
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
        setVideoDetail(data.items[0]);
         setLoading(false);
      }
      );

      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
        (data) => {
          setVideos(data.items);
           setLoading(false);
        }
      );
      
    }
    catch (error) {
      console.log(error);
       setLoading(false);
    }
   
  }, [id]);

 if (loading) {
   return (
     <Loading/>
   );
  }
  
  if (!videoDetail?.snippet) return "Loading...";
 
 
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
             
             
            />
            <Typography color="white" variant="h5" fontWeight="bold" p={1}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems='center'
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
              
            >
              <Link to={`channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitled1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "15px", color: "gray", ml: "6px" }}
                  />
                </Typography>

              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
