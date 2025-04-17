const workoutData = {
  day_1: [
    { workout: "Push-ups", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Bent-over Dumbbell Rows", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Dumbbell Shoulder Press", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Plank", sets: 3, "reps-time": "30-60 sec" },
    { workout: "Crunches", sets: 3, "reps-time": "15-20 reps" },
  ],
  day_2: [
    { workout: "Bodyweight Squats", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Glute Bridges", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Lunges", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Wall Sit", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Crunches", sets: 3, "reps-time": "15-20 reps" },
  ],
  day_3: [
    { workout: "Plank", sets: 3, "reps-time": "30-60 sec" },
    { workout: "Russian Twists", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Leg Raises", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Burpees", sets: 3, "reps-time": "30-60 sec" },
    { workout: "Crunches", sets: 3, "reps-time": "15-20 reps" },
  ],
  day_4: [
    { workout: "Push-ups", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Dumbbell Shoulder Press", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Bent-over Dumbbell Rows", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Plank Shoulder Taps", sets: 3, "reps-time": "30-60 sec" },
    { workout: "Crunches", sets: 3, "reps-time": "15-20 reps" },
  ],
  day_5: [
    { workout: "Lunges", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Glute Bridges", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Bodyweight Squats", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Mountain Climbers", sets: 3, "reps-time": "30-60 sec" },
    { workout: "Crunches", sets: 3, "reps-time": "15-20 reps" },
  ],
  day_6: [
    { workout: "Burpees", sets: 3, "reps-time": "30-60 sec" },
    { workout: "Mountain Climbers", sets: 3, "reps-time": "30-60 sec" },
    { workout: "Jumping Jacks", sets: 3, "reps-time": "30-60 sec" },
    { workout: "Push-ups", sets: 3, "reps-time": "10-15 reps" },
    { workout: "Crunches", sets: 3, "reps-time": "15-20 reps" },
  ],
  day_7: [
    { workout: "Walking/Biking", sets: 1, "reps-time": "30-60 min" },
    { workout: "Stretching/Yoga", sets: 1, "reps-time": "15-30 min" },
    { workout: "Deep Breathing", sets: 2, "reps-time": "5-15 min" },
    { workout: "Plank", sets: 3, "reps-time": "30-60 sec" },
    { workout: "Crunches", sets: 3, "reps-time": "15-20 reps" },
  ],
};

const tableBody = document.getElementById("workout-table-body");
const timeSelect = document.getElementById("time-select");
const display = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const alarmSound = document.getElementById("alarm-sound");

let timerId;
let remainingTime = 0;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

function update_table(dayKey) {
  const title = document.getElementById("day-title");
  const dayNames = {
    day_1: "Monday",
    day_2: "Tuesday",
    day_3: "Wednesday",
    day_4: "Thursday",
    day_5: "Friday",
    day_6: "Saturday",
    day_7: "Sunday",
  };
  title.textContent = dayNames[dayKey];
  tableBody.innerHTML = "";
  tableBody.classList.remove("fade-in");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      tableBody.classList.add("fade-in");
    });
  });

  const dayData = workoutData[dayKey];
  dayData.forEach((exercise) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${exercise.workout}</td>
        <td>${exercise.sets}</td>
        <td>${exercise["reps-time"]}</td>
        <td>
          <label class="custom-checkbox">
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
        </td>
      `;
    tableBody.appendChild(row);
  });
}

document.querySelectorAll(".tablinks").forEach((tab) => {
  tab.addEventListener("click", () => {
    const dayKey = tab.dataset.day;
    document
      .querySelectorAll(".tablinks")
      .forEach((btn) => btn.classList.remove("active-tab"));
    tab.classList.add("active-tab");
    update_table(dayKey);
  });
});

update_table("day_1");

// Timer start
startBtn.addEventListener("click", () => {
  remainingTime = parseInt(timeSelect.value);
  display.textContent = formatTime(remainingTime);
  startBtn.disabled = true;
  alarmSound.play().then(() => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
  });

  timerId = setInterval(() => {
    remainingTime--;
    display.textContent = formatTime(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(timerId);
      startBtn.disabled = false;
      alarmSound.play(); // Play sound on timer complete
      if ("vibrate" in navigator) {
        navigator.vibrate([300, 100, 300]);
      }
    }
  }, 1000);
});

// Timer reset
resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  remainingTime = parseInt(timeSelect.value);
  display.textContent = formatTime(remainingTime);
  startBtn.disabled = false;
});
