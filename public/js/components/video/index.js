function video(props = {}) {
  return `<video
    id="${props.id}"
    src="${props.src}" 
    class="${props.class}" 
    ${props.controls ? "controls" : ""} 
  />`;
}
