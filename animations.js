// 花朵飘落效果
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
const flowerImg = new Image();
flowerImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD/SURBVEiJ7ZQxTsNAEEWfE0gU0CQKpCgQJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ0dJQ'