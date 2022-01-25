import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useLocation } from "wouter";
import getImage from "../../services/getImage";
import useResponsive from "../../hooks/useResponsive";
import useImageColor from "use-image-color";
import "./Details/styles.css";

import ImgInfoMobileRender from "../../components/ImgInfoMobileCard";
import ImgInfoDeskRender from "../../components/ImgInfoDeskCard";
import ImgInfoNavCard from "../../components/ImgInfoNavCard";
import DynamicStyleSearchInput from "../../components/DynamicStyleSearchInput";
import ColorPalette from "../../components/ColorPalette";

export default function Detail({ params }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useLocation(); // eslint-disable-line
  const [image, setImage] = useState({});
  const { width } = useResponsive();
  const { colors } = useImageColor(image.small, { cors: true, colors: 5 });

  useEffect(() => {
    getImage(params).then((img) => setImage(img));
  }, [params]);

  const handleSubmit = (event) => {
    event.preventDefault();
    location[1](`/search/${query}`);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      {width < 500 ? (
        <div className="card-detail">
          <ImgInfoNavCard setLocation={setLocation}>
            <DynamicStyleSearchInput
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              query={query}
            />
          </ImgInfoNavCard>
          {colors && <ImgInfoMobileRender image={image} color={colors[0]} />}
        </div>
      ) : (
        <div className="card-detail-desk">
          <ImgInfoNavCard setLocation={setLocation}>
            <DynamicStyleSearchInput
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              query={query}
            />
          </ImgInfoNavCard>
          <ImgInfoDeskRender image={image}>
            {colors && colors.length > 0 && <ColorPalette colors={colors} />}
          </ImgInfoDeskRender>
        </div>
      )}
    </>
  );
}
