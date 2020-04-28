import React, { Component } from "react";
import axios from "axios";
import Stats from "../Response/Stats";

class PlayerFetch extends Component {
    constructor(){
        super()
        this.state = {
            search: "",
            playerInfo: {},
            playerName: "",
            playerTeam: "",
            playerFirstName: "",
            playerLastName: "",
            playerTeamLogo: ""

    }
    };

    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.search, 'search')

        let playerInput = this.state.search;

        let apiUrl = " https://www.balldontlie.io/api/v1/players?search=" + playerInput;

        axios.get(apiUrl).then(
            data => {
                // console.log(data, 'data')
                // console.log(data.data.data[0].id, 'id');
                // console.log(data.data.data[0].team.full_name, 'fullname');

                let playerId = data.data.data[0].id;

                this.setState({ playerName: data.data.data[0].first_name + " " + data.data.data[0].last_name, 
                                playerTeam: data.data.data[0].team.full_name, 
                                playerFirstName : data.data.data[0].first_name, 
                                playerLastName: data.data.data[0].last_name, 
                                playerTeamLogo: data.data.data[0].team.name}, () => {

                    // console.log(this.state.playerName, 'name')
                    // console.log(this.state.playerFirstName, 'first');
                    // console.log(this.state.playerLastName, 'last');
                    // console.log(this.state.playerTeamLogo, "team logo");

                    let apiUrl2 = " https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=" + playerId;

                    axios.get(apiUrl2).then(
                        data => {
                            console.log(data.data.data[0]);
                            this.setState({
                                playerInfo: data.data.data[0]
                            }, () => { console.log(this.state.playerInfo) })
                        }
                    )

                });

            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Player Name:<br></br>
            <input type="text" name='search' value={this.state.search} onChange={this.handleChange} style={{width:"275px"}} />
                    </label><br></br>
                    <input type="submit" value="Submit" style={{backgroundColor:"none", width:"275px", border:"none", margin:"10px", borderRadius:"25px", height:"50px"}}/>
                </form>
                <Stats
                    playerName={this.state.playerName}
                    playerTeam={this.state.playerTeam}
                    playerInfo={this.state.playerInfo}
                    playerFirstName={this.state.playerFirstName}
                    playerLastName={this.state.playerLastName}
                    playerTeamLogo={this.state.playerTeamLogo}
                />
            </div>
        );
    }
}
export default PlayerFetch;