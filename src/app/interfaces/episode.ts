export interface Info {
    count: number,
    pages: number,
    next: string,
    prev?: any
}

export interface Origin {
    name: string,
    url: string
}

export interface Location {
    name: string,
    url: string
}
export interface Episode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: []
}

export interface EpisodeResults {
    count: number,
    next: string,
    prev: string,
    results: Episode[]
}

export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Origin,
    location: Location,
    image: string,
    episode: string[],
    url: string,
    created: string
}

export interface CharacterDetails {
    name: string,
    image: string
}

export interface ResponseInfoResults {
    info: Info,
    results: Character[]
}