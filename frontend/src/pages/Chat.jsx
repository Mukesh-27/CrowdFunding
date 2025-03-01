import React, { useState } from 'react';

const Chat = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [message, setMessage] = useState('');

    const quickQuestions = [
        'How to start a project?',
        'Funding process',
        'Success rate',
        'Payment methods'
    ];

    return (
        <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <i className="fas fa-robot text-blue-600 text-xl"></i>
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
                        <i className="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div className="h-80 p-4 bg-gray-50 overflow-y-auto">
                    <div className="flex gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <i className="fas fa-robot text-white text-sm"></i>
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                            <p className="text-gray-700">Hi! I'm your CrowdFund Assistant. How can I help you today?</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                        {quickQuestions.map((question, index) => (
                            <button
                                key={index}
                                className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-700 transition-all"
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
                        <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
