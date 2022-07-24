export default (imgUrl) => {
  return new URL(`/src/assets/${imgUrl}`, import.meta.url).href;
};
