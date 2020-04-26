// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import { Fade } from 'react-reveal';

// import '../styles/Teams.css'

// class Teams extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       searchInput: "",
//       teams: [
//         "Sixers", "Blazers", "Bucks", "Bulls", "Cavaliers",
//         "Celtics", "Clippers", "Grizzlies", "Hawks", "Heat",
//         "Hornets", "Jazz", "Kings", "Knicks", "Lakers",
//         "Magic", "Mavericks", "Nets", "Nuggets", "Pacers",
//         "Pelicans", "Pistons", "Raptors", "Rockets", "Spurs",
//         "Suns", "Thunder", "Timberwolves", "Warriors", "Wizards"
//        ],
//        searchResults: [
//         "Sixers", "Blazers", "Bucks", "Bulls", "Cavaliers",
//         "Celtics", "Clippers", "Grizzlies", "Hawks", "Heat",
//         "Hornets", "Jazz", "Kings", "Knicks", "Lakers",
//         "Magic", "Mavericks", "Nets", "Nuggets", "Pacers",
//         "Pelicans", "Pistons", "Raptors", "Rockets", "Spurs",
//         "Suns", "Thunder", "Timberwolves", "Warriors", "Wizards"
//        ]
//     }

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }


//   handleInputChange(event){
//     this.setState({searchInput: event.target.value});
//     this.filterTeams(event.target.value)
//   }

//   filterTeams(input){
//     let filteredTeams = this.state.teams.filter(function(team){
//       return team.includes(input.toLowerCase());
//     });

//     this.setState({searchResults: filteredTeams});
//   }

//   renderResults(searchResults){
//     return searchResults.map((team, index) => {
//       return (
//         <Fade key={index}>
//           <Link to={`/${team}/roster`}>
//             <div className="team">
//               <img src={`/images/teams/${team}.png`} />
//             </div>
//           </Link>
//         </Fade>
//       )
//     })
//   }

//   render(){
//     const searchResults = this.state.searchResults;
//     const searchInput = this.state.searchInput;

//     return(
//       <div className="main-container">
//         <div className="search-container">
//           <input
//             type="text"
//             className="search"
//             placeholder="Search your team..."
//             value={searchInput}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div className="teams-container">
//           {this.renderResults(searchResults)}
//         </div>
//       </div>
//     )
//   }
// }

// export default Teams;