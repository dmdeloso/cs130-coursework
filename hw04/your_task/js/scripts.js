const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}


const getTracks = (term) => {
  let url = ("https://www.apitutor.org/spotify/simple/v1/search?type=track&q=" + term);
  document.querySelector("#tracks").innerHTML = '';
  fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let currentSong = 1;
        for(track of data){
          if (currentSong <= 5) {
            let template = `
            <section id="${track.id}" class="track-item preview" data-preview-track="${track.preview_url}">
      <img src="${track.album.image_url}">
      <i class="fas play-track fa-play"  aria-hidden="true"></i>
      <div class="label">
          <h3>${track.name}</h3>
          <p>
              ${track.artist.name}
          </p>
      </div>
  </section>
            `
            document.querySelector('#tracks').innerHTML += template;


            currentSong += 1;
          }
          let displayedTracks = document.querySelectorAll('.track-item');
          for(song of displayedTracks){
            song.onclick = (ev) => {
                    const preview_url = ev.currentTarget.getAttribute('data-preview-track')
                    audioPlayer.setAudioFile(preview_url);
                    audioPlayer.play();
                    // and update the thumbnail:
                    document.querySelector('footer .track-item').innerHTML = ev.currentTarget.innerHTML;
                  };

          }
          }


      });
};

const getAlbums = (term) => {
  let url = ("https://www.apitutor.org/spotify/simple/v1/search?type=album&q=" + term);
  document.querySelector("#albums").innerHTML = '';
  fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        for(album of data){
            let template = `
            <section class="album-card" id="${album.id}">
    <div>
        <img src="${album.image_url}">
        <h3>${album.name}</h3>
        <div class="footer">
            <a href="${album.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
            `
            document.querySelector('#albums').innerHTML += template;


        }

      })
};

const getArtist = (term) => {
    // console.log(`
    //     get artists from spotify based on the search term
    //     "${term}" and load the first artist into the #artist section
    //     of the DOM...`);
    let url = ("https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=" + term);
    document.querySelector("#artist").innerHTML = '';
    fetch(url)
        .then(response => response.json())
        .then(data => {
          let selectedArtist = data[0];
          const template = `
          <section class="artist-card" id="${selectedArtist.id}">
      <div>
          <img src="${selectedArtist.image_url}">
          <h3>${selectedArtist.name}</h3>
          <div class="footer">
              <a href="${selectedArtist.spotify_url}" target="_blank">
                  view on spotify
              </a>
          </div>
      </div>
  </section>
          `;
        document.querySelector('#artist').innerHTML = template;
        })
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};
