
const currentGlobe = globe;

const hdUrl =
  'https://cdn.jsdelivr.net/gh/turban/webgl-earth@master/images/earthmap4k.jpg';

const hdImage = new Image();
hdImage.crossOrigin = 'anonymous';

hdImage.onload = () => {
  if (globe !== currentGlobe) return;

  try {
    const renderer = currentGlobe.renderer();

    if (
      hdImage.naturalWidth >= 4096 &&
      renderer.capabilities.maxTextureSize >= hdImage.naturalWidth
    ) {
      currentGlobe.globeImageUrl(hdUrl);
    }
  } catch (e) {
    console.warn('HD texture unavailable', e);
  }
};

hdImage.onerror = () => {
  console.warn('HD texture unavailable; keeping original');
};

hdImage.src = hdUrl;
