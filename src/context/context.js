import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [videoDetail, setVideoDetail] = useState(null);

  return (
    <AppContext.Provider
      value={{
        videos,
        setVideos,
        channelDetail,
        setChannelDetail,
        selectedCategory,
        setSelectedCategory,
        loading,
        setLoading,
        searchTerm,
        setSearchTerm,
        videoDetail,
        setVideoDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
