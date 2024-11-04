window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let op1 = Math.floor(Math.random() * who.length);
  let op2 = Math.floor(Math.random() * action.length);
  let op3 = Math.floor(Math.random() * what.length);
  let op4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[op1] + " " + action[op2] + " " + what[op3] + " " + when[op4];
};
