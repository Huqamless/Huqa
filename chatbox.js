// chatbox.js

document.getElementById("send-button").addEventListener("click", function() {
    let userMessage = document.getElementById("user-message").value;
    if (userMessage.trim() !== "") {
        displayMessage(userMessage, 'user');
        getBotResponse(userMessage);
    }
    document.getElementById("user-message").value = "";
});

function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender + "-message");
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

function getBotResponse(userMessage) {
    let botResponse = "Sorry, I don't understand that.";

    // Check for certain phrases and provide corresponding responses
    if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hi there! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        botResponse = "I'm just a bot, but I'm doing great! How can I help you?";
    } else if (userMessage.toLowerCase().includes("help")) {
        botResponse = "Sure! How can I assist you? You can ask me about the team or their education background.";
    } else if (userMessage.toLowerCase().includes("education")) {
        botResponse = "I can tell you about the educational background of the team members. Ask away!";
    }

    displayMessage(botResponse, 'bot');
}
// chatbox.js

document.getElementById("send-button").addEventListener("click", function() {
    let userMessage = document.getElementById("user-message").value;
    if (userMessage.trim() !== "") {
        displayMessage(userMessage, 'user');
        getBotResponse(userMessage);
    }
    document.getElementById("user-message").value = "";
});

function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender + "-message");
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

function getBotResponse(userMessage) {
    let botResponse = "Sorry, I don't understand that.";

    // Check for certain phrases and provide corresponding responses
    if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hi there! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        botResponse = "I'm just a bot, but I'm doing great! How can I help you?";
    } else if (userMessage.toLowerCase().includes("help")) {
        botResponse = "Sure! How can I assist you? You can ask me about the team or their education background.";
    } else if (userMessage.toLowerCase().includes("education")) {
        botResponse = "I can tell you about the educational background of the team members. Ask away!";
    } else if (userMessage.toLowerCase().includes("who is ibrae huqa")) {
        botResponse = "Ibrae Huqa is a dedicated team member who embraces teamwork and brings innovative ideas to the table. He thrives in challenging environments.";
    } else if (userMessage.toLowerCase().includes("who is asa rapuro")) {
        botResponse = "Asa Rapuro is a leader with a knack for problem-solving. Asa plays a critical role in planning and executing the team's innovative solutions.";
    } else if (userMessage.toLowerCase().includes("who is shem murithi")) {
        botResponse = "Shem Murithi is known for his creative ideas and fresh perspectives, often thinking outside the box to solve problems for the team.";
    } else if (userMessage.toLowerCase().includes("who is kelvin munyingi")) {
        botResponse = "Kelvin Munyingi is the glue that holds the team together. His organizational skills and collaborative spirit are what make him a great team player.";
    } else if (userMessage.toLowerCase().includes("who is khalid hassan")) {
        botResponse = "Khalid Hassan is a brilliant team member who solves complex problems with his analytical skills and keen attention to detail.";
    } else if (userMessage.toLowerCase().includes("what are ibrae's skills")) {
        botResponse = "Ibrae is skilled in teamwork, problem-solving, and has strong communication abilities. He’s great at adapting to new challenges.";
    } else if (userMessage.toLowerCase().includes("what are asa's skills")) {
        botResponse = "Asa specializes in project planning, innovation, and problem-solving. Asa excels in designing solutions to meet complex needs.";
    } else if (userMessage.toLowerCase().includes("what are shem's skills")) {
        botResponse = "Shem is known for his creative problem-solving skills and ability to think outside the box. He is great at brainstorming fresh solutions.";
    } else if (userMessage.toLowerCase().includes("what are kelvin's skills")) {
        botResponse = "Kelvin’s key skills include organization, teamwork, and leadership. He keeps the team aligned and helps everyone work together efficiently.";
    } else if (userMessage.toLowerCase().includes("what are khalid's skills")) {
        botResponse = "Khalid is highly skilled in data analysis, troubleshooting, and providing detailed insights that contribute to team decision-making.";
    } else if (userMessage.toLowerCase().includes("what projects are the team working on")) {
        botResponse = "The team is working on several innovative projects. You can learn more about their individual projects by visiting the project pages for each team member.";
    } else if (userMessage.toLowerCase().includes("how do i contact ibrae")) {
        botResponse = "You can contact Ibrae by visiting the contact section on his profile page, or by sending a message via the contact form.";
    } else if (userMessage.toLowerCase().includes("how do i contact asa")) {
        botResponse = "To contact Asa, you can visit the contact section on his profile page or use the team contact form.";
    } else if (userMessage.toLowerCase().includes("how do i contact shem")) {
        botResponse = "For contacting Shem, please visit his profile and reach out via the contact options provided there.";
    } else if (userMessage.toLowerCase().includes("how do i contact kelvin")) {
        botResponse = "You can get in touch with Kelvin by reaching out through the contact form or visiting his profile page.";
    } else if (userMessage.toLowerCase().includes("how do i contact khalid")) {
        botResponse = "Khalid can be reached through his profile page or by using the general contact form on the website.";
    }

    displayMessage(botResponse, 'bot');
}

