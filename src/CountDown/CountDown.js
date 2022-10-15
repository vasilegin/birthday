import React, { useRef, useEffect, useState } from "react";
import TickGroup from "../TickGroup/TickGroup";
import Tick from "@pqina/flip";
import "./CountDown.css"

const CountDown = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();

  const [tickValue, setTickValue] = useState(value);

  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit
    });
    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  useEffect(() => {
    const counter = Tick.count.down(value, {
      format: ["d", "h", "m", "s"]
    });

    counter.onupdate = function (value) {
      setTickValue(value);
    };

    return () => {
      counter.timer.stop();
    };
  }, [value]);

  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = {
        days: tickValue[0],
        hours: tickValue[1],
        mins: tickValue[2],
        secs: tickValue[3]
      };
    }
  }, [tickValue]);

  return (
    <div className="timer">
      <div className="tick">
        <div data-repeat="true" data-layout="horizontal fit">
          <div className="tick_inr">
            <div ref={divRef} style={{ display: "flex" }}>
            <TickGroup TKey = {'days'} label = {"Дни"}/>:
            <TickGroup TKey = {'hours'} label = {"Часы"}/>:
            <TickGroup TKey = {'mins'} label = {"Минуты"}/>:
            <TickGroup TKey = {'secs'} label = {"Секунды"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
