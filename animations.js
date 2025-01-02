// 花朵飘落效果
class Flower {
  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = -50;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
    this.angle = Math.random() * 360;
    this.spin = Math.random() * 2 - 1;
  }

  update() {
    this.y += this.speed;
    this.angle += this.spin;
    if (this.y > window.innerHeight) {
      this.y = -50;
      this.x = Math.random() * window.innerWidth;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.angle * Math.PI) / 180);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-10, -10, -15, 0, 0, 15);
    ctx.bezierCurveTo(15, 0, 10, -10, 0, 0);
    ctx.closePath();
    ctx.fillStyle = '#FF69B4';
    ctx.fill();
    ctx.restore();
  }
}

// 初始化动画
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const flowers = [];

for (let i = 0; i < 50; i++) {
  flowers.push(new Flower());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  flowers.forEach(flower => {
    flower.update();
    flower.draw(ctx);
  });
  requestAnimationFrame(animate);
}

animate();

// 窗口大小调整处理
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
