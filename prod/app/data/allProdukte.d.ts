export declare var allProducts: ({
    "id": string;
    "title": string;
    "products": ({
        "size": string;
        "content": ({
            "title": string;
            "list": string[];
            "lizenzen": number[];
            "imgPath": string;
        } | {
            "title": string;
            "list": string[];
            "price": number;
            "imgPath": string;
        })[];
        "button": string;
    } | {
        "size": string;
        "content": ({
            "title": string;
            "imgPath": string;
        } | {
            "title": string;
            "list": string[];
            "imgPath": string;
        })[];
        "button": string;
    })[];
} | {
    "id": string;
    "title": string;
    "products": {
        "size": string;
        "content": ({
            "title": string;
            "list": string[];
            "imgPath": string;
        } | {
            "title": string;
            "list": string[];
            "price": number;
            "imgPath": string;
        })[];
        "button": string;
    }[];
})[];
