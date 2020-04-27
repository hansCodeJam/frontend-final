import React from "react";
import TeamCard from "./TeamCard";

const TeamSearch= ()=> (
    <div>
        {/* Search player by Team: When team icon clicked req current team roster, 
        when res returns, send another req to retrieve each player stat.*/ }

        <TeamCard
            TeamImg={"images/hawks.png"}
            TeamName="Atlanta Hawks"
        />
        
        <TeamCard
            TeamImg={"images/celtics.png"}
            TeamName="Boston Celtics"
        />

        <TeamCard
            TeamImg={"images/nets.png"}
            TeamName="Brooklyn Nets"
        />

        <TeamCard
            TeamImg={"images/hornets.png"}
            TeamName="Charlotte Hornets"
        />

        <TeamCard
            TeamImg={"images/bulls.png"}
            TeamName="Chicago Bulls"
        />

        <TeamCard
            TeamImg={"images/cavaliers.png"}
            TeamName="Cleveland Cavaliers"
        />

        <TeamCard
            TeamImg={"images/mavericks.png"}
            TeamName="Dallas Mavericks"
        />

        <TeamCard
            TeamImg={"images/nuggets.png"}
            TeamName="Denver Nuggets"
        />

        <TeamCard
            TeamImg={"images/pistons.png"}
            TeamName="Detroit Pistons"
        />

        <TeamCard
            TeamImg={"images/warriors.png"}
            TeamName="Golden State Warriors"
        />

        <TeamCard
            TeamImg={"images/rockets.png"}
            TeamName="Houston Rockets"
        />

        <TeamCard
            TeamImg={"images/pacers.png"}
            TeamName="Indiana Pacers"
        />

        <TeamCard
            TeamImg={"images/clippers.png"}
            TeamName="Los Angeles Clippers"
        />

        <TeamCard
            TeamImg={"images/lakers.png"}
            TeamName="Los Angeles Lakers"
        />
        <TeamCard
            TeamImg={"images/grizzlies.png"}
            TeamName="Memphis Grizzlies"
        />

        <TeamCard
            TeamImg={"/images/heat.png"}
            TeamName="Miami Heat"
        />

        <TeamCard
            TeamImg={"images/bucks.png"}
            TeamName="Milwaukee Bucks"
        />

        <TeamCard
            TeamImg={"images/timberwolves.png"}
            TeamName="Minnesota Timberwolves"
        />

        <TeamCard
            TeamImg={"images/pelicans.png"}
            TeamName="New Orleans Pelicans"
        />

        <TeamCard
            TeamImg={"images/knicks.png"}
            TeamName="New York Knicks"
        />

        <TeamCard
            TeamImg={"images/thunder.png"}
            TeamName="Oklahoma City Thunder"
        />

        <TeamCard
            TeamImg={"images/magic.png"}
            TeamName="Orlando Magic"
        />

        <TeamCard
            TeamImg={"images/sixers.png"}
            TeamName="Philadelpia 76ers"
        />

        <TeamCard
            TeamImg={"images/suns.png"}
            TeamName="Phoenix Suns"
        />

        <TeamCard
            TeamImg={"images/blazers.png"}
            TeamName="Portland Trailblazers"
        />

        <TeamCard
            TeamImg={"images/kings.png"}
            TeamName="Sacramento Kings"
        />

        <TeamCard
            TeamImg={"images/spurs.png"}
            TeamName="San Antonio Spurs"
        />

        <TeamCard
            TeamImg={"images/raptors.png"}
            TeamName="Toronto Raptors"
        />

        <TeamCard
            TeamImg={"images/jazz.png"}
            TeamName="Utah Jazz"
        />

        <TeamCard
            TeamImg={"images/wizards.png"}
            TeamName="Washington Wizards"
        />

    </div>

);

export default TeamSearch;