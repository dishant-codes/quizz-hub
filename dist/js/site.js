let questions = [{
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "Ctrl, Shift and Alt are called .......... keys.",
    answer: "modifier",
    options: [
      "modifier",
      "function",
      "alphanumeric",
      "adjustment"
    ]
  },
  {
    id: 5,
    question: "MS-Word is an example of _____",
    answer: "Application software",
    options: [
      "An operating system",
      "A processing device",
      "Application software",
      "An input device"
    ]
  },
  {
    id: 6,
    question: "A computer cannot \"boot\" if it does not have the _____",
    answer: "Operating system",
    options: [
      "Compiler",
      "Loader",
      "Operating system",
      "Assembler"
    ]
  },
  {
    id: 7,
    question: "________ is the process of dividing the disk into tracks and sectors",
    answer: "Formatting",
    options: [
      "Tracking",
      "Formatting",
      "Crashing",
      "Allotting"
    ]
  },
  {
    id: 8,
    question: "_____are attempts by individuals to obtain confidential information from you by falsifying their identity",
    answer: "Phishing scams",
    options: [
      "Phishing trips",
      "Computer viruses",
      "Phishing scams",
      "Spyware scams"
    ]
  },
  {
    id: 9,
    question: "Junk e-mail is also called ______",
    answer: "Spam",
    options: [
      "Spam",
      "Spoof",
      "Sniffer script",
      "Spool"
    ]
  },
  {
    id: 10,
    question: "Microsoft Office is an example of a",
    answer: "Horizontal market software",
    options: [
      "Closed source software",
      "Open source software",
      "Horizontal market software",
      "vertical market software"
    ]
  },
  {
    id: 11,
    question: "By default, your documents print in ________ mode",
    answer: "Portrait",
    options: [
      "Landscape",
      "Portrait",
      "Page Setup",
      "Print View"
    ]
  },
  {
    id: 12,
    question: "Which of the following is a popular programming language for developing multimedia webpages.",
    answer: "Java",
    options: [
      "COBOL",
      "Java",
      "BASIC",
      "Assembler"
    ]
  },
  {
    id: 13,
    question: "Storage capacity of magnetic disk depends on",
    answer: "All of the above",
    options: [
      "disk pack in disk surface",
      "tracks per inch of surface",
      "bits per inch of tracks",
      "All of the above"
    ]
  },
  {
    id: 14,
    question: "The first computer was programmed using .......",
    answer: "Machine language",
    options: [
      "Assembly language",
      "Machine language",
      "Spaghetti code",
      "Source code"
    ]
  },
  {
    id: 15,
    question: "The computer's processor consists of the following parts",
    answer: "Control Unit and ALU",
    options: [
      "CPU and Main Memory",
      "Hard Disk and Floppy Drive",
      "Control Unit and ALU",
      "Operating System and Application"
    ]
  },
  {
    id: 16,
    question: "A _______ is a software program used to view Web pages.",
    answer: "browser",
    options: [
      "site",
      "host",
      "link",
      "browser"
    ]
  },
  {
    id: 17,
    question: "The First Mechanical Computer Designed by Charles Babbage was called?",
    answer: "Analytical Engine",
    options: [
      "Super Computer",
      "Abacus",
      "Calculator",
      "Analytical Engine"
    ]
  },
  {
    id: 18,
    question: "Which key is used in combination with another key to perform a specific task?",
    answer: "Control",
    options: [
      "Function",
      "Spacebar",
      "Arrow",
      "Control"
    ]
  },
  {
    id: 19,
    question: "The box that contains the central electronic components of the computer is the ______",
    answer: "System Unit",
    options: [
      "Motherboard",
      "System Unit",
      "Peripheral",
      "RAM"
    ]
  },
  {
    id: 20,
    question: "The basic operations performed by a computer are",
    answer: "All the above",
    options: [
      "Logical operation",
      "Storage and relative",
      "Arithmetic operation",
      "All the above"
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);

};

function next() {


  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 5;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
