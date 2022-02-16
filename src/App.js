import Grocery from "./components/Grocery";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to the store</h1>
      <h3>Enter the Grocery below</h3>
      <Grocery />
    </div>
  );
}
