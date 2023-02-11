document.addEventListener('DOMContentLoaded', () => {

  // 使用 DOM to Image 截圖
  async function triggerDomToImage({ targetId }) {

    // 建立檔案名稱
    const filename = 'LetsWrite_Demo_' + new Date().getTime();

    // DOM to Image
    const el = document.getElementById(targetId);
    const dataUri = await domtoimage.toPng(el);

    // 執行下載
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = dataUri;
    link.click();

  }

  // #section1
  const btnSection1 = document.getElementById('capture1');
  btnSection1.addEventListener('click', e => {
    e.preventDefault();
    triggerDomToImage({ targetId: 'section1' });
  });

  // #section2
  const btnSection2 = document.getElementById('capture2');
  btnSection2.addEventListener('click', e => {
    e.preventDefault();
    triggerDomToImage({ targetId: 'section2' });
  });

})