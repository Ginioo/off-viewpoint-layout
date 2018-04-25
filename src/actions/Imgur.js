import axios from 'axios';


const CLIENT_ID = 'dcd17a1e02501f8';
const ALBUM_ID = 'F2FWq';
const config = {
  baseURL: 'https://api.imgur.com',
  headers: {'Authorization': `Client-ID ${CLIENT_ID}`}
};

export const FETCH_IMAGES = 'FETCH_IMAGES';

export function fetchImages() {
  const url = `/3/album/${ALBUM_ID}`;

  const request = axios.get(url, config);

  return {
    type: FETCH_IMAGES,
    payload: request
  };
}