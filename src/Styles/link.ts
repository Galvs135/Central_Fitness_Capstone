const linkCss = {
  rounded: 4,
  overflow: "hidden",
  boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.35)",
  bg: "black",
  w: "full",
  p: 4,
  display: "flex",
  alignItems: "center",
  gap: 4,
  fontFamily: "title",
  position: "relative",
  "&:hover": {
    textDecoration: "none",
  },
  "&.active:before": {
    content: "''",
    width: "5px",
    borderRadius: "4px",
    height: "100%",
    backgroundColor: "third",
    position: "absolute",
    top: 0,
    right: 0,
  },
};

export default linkCss;
