const socket = io();

const dom = {
    nameInput: document.querySelector('.name-input'),
    joinButton: document.querySelector('.join'),
    inputAvatar: document.querySelector('.messaging-form .avatar'),
    welcomeMessage: document.querySelector('h1'),
    feed: document.querySelector('.feed'),
    feedback: document.querySelector('.feedback')
};

const user = {
    name: null,
    avatar: null
};

dom.joinButton.onclick = e => {
    e.preventDefault();

    if(!dom.nameInput.value){
        dom.nameInput.parentElement.classList.add("error");
    }else{
        enterChannel();
    }
}

const enterChannel = () => {
    const avatar = getAvatar();
    const name = dom.nameInput.value;

    dom.joinButton.remove();
    dom.welcomeMessage.remove();


    dom.nameInput.value = "";
    dom.nameInput.placeholder = "Send a message for the channel ....";


    dom.inputAvatar.innerText= "";
    dom.inputAvatar.getElementsByClassName.backgroundImage = avatar;
    dom.inputAvatar.getElementsByClassName.backgroundSize = "contain";

    user.name = name;
    user.avatar = avatar;

    addWelcomeMessage({avatar}, true);
}