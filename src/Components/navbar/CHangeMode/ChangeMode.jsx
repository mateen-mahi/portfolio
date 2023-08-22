import React, { useState } from "react";
import Switch from "react-switch";

function SwitchExample() {
  const [checked, setChecked] = useState(true);

  const handleChange = (checked) => {
    setChecked(checked);
    if (checked) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <label>
      <Switch onChange={handleChange} checked={checked}
      onColor="#86d3ff"
      onHandleColor="#2693e6"
      handleDiameter={30}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      className="react-switch"
      id="material-switch"

      />
    </label>
  );
}

export default SwitchExample;
