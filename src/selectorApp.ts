import { RootStateType } from "./reduxToolkit/redux"

export const addDataAppSelector=(state:RootStateType)=>{
      return state.dataPage.music
}
export const DefaultListSelector=(state:RootStateType)=>{
      return state.dataPage.DefaultList
}
export const nameCurrentListPlayerSelector=(state:RootStateType)=>{
      return state.dataPage.nameCurrentListPlayer
}
export const volumeSelector=(state:RootStateType)=>{
      return state.dataPage.volume
}
export const positionSelector=(state:RootStateType)=>{
      return state.dataPage.position
}
export const listSelector=(state:RootStateType)=>{
      return state.dataPage.list
}
export const namesPlaylistsSelector=(state:RootStateType)=>{
      return state.dataPage.namesBoomboxPlaylists
}
export const namesPlayerPlaylistsSelector=(state:RootStateType)=>{
      return state.dataPage.namesPlayerPlaylists
}
export const openListNameSelector=(state:RootStateType)=>{
      return state.dataPage.openListName
}
export const numberOfTracksSelector=(state:RootStateType)=>{
      return state.dataPage.numberOfTracks
}
export const pageNumberSelector=(state:RootStateType)=>{
      return state.dataPage.pageNumber
}
