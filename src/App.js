import "./styles.css";
import "@pqina/flip/dist/flip.min.css";
import CountDown from "./CountDown/CountDown";
import { Emoji, EmojiStyle } from 'emoji-picker-react';

let date_of_birthday = new Date("1999-07-02");
let month_of_birthday = date_of_birthday.getMonth();
var day_of_birthday = date_of_birthday.getDate();
let next_date_of_birthday = new Date(new Date().getFullYear() + 1, month_of_birthday, day_of_birthday);

function App() {
return (
  <div className="App">
    <p className="emoji">
      <Emoji unified="1f423" size="200" />
      <Emoji unified="1f423" size="200" />
      <Emoji unified="1f423" size="200" />
      <Emoji unified="1f423" size="200" />
      <Emoji unified="1f423" size="200" />
    </p>
    <div className="empty"></div>
    <div className="timer_wrap">
      <CountDown value = {next_date_of_birthday.toDateString()} />
    </div>
  </div>
);
}

export default App;