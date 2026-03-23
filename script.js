// ===== CONSTANTS =====
const SCENES = {
    CAKE: 'scene-cake',
    GALLERY: 'scene-gallery',
    MESSAGE: 'scene-message'
};

// Custom notes for each photo (edit these to customize)
const PHOTO_NOTES = [
    "Note for photo 1 - A special moment captured! Note for photo 1 - A special moment captured!  Note for photo 1 - A special moment captured!  Note for photo 1 - A special moment captured! ",
    "Note for photo 2",
    "Chết mê chết mệt vì nhan sắc này!",
    "Note for photo 4",
    "Note for photo 5",
    "Note for photo 6",
    "Note for photo 7",
    "Note for photo 8",
    "Note for photo 9",
    "Note for photo 10",
    "Note for photo 11",
    "Note for photo 12",
    "Note for photo 13",
    "Note for photo 14",
    "Note for photo 15",
    "Note for photo 16",
    "Note for photo 17",
    "Note for photo 18",
    "Note for photo 19",
    "Note for photo 20",
    "Note for photo 21",
    "Note for photo 22",
    "Note for photo 23",
    "Note for photo 24",
    "Note for photo 25",
    "Note for photo 26"
];

// ===== STATE =====
let currentScene = SCENES.CAKE;
let isBurning = true;
let flameOffset = 0;
let candle_positions = [];
let galleryItems = [];
let mouseX = 0;
let scrollX = 0;
let galleryAnimationId = null;

// ===== SCENE 1: CAKE ===== //
function initCake() {
    const canvas = document.getElementById('cake-canvas');
    const ctx = canvas.getContext('2d');
    
    drawCake(ctx, canvas.width, canvas.height);
    animateFlame(ctx, canvas);
    
    document.getElementById('blow-btn').addEventListener('click', blowCandle);
}

function drawCake(ctx, w, h) {
    // Layer 1
    ctx.fillStyle = '#ff8fab';
    drawOval(ctx, 120, 280, 480, 380);
    ctx.fillStyle = '#ff99ac';
    drawOval(ctx, 130, 270, 470, 350);
    
    // Layer 2
    ctx.fillStyle = '#ffc2d1';
    drawOval(ctx, 170, 220, 430, 300);
    ctx.fillStyle = '#ffd6e0';
    drawOval(ctx, 180, 210, 420, 270);
    
    // Layer 3
    ctx.fillStyle = '#ffe5ec';
    drawOval(ctx, 220, 170, 380, 230);
    ctx.fillStyle = '#fff0f5';
    drawOval(ctx, 230, 160, 370, 210);
    
    // Kem mềm
    ctx.fillStyle = 'white';
    for (let x = 240; x < 360; x += 20) {
        drawOval(ctx, x, 210, x + 15, 240);
    }
    
    // Topping
    ctx.fillStyle = '#ff4d6d';
    drawOval(ctx, 290, 130, 310, 150);
    
    // Draw candles
    drawCandles(ctx);
}

function drawOval(ctx, x1, y1, x2, y2) {
    const radiusX = (x2 - x1) / 2;
    const radiusY = (y2 - y1) / 2;
    const centerX = x1 + radiusX;
    const centerY = y1 + radiusY;
    
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.fill();
}

function drawCandles(ctx) {
    candle_positions = [];
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    
    for (let x = 250; x < 360; x += 30) {
        // Candle stick
        ctx.fillRect(x - 4, 120, 8, 30);
        // Wick
        ctx.beginPath();
        ctx.moveTo(x, 110);
        ctx.lineTo(x, 120);
        ctx.stroke();
        
        candle_positions.push(x);
    }
}

function animateFlame(ctx, canvas) {
    if (!isBurning) return;
    
    // Clear only the flame area
    ctx.clearRect(0, 80, canvas.width, 60);
    
    // Redraw cake (without candles)
    drawCake(ctx, canvas.width, canvas.height);
    
    flameOffset = (flameOffset + 1) % 6;
    const offset = [-2, -1, 0, 1, 2, 0][flameOffset];
    
    ctx.fillStyle = 'orange';
    for (let x of candle_positions) {
        drawOval(ctx, x - 6 + offset, 95, x + 6 + offset, 130);
    }
    
    ctx.fillStyle = 'yellow';
    for (let x of candle_positions) {
        drawOval(ctx, x - 3 + offset, 105, x + 3 + offset, 130);
    }
    
    setTimeout(() => animateFlame(ctx, canvas), 80);
}

function blowCandle() {
    isBurning = false;
    const canvas = document.getElementById('cake-canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 80, canvas.width, 60);
    
    // Draw smoke
    ctx.fillStyle = 'gray';
    for (let x of candle_positions) {
        for (let i = 0; i < 6; i++) {
            drawOval(ctx, x - 4, 95 - i * 10, x + 4, 105 - i * 10);
        }
    }
    
    // Show message
    const msgEl = document.createElement('div');
    msgEl.style.cssText = 'position: absolute; font-size: 26px; color: white; text-align: center;';
    msgEl.textContent = '🎉 Make a wish 🎉';
    document.getElementById('scene-cake').appendChild(msgEl);
    
    setTimeout(() => switchScene(SCENES.GALLERY), 2000);
}

// ===== SCENE 2: GALLERY =====
function initGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    galleryItems = [];
    
    // Load images from global IMAGE_FILES
    IMAGE_FILES.forEach((file, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-item-wrapper';

        const item = document.createElement('div');
        item.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = `/images/${file}`;
        img.onerror = () => {
            console.warn(`Failed to load ${file}`);
        };

        item.appendChild(img);

        const noteEl = document.createElement('div');
        noteEl.className = 'gallery-note';
        noteEl.textContent = PHOTO_NOTES[index] || `Photo ${index + 1}`;

        wrapper.appendChild(item);
        wrapper.appendChild(noteEl);
        gallery.appendChild(wrapper);

        galleryItems.push({
            element: item,
            img: img,
            noteEl: noteEl,
            currentScale: 1.0,
            targetScale: 1.0
        });
    });
    
    // Setup scroll and mouse tracking
    const container = document.querySelector('.gallery-container');
    container.addEventListener('scroll', updateGalleryScroll);
    container.addEventListener('mousemove', updateMousePosition);
    
    // Mouse wheel scrolling - transform vertical to horizontal smoothly
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 6;
    }, { passive: false });
    
    // Start animation loop
    if (galleryAnimationId) cancelAnimationFrame(galleryAnimationId);
    animateGallery();
}

function updateMousePosition(e) {
    mouseX = e.clientX;
}

function updateGalleryScroll(e) {
    scrollX = e.target.scrollLeft;
}

function animateGallery() {
    const container = document.querySelector('.gallery-container');
    
    galleryItems.forEach((item, index) => {
        const rect = item.element.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        
        // Calculate distance from mouse to image center
        const dist = Math.abs(mouseX - itemCenterX);
        
        // Determine zoom level based on mouse hover
        if (dist < 120) {
            item.targetScale = 1.8;
            item.element.classList.add('active');
            item.element.classList.remove('near');
        } else if (dist < 240) {
            item.targetScale = 1.4;
            item.element.classList.add('near');
            item.element.classList.remove('active');
        } else {
            item.targetScale = 1.0;
            item.element.classList.remove('active', 'near');
        }
        
        // Smooth scale transition
        if (Math.abs(item.currentScale - item.targetScale) > 0.01) {
            item.currentScale += (item.targetScale - item.currentScale) * 0.2;
            item.element.style.transform = `scale(${item.currentScale})`;
        }
        
        // Update note position based on current scale
        item.noteEl.style.top = (item.element.offsetHeight * item.currentScale - 120) + 'px';
        item.noteEl.style.width = (item.element.offsetWidth * item.currentScale) + 'px';        
        // Show note only for active item
        item.noteEl.style.opacity = item.targetScale === 1.8 ? '1' : '0';
    });
    
    galleryAnimationId = requestAnimationFrame(animateGallery);
}

// ===== SCENE 3: MESSAGE =====
function initMessage() {
    // Message already in HTML
}

// ===== SCENE MANAGEMENT =====
function switchScene(sceneName) {
    // Hide current scene
    document.getElementById(currentScene).classList.remove('active');
    
    // Show new scene
    document.getElementById(sceneName).classList.add('active');
    currentScene = sceneName;
    
    // Initialize scene
    if (sceneName === SCENES.CAKE) {
        isBurning = true;
        flameOffset = 0;
        initCake();
    } else if (sceneName === SCENES.GALLERY) {
        initGallery();
    } else if (sceneName === SCENES.MESSAGE) {
        if (galleryAnimationId) cancelAnimationFrame(galleryAnimationId);
        initMessage();
        setTimeout(() => switchScene(SCENES.CAKE), 5000);
    }
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log('Escaped from ' + currentScene);
    }
});

// ===== INIT =====
window.addEventListener('load', () => {
    initCake();
});
