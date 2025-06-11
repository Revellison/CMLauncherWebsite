class FloatingShape {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.type = Math.floor(Math.random() * 3); // 0: круг, 1: квадрат, 2: треугольник
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Отражение от краев
        if (this.x < -this.size) this.x = this.canvas.width + this.size;
        if (this.x > this.canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = this.canvas.height + this.size;
        if (this.y > this.canvas.height + this.size) this.y = -this.size;
    }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.rotation * Math.PI / 180);
        this.ctx.beginPath();

        switch(this.type) {
            case 0: // Круг
                this.ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                break;
            case 1: // Квадрат
                this.ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
                break;
            case 2: // Треугольник
                this.ctx.moveTo(0, -this.size / 2);
                this.ctx.lineTo(this.size / 2, this.size / 2);
                this.ctx.lineTo(-this.size / 2, this.size / 2);
                this.ctx.closePath();
                break;
        }

        this.ctx.fillStyle = `rgba(255, 107, 0, ${this.opacity})`;
        this.ctx.fill();
        this.ctx.restore();
    }
}

class BackgroundAnimation {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.shapes = [];
        this.init();
    }

    getOptimalParticleCount() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const area = width * height;
        
        // Базовое количество частиц на 1000000 пикселей площади
        const baseParticlesPerMillion = 5;
        
        // Рассчитываем оптимальное количество частиц
        let particleCount = Math.floor((area / 1000000) * baseParticlesPerMillion);
        
        // Ограничиваем минимальное и максимальное количество
        particleCount = Math.max(5, Math.min(20, particleCount));
        
        return particleCount;
    }

    init() {
        // Настройка canvas
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';
        document.body.appendChild(this.canvas);

        // Создание фигур
        this.resize();
        this.createShapes();

        // Обработчики событий
        window.addEventListener('resize', () => {
            this.resize();
            this.updateParticleCount();
        });
        this.animate();
    }

    createShapes() {
        this.shapes = [];
        const count = this.getOptimalParticleCount();
        for (let i = 0; i < count; i++) {
            this.shapes.push(new FloatingShape(this.canvas));
        }
    }

    updateParticleCount() {
        const newCount = this.getOptimalParticleCount();
        if (newCount !== this.shapes.length) {
            this.createShapes();
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.shapes.forEach(shape => {
            shape.update();
            shape.draw();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Инициализация анимации при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new BackgroundAnimation();
}); 