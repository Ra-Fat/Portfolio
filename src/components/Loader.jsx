import { Html } from "@react-three/drei";

const CanvasLoader = () => {
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Spinner or loading image */}
      <span className="canvas-loader"></span>

      {/* Removed the progress text below */}
      {/* <p style={{ fontSize: 14, color: "#F1F1F1", fontWeight: 800, marginTop: 40 }}>
        {progress.toFixed(2)}%
      </p> */}
    </Html>
  );
};

export default CanvasLoader;
