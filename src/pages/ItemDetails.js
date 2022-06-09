import React from "react";
import {useItemDetails} from "../hooks/useItemDetails";
import "./CharacterList.css";

export default function ItemDetails() {
  const { error, loading, data } = useItemDetails();
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
      {data.launchesPast.map((character) => {
        console.log(character.mission_name);
        console.log(character.ships.length);
        console.log(character.links.video_link);
        // console.log(character.ships[0].image);
        return (
          <div className="main-div" key={character.id}>
            <img
              className="img"
              src={
                character.ships.length > 0
                  ? character.ships[0].image
                  : "https://i.imgur.com/28dCx6G.jpg"
              }
            />

            <h2>{character.mission_name}</h2>

            <p>{character.launch_date_local}</p>
          </div>
        );
      })}
    </div>
  );
}
