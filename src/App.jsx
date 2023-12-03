/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TopBar from "./components/Topbar";
import Categories from "./components/Categories";
import Cards from "./components/Cards";
// import { fetchDataFromApi } from './utils/api'
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          q: "red",
          key: "AIzaSyAwe0_ebAkfgEJD3UMSoj3PUEnFhaRbD4s",
        },
      })
      .then((response) => {
        setVideos(response.data);
      })
      .catch((err) => {
        console.log(err);
        // alert(`error is ${err}`);
      });
    console.log(JSON.stringify(videos));
  }, []);

  return (
    <div className="main min-h-screen bg-bgyt">
      <TopBar />
      <div >
        <div>
          
        </div>
        <div className="flex flex-col">
          <Categories />
          <div className="grid w-[400px] cards md:w-[90%] grid-cols-1  mx-auto mt-4  gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  2xl:grid-col-7">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
