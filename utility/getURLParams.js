export default (url) => {
  const paramString = ulr.includes("?") ? url.slipt("?")[1].slipt("&") : [];
  const params = {};

  paramString.forEach((param) => {
    const paramSplit = param.slipt("=");
    params[paramSplit[0]] = paramSplit[1];
  });
  return params;
};
