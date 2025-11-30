import { useState } from "react";

function App() {
  // Inline CSS styles
  const styles = {
    body: {
      backgroundColor: "#f5f5f5",
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
    },
    container: {
      width: "90%",
      maxWidth: "600px",
      margin: "30px auto",
      background: "white",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      color: "#333",
      marginBottom: "10px",
    },
    button: {
      padding: "8px 16px",
      fontSize: "15px",
      cursor: "pointer",
      backgroundColor: "#1976d2",
      border: "none",
      color: "white",
      borderRadius: "5px",
      transition: "0.2s",
    },
    resetBtn: {
      padding: "8px 16px",
      fontSize: "15px",
      cursor: "pointer",
      backgroundColor: "#d32f2f",
      border: "none",
      color: "white",
      borderRadius: "5px",
      marginLeft: "10px",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "15px",
      marginTop: "5px",
      borderRadius: "5px",
      border: "1px solid #aaa",
    },
    hr: {
      margin: "25px 0",
      border: 0,
      borderTop: "1px solid #ddd",
    },
    text: {
      fontSize: "16px",
      color: "#444",
    },
  };

  // Toggle button state
  const [isOn, setIsOn] = useState(false);

  // Counter state
  const [count, setCount] = useState(0);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={styles.body}>
      <div style={styles.container}>

        {/* Question 1: Toggle */}
        <h2 style={styles.heading}>Toggle Button</h2>
        <button
          style={styles.button}
          onClick={() => setIsOn(!isOn)}
        >
          {isOn ? "ON" : "OFF"}
        </button>

        <hr style={styles.hr} />

        {/* Question 2: Counter */}
        <h2 style={styles.heading}>Counter</h2>
        <h3>Count: {count}</h3>

        <button
          style={styles.button}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          style={styles.resetBtn}
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        <hr style={styles.hr} />

        {/* Question 3: Form */}
        <h2 style={styles.heading}>User Form</h2>

        <input
          style={styles.input}
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          style={styles.input}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <h3>Entered Details:</h3>
        <p style={styles.text}>Name: {name}</p>
        <p style={styles.text}>Email: {email}</p>

      </div>
    </div>
  );
}

export default App;
