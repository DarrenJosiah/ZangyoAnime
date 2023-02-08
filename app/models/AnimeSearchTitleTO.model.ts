export interface IAnimeSearchTitleTO {
  animeTitle?: string
}
  
export class AnimeSearchTitleTO implements IAnimeSearchTitleTO {
  constructor (
    public animeTitle?: string,
  ) {}
}