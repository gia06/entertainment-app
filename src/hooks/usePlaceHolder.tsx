import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function usePlaceHolder() {
  const route = useLocation().pathname.slice(1);
  const [category, setCategory] = useState("movies or TV series");

  useEffect(() => {
    switch (route) {
      case "home":
        setCategory("movies or TV series");
        break;
      case "movies":
        setCategory("movies");
        break;
      case "tv-series":
        setCategory("TV series");
        break;
      case "bookmarks":
        setCategory("bookmarked shows");
        break;
    }
  }, [route]);

  const placeHolder = `Search for ${category}`;

  return { placeHolder };
}

export default usePlaceHolder;
