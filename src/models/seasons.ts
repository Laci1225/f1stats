export interface Seasons {
    "MRData": MRData
}

interface MRData {
    "xmlns": string;
    "series": string;
    "url": string;
    "limit": string;
    "offset": string;
    "total": string;
    "RaceTable": RaceTable;
}

interface RaceTable {
    "season": string;
    "Races": Races[]
}

export interface Races {
    "season": string;
    "round": string;
    "url": string;
    "raceName": string;
    "Circuit": Circuit;
    "date": string;
}

interface Circuit {
    "circuitId": string;
    "url": string;
    "circuitName": string;
    "Location": Location;
}

interface Location {
    "lat": string,
    "long": string,
    "locality": string,
    "country": string
}