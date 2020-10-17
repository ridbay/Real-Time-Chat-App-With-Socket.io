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