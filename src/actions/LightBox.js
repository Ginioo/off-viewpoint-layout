export const OPEN_LIGHTBOX = 'OPEN_LIGHTBOX';
export const CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX';
export const GO_NEXT = 'GO_NEXT';
export const GO_PREVIOUS = 'GO_PREVIOUS';

export function openLightBox(list, current) {
  return {
    type: OPEN_LIGHTBOX,
    payload: {list, current}
  };
}

export function closeLightBox() {
  return {
    type: CLOSE_LIGHTBOX
  };
}

export function goNext(current) {
  return {
    type: GO_NEXT,
    payload: current
  };
}

export function goPrevious(current) {
  return {
    type: GO_PREVIOUS,
    payload: current
  };
}

export function swipe(event, current) {
  // swipe right (-90 < angle < 90)
  // swipe left (90 < angle < 180, -180 < angle < -90)
  if (event.angle > -90 && event.angle < 90)
    return {
      type: GO_NEXT,
      payload: current
    };
  else
    return {
      type: GO_PREVIOUS,
      payload: current
    };
}