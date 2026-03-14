// script.js

const socket = io();

// Get elements
const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

// Display incoming chat messages
socket.on('chat message', (msg) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  messageElement.textContent = msg;
  chatBox.appendChild(messageElement);
  
  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
});

// Send chat message to the server
chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const message = messageInput.value.trim();
  if (message) {
    socket.emit('chat message', message); // Send message to server
    messageInput.value = ''; // Clear input field
  }
});
