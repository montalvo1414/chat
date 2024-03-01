document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    const messages = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message.trim() !== '') {
            socket.emit('message', message);
            messageInput.value = '';
        }
    });

    socket.on('message', (message) => {
        const li = document.createElement('li');
        li.textContent = message;
        messages.appendChild(li);
    });
});