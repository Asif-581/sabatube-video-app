import React from 'react'
import { Box } from '@mui/material'
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box
       sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
       minHeight="95vh"
     
     >
       <CircularProgress size={200} sx={{color:'white'}} />
     </Box>
  )
}

export default Loading