
function getBoundingX(elem1, elem2) {
  let elem1Rect = elem1.getBoundingClientRect();
  let elem1Left = elem1Rect.left + window.scrollX;
  let elem2Rect = elem2.getBoundingClientRect();
  let elem2Left = elem2Rect.left + window.scrollX;
  deltaX = elem1Left - elem2Left
  return deltaX
};


function getBoundingY(elem1, elem2) {
  let elem1Rect = elem1.getBoundingClientRect();
  let elem1Top = elem1Rect.top + window.scrollY;
  let elem2Rect = elem2.getBoundingClientRect();
  let elem2Bottom = elem2Rect.bottom + window.scrollY;
  deltaY = elem1Top - elem2Bottom
  return deltaY
};

function getOffsetY(elem1, elem2) {
  let elem1Y = elem1.offsetTop;
  let elem2Y = elem2.offsetTop;
  let OffsetDeltaY = elem1Y - elem2Y;
  return OffsetDeltaY
};

function getOffsetX(elem1, elem2) {
  let elem1X = elem1.offsetLeft;
  let elem2X = elem2.offsetLeft;
  let OffsetDeltaX = elem1X - elem2X;
  return OffsetDeltaX
};




