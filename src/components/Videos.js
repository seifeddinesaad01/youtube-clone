import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";
const Videos = ({ videos, direction }) => {
  if (!videos) return "loading ";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
