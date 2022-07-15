const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const image = new Image(0, 0); // 이미지에 선택적 크기 사용
image.onload = drawImageActualSize; // Draw when image has loaded

// CSS 픽셀 단위로 300x227 크기의 이미지를 로드합니다.
image.src = '../img/cake.png';

function drawImageActualSize() {
  // 캔버스 요소에 대해 CSS 픽셀의 이미지의 고유 크기 사용
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // 사용자 지정 크기인 60x45를 무시하고 이미지를 300x227로 그립니다.
  // 생성자에서 주어진.
  ctx.drawImage(this, 0, 0);

  // 사용자 지정 크기를 사용하려면 척도 매개 변수를 지정해야 합니다.
  // 요소의 너비 및 높이 특성 사용 - 하나 그립시다.
  // 코너 맨 위에:
  ctx.drawImage(this, 0, 0, this.width, this.height);
}