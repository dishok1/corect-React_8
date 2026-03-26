// src/OnLineIcon/OnLineIcon.js

export default function OnLineIcon({ isOnline = false }) {
  const color = isOnline ? "#35C759" : "#ff0000";
  return (
    <span
      style={{
        display: "inline-flex",
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: isOnline ? "0 0 6px rgba(53, 199, 89, 0.7)" : "none",
      }}
      aria-label={isOnline ? "Online" : "Offline"}
    />
  );
}

 
