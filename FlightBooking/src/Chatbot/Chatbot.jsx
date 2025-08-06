import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [conversationId, setConversationId] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const backendUrl = "http://localhost:8080/api/chat";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load chat history when conversationId changes
  useEffect(() => {
    const fetchHistory = async () => {
      if (!conversationId) return;
      try {
        const res = await fetch(`${backendUrl}/history/${conversationId}`);
        const history = await res.json();
        const formatted = history.map((msg) => ({
          from: msg.name || "bot",
          text: msg.content || "",
        }));
        setMessages(formatted);
      } catch (err) {
        console.error("Failed to load history", err);
      }
    };
    fetchHistory();
  }, [conversationId]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch(`${backendUrl}/chat?conversationId=${conversationId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      const botResponse = await res.text();
      setMessages((prev) => [...prev, { from: "bot", text: botResponse }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Error fetching response." },
      ]);
    }

    setInput("");
  };

  const clearChat = async () => {
    if (!conversationId) return alert("Enter conversation ID first.");

    try {
      await fetch(`${backendUrl}/clear/${conversationId}`, { method: "DELETE" });
      setMessages([]);
    } catch (err) {
      alert("Failed to clear chat.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "70px",
          right: "20px",
          zIndex: 9999,
          padding: "10px 15px",
          borderRadius: "25px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
      >
        {open ? "Close Chat" : "Chat"}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "110px",
            right: "20px",
            width: "340px",
            height: "480px",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            zIndex: 10000,
          }}
        >
          <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
            <input
              type="text"
              value={conversationId}
              onChange={(e) => setConversationId(e.target.value)}
              placeholder="Conversation ID"
              style={{
                width: "calc(100% - 70px)",
                padding: "5px",
                fontSize: "13px",
                marginRight: "5px",
              }}
            />
            <button
              onClick={clearChat}
              style={{
                padding: "5px 10px",
                fontSize: "12px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Clear
            </button>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
              background: "#f9f9f9",
            }}
          >
            {messages.length === 0 && (
              <div style={{ color: "#999" }}>Start chatting...</div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.from === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "15px",
                    backgroundColor:
                      msg.from === "user" ? "#007bff" : "#e5e5ea",
                    color: msg.from === "user" ? "white" : "black",
                    maxWidth: "75%",
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            style={{ display: "flex", borderTop: "1px solid #ddd" }}
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Type your message..."
              style={{
                flex: 1,
                border: "none",
                padding: "10px",
                fontSize: "14px",
                resize: "none",
              }}
            />
            <button
              type="submit"
              style={{
                border: "none",
                backgroundColor: "#007bff",
                color: "white",
                padding: "0 15px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
