import ImageCard from "../ImageCard";
import Masonry from "react-masonry-css";
import "../../App.css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  996: 2,
  927: 1,
};

export default function ListOfImage({ images }) {
  return (
    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid">
      {images?.map((img) => (
        <ImageCard
          alt_description={img.alt_description}
          description={img.description}
          id={img.id}
          likes={img.likes}
          key={img.id}
          name={img.name}
          profile_image={img.profile_image}
          small={img.small}
          tags={img.tags}
          username={img.username}
        />
      ))}
    </Masonry>
  );
}
