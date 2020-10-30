var playlist = new Object ({
  keys: '0'
})

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName]="songTitle"
  return playlist
}

function removeFromPlaylist (playlist, artistName, songTitle){
  delete artistName.songTitle
  return playlist
}
