function Dot({ color}) {
  const style = {
    height: 20,
    width:20,
    margin: "0px 10px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block"
  }

  return <span style={style}></span>
}

export default Dot;