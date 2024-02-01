export interface Episode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: []
    url: string,
    created: string
}

export interface EpisodeResults {
    count: number,
    next: string,
    prev: string,
    results: Episode[]
}