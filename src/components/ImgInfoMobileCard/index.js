import "./styles.css";
import { useState } from "react";
import TextInfoMobile from "../TextInfoMobile";

const lavender__secondary = "#ece7ff";
const rich_Black__primary = "#001219";

const ImgInfoMobileRender = ({ image, color, handleCopyClipboard }) => {
  const [showDetail, setShowDetail] = useState(true);
  const { alt_description, small, ...restProps } = image;

  const setContrast = () => {
    let brightness = color[0] * 299 + color[1] * 587 + color[2] * 114;
    brightness /= 255000;
    return brightness >= 0.5 ? rich_Black__primary : lavender__secondary;
  };

  return (
    <>
      <img src={small} className="card_img" alt={alt_description} />

      {showDetail ? (
        <TextInfoMobile
          image={{ ...restProps }}
          color={color}
          showDetail={setShowDetail}
          setContrast={setContrast}
          handleCopyClipboard={handleCopyClipboard}
        />
      ) : (
        <div
          className="footer card-less-detail-icon"
          onClick={() => setShowDetail(true)}
        >
          <i className="bi bi-caret-up-fill "></i>
        </div>
      )}
    </>
  );
};

export default ImgInfoMobileRender;
