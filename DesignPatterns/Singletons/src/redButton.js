import { counter } from "./counter";

const button = document.getElementById("red");
button.addEventListener("click", () => {
  counter.increment();
  console.log("counter total: ", counter.getCount());
});
