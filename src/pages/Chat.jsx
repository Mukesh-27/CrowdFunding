import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Chat = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    const quickQuestions = [
        'How to start a project?',
        'Funding process',
        'Success rate',
        'Payment methods'
    ];

    const handleSendMessage = async () => {
        if (!message) return;

        // Add user message to chat history
        const userMessage = { role: 'user', content: message };
        setChatHistory((prev) => [...prev, userMessage]);

        // Clear the input
        setMessage('');
        
        // Show typing indicator
        setIsTyping(true);

        try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer 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',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'qwen/qwq-32b:free',
                    messages: [
                        ...chatHistory,
                        userMessage,
                    ],
                }),
            });

            // Check if the response is ok
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the response as JSON
            const data = await response.json();

            // Process the response data
            if (data.choices && data.choices.length > 0) {
                const assistantMessage = {
                    role: 'assistant',
                    content: data.choices[0].message.content,
                };
                setChatHistory((prev) => [...prev, assistantMessage]);
            } else {
                throw new Error('No valid choices found in the response');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            
            // Add an error message to the chat history
            const errorMessage = {
                role: 'assistant',
                content: 'Sorry, I could not process your request. Please try again later.',
            };
            setChatHistory((prev) => [...prev, errorMessage]);
        } finally {
            // Hide typing indicator when done
            setIsTyping(false);
        }
    };

    return (
        <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faRobot} className="text-blue-600 text-xl" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">CrowdFund Assistant</h3>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                <span className="text-white text-sm opacity-90">Online</span>
                            </div>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:bg-white/10 p-2 rounded-full transition-all"
                    >
                        <FontAwesomeIcon icon={faTimes} className="text-xl" />
                    </button>
                </div>
                <div className="h-80 p-4 bg-gray-50 overflow-y-auto">
                    {chatHistory.map((msg, index) => (
                        <div key={index} className={`flex gap-3 mb-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                            <div className={`w-8 h-8 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-gray-300'} rounded-full flex items-center justify-center`}>
                                <FontAwesomeIcon icon={faRobot} className={`${msg.role === 'user' ? 'text-white' : 'text-gray-600'} text-sm`} />
                            </div>
                            <div className={`p-3 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'} shadow-sm max-w-[80%]`}>
                                <p>{msg.content}</p>
                            </div>
                        </div>
                    ))}
                    
                    {isTyping && (
                        <div className="flex gap-3 mb-4 justify-end">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                        {quickQuestions.map((question, index) => (
                            <button
                                key={index}
                                className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-700 transition-all"
                                onClick={() => {
                                    setMessage(question);
                                    handleSendMessage();
                                }}
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
                        />
                        <button 
                            onClick={handleSendMessage}
                            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
