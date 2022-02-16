import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const Alert = ({ text, open, setOpen, backGroundColor, color }) => {
  const TEXT_BOX_STYLE = {
    backgroundColor: backGroundColor,
    color: color,
  };

  useEffect(() => {
    if (open === true)
      setTimeout(() => {
        setOpen(false);
      }, 3000);
  }, [setOpen, open]);

  const handleClosed = () => {
    setOpen(false);
  };

  return ReactDOM.createPortal(
    <div className={`alert ${open && "open-alert"}`} onClick={handleClosed}>
      <div className="alert-content">
        <div className="alert-text-box" style={TEXT_BOX_STYLE}>
          <p>{text}</p>
        </div>
      </div>
    </div>,
    document.getElementById("alert")
  );
};

export default Alert;
