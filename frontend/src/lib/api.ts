export const fetchAPI = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${process.env.PAYLOAD_API_URL}${endpoint}`;
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`API ${url} failed`);
  return res.json();
};
