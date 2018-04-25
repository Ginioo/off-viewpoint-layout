import axios from 'axios';

export const SLIDE_LEFT = 'SLIDE_LEFT';
export const FETCH_IMAGES = 'FETCH_IMAGES';

export function slideLeft() {
  return {
    type: SLIDE_LEFT
  };
}

// todo fetch image metadata from hortilife-admin and fetch images
export function fetchImages(country) {
  const request = axios.get(`/admin/images`, {
    baseURL: 'http://localhost:9000/'
  });

  return {
    type: FETCH_IMAGES,
    payload: request
  };
}