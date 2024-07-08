export class Exticle {
    title: string;
    image: string;
    author: string;
    writtenOn: Date;  
    text: string;
    
    constructor(title: string, image: string, author: string, writtenOn: Date, text: string) {
        this.title = title;
        this.image = image;
        this.author = author;
        this.writtenOn = writtenOn;
        this.text = text;
    }
}
