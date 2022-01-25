const ImgInfoNavCard = (props) => {
  const { setLocation, children } = props;
  return (
    <div className="card-detail-header-nav">
      <i className="bi bi-caret-left-fill" onClick={() => setLocation("/")}></i>
      {children}
    </div>
  );
};

export default ImgInfoNavCard;
