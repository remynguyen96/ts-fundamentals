abstract class ReferenceItem {
  private _publisher!: string;
  public static department: string = 'Research';

  constructor(public title: string, private year: number) {
    console.log("Create a new instance of ReferenceItem!");
    this.title = title;
    this.year = year;
  }

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
   this._publisher = newPublisher;
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year} with the department: ${ReferenceItem.department}`);
  }

  abstract printDefault(): void;
}

class Encyclopedia extends ReferenceItem {
  constructor(title: string, year: number, public edition: string) {
    super(title, year);
  }

  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition}`);
  }

  printDefault(): void {
    console.log("Abstract method implemented.");
  }
}

let ref: Encyclopedia = new Encyclopedia("Updated Date And Figures", 2001, '4th');
// let ref: ReferenceItem = new ReferenceItem("Updated Date And Figures", 2001);
ref.printItem();
ref.publisher = "Random Data Publisher";
ref.printDefault();
console.log(ref.publisher);
