export class Testimony {
  image: string;
  title: string;
  message: string;
  name: string;
  current_job: string;
  constructor(
    src: string,
    title: string,
    message: string,
    name: string,
    current_job: string
  ) {
    this.image = src;
    this.title = title;
    this.message = message;
    this.name = name;
    this.current_job = current_job;
  }
}

export default Testimony;