const content_div = document.getElementById("content")

let content = ""

const song_card = ((songTitle, songDesc, songImg) => {
    return (`   
    <div class="song-card" onclick="change_current_track('${songTitle}', '${songDesc}', '${songImg}')">
        <div class="song-card-img">
            <img src="${songImg}">
            <div class="song-card-playbtn-container">
                <div class="song-card-playbtn">
                    <a href="#"><i class="fas fa-play fa-xs"></i></a>
                </div>
            </div>
        </div>
        <div class="song-card-info">
            <h4 class="song-info-title">${songTitle}</h4>
            <p class="song-info-desc">${songDesc}</p>
        </div>
    </div>
    `)
})

const song_category = ((catTitle, catDesc, songList) => {
    return(`
    <div class="song-cat">
        <div class="song-cat-header">
            <div class="song-cat-info">
                <h2 class="song-cat-title"><a href="#">${catTitle}</a></h2>
                <p class="song-cat-desc">${catDesc}</p>
            </div>
            <div class="song-cat-expand">
                <a href="#">SEE ALL</a>
            </div>
        </div>
    <div class="song-cat-list">
    ${songList}
    </div>
    `)
})

const render_data = ((data) => {
    data['content'].forEach(cat => {
        song_list = ""
        cat['song-list'].forEach(song => {
            song_list += song_card(song['song-title'], song['song-desc'], song['song-img'])    
        })
        element = song_category(cat['cat-title'], cat['cat-desc'], song_list)
        content_div.insertAdjacentHTML('beforeend', element)
    });
})

fetch('../data/song_list.json')
  .then(response => response.json())
  .then(obj => render_data(obj))