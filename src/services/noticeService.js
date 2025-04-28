import axios from 'axios';

const API_URL = 'https://your-backend-url/api/notices';

export async function fetchNotices() {
  const res = await axios.get(API_URL);
  return res.data;
}