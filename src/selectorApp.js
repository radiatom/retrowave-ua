export const addDataAppSelector=(state)=>{
      return state.dataPage.music
}
export const totalMusicListAppSelector=(state)=>{
      return state.dataPage.totalMusicList
}

export const nameCurrentListPlayerSelector=(state)=>{
      return state.dataPage.nameCurrentListPlayer
}
export const volumeSelector=(state)=>{
      return state.dataPage.volume
}
export const positionSelector=(state)=>{
      return state.dataPage.position
}
export const leftListSelector=(state)=>{
      return state.dataPage.list.left
}
export const rightListSelector=(state)=>{
      return state.dataPage.list.right
}
export const namesPlaylistsSelector=(state)=>{
      return state.dataPage.namesPlaylists
}
export const openListNameSelector=(state)=>{
      return state.dataPage.openListName
}