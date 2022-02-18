import "./styles.css";

const ImgInfoDeskRender = ({ image, description, children }) => {
  return (
    <>
      <div className="card-detail--img-box-desk">
        <img src={image} alt={description} />
      </div>
      {children}
    </>
  );
};

export default ImgInfoDeskRender;
