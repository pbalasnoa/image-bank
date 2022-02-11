const ImgInfoNavCard = (props) => {
  const { children } = props;
  return (
    <div className="card-detail-header-nav">
      <i
        className="bi bi-caret-left-fill"
        onClick={() => window.history.back()}
      ></i>
      {children}
    </div>
  );
};

export default ImgInfoNavCard;
