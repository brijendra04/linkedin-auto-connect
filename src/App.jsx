import React, { useState } from "react";

const App = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const connectWithAll = async () => {
    setIsProcessing(true);
    const buttons = document.querySelectorAll("button");

    const connectButtons = Array.from(buttons).filter(
      (btn) => btn.innerText === "Connect"
    );

    if (connectButtons.length === 0) {
      alert("No connectable profiles available.");
      setIsProcessing(false);
      return;
    }

    for (let i = 0; i < connectButtons.length; i++) {
      try {
        connectButtons[i].click();
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000 + 1000));
      } catch (error) {
        console.error(`Error clicking button ${i + 1}:`, error);
      }
    }

    alert("All connection requests sent!");
    setIsProcessing(false);
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}>
      <button
        onClick={connectWithAll}
        disabled={isProcessing}
        style={{
          backgroundColor: "#0073b1",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isProcessing ? "Processing..." : "Connect with All"}
      </button>
    </div>
  );
};

export default App;
