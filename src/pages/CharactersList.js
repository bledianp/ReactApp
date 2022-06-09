import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  console.log(data);

  if (loading)
    return (
      <img
        className="spinner"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
      />
    );

  if (error)
    return (
      <div style={{ margin: "auto" }}>
        <h1>Something went wrong!</h1>
      </div>
    );

  return (
    <div className="CharacterList">
      {data.launchesPast.map((item) => {
        // console.log(item.mission_name);
        // console.log(item.ships.length);
        // console.log(item.links.video_link);

        return (
          <div className="main-div" key={item.id}>
            <Link className="link"to={`/${item.id}`} target="_blank">
              <img
                className="img"
                src={
                  item.ships.length > 0
                    ? item.ships[0].image
                    : "https://i.imgur.com/28dCx6G.jpg"
                }
              />

              <h2>{item.mission_name}</h2>
            </Link>

            <p>{item.launch_date_local}</p>
          </div>
        );
      })}
    </div>
  );
}
