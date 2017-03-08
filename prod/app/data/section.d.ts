/**
 * id: Eindeutige Identifikation der section
 * title: Titel der section
 * subtitles: Array of Subtitles
 */
declare var section: ({
    "id": string;
    "title": string;
    "subtitles": string[];
    "itemFlag": boolean;
    "content": string;
    "itemsPerRow": number;
} | {
    "id": string;
    "title": string;
    "itemFlag": boolean;
    "content": string;
} | {
    "id": string;
    "title": string;
    "itemFlag": boolean;
    "content": string;
    "itemsPerRow": number;
} | {
    "id": string;
    "title": string;
    "itemFlag": boolean;
    "showOnlyTopItems": boolean;
    "content": string;
    "itemsPerRow": number;
})[];
