export default (url) => {
  const newURL = new URL(`/src/${url}`, import.meta.url).href;
  console.log(newURL);
  return newURL;
};
