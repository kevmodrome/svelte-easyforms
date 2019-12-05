export function autoresize(node) {
  const div = document.createElement("div");
  div.style.display = "block";
  div.style.position = "relative";

  const sizer = document.createElement("div");
  const style = getComputedStyle(node);
  Object.assign(sizer.style, {
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    paddingTop: style.paddingTop,
    paddingLeft: style.paddingLeft,
    paddingBottom: style.paddingBottom,
    paddingRight: style.paddingRight,
    borderTopWidth: style.borderTopWidth,
    borderLeftWidth: style.borderLeftWidth,
    borderBottomWidth: style.borderBottomWidth,
    borderRightWidth: style.borderRightWidth,
    borderTopStyle: style.borderTopStyle,
    borderLeftStyle: style.borderLeftStyle,
    borderBottomStyle: style.borderBottomStyle,
    borderRightStyle: style.borderRightStyle,
    lineHeight: style.lineHeight,
    boxSizing: style.boxSizing,
    position: "relative",
    whiteSpace: "pre",
    visibility: "hidden"
  });

  Object.assign(node.style, {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    resize: "none"
  });

  div.appendChild(sizer);
  node.parentNode.insertBefore(div, node);
  div.appendChild(node);

  function handleChange() {
    sizer.innerHTML = node.value + " ";
  }

  handleChange();
  node.addEventListener("input", handleChange);

  return {
    destroy() {
      node.removeEventListener("input", handleChange);
    }
  };
}
