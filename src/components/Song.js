import React from 'react';
import SongEntry from './SongEntry';

const Songs = (props) => {
    return(
      <div>
        {props.songs.map((song, idx) => {
                  return (
                    <SongEntry key={song._id} onDelete={props.onDelete} song={song} onUpdate={props.onUpdate}/>
                    
                  );
                })}
      </div>
    )
  }

export default Songs;