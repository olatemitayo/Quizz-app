const correctAnswers = ["A", "A", "B", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const sad = document.querySelector(".sad");
const happy = document.querySelector(".happy");
const exicted = document.querySelector(".exicted");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      // clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  if (output <= 25) {
    console.log("sad", output);
    // sad.classList.remove("hidden");
  } else if (output <= 75 && output > 25) {
    console.log("happy", output);
    happy.classList.remove("hidden");
  } else {
    // exicted.classList.remove("hidden");
    console.log("exicted", output);
  }

  // showing the result
  scrollTo(0, 0);
  result.classList.remove("d-none");
});
