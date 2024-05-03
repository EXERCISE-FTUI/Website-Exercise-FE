class pastProjectSchema {
    title: string;
    description: string;
    image: string;
    type: string[];

    constructor(title: string, description: string, image: string, type: string[]) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.type = type;
    }
}