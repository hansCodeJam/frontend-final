import React from  "react";
import PlayerFetch from "./PlayerFetch";
import TeamButton from "./Button/TeamButton";


const Main= ()=>(
    <div>
        <img src={"/images/nba-logo-transparent.png"} style={{height:"350px", width:"300px"}}/>
        <PlayerFetch /><br/>
        <TeamButton />
    </div>
)

export default Main;