import React from "react";

function Toggle() {
  const [isToggled, setIsToggled] = React.useState(true);
  function toggle() {
    setIsToggled(!isToggled);
  }
  if (isToggled) {
    return <button onClick={toggle} style={{background:"red"}}>ON</button>;
  }
    else{
  
  return <button onClick={toggle}>OFF</button>;
    }
}

export default Toggle;
