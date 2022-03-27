export default (url) => {
  return new URL(`/src/${url}`, import.meta.url).href;
};
