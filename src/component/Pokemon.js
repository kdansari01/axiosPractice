import axios from "axios";
import { useEffect, useState } from "react";

export const Pokemon = () => {
  const [num, setNum] = useState();
  const [Data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setData(resp.data.name);
    }
    getData();
  });
  console.log(Data);

  return (
    <>
      <div>
        <select
          value={num}
          onClick={(event) => {
            setNum(event.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>

        <div>
          {/* {Data.map((poke)=>(
          <h1> num is {poke}</h1>

          ))} */}
          <h1>{num}</h1>
        </div>
      </div>
    </>
  );
};
