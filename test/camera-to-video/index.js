/**
 * @param params.facingMode 'user'|'environment'
 */
async function createStream(params) {
  const { facingMode } = params;

  return navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      transform: 'scaleX(-1)',
      sourceId: 'default',
      facingMode: facingMode,
    },
  });
}

(async () => {
  const dom_video = document.querySelector('#video');
  const dom_btn_reverse = document.querySelector('#btn_reverse');

  let currentFacingMode = 'user';

  dom_video.srcObject = await createStream({ facingMode: currentFacingMode });

  dom_btn_reverse.addEventListener('click', async () => {
    currentFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
    dom_video.srcObject = await createStream({ facingMode: currentFacingMode });
  });
})();
