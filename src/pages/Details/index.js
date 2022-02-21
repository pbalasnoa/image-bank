import "./styles.css";
import { useState, useEffect } from "react";
import getImage from "../../services/getImage";
import useResponsive from "../../hooks/useResponsive";
import useImageColor from "use-image-color";

import ImgInfoMobileRender from "../../components/ImgInfoMobileCard";
import ImgInfoDeskRender from "../../components/ImgInfoDeskCard";
import ImgInfoNavCard from "../../components/ImgInfoNavCard";
import DynamicStyleSearchInput from "../../components/DynamicStyleSearchInput";
import ColorPalette from "../../components/ColorPalette";
import TextInfoDesk from "../../components/TextInfoDesk";
import Alert from "../../components/Alert";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const [query, setQuery] = useState("");
  const [image, setImage] = useState({});
  const [error, setError] = useState(null);
  const { width } = useResponsive();
  const [openAlert, setOpenAlert] = useState(false);
  const [backGroundColor, setBackGroundColor] = useState(false);
  const [colorText, setColorText] = useState(false);
  const { alt_description, small, ...restProps } = image;

  useEffect(() => {
    getImage(params).then((img) => {
      if (img.error) {
        setError(img.error[0]);
        return;
      }

      setImage(img);
    });
  }, [params]);

  const { colors } = useImageColor(small, {
    cors: true,
    colors: 5,
    format: "rgb",
  });

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

  return (
    <div className={width > 500 ? "card-detail-desk" : "card-detail"}>
      {image.hasOwnProperty("name") && (
        <Helmet>
          <title>{image?.name} | IMG_bank</title>
          <meta name="description" content={`Imagen taken by:${image.name}`} />
        </Helmet>
      )}
      <Alert
        text="Copied!"
        open={openAlert}
        setOpen={setOpenAlert}
        backGroundColor={backGroundColor}
        color={colorText}
      />
      <ImgInfoNavCard>
        <DynamicStyleSearchInput query={query} setQuery={setQuery} />
      </ImgInfoNavCard>
      {error === "Rate Limit Exceeded" ? (
        <div className="error-box">
          <h1>{error} :c</h1>
        </div>
      ) : width < 500 ? (
        <>{colors && <ImgInfoMobileRender image={image} color={colors[0]} />}</>
      ) : (
        <ImgInfoDeskRender image={small} description={alt_description}>
          {colors && colors.length > 0 && (
            <div className="card-detail--palette-box">
              <ColorPalette
                colors={colors}
                handleCopyClipboard={handleCopyClipboard}
              />
            </div>
          )}
          <section className="card-detail--info-desk">
            <TextInfoDesk image={{ ...restProps }} />
          </section>
        </ImgInfoDeskRender>
      )}
    </div>
  );
}
