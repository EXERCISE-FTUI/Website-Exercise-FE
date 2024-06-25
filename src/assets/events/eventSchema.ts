import { ReactNode } from "react";

class Event {
  name: string;
  date: string;
  image: string;
  description: string;
  title: ReactNode;

  constructor(name: string, date: string, image: string, description: string) {
    this.name = name;
    this.date = date;
    this.image = image;
    this.description = description;
  }
}

export default Event;
