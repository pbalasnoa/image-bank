import "./style.css";
import Alert from "../Alert";
import { useState } from "react";
const lavender__secondary = "#ece7ff";
const rich_Black__primary = "#001219";

const ColorPalette = ({ colors }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [backGroundColor, setBackGroundColor] = useState(false);
  const [colorText, setColorText] = useState(false);
  const RGBToHex = (r, g, b) => {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length === 1) r = "0" + r;
    if (g.length === 1) g = "0" + g;
    if (b.length === 1) b = "0" + b;

    const color = "#" + r + g + b;

    return color.toUpperCase();
  };

  const setContrast = (r, g, b) => {
    let brightness = r * 299 + g * 587 + b * 114;
    brightness /= 255000;
    return brightness >= 0.5 ? rich_Black__primary : lavender__secondary;
  };

  const handleCopyClipboard = (event) => {
    let colorText = event.target.style.color;
    let hexText = event.target.innerText;
    setBackGroundColor(hexText);
    setColorText(colorText);
    let text = document.createElement("textarea");
    text.innerText = hexText;
    document.body.appendChild(text);
    text.select();
    document.execCommand("copy");
    text.remove();
    setOpenAlert(true);
  };

  return colors.map((color, index) => (
    <>
      <Alert
        text="Copied!"
        open={openAlert}
        setOpen={setOpenAlert}
        backGroundColor={backGroundColor}
        color={colorText}
      />
      <div
        key={index}
        style={{
          backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
        }}
        className="color-box"
      >
        <p
          style={{
            color: setContrast(color[0], color[1], color[2]),
          }}
          className="text-box"
          onClick={handleCopyClipboard}
        >
          {RGBToHex(color[0], color[1], color[2])}
        </p>
      </div>
    </>
  ));
};

export default ColorPalette;
