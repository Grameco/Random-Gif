import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

export default function useHook(tag) {

  const [gif, setGif] = useState('')
  const [loading, setLoading] = useState(false)
  
  async function fetchData() {
    setLoading(true);                                                   // Set loading to true when fetching data

    try {
      const output = await axios.get(tag ? `${url}&tag=${tag}` : url);  // Fetch GIF based on tag if provided, else fetch random GIF
      setGif(output.data.data.images.original.url);                     // Update state with the GIF URL
      console.log(output);
    } catch (error) {
      console.error('Error fetching GIF:', error); 
    } finally {
      setLoading(false);                                                // Set loading to false after fetching data
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {gif, loading, fetchData}
}