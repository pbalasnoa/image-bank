const ColorPalette = ({ colors }) => {
  return (
    <>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
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
