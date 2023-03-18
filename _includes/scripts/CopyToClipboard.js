

//////////////////////////////
//
// CopyToClipboard --
//

function CopyToClipboard(data) {
  const element = document.createElement('textarea');
  element.value = data;
  element.setAttribute('readonly', '');
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
};
