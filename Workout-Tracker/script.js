const workoutDescriptions = {
  "Push-ups": {
    description:
      "Start in plank position, lower until chest nearly touches floor, then push back up.",
    image: "images/pushups.png",
  },
  "Bent-over Dumbbell Rows": {
    description:
      "Hold dumbbells, bend over slightly, pull weights toward torso, squeeze shoulder blades.",
    image: "images/bent-over-rows.png",
  },
  "Dumbbell Shoulder Press": {
    description: "Press dumbbells overhead from shoulder height, then lower.",
    image: "images/dumbbell-shoulder-press.png",
  },
  "Bodyweight Squats": {
    description:
      "Stand feet shoulder-width, lower hips until thighs are parallel, then rise.",
    image: "images/bodyweight-squat.png",
  },
  "Glute Bridges": {
    description:
      "Lie on back, knees bent, lift hips up, squeeze glutes, then lower.",
    image: "images/glute-bridge.png",
  },
  Lunges: {
    description:
      "Step forward, lower until both knees at 90°, then push back to start.",
    image: "images/lunges.png",
  },
  Plank: {
    description:
      "Hold a push-up position on elbows or hands, keeping body straight.",
    image: "images/plank.png",
  },
  "Russian Twists": {
    description:
      "Sit, twist torso side to side holding a dumbbell or bodyweight.",
    image: "images/russian-twists.png",
  },
  "Leg Raises": {
    description:
      "Lie on back, raise legs to 90°, lower without touching floor.",
    image: "images/leg-raises.png",
  },
  "Jumping Jacks": {
    description: "Jump legs out while raising arms overhead, return to start.",
    image: "images/jumping-jacks.png",
  },
  Burpees: {
    description:
      "Squat, kick to plank, do push-up (optional), jump back and up.",
    image: "images/burpees.png",
  },
  "Mountain Climbers": {
    description: "In plank, alternate driving knees quickly to chest.",
    image: "images/mountain-climbers.png",
  },
  "Walking/Biking": {
    description: "Light cardio to promote recovery and blood flow.",
    image: "images/walking-biking.png",
  },
  "Stretching/Yoga": {
    description: "Gentle stretches or yoga for flexibility and recovery.",
    image: "images/stretching.png",
  },
  "Wall Sit": {
    description: "Sit against a wall like you're in a chair, hold position.",
    image: "images/wall-sit.png",
  },
  "High Knees": {
    description: "Run in place bringing knees high toward the chest quickly.",
    image: "images/high-knees.png",
  },
  "Plank Shoulder Taps": {
    description: "While in plank, tap each shoulder with opposite hand.",
    image: "images/plank-shoulder-taps.png",
  },
  "Foam Rolling (if available)": {
    description: "Roll out muscles slowly with foam roller.",
    image: "images/foam-rolling.png",
  },
  "Deep Breathing": {
    description:
      "Breathe deeply in through nose and out through mouth to relax.",
    image: "images/deep-breathing.png",
  },
  "Light Core (Plank Hold)": {
    description: "Gentle static hold to engage core on recovery day.",
    image: "images/plank-core.png",
  },
  Crunches: {
    description:
      "Lie on your back, knees bent. Lift your shoulders off the floor using your abs, then lower.",
    image: "images/crunches.png",
  },
};

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

// DOM Elements
const tableBody = document.getElementById("workout-table-body");
const timeSelect = document.getElementById("time-select");
const display = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const alarmSound = document.getElementById("alarm-sound");

// Modal elements
const modal = document.getElementById("exercise-modal");
const modalTitle = document.getElementById("modal-exercise-name");
const modalDesc = document.getElementById("modal-exercise-description");
const modalImg = document.getElementById("modal-exercise-image");
const modalClose = document.querySelector(".close-btn");

// Timer variables
let timerId;
let remainingTime = 0;

// Format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

// Render workout table
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
      <td><span class="exercise-link" data-exercise="${exercise.workout}">${exercise.workout}</span></td>
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

// Day tab switching
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

// Nav section switching
document.querySelectorAll(".navtab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const sectionToShow = tab.getAttribute("nav-data");

    document
      .querySelectorAll(".navtab")
      .forEach((btn) => btn.classList.remove("active-tab"));
    tab.classList.add("active-tab");

    document.querySelectorAll(".nav-content").forEach((section) => {
      section.style.display = section.id === sectionToShow ? "block" : "none";
    });

    const dayTabs = document.getElementById("day-tabs");
    dayTabs.style.display = sectionToShow === "workouts" ? "flex" : "none";

    // ✅ Add it here!
    if (sectionToShow === "mindset") {
      showMindsetQuote();
    }
    if (sectionToShow === "definitions") {
      loadDefinitions();
    }
  });
});

// Show Monday's workout by default
update_table("day_1");

// Timer Start
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
      alarmSound.play();
      if ("vibrate" in navigator) {
        navigator.vibrate([300, 100, 300]);
      }
    }
  }, 1000);
});

// Timer Reset
resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  remainingTime = parseInt(timeSelect.value);
  display.textContent = formatTime(remainingTime);
  startBtn.disabled = false;
});

// Modal: Show on click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("exercise-link")) {
    const name = e.target.dataset.exercise;
    const data = workoutDescriptions[name];
    if (!data) return;

    modalTitle.textContent = name;
    modalDesc.textContent = data.description;
    modalImg.src = data.image;
    modal.classList.remove("hidden");
  }

  // Close modal
  if (
    e.target.classList.contains("close-btn") ||
    e.target.id === "exercise-modal"
  ) {
    modal.classList.add("hidden");
  }
});

const mindsetQuotes = [
  "You don’t have to be extreme, just consistent.",
  "One workout at a time. One day at a time.",
  "Discipline beats motivation.",
  "Rest is part of the process, not a weakness.",
  "You are stronger than you think.",
  "Start where you are. Use what you have. Do what you can.",
  "Progress, not perfection.",
  "Push through the hard days, they make you tougher.",
  "Every rep is a step forward.",
  "Small steps every day build unstoppable momentum.",
  "Your future self will thank you.",
  "Sweat is fat crying.",
  "A one-hour workout is 4% of your day.",
  "Excuses don’t burn calories.",
  "Fall in love with the process.",
  "You’re already ahead of those who aren’t trying.",
  "It’s you vs. you.",
  "You don’t get the ass you want by sitting on it.",
  "Stop stopping.",
  "Commit to yourself.",
  "Get stronger every rep.",
  "Work for it, don’t wish for it.",
  "Don’t count the days. Make the days count.",
  "Make it a lifestyle, not a duty.",
  "The only bad workout is the one you didn’t do.",
  "You’re not tired, you’re just uninspired.",
  "Push yourself. No one else is going to do it for you.",
  "You won’t always be motivated, so be disciplined.",
  "Fitness is earned. Not given.",
  "Strong body. Strong mind.",
  "Today’s pain is tomorrow’s strength.",
  "Stop waiting. Start becoming.",
  "You’re closer than you think.",
  "Start now. Don’t overthink it.",
  "This is for you. Not them.",
  "Be your own competition.",
  "Show up. Shut up. Work.",
  "Let’s get uncomfortable.",
  "Strength starts in the mind.",
  "Nothing changes if nothing changes.",
  "Better sore than sorry.",
  "Slow progress is still progress.",
  "Consistency builds confidence.",
  "No zero days.",
  "Earn it daily.",
  "Fail. Learn. Repeat.",
  "The work you put in shows later.",
  "Don’t quit. Adapt.",
  "Lift the weight. Or carry the regret.",
  "Win the morning. Win the day.",
];

function showMindsetQuote() {
  const quoteContainer = document.getElementById("mindset-quote");

  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const index = dayOfYear % mindsetQuotes.length;
  quoteContainer.textContent = `"${mindsetQuotes[index]}"`;
}

// Modal open/close for Progress Log
const newEntryBtn = document.getElementById("new-entry-btn");
const progressModal = document.getElementById("progress-modal");
const closeProgressModal = progressModal.querySelector(".close-btn");

newEntryBtn.addEventListener("click", () => {
  progressModal.classList.remove("hidden");
});

closeProgressModal.addEventListener("click", () => {
  progressModal.classList.add("hidden");
});

// Optional: close modal by clicking outside the content
progressModal.addEventListener("click", (e) => {
  if (e.target === progressModal) {
    progressModal.classList.add("hidden");
  }
});

// Store and load progress log from localStorage
let progressLog = JSON.parse(localStorage.getItem("progressLog")) || [];

function addProgressEntry(entry, index) {
  const container = document.getElementById("progress-entries");
  const div = document.createElement("div");
  div.classList.add("progress-entry");
  div.innerHTML = `
    <strong>${entry.date} — ${entry.type}</strong>
    <button class="view-entry" data-index="${index}">View</button>
    <button class="delete-entry" data-index="${index}" style="color:red; margin-left:10px;">&times;</button>
  `;
  container.appendChild(div);
}

function loadProgressEntries() {
  document.getElementById("progress-entries").innerHTML = "";
  progressLog.forEach((entry, index) => addProgressEntry(entry, index));
}

document.getElementById("submit-entry-btn").addEventListener("click", () => {
  const date =
    document.getElementById("workout-date").value ||
    new Date().toISOString().split("T")[0];
  const type = document.getElementById("workout-log-type").value;
  const notes = document.getElementById("progress-notes").value;
  const completed = document.getElementById("progress-check").checked;

  const entry = { date, type, notes, completed };

  progressLog.push(entry);
  localStorage.setItem("progressLog", JSON.stringify(progressLog));

  loadProgressEntries();
  document.getElementById("progress-modal").classList.add("hidden");
  document.getElementById("workout-date").value = "";
  document.getElementById("progress-notes").value = "";
  document.getElementById("progress-check").checked = false;
});

document.getElementById("progress-entries").addEventListener("click", (e) => {
  const index = parseInt(e.target.dataset.index);

  if (e.target.classList.contains("view-entry")) {
    const entry = progressLog[index];
    const viewTitle = document.getElementById("view-log-title");
    const viewContent = document.getElementById("view-log-content");

    viewTitle.textContent = `Entry: ${entry.date}`;
    viewContent.innerHTML = `
      <strong>Type:</strong> ${entry.type}<br>
      <strong>Notes:</strong> ${entry.notes || "(No notes)"}<br>
      <strong>Completed:</strong> ${entry.completed ? "✅ Yes" : "❌ No"}
    `;

    document.getElementById("view-log-modal").classList.remove("hidden");
  }

  if (e.target.classList.contains("delete-entry")) {
    if (confirm("Delete this entry?")) {
      progressLog.splice(index, 1);
      localStorage.setItem("progressLog", JSON.stringify(progressLog));
      loadProgressEntries();
    }
  }
});

document
  .querySelector("#view-log-modal .close-btn")
  .addEventListener("click", () => {
    document.getElementById("view-log-modal").classList.add("hidden");
  });

loadProgressEntries();

function loadDefinitions() {
  const container = document.getElementById("definition-list");
  container.innerHTML = "";

  const sorted = Object.entries(workoutDescriptions).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  sorted.forEach(([name, data]) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="definition-item">
        <img src="${data.image}" alt="${name}" class="definition-image">
        <div>
          <strong>${name}</strong><br>
          ${data.description}
        </div>
      </div>
    `;
    container.appendChild(li);
  });
}
