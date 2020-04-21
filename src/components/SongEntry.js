import React from 'react';


const SongEntry = ({onDelete, onUpdate, blog: {title, artist, genre, lyrics, _id:id}}) => {
    return(
            <div className="ui card" style={{ width: '75%', padding: '20px' }}>
                    <div className="content">
                      <div className="header">{title}</div>
                      <br />
                      <div className="meta">Artist: {artist}</div>
                      <div className="meta">Genre: {genre}</div>
                      <div className="meta">Lyrics: {lyrics}</div>
                      <Button className="ui primary button" style={{margin: '10px 15px'}} onClick={() => {
                            return onDelete(id)
                        }}>
                           Delete
                      </Button>
                      <Button className="ui primary button green" style={{margin: '10px 15px'}} onClick={() => {
                            // return console.log(`Update: ${objectId}`)
                            return onUpdate(id);
                        }}>
                           Update
                      </Button>
                      {/* <OnUpdate /> */}
                    </div>
                  </div>
    )
}

export default SongEntry
