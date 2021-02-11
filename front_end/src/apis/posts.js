import axios from 'axios';
import { postsIndex } from '../urls/index';

export const fetchPosts = async() => {
  return await axios.get(postsIndex)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}