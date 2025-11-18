document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    if (chatInput && sendBtn && chatMessages) {
        sendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText === '') return;

        // 1. Add user's message to chat
        const userBubble = document.createElement('div');
        userBubble.classList.add('message-bubble', 'user-bubble');
        userBubble.innerHTML = `<p>${messageText}</p>`;
        chatMessages.appendChild(userBubble);

        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 2. Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message-bubble', 'ai-bubble');
        typingIndicator.innerHTML = `
            <div class="avatar">🤖</div>
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // 3. Simulate AI response after a delay
        setTimeout(() => {
            typingIndicator.remove();
            const aiBubble = document.createElement('div');
            aiBubble.classList.add('message-bubble', 'ai-bubble');
            aiBubble.innerHTML = `
                <div class="avatar">🤖</div>
                <p>Thanks for your question! I'm still learning, but here is a dummy response about "${messageText}".</p>
            `;
            chatMessages.appendChild(aiBubble);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 2000);
    }
});
