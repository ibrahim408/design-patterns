import { counter } from "./counter";

const button = document.getElementById("blue");
button.addEventListener("click", () => {
  counter.increment();
  console.log("bruhhh :", count);
  console.log("Counter total: ", counter.getCount());
});
