
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



function getBoundingYtop(elem1, elem2) {
  let elem1Rect = elem1.getBoundingClientRect();
  let elem1Top = elem1Rect.top + window.scrollY;
  let elem2Rect = elem2.getBoundingClientRect();
  let elem2Bottom = elem2Rect.bottom + window.scrollY;
  let style = window.getComputedStyle(elem2);
  let matrix = new WebKitCSSMatrix(style.transform);
  deltaY = elem1Top -elem2Bottom + matrix.m42
  return deltaY
};
function getBoundingYbottom(elem1, elem2) {
  let elem1Rect = elem1.getBoundingClientRect();
  let elem1Bottom = elem1Rect.bottom + window.scrollY;
  let elem2Rect = elem2.getBoundingClientRect();
  let elem2Top = elem2Rect.top + window.scrollY;
  let style = window.getComputedStyle(elem2);
  let matrix = new WebKitCSSMatrix(style.transform);
  deltaY = elem1Bottom -elem2Top + matrix.m42
  return deltaY
};
function getBoundingYcenter(elem1, elem2) {
  let elem1Rect = elem1.getBoundingClientRect();
  let elem1Bottom = elem1Rect.bottom + window.scrollY;
  let  elem1Height= elem1Rect.height
  let elem2Rect = elem2.getBoundingClientRect();
  let elem2Bottom = elem2Rect.bottom + window.scrollY;
  let elem2Height = elem2Rect.height
  let style = window.getComputedStyle(elem2);
  let matrix = new WebKitCSSMatrix(style.transform);
  deltaY = elem1Bottom - (elem1Height/2) - elem2Bottom  + matrix.m42
  return deltaY
};





function getBoundingXcenter(elem1, elem2) {
  let elem1Rect = elem1.getBoundingClientRect();
  let elem1Left = elem1Rect.left + window.scrollX;
  let elem1Width = elem1Rect.width
  let elem2Rect = elem2.getBoundingClientRect();
  let elem2Left = elem2Rect.left + window.scrollX;
  let elem2Width = elem2Rect.width
  //let style = window.getComputedStyle(elem2);
  let matrix = new WebKitCSSMatrix(window.getComputedStyle(elem2).transform);
  deltaX = (elem1Left +(elem1Width/2)) -(elem2Left + (elem2Width/2) - matrix.m41 )
  return deltaX
};


function getBoundingXleft(elem1, elem2) {
  let elem1Rect = elem1.getBoundingClientRect();
  let elem1left = elem1Rect.left + window.scrollX;
  let elem2Rect = elem2.getBoundingClientRect();
  let elem2left = elem2Rect.left + window.scrollX;
  let style = window.getComputedStyle(elem2);
  let matrix = new WebKitCSSMatrix(style.transform);
  deltaX = elem1left -elem2left + matrix.m41
  console.log(deltaX)
  return deltaX
};


