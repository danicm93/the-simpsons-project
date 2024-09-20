export interface TheSimpsons {
    characters: Character[];
}

export interface Character {
    id:            string;
    name:          string;
    image:         string;
    relationships: string[];
}
