function m1() {
  const input = document.getElementById("inputValue").value;
  const input2 = document.getElementById("inputValue2").value;
  const a = parseInt(input);
  const b = parseInt(input2);
  let result = a * b;
  document.getElementById("output").innerText = `Yuzasi:    ${result}m²`;
}

function m2() {
  const input18 = document.getElementById("inputValue18").value;
  const input18_2 = document.getElementById("inputValue18-2").value;
  const number18 = parseInt(input18);
  const number18_2 = parseInt(input18_2);
  const yigindi = number18 + number18_2;
  const kopaytma = number18 * number18_2;
  const birinchiKvadrat = number18 ** 2;
  const ikkinchiKvadrat = number18_2 ** 2;
  document.getElementById("output18").innerText =
    "Yig'indisi: " +
    yigindi +
    "\n" +
    "Ko'paytmasi: " +
    kopaytma +
    "\n" +
    "Birinchi son kvadrati: " +
    birinchiKvadrat +
    "\n" +
    "Ikkinchi son kvadrati: " +
    ikkinchiKvadrat;
}

function m3() {
  const input3 = document.getElementById("inputValue3").value;
  const input3_2 = document.getElementById("inputValue3-2").value;
  const number3 = parseInt(input3);
  const number3_2 = parseInt(input3_2);
  const result3 = (number3 + number3_2) / 2;
  document.getElementById("output3").innerText = `O'rta arifmetigi: ${result3}`;
}

function m4() {
  const input4 = document.getElementById("inputValue4").value;
  const A = parseInt(input4);
  if (A % 2 === 0) {
    document.getElementById("output4").innerText = "A soni juft";
  } else {
    document.getElementById("output4").innerText = "A soni toq";
  }
}

function m5() {
  const input5 = document.getElementById("inputValue5").value;
  const num = parseInt(input5);
  if (num % 3 === 0 && num % 5 === 0) {
    document.getElementById("output5").innerText =
      "A soni 3 va 5 ga bo'linadi!";
  } else if (num % 3 === 0) {
    document.getElementById("output5").innerText = "A soni 3 ga bo'linadi!";
  } else if (num % 5 === 0) {
    document.getElementById("output5").innerText = "A soni 5 ga bo'linadi!";
  } else {
    document.getElementById("output5").innerText =
      "A soni 3 va 5 ga bo'linmaydi!";
  }
}

function m6() {
  const inputA = document.getElementById("inputValueA").value;
  const inputB = document.getElementById("inputValueB").value;
  const A = parseInt(inputA);
  const B = parseInt(inputB);
  const AA = Math.abs(A - 5);
  const BB = Math.abs(B - 5);
  let resultMessage;
  if (AA < BB) {
    resultMessage = `A soni (${A}) 5 ga yaqinroq.`;
  } else if (BB < AA) {
    resultMessage = `B soni (${B}) 5 ga yaqinroq.`;
  } else {
    resultMessage = `A (${A}) va B (${B}) sonlari 5 ga teng masofada.`;
  }
  document.getElementById("output6").innerText = resultMessage;
}

function m7n() {
  const numbers = [12, 45, 67, 23, 89];
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  const sum = firstNumber + lastNumber;

  document.getElementById("output7n").innerText = "Arrar yig'indisi: " + sum;

}

function m7() {
  const input = document.getElementById("inputValue7").value;
  const numbers = input.split(",").map((num) => parseInt(num.trim()));
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  const sum = firstNumber + lastNumber;
  document.getElementById("output7").innerHTML = `
     ${firstNumber} va ${lastNumber} => 
     Yig'indisi: ${sum}`;
}

// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}

moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
AOS.init({
  duration: 1700,
  once: true,
});
