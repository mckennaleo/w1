const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: { id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: { id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: () => {
    for (let i in this.playlists) {
      let trackLength = this.playlists[i]["tracks"].length;
      let name = this.playlists[i]["name"];
      console.log(`${i}: ${name} - ${trackLength} tracks`);
    }
  },
  printTracks: () => {
    for (let i in this.tracks) {
      let name = this.tracks[i]["name"];
      let artist = this.tracks[i]["artist"]
      let album = this.tracks[i]["album"];
      console.log(`${i}: ${name} by ${artist} (${album})`);
    }
  },
  printPlaylist: (playlistId) => {
    for (let i in this.playlists) {
      let trackLength = this.playlists[i]["tracks"].length;
      let name = this.playlists[i]["name"];
      if (i === playlistId) {
        console.log(`${i}: ${name} - ${trackLength} tracks`);
        let trackNames = [];
        for (let j of this.playlists[i]["tracks"]) {
          trackNames.push(j);
        }
        for (let k of trackNames) {
          let name = this.tracks[k]["name"];
          let artist = this.tracks[k]["artist"];
          let album = this.tracks[k]["album"];
          console.log(`${i}: ${name} by ${artist} (${album})`);
        }
      }
    }
  },
  addTrackToPlaylist: (trackId, playlistId) => {
    const newTrack = this.tracks[trackId].id;
    this.playlists[playlistId].tracks.push(newTrack);
  },
  addTrack: (name, artist, album) => {
    const newTrackId = generateUid();
    const newTrack = {id: newTrackId, name, artist, album};
    this.tracks[newTrack.id] = newTrack;
    console.log(this.tracks);
  },
  addPlaylist: (name) => {
    const newPlaylistId = generateUid();
    const newPlaylist = {id: newPlaylistId, name, tracks: []};
    this.playlists[newPlaylist.id] = newPlaylist;
  }
};

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}