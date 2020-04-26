import React from "react";
import TeamCard from "./TeamCard";

const TeamSearch= ()=> (
    <div>
        {/* Search player by Team: When team icon clicked req current team roster, 
        when res returns, send another req to retrieve each player stat.*/ }

        <TeamCard
            TeamImg={"images/teams/hawks.png"}
            TeamName="Atlanta Hawks"
        />

        <TeamCard
            TeamImg={"images/teams/celtics.png"}
            TeamName="Boston Celtics"
        />

        <TeamCard
            TeamImg={"images/teams/nets.png"}
            TeamName="Brooklyn Nets"
        />

        <TeamCard
            TeamImg={"images/teams/hornets.png"}
            TeamName="Charlotte Hornets"
        />

        <TeamCard
            TeamImg={"images/teams/bulls.png"}
            TeamName="Chicago Bulls"
        />

        <TeamCard
            TeamImg={"images/teams/cavaliers.png"}
            TeamName="Cleveland Cavaliers"
        />

        <TeamCard
            TeamImg={"images/teams/mavericks.png"}
            TeamName="Dallas Mavericks"
        />

        <TeamCard
            TeamImg={"images/teams/nuggets.png"}
            TeamName="Denver Nuggets"
        />

        <TeamCard
            TeamImg={"images/teams/pistons.png"}
            TeamName="Detroit Pistons"
        />

        <TeamCard
            TeamImg={"images/teams/warriors.png"}
            TeamName="Golden State Warriors"
        />

        <TeamCard
            TeamImg={"images/teams/rockets.png"}
            TeamName="Houston Rockets"
        />

        {/* <TeamCard
            TeamImg={"images/teams/r.png"}
            TeamName="Houston Rockets"
        /> */}

        <TeamCard
            TeamImg={"images/teams/pacers.png"}
            TeamName="Indiana Pacers"
        />

        <TeamCard
            TeamImg={"images/teams/clippers.png"}
            TeamName="Los Angeles Clippers"
        />

        <TeamCard
            TeamImg={"images/teams/lakers.png"}
            TeamName="Los Angeles Lakers"
        />
        <TeamCard
            TeamImg={"images/teams/grizzlies.png"}
            TeamName="Memphis Grizzlies"
        />

        <TeamCard
            TeamImg={"images/teams/heat.png"}
            TeamName="Miami Heat"
        />

        <TeamCard
            TeamImg={"images/teams/bucks.png"}
            TeamName="Milwaukee Bucks"
        />

        <TeamCard
            TeamImg={"images/teams/timberwolves.png"}
            TeamName="Minnesota Timberwolves"
        />

        <TeamCard
            TeamImg={"images/teams/pelicans.png"}
            TeamName="New Orleans Pelicans"
        />

        <TeamCard
            TeamImg={"images/teams/knicks.png"}
            TeamName="New York Knicks"
        />

        <TeamCard
            TeamImg={"images/teams/thunder.png"}
            TeamName="Oklahoma City Thunder"
        />

        <TeamCard
            TeamImg={"images/teams/magic.png"}
            TeamName="Orlando Magic"
        />

        <TeamCard
            TeamImg={"images/teams/sixers.png"}
            TeamName="Philadelpia 76ers"
        />

        <TeamCard
            TeamImg={"images/teams/suns.png"}
            TeamName="Phoenix Suns"
        />

        <TeamCard
            TeamImg={"images/teams/trailblazers.png"}
            TeamName="Portland Trailblazers"
        />

        <TeamCard
            TeamImg={"images/teams/kings.png"}
            TeamName="Sacramento Kings"
        />

        <TeamCard
            TeamImg={"images/teams/spurs.png"}
            TeamName="San Antonio Spurs"
        />

        <TeamCard
            TeamImg={"images/teams/raptors.png"}
            TeamName="Toronto Raptors"
        />

        <TeamCard
            TeamImg={"images/teams/jazz.png"}
            TeamName="Utah Jazz"
        />

        <TeamCard
            TeamImg={"images/teams/wizards.png"}
            TeamName="Washington Wizards"
        />

    </div>

);

export default TeamSearch;