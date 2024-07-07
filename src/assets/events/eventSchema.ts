import { ReactNode } from "react";

class Event {
  id: number;
  name: string;
  date: string;
  image: string;
  description: string;
  title: ReactNode;

  constructor(name: string, date: string, image: string, description: string, id: number) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.image = image;
    this.description = description;
  }
}

export default Event;
