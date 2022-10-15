import "./styles.css";
import get_current_age from "./utils/currentAge";
import numToRoman from "./utils/numToRoman";
import "@pqina/flip/dist/flip.min.css";
import CountDown from "./CountDown/CountDown";

let date_of_birthday = new Date("1999-07-02");
let month_of_birthday = date_of_birthday.getMonth();
var day_of_birthday = date_of_birthday.getDate();
let next_date_of_birthday = new Date(new Date().getFullYear() + 1, month_of_birthday, day_of_birthday);




function App() {
return (
  <div className="App">
    <div className="age">{numToRoman(get_current_age(date_of_birthday))}</div>
    <div className="empty"></div>
    <div className="timer_wrap">
      <CountDown value = {next_date_of_birthday.toDateString()} />
    </div>
  </div>
);
}

export default App;