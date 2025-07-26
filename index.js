const allSongs = [
    {
        id: 0,
        name: "Good Riddance",
        artist: "Green Day",
        img: 'songs_images_audio/Good_Riddance_(Time_of_Your_Life)_cover.jpg',
        genre: "Rock",
        source: "songs_images_audio/Green Day - Good Riddance (Time of Your Life) _Official Music Video_ _4K UPGRADE_.mp3"
    },
    {
        id: 1,
        name: "Boulevard of Broken Dreams",
        artist: "Green Day",
        img: 'songs_images_audio/boulevard of broken dreams.jpg',
        genre: "Rock",
        source: "songs_images_audio/Boulevard-Of-Broken-Dreams.mp3",
    },
    {
        id: 2,
        name: "Not Afraid",
        artist: "Eminem",
        img: 'songs_images_audio/not afraid song poster.jpg',
        genre: "Rap",
        source: 'songs_images_audio/Not Afraid.mp3',
    },
    {
        id: 3,
        name: "Radioactive",
        artist: "Imagine Dragons",
        img: 'songs_images_audio/radioactive song poster.jpg',
        genre: "Rock",
        source: "songs_images_audio/Imagine_Dragons_-_Radioactive.mp3",
    },
    {
        id: 4,
        name: "SICKO MODE",
        artist: "Travis Scott",
        img: 'songs_images_audio/sicko mode song poster.jpg',
        genre: "Rap",
        source: 'songs_images_audio/Travis_Scott_Ft_Drake_-_Sicko_Mode_Offblogmedia.com.mp3',
    },
    {
        id: 5,
        name: "Wicked Ones | All the Stars",
        artist: "Dorothy",
        img: 'songs_images_audio/wicked ones song poster.jpg',
        genre: "Rock",
        source: 'songs_images_audio/wicked ones song.mp3',
    },
    {
        id: 6,
        name: "Viva La Vida",
        artist: "Coldplay",
        img: 'songs_images_audio/ab67616d0000b273e21cc1db05580b6f2d2a3b6e.jpg',
        genre: "Pop",
        source: 'songs_images_audio/Coldplay-Viva-La-Vida.mp3',
    },
    {
        id: 7,
        name: "Neon",
        artist: "John Mayer",
        img: 'songs_images_audio/neon john mayer song.jpg',
        genre: "Rock",
        source: 'songs_images_audio/neon_john_mayer.mp3',
    },
    {
        id: 8,
        name: "Locked Away",
        artist: "R. City",
        img: 'songs_images_audio/locked away poster.jpg',
        genre: "Dancehall",
        source: 'songs_images_audio/locked away song.mp3',
    },
    {
        id: 9,
        name: "Dilnawaz",
        artist: "The Local Train",
        img: 'songs_images_audio/dilnawaz the local train.jpg',
        genre: "Rock",
        source: 'songs_images_audio/Dilnawaz - (Raag.Fm).mp3',
    }
];

const allSongsBtn = document.querySelectorAll(".song_listed");
const audioPlayer = document.getElementById('audioPlayer');
const imgSong = document.querySelector(".card-img");
const song_card = document.querySelector(".card");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
let globalIndex = 0;

//PLAYLIST VARIABLES

// Playlist Data Structure
let playlists = {};
let currentPlaylist = "";
let currentSongIndex = 0;
// Playlist Data Structure ends

// creating and displaying playlist
const playListName = document.querySelector(".new_playlist_input");
const appendNameDiv = document.querySelector(".all_playlists");
const appendBtn = document.querySelector(".new_playlist_btn");

appendBtn.addEventListener("click", function () {
    const playlistName = playListName.value.trim(); // removing any whitespaces from the name

    if (!playlistName) return; // if playlist name is nothing then return

    if (!playlists[playlistName]) {
        playlists[playlistName] = [];

        const playlistButton = document.createElement("button");
        playlistButton.classList.add("appendPlaylist");
        playlistButton.textContent = playlistName;

        // On click, select playlist and show its songs
        playlistButton.addEventListener("click", function () {
            currentPlaylist = playlistName;
            showPlaylistSongs(currentPlaylist);
            highlightSelectedPlaylist(playlistButton);
        });

        appendNameDiv.appendChild(playlistButton);

        // Auto-select first created playlist
        if (!currentPlaylist) {
            playlistButton.click();
        }
    }
    playListName.value = "";
});

function highlightSelectedPlaylist(selectedBtn) {
    document.querySelectorAll('.appendPlaylist').forEach(btn =>
        btn.classList.remove('selected'));
    selectedBtn.classList.add('selected');
}

// const allSongsBtn = document.querySelectorAll(".song_listed");


function playSong(index) {
    song_card.style.display = "block";
    imgSong.src = allSongs[index].img;
    audioPlayer.src = allSongs[index].source;
    audioPlayer.style.display = 'block';
    audioPlayer.play();
}

allSongsBtn.forEach((btn, index) => {

    btn.textContent = allSongs[index].name;

    btn.addEventListener("click", function () {
        globalIndex = index;

        // Update source for new song
        song_card.style.display = "block";
        imgSong.src = allSongs[index].img;
        audioPlayer.src = allSongs[index].source;
        audioPlayer.style.display = 'block'; // Show the player
        audioPlayer.play();

        //previous button implementation
        previousBtn.addEventListener("click", function () {
            if (index > 0) {
                imgSong.src = allSongs[index - 1].img;
                audioPlayer.src = allSongs[index - 1].source;
                audioPlayer.play();
            }
            if (index > 0) {
                index--;
            }
            currentSongIndex = index;
        });

        nextBtn.addEventListener("click", function () {
            if (index < allSongs.length - 1) {
                imgSong.src = allSongs[index + 1].img;
                audioPlayer.src = allSongs[index + 1].source;
                audioPlayer.play();
            }
            if (index < allSongs.length - 1) {
                index++;
            }
            currentSongIndex = index;
        });

        audioPlayer.addEventListener("ended", function () {
            if (index < allSongs.length - 1) {
                imgSong.src = allSongs[index + 1].img;
                audioPlayer.src = allSongs[index + 1].source;
                audioPlayer.play();
            }
            if (index < allSongs.length - 1) {
                index++;
            }
        });

        //PLASYLIST GARBAGE
        /*
        const addToPlaylistBtn = document.querySelector(".addToPlaylistBtn"); // button to add song to playlist
      
        // adding event listner to add to playlist button
        addToPlaylistBtn.addEventListener("click", function () {
            playlistSongsArr.push(allSongsBtn[index]);
  */
        /*
        const playlistAPPENDED = document.querySelector(".appendPlaylist"); // this is the playlist we appended

        //here all the songs that we are adding to appended playlist is shown
        const current_playlist_songs = document.querySelector(".current_playlist_songs");

        //ADDING EVENT LISTNER TO APPENDED BTN
        playlistAPPENDED.click();
        playlistAPPENDED.addEventListener("click", function () {

            //cloning the current song button (EVENT LISTNERS won't be copied).
            const clonedBtn = allSongsBtn[index].cloneNode(true); // deep clone, clones attributes and child nodes
            current_playlist_songs.append(clonedBtn); // appended the cloned button (wont work for now)
        });*/
    });

    //PLAYLIST NEW ADD-ONS
    // btn.textContent = allSongs[index].name;
    btn.addEventListener("click", function () {
        currentSongIndex = index;
        playSong(index);
    });
});
// });

//  Adding Songs to the Selected Playlist
const addToPlaylistBtn = document.querySelector(".addToPlaylistBtn");

addToPlaylistBtn.addEventListener("click", function () {
    if (!currentPlaylist) {
        alert("Please select or create a playlist first!");
        return;
    }
    if (!playlists[currentPlaylist].includes(currentSongIndex)) {
        playlists[currentPlaylist].push(currentSongIndex);
        showPlaylistSongs(currentPlaylist);
    } else {
        alert("Song is already in the playlist!");
    }
});


// Showing Songs of the Current Playlist
function showPlaylistSongs(playlistName) {
    const container = document.querySelector(".current_playlist_songs");
    container.innerHTML = ""; // Clear previous

    (playlists[playlistName] || []).forEach(songIdx => {
        const songBtn = document.createElement("button");
        songBtn.className = "song_listed";
        songBtn.textContent = allSongs[songIdx].name;
        songBtn.addEventListener("click", function () {
            currentSongIndex = songIdx;
            playSong(songIdx);
        });
        container.appendChild(songBtn);
    });
}





// adding space button functionality
document.addEventListener("keydown", function (event) {
    if (event.key == " ") {

        event.preventDefault();
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }
});


const selectOpt = document.querySelector("#genres");

selectOpt.addEventListener('change', function () {
    allSongsBtn.forEach((btn) => {
        btn.style.display = "none";
    });

    const selectedValue = this.value;

    if (this.value == "All") {
        allSongs.forEach((song, index) => {
            allSongsBtn[index].style.display = "";
        });
    }
    else if (this.value == "Rock") {
        allSongs.forEach((song, index) => {
            if (song.genre == "Rock") {
                allSongsBtn[index].style.display = "";
            }
        });
    }
    else if (this.value == "Rap") {
        allSongs.forEach((song, index) => {
            if (song.genre == "Rap") {
                allSongsBtn[index].style.display = "";
            }
        });
    }
    else if (this.value == "Pop") {
        allSongs.forEach((song, index) => {
            if (song.genre == "Pop") {
                allSongsBtn[index].style.display = "";
            }
        });
    }
    else if (this.value == "Dancehall") {
        allSongs.forEach((song, index) => {
            if (song.genre == "Dancehall") {
                allSongsBtn[index].style.display = "";
            }
        });
    }
});

//PLAYLIST CODE
/*
const playListName = document.querySelector(".new_playlist_input"); // getting text from the input field.
// div which will store all the generated playlist.
const appendNameDiv = document.querySelector(".all_playlists");
const appendBtn = document.querySelector(".new_playlist_btn"); // button to append a new playlist

appendBtn.addEventListener("click", function () {
    const appendEl = document.createElement("button"); // element that will get appended
    appendEl.classList.add("appendPlaylist"); // adding a class to the playlist getting appended
    appendEl.textContent = playListName.value; // setting its text content
    appendNameDiv.append(appendEl); // APPENDED
    playListName.value = ""; // setting the text value back to empty.
});
*/
// ALL GOOD ABOVE

/*<div class="playlist">
    <input type="text" placeholder="Enter playlist name" class="new_playlist_input">
        <button class="new_playlist_btn">Create Playlist</button>
        <h1>Current playlist</h1>
        <div class="current_playlist_songs">

        </div>
        <h2>All your Playlists</h2>

        <div class="all_playlists">
        </div>
</div>
</div >*/


// DARK MODE
const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
