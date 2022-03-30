import { useEffect, useState } from "react";
import Gif from "./components/Gif";
import './GifStyles.css'

export default function GifApp() {
  const [inputVal, setInputVal] = useState("");
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=mhzr4QVrLh2viyYNCN1FY70CpIcvWuxe&q=${inputVal}&limit=12`
      )
        .then((response) => response.json())
        .then((data) => setGifData(data.data))
        .catch((err) => console.log(err));
    };

    getData();
  }, [inputVal]);

  return (
    <div className="App">
      <div>
        <input type="text" onChange={(e) => setInputVal(e.target.value)} />
        <button type="submit">Search</button>
        {gifData.map((d) => (
          <Gif title={d.title} url={d.images.fixed_width.url} key={d.id} />
        ))}
      </div>
    </div>
  );
}
