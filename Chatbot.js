const responses = {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing fine. How can I assist you?",
    "bye": "Goodbye! Have a great day!",
    "what is your name": "I am a chatbot created to help you. I don't have a personal name.",
    "what is the weather": "I can't check the weather right now, but you can check a weather website or app."
};

function sendMessage() {
    const input = document.getElementById('userInput').value.toLowerCase();
    const chatbox = document.getElementById('chatbox');
    
    if (input.trim() === "") return;

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = "You: " + input;
    chatbox.appendChild(userMessage);

    // Generate bot response
    const botResponse = responses[input] || "Sorry, I don't understand that.";
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.textContent = "Bot: " + botResponse;
    chatbox.appendChild(botMessage);

    // Clear input field
    document.getElementById('userInput').value = "";
    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}
