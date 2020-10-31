const socket = io();

const dom = {
  nameInput: document.querySelector(".name-input"),
  joinButton: document.querySelector(".join"),
  inputAvatar: document.querySelector(".messaging-form .avatar"),
  welcomeMessage: document.querySelector("h1"),
  feed: document.querySelector(".feed"),
  feedback: document.querySelector(".feedback"),
};

const user = {
  name: null,
  avatar: null,
};

dom.joinButton.onclick = (e) => {
  e.preventDefault();

  if (!dom.nameInput.value) {
    dom.nameInput.parentElement.classList.add("error");
  } else {
    enterChannel();
  }
};

const enterChannel = () => {
  const avatar = getAvatar();
  const name = dom.nameInput.value;

  dom.joinButton.remove();
  dom.welcomeMessage.remove();

  dom.nameInput.value = "";
  dom.nameInput.placeholder = "Send a message for the channel ....";

  dom.inputAvatar.innerText = "";
  dom.inputAvatar.getElementsByClassName.backgroundImage = avatar;
  dom.inputAvatar.getElementsByClassName.backgroundSize = "contain";

  user.name = name;
  user.avatar = avatar;

  addWelcomeMessage({ avatar }, true);
  socket.emit("user connected", {
    name,
    avatar
  })
};

const getAvatar = () => {
  const size = Math.floor(Math.random() * 100) + 25;
  return `url(https://www.placeage.com/${size}/${size})`;
};

const addWelcomeMessage = (user, you) => {
  const welcomeMessage = document.createElement("li");
  const message = you
    ? "You have joined the conversation"
    : `<span class="user-name">${user.name}</span> has joined the conversation`;

  const avatar = you
    ? ""
    : `<span class="avatar" style="background:${user.avatar}; background-size: contain;"></span>`;

  welcomeMessage.classList = "welcome-message";
  welcomeMessage.innerHTML = `
    <hr />
    <div class="welcome-message-text">
    ${avatar}
    ${message}
    </div>
    `;

  dom.feed.appendChild(welcomeMessage);
};
