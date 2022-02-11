import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import getImage from "../../services/getImage";
import useResponsive from "../../hooks/useResponsive";
import useImageColor from "use-image-color";
import "./styles.css";

import ImgInfoMobileRender from "../../components/ImgInfoMobileCard";
import ImgInfoDeskRender from "../../components/ImgInfoDeskCard";
import ImgInfoNavCard from "../../components/ImgInfoNavCard";
import DynamicStyleSearchInput from "../../components/DynamicStyleSearchInput";
import ColorPalette from "../../components/ColorPalette";

export default function Detail({ params }) {
  const [query, setQuery] = useState("");
  const [image, setImage] = useState({});
  const { width } = useResponsive();
  const { colors } = useImageColor(image.small, {
    cors: true,
    colors: 5,
    format: "rgb",
  });

  useEffect(() => {
    getImage(params).then((img) => setImage(img));
  }, [params]);

  return (
    <>
      <div className={width > 500 ? "card-detail-desk" : "card-detail"}>
        <ImgInfoNavCard>
          <DynamicStyleSearchInput query={query} setQuery={setQuery} />
        </ImgInfoNavCard>
        {width < 500 ? (
          <>
            {colors && <ImgInfoMobileRender image={image} color={colors[0]} />}
          </>
        ) : (
          <ImgInfoDeskRender image={image}>
            {colors && colors.length > 0 && <ColorPalette colors={colors} />}
          </ImgInfoDeskRender>
        )}
      </div>
    </>
  );
}
