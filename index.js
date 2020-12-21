const IS_DEV = process.env.NODE_ENV === "development";

export const blurElementStyle = IS_DEV ? {
  '-webkit-filter': 'blur(10px)',
  '-moz-filter': 'blur(10px)',
  '-o-filter': 'blur(10px)',
  '-ms-filter': 'blur(10px)',
  'filter': 'blur(10px)',
  'height': '100%',
  'display': 'flex',
  'flexDirection': 'column',
  'pointerEvents': 'none',
  'cursor': 'default',
}: {};
