const usersDatabase = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.querySelector(".error-message");

  const user = usersDatabase.find(
    (u) =>
      u.username === usernameInput.value && u.password === passwordInput.value
  );

  if (user) {
    const userData = {
      username: user.username,
      loggedIn: true,
      events: [],
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    window.location.href = "index.html";
  } else {
    errorMessage.style.display = "block";
  }
}

function logout() {
  localStorage.removeItem("userData");
  location.reload();
}

function showEvents() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const eventsListContainer = document.getElementById("events-list");

  eventsListContainer.innerHTML = "";

  userData.events.forEach((event) => {
    const eventItem = document.createElement("div");
    eventItem.innerHTML = `<strong>${event.name}</strong> - ${event.date}`;
    eventsListContainer.appendChild(eventItem);
  });
}

function addEvent() {
  const eventNameInput = document.getElementById("eventName");
  const eventDateInput = document.getElementById("eventDate");

  const userData = JSON.parse(localStorage.getItem("userData"));

  const newEvent = {
    name: eventNameInput.value,
    date: eventDateInput.value,
  };

  userData.events.push(newEvent);
  localStorage.setItem("userData", JSON.stringify(userData));

  showEvents();
}

function initPage() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData && userData.loggedIn) {
    document.getElementById("calendar-container").style.display = "block";

    showEvents();
  } else {
    window.location.href = "login.html";
  }
}

document.addEventListener("DOMContentLoaded", initPage);
