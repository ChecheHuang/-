class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;

  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake>div") as HTMLElement;
    this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    if (this.X === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error("蛇撞牆了");
    }

    this.head.style.left = value + "px";
  }

  set Y(value: number) {
    if (this.Y === value) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error("蛇撞牆了");
    }
    this.head.style.top = value + "px";
  }

  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}

export default Snake;
