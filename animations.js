// 导航栏动画
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});

// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
        mainContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }, 100);
});

// 标题动画
const headings = document.querySelectorAll('h1');

headings.forEach(heading => {
    heading.addEventListener('mouseenter', () => {
        heading.style.color = '#ff6b6b';
        heading.style.transition = 'color 0.3s ease';
    });

    heading.addEventListener('mouseleave', () => {
        heading.style.color = '#333';
    });
});

// 花瓣飘落动画
const canvas = document.getElementById('petalCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Petal {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 1 + 0.5;
        this.angle = Math.random() * 360;
        this.spin = Math.random() < 0.5 ? 1 : -1;
    }

    update() {
        this.y += this.speed;
        this.x += Math.sin(this.angle * Math.PI/180) * 0.5;
        this.angle += this.spin * 0.5;

        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI/180);
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffb6c1';
        ctx.fill();
        ctx.restore();
    }
}

const petals = [];
for (let i = 0; i < 100; i++) {
    petals.push(new Petal());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(petal => {
        petal.update();
        petal.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();
