function TickGroup(props){
    return (
      <div className="tick-group">
        <div
          data-key= {props.TKey}
          data-repeat="true"
          data-transform="pad(00) -> split -> delay"
        >
          <span data-view="flip"></span>
        </div>
        <p className="tick-label tick-text">{props.label}</p>
      </div>
    );
  };
  
  export default TickGroup;