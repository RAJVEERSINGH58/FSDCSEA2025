const parent = document.getElementById("parent");

const root = ReactDOM.createRoot(parent);

const h21 = (
  <div
    style={{
      display: "flex",
      gap: "20px",
      padding: "25px",
      alignItems: "center",
      border: "2px solid black",
      width: "300px",
    }}
  >
    <img
      style={{
        height: "100px",
        width: "100px",
        borderRadius: "50%",
      }}
      src="https://tse2.mm.bing.net/th/id/OIP.B39-1EvwOFXOffOfIKZT0AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    />
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h3>Model No</h3>
      <h3>Price</h3>
      <h3>Description</h3>
      <button
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
      >
        Add To Cart
      </button>
    </div>
  </div>
);

root.render(h21);
