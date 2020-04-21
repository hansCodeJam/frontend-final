import React, { Component } from 'react';
import axios from 'axios';
// import Song from './Song'
// import Header from './Header';

class Home extends Component {
  constructor(){
    super()
    this.state = {
      songs: [],
      song: {},
      toggle: true,
    }
  }

  getSongs = () => {
    const url = '/songs';
    axios.get(url).then((song) => {
      // console.log('song', song)
      // console.log('songs data, ', song.data)
      return this.setState( {songs: song.data})
    })
  }

  handleNewSongSubmit = (event, song) => {
    event.preventDefault();
    let axiosConfig = {
      headers:{
        'Content-Type' : 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin' : '*',
      },
    };
    axios.post('/song', song, axiosConfig).then(() => {
      this.getSongs();
    })
  };

  onDelete = (id) => {
    axios.delete(`/song/${id}`).then(() => {
      this.getSongs();
    })
  }

  onUpdate = (id) => {
    console.log('This song will be updated')
  }
 
  render(){
    return (
      <div className="section" style={{border: '1px blue solid'}}>
        
      </div>
      
    );
  }
}

export default Home;
