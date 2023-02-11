document.addEventListener('DOMContentLoaded', () => {

  // 使用 DOM to Image 截圖
  const triggerDomToImage = async ({ targetId }) => {

    // 建立檔案名稱
    const filename = 'LetsWrite_Demo_' + new Date().getTime();

    // DOM to Image
    const el = document.getElementById(targetId);
    const dataUriTemp = await domtoimage.toPng(el);
    const dataUri = await domtoimage.toPng(el);

    document.getElementById('img').src = dataUri;

    // 執行下載
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = dataUri;
    link.click();

  }

  // 點擊按鈕觸發截圖
  function addCaptureEventListener(id) {
    const btn = document.getElementById(`capture${id}`);
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      await triggerDomToImage({ targetId: `section${id}` });
    });
  }

  addCaptureEventListener(1); // #section1
  addCaptureEventListener(2); // #section2

})