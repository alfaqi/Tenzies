import { useEffect, useState } from "react";

export default function Die(props: any) {
  const [displayValue, setDisplayValue] = useState(props.value);

  useEffect(() => {
    if (!props.isHeld && props.value !== displayValue) {
      let counter = 0;

      const interval = setInterval(() => {
        const rand = Math.ceil(Math.random() * 6);
        setDisplayValue(rand);
        counter++;

        if (counter >= 10) {
          clearInterval(interval);
          setDisplayValue(props.value);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [props.value, props.isHeld]);

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
    width: "50px",
    height: "50px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    border: "2px solid #333",
    borderRadius: "8px",
    margin: "5px",
    transition: "background-color 0.2s",
  };

  return (
    <button
      style={styles}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${displayValue}, ${
        props.isHeld ? "held" : "not held"
      }`}
    >
      {displayValue}
    </button>
  );
}
