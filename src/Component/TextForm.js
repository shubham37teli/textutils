export default function TextForm(prop) {
  return (
    <div>
      <h1
        className="title"
        style={{ color: prop.mode === "light" ? "black" : "white" }}
      >
        Enter Text To Analyze
      </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={prop.handle}
          value={prop.text}
          id="mybox"
          rows={8}
          style={
            prop.mode === "dark"
              ? { backgroundColor: "#4581a2", color: "white" }
              : {}
          }
        />
      </div>
      <button disabled={prop.text.length===0} className="btn btn-primary mx-2 my-1" id="btn" onClick={prop.upper}>
        Convert to Upper
      </button>
      <button disabled={prop.text.length===0} className="btn btn-primary mx-2 my-1" onClick={prop.lower}>
        Convert to Lower
      </button>
      <div className="container"></div>
    </div>
  );
}
