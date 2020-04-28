import React from "react";

const Stats = props => (

    <div>
        <h1>{props.playerName}</h1>
        <h2>{props.playerTeam}</h2>
        {props.playerName ? (
            <div>
                <img src={`images/${props.playerTeamLogo}.png`} width="100px"/><br/>
                <img src={`https://nba-players.herokuapp.com/players/${props.playerLastName}/${props.playerFirstName}` }/>
                {/* <img src={`https://nba-players.herokuapp.com/players/Harden/James`}/> */}
                {/* <img src={`/images/Lakers.png`} /> */}

                <h3>{'Games Played: ' + props.playerInfo.games_played}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{'Pts: ' + props.playerInfo.pts}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{'Rebs: ' + props.playerInfo.reb}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{'Ast: ' + props.playerInfo.ast}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{'Stl: ' + props.playerInfo.stl}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{'Blk: ' + props.playerInfo.blk}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{'TO: ' + props.playerInfo.turnover}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{'FG %: ' + props.playerInfo.fg_pct}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{'FT %: ' + props.playerInfo.ft_pct}</h3>
                <h3 style={{display:"inline-block", margin:"15px"}}>{'FG3 %: d' + props.playerInfo.fg3_pct}</h3>
            </div>
        ) : (<h1></h1>)}
    </div>
)

export default Stats;