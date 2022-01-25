const ColorPalette = ({ colors }) => {
  return (
    <>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            height: "80px",
            width: "80px",
            marginBottom: "1rem",
          }}
        ></div>
      ))}
    </>
  );
};

export default ColorPalette;
