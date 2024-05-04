class Employee {
    name: string;
    division: string;
    batch: number;
    position: string;
    image: string;
    linkedIn: string;

    constructor(name: string, division: string, batch: number, position: string, image: string, linkedIn: string) {
        this.name = name;
        this.division = division;
        this.batch = batch;
        this.position = position;
        this.image = image;
        this.linkedIn = linkedIn;
    }
}

export default Employee;