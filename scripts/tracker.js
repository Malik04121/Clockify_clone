let goTo = () => {
  window.location.href="index.html"
}

let logins=JSON.parse(localStorage.getItem("logins")) || [];
let name = document.getElementById("name");
let showName = (logins,name)=> {
  logins.forEach(el => {
    let user = el.username;
    name.innerText = user
    console.log(user);
  });
}
showName(logins,name);
let save = document.getElementById("timer");
let input = document.getElementById("enter");
let interval = null;
let flag = true;
let secondCount = 0;
let minuteCount = 0;
let hourCount = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let runClock = () => {
  secondCount++;

  if (secondCount == 60) {
    secondCount = 0;
    minuteCount++;

    if (minuteCount == 60) {
      minuteCount = 0;
      hourCount++;
    }
  }

  if (secondCount < 10) {
    displaySeconds = "0" + secondCount.toString();
  } else {
    displaySeconds = secondCount;
  }

  if (minuteCount < 10) {
    displayMinutes = "0" + minuteCount.toString();
  } else {
    displayMinutes = minuteCount;
  }

  if (hourCount < 10) {
    displayHours = "0" + hourCount.toString();
  } else {
    displayHours = hourCount;
  }

  let show = document.getElementById("timer");
  show.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
};

// runClock();

//   let interval = ;

let clickStart = () => {
  if (flag == true) {
    interval = setInterval(runClock, 1000);
    flag = false;
  }
};

// let taskArr = [];

let clickStop = () => {
  let d = new Date();
  let hrs = d.getHours();
  let min = d.getMinutes();
  let Shrs = 0;
  let Smin = 0;

  if (hrs < 10) {
    Shrs = "0" + hrs.toString();
  } else {
    Shrs = hrs;
  }

  if (min < 10) {
    Smin = "0" + min.toString();
  } else {
    Smin = min;
  }

  window.clearInterval(interval);

  let storeTask = {
    task: input.value,
    time: save.innerText,
    hour: Shrs,
    mint: Smin,
  };
  arr.push(storeTask);
  // console.log(taskArr);
  localStorage.setItem("tasks", JSON.stringify(arr));
  secondCount = 0;
  minuteCount = 0;
  hourCount = 0;
  input.value = null;
  document.getElementById("timer").innerHTML = "00:00:00";
  flag = true;
  appendTask(arr);
};

let container = document.getElementById("container");
let arr = JSON.parse(localStorage.getItem("tasks")) || [];
appendTask(arr);

function appendTask(arr) {
  container.innerHTML = "";
  arr.forEach((element, index) => {
    let box = document.createElement("div");
    let b1 = document.createElement("div");
    let tk = document.createElement("p");
    tk.innerText = element.task;
    let b2 = document.createElement("div");
    let day1 = document.createElement("p");
    day1.innerText = `${element.hour} : ${element.mint}`;
    let dash = document.createElement("p");
    dash.innerText = "-";
    let day2 = document.createElement("p");
    day2.innerText = `${element.hour} : ${element.mint}`;
    let b3 = document.createElement("div");
    let time = document.createElement("p");
    time.innerText = element.time;
    let btn = document.createElement("button");
    btn.innerText = "REMOVE";
    btn.addEventListener("click", function () {
      removeEl(index);
    });

    b1.append(tk);
    b2.append(day1, dash, day2);
    b3.append(time, btn);
    box.append(b1, b2, b3);
    container.append(box);
  });
}

let removeEl = (index) => {
  arr.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(arr));
  appendTask(arr);
};