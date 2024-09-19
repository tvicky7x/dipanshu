import EN_JSON from "./EN.json";

// getComponent text
export function getComponentText(path) {
  const pathArray = path.split(".");
  let content = EN_JSON[`${pathArray[0]}`];
  for (let i = 0; i < pathArray.length; i++) {
    content = content[`${pathArray[i]}`];
  }
  return content;
}

// image prefix handler
export function imagePrefixHandler(imageUrl, prefix) {}
