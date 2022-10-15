import CountDown from "./CountDown/CountDown";

function App() {
  return (
    <div className="App">
      <CountDown days = {364} minutes={1} />
    </div>
  );
}

export default App;
