
export class CounterService {
  counter: number = 0;
  appCounter() {
    this.counter++;
    alert(this.counter)
  }
}
