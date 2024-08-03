import { useState, useEffect } from "react";
import axios from "axios";
import Mainweather from "./weather/Mainweather";
import TodoMain from "./Todoapp/TodoMain";
import { Box } from "@chakra-ui/react";
import Cookie from 'js-cookie'
import { api } from "./fetch/fetch";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/3.0/onecall",
          {
            params: {
              lat: 40.71427,
              lon: -74.00597,
              appid: `${import.meta.env.VITE_API_KEY}`,
              units: "imperial",
            },
          }
        );
        setData(response.data);
        let userId = localStorage.getItem('userId');
        if (!userId) {
          const response = await api.get('/getuser');
          userId = response.data.userId;
          localStorage.setItem('userId', userId);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      weekday: "long",
    }).format(date);
  };

  return (
    <Box bgColor={"#2a3043"} minH="100vh" p={5}>
    <Mainweather data={data} formatDate={formatDate} />
    <TodoMain />
  </Box>

  );
}

export default App;
