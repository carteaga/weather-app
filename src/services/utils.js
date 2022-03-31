export const get = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const urlParamsToString = (params = {}) => new URLSearchParams(params).toString();
