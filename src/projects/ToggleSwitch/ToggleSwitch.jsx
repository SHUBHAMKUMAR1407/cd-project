import { useState } from "react";
import "./ToggleSwitch.css"; // Ensure you have this CSS file for styles
import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn((prev) => !prev); // safer toggle
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#d04292ff" : "" };

  return (
    <>
      <h1 style={{ color: "#000", textAlign: "center" }}>
        Toggle Switch <IoIosSwitch style={{ color: "grey" }} /> <PiUserSwitchFill />
      </h1>
      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};

export default ToggleSwitch;
