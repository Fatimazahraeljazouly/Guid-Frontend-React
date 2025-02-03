export type detsO ={
   
    cover: string,
    ville:string, 
    libele:string ,
    description:string,
    location:string,
    type:string,
    dateCreation:string,
    service:string,
    surface:string,
    category:string

}
export type detType = {
det: detsO[];  // Array of ArtisanatItem, which can be either type
};