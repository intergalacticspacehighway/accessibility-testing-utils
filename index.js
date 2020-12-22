const IS_DEV = process.env.NODE_ENV === 'development';

export const blurElementStyle = IS_DEV
  ? {
      '-webkit-filter': 'blur(10px)',
      '-moz-filter': 'blur(10px)',
      '-o-filter': 'blur(10px)',
      '-ms-filter': 'blur(10px)',
      'filter': 'blur(10px)',
      'pointerEvents': 'none',
      'cursor': 'default',
    }
  : {};

  export const testImageAltAttribute = () => {
    if (!IS_DEV) return
    
    window.addEventListener("load", () => {
      const images = document.querySelectorAll("img");
      images.forEach(node => {
        node.src = "/invalid-image-404"
      })
    })
  }