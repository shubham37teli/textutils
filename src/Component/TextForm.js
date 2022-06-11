

export default function TextForm(prop) {
  
  return (
    <div>
      <h1 className="title" style={{color:(prop.mode==="light")?"black":"white"}}>Enter Text To Analyze</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onClick={prop.typing}
          onChange={prop.handle}
          value={prop.text}
          id="mybox"
          rows={8}
          style={(prop.mode==="dark")?{backgroundColor:"grey",color:"white"}:{}}
    
        />
      </div>
      <button className="btn btn-primary" id="btn" onClick={prop.upper}>
        Convert to Upper
      </button>
      <button className="btn btn-primary mx-2" onClick={prop.lower}>
        Convert to Lower
      </button>
      <div className="container">
        
      </div>
    </div>
  
  
  );
}
