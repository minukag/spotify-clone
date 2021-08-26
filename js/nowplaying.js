currently_playing_div = document.getElementById("currently-playing")
current_song_title = document.getElementById("current-song-title")
current_song_author = document.getElementById("current-song-author")
current_song_img = document.getElementById("current-song-img").getElementsByTagName("img")[0]

const change_current_track = ((title, desc, img) => {
    current_song_title.innerText = title
    current_song_author.innerText = desc
    current_song_img.setAttribute("src", img)
    currently_playing_div.style.visibility = "visible"
})