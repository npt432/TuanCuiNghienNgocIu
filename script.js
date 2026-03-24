// ===== CONSTANTS =====
const SCENES = {
    CAKE: 'scene-cake',
    GALLERY: 'scene-gallery',
    MESSAGE: 'scene-message'
};

// Custom notes for each photo (edit these to customize)
const PHOTO_NOTES = [
    "Đây là ảnh đầu tiên của em mà anh lưu về máy :v\n Anh đã nằm ngắm tấm hình này rất lâu",
    "Meme đầu tiên của honey mà anh lưu 🤣🤣",
    "Chiếc ảnh làm anh đứng ngồi không yên\nThật may mắn vì em thích buổi gặp đầu tiên của mình :v",
    "Cái miệng dễ huông chưa kìa =)))\n Em đổi ảnh này làm avatar IG xong dặn anh phải dùng IG nhiều lên :v chắc là để ngắm em nhiều hơn =))) ",
    "Sao xinh như thế này mà em lại giữ làm của riêng lâu z =)))\nCó khi gửi ảnh này xong anh tỏ tình luôn ấy chứ🤣🤣",
    "Honey đi làm hôm sinh nhật anh :v còn cẩn thận chụp ảnh lại để khoe với anh :v\n Trông có dễ thương hông cơ chứ =)))",
    "Em chuẩn bị qua nhà bạn chơi =))) Chỉ chỉ trông cưng ha\n Anh bảo anh nhớ em thì em bảo cũng được :v",
    "Cái này trông ghét quá 🤣🤣 No comment\nNhưng vì em hay dùng meme này lúc tìm hiểu nên anh cho vào =)))",
    "Anh đội mũ bảo hiểm cho em nha =)))\n Đợt này em vẫn hơi ngại nhưng cũng ngoan hơn nhiều rồi :v",
    "Lần đầu vụng trộm bị bà Ning bắt =))) nhưng trông em có vẻ vui lắm 🤣🤣",
    "Tối đấy em khoe anh nhiều ảnh tốt nghiệp lắm :v\nNhìn muốn hun ghê nhưng anh không dám bảo 🤣🤣",
    "Thuỳ mị nết na, tiểu thư đài các, dịu dàng thục nữ, ngoan hiền dễ thương, ngọt ngào đáng yêu, xinh đẹp quyến rũ, tinh tế duyên dáng, thanh lịch tao nhã 🤣🤣 ",
    "Ảnh gia đình lớn của em ♥️ những người quan trọng nhất của em đều ở đây hết rồi :v\n Bao giờ mới tới lượt anh ha :v",
    "Bố của em ♥️ \nCon chào chú ạ, con nhậu với chú sau nha :v",
    "Mẹ Sâm của em ♥️\n Con chào cô ạ, con mong gặp cô lắm :v",
    "Đỉnh nóc kịch trần bay phần phật phần phật =)))",
    "Anh nghĩ là em muốn đăng story hoặc locket nên anh viết cap cái ảnh trước nhẹ nhàng để em đăng :v chứ anh muốn nói là nhìn em muốn hun quá =))) tại sao anh lại không có ở đóooo",
    "Anh muốn thơm vào máaaaa",
    "Cầm lấy 5 nghìn và yêu tôi",
    "Bạn thân nhất của em :v cảm ơn Ngan vì đã luôn ở bên em suốt thời gian vừa qua, nhưng giờ đến lượt anh rồi :v\n Em báe của Tuấn Cùi",
    "Nửa trái tim còn lại chắc trên má anh ha :v",
    "Anh mà đứng bên trái thì đẹp ha =)))",
    "Tiếc là không được đồng hành cùng em trong ngày đặc biệt này, nhưng anh muốn sẽ được đồng hành cùng em trong những ngày bình thường tiếp theo ♥️",
    "Lại là những người anh muốn được yêu thương :3",
    "Đây là ảnh IG của em =))) anh thích quá nên tự lưu về :v",
    "Trông em gày quáaaaa",
    "Anh thích ảnh này lắm =))) anh nghĩ là anh có thể ôm em 3 ngày 3 đêm nếu em làm lại như thế =)))",
    "Cái này thì 3 ngày 2 đêm rưỡi =)))",
    "Ỏoo, anh sợ con gấu kia nó rơi vào người em quá =)))",
    "Cái này thì anh không biết nói gì nữa =))) Xinh!",
    "Ui cái này thì đúng mầm non rồi =))) trông cưng xỉu ha\n Trời ơi nhỏ xíu àaaaa",
    "3 ngày 3 đêm rưỡi luôn =)))",
    "Ảnh này không đeo kính trông khác ha =))) Hun!",
    "Ù cái này xuất xắc nha =))) chụp đẹp người đẹp màu đẹp",
    "Cái này thì trông xinh thôi 🤣🤣",
    "Ù tóc xoăn xinh ha =))) mượt thế nhờ, cho ngửi với bạn ơi =)))",
    "Mắt nhìn nghịch ngợm ha =))) Em cười xinh thật ấy =)))",
    "Vẫn là ảnh đẹp cười xinh =)))",
    "Ăn ảnh phết ấy chứ 🤣🤣",
    "Sao em lại ngồi gần mấy thằng kia hơn anh ?!!!",
    "Lại nghệ nha =)))",
    "Đây rồiiiiiiii, ngày đặc biệt của chúng mình :v\n Trông phụng phịu ha =))) nhưng mà 'Hôm nay em xinh lắm' 🤣🤣",
    "Lần đầu chụp ảnh cho honey, thật vui là em cười nhiều như thế này :v",
    "Xinh théeee hả giời =))) I love your smileeeeeeeee",
    "Anh mới phát hiện ra =))) những ảnh nào có anh ở đấy trông em đều hạnh phúc hơn hẳn =)))",
    "Nghiện anh rồi đúng không =)))",
    "Finallyyyyyy, em đã chịu chụp ảnh với anh rồi =)))",
    "Bức ảnh đánh dấu cột mốc mới của chúng mình, cảm ơn em vì đã luôn đồng hành cùng anh trong suốt thời gian qua, giúp anh luôn muốn trở thành một người tốt hơn và cười nhiều hơn mỗi ngày ♥️ I love you so muchhhhhh",
    "Bức ảnh hiếm hoi mà anh tự chụp :v lúc đấy anh không nói nhưng anh vui lắm aaaaaaaaaa",
    "Trong rạp phim :v trước thời khắc em làm anh muốn xem phim liên tục 7 ngày 7 đêm =)))",
    "Yayyy =)))) thế là chúng ta đã là một đôiiiii :v anh thích ảnh với ví lắm =))) cảm ơn em",
    "Hôm em qua nhà bạn chơi xong gửi ảnh này cho anh =))) trông mặt búng ra sữa ha =)))",
    "Còn đây búng ra thái độ 🤣🤣 cưng ha",
    "Chài ai cô gái ấy 🤣🤣 trông muốn hun ghê",
    "Em phải phúng phính như nài nàiiiiii =))) em cứ béo lên đi anh hứa sẽ không chê em đâu",
    "Đi ăn cháo trai ha :v khoe anh cái mũ cute như anh ha :v đây cũng là hôm đầu mình ôm nhau lâu thật lâu đấy 🤣🤣",
    "Đi dạo công viên Hoà Bình nhưng thất bại ha 🤣🤣 \n Em nói em thích ảnh này lắm, còn anh thích em ♥️",
    "Công viên hồ điều hoà Thanh Xuân đồ ha =))) ngồi được tí thì bị đuổi",
    "Cô gái của anh mặc đồ của anh =))) trông cưng vãi",
    "Phú bà xinh đẹp và học bá đẹp zai của cô ta 🤣🤣",
    "Học bá đẹp zai hun phú bà xinh đẹp để được ăn bánh =)))",
    "Phú bà xinh đẹp giỏi giang hớn hở với chiếc bánh đầy tâm tư tình cảm và học bá đẹp zai của cổ",
    "Lớn thế rồi mà giờ mới biết bánh ngon là do chữ 🤣🤣",
    "Ỏooo em vừa hỏi anh nên lấy ảnh nào làm thumbnail, anh nghĩ là anh nên lấy em :3",
    "Chài ai xinh quá chàiiiiii",
    "Anh vẫn không thể hiểu nổi tại sao em thiếu ngủ mà vẫn xinh như thế này =)))",
    "Em có vẻ thích ảnh này vì trông girl phố đồ ha =)))",
    "Riêng anh thì anh thích ảnh này hơn 🤣🤣",
    "Sắp được đi concert với học bá đẹp zai rồi ha =))) chắc hẳn là cổ thích lắm",
    "Khép miệng lại để tôi hôn một miếng =)))",
    "Cái này trông cũng bướng phết ha =)))",
    "Và cuối cùng là gái yêu của anh và 2 gái yêu của cổ =)))"
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

// ===== SCENE 1: CAKE (SVG + CSS ANIMATIONS) ===== //
function initCake() {
    const sceneElement = document.getElementById(SCENES.CAKE);
    
    // Add the burning class to trigger fire animations
    sceneElement.classList.add('burning');
    
    // Setup blow button
    const blowBtn = document.getElementById('blow-btn');
    blowBtn.addEventListener('click', blowCandle);
    
    // Show button when fire is about to start (5.5s)
    setTimeout(() => {
        blowBtn.style.visibility = 'visible';
    }, 5500);
}

function blowCandle() {
    // Get and disable the blow button
    const blowBtn = document.getElementById('blow-btn');
    blowBtn.disabled = true;
    blowBtn.style.opacity = '0.6';
    blowBtn.style.cursor = 'not-allowed';
    
    // Stop the candle burning animation
    const sceneElement = document.getElementById(SCENES.CAKE);
    sceneElement.classList.remove('burning');
    
    // Hide fire
    const fires = document.querySelectorAll('.fuego');
    fires.forEach(fire => {
        fire.style.display = 'none';
    });
    
    // Show message
    const msgEl = document.createElement('div');
    msgEl.style.cssText = `
        position: absolute;
        font-size: 48px;
        font-family: '1KHighSpirited';
        color: #a21d33;
        text-align: center;
        animation: fadeIn 1.5s ease-out;
        z-index: 20;
        margin-top: -300px;
    `;
    msgEl.textContent = '🎉 Happy birthday honeyyyyyy! 🎉';
    sceneElement.appendChild(msgEl);
    
    // Transition to gallery after 2 seconds
    setTimeout(() => switchScene(SCENES.GALLERY), 3000);
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
        img.src = `images/${file}`;
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
        container.scrollLeft += e.deltaY * 4;
    }, { passive: false });
    
    // Button to go to scene-message
    const toCardBtn = document.getElementById('to-card-btn');
    if (toCardBtn) {
        toCardBtn.style.display = 'inline-block';
        toCardBtn.addEventListener('click', () => {
            switchScene(SCENES.MESSAGE);
        });
    }

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

function cleanupGallery() {
    // Stop animation loop
    if (galleryAnimationId) {
        cancelAnimationFrame(galleryAnimationId);
        galleryAnimationId = null;
    }

    // Remove event listeners
    const container = document.querySelector('.gallery-container');
    container.removeEventListener('scroll', updateGalleryScroll);
    container.removeEventListener('mousemove', updateMousePosition);
    container.removeEventListener('wheel', handleWheelScroll);
}

// ===== SCENE 3: MESSAGE =====
function initMessage() {
    const galleryScene = document.getElementById(SCENES.GALLERY);
    galleryScene.id = SCENES.MESSAGE;
    galleryScene.innerHTML = `
        <div class="birthday-card">
            <h1>Happy Birthday!</h1>
            <p>Wishing you all the happiness and love in the world on your special day!</p>
            <div class="card-footer">With love, from someone who cares deeply about you ❤️</div>
        </div>
        
        <div class="question-box">
            <div class="question-text">Em có yêu anh honggggg ❤️</div>
            <div class="button-group">
                <button class="answer-btn yes-btn">Em cóooo 😍</button>
                <button class="answer-btn no-btn">Em bình thườngggg 😢</button>
            </div>
            <div class="answer-display" style="display: none; margin-top: 20px; font-size: 24px; font-family: Arial, sans-serif; text-align: center; color: #a21d33;">
                Em biết rồi khe khe 😘
            </div>
        </div>
    `;
    
    // Setup button listeners
    const yesBtn = galleryScene.querySelector('.yes-btn');
    const noBtn = galleryScene.querySelector('.no-btn');
    const answerDisplay = galleryScene.querySelector('.answer-display');
    let clicked = false;
    
    yesBtn.addEventListener('click', () => {
        if (!clicked) {
            // No swap - just show answer and disable
            answerDisplay.style.display = 'block';
            yesBtn.disabled = true;
            noBtn.disabled = true;
            
            // Change color of YES button to indicate selection
            yesBtn.style.background = '#a21d33';
            yesBtn.style.color = 'white';
            
            clicked = true;
        }
    });
    
    noBtn.addEventListener('click', () => {
        if (!clicked) {
            // Swap button content ONLY for "Không"
            const tempText = yesBtn.textContent;
            yesBtn.textContent = noBtn.textContent;
            noBtn.textContent = tempText;
            
            // Show answer and disable buttons
            answerDisplay.style.display = 'block';
            answerDisplay.textContent = 'Tao biết mà! Tao cũng yêu em 🥰';
            yesBtn.disabled = true;
            noBtn.disabled = true;
            
            // Change color of NO button to indicate selection
            noBtn.style.background = '#a21d33';
            noBtn.style.color = 'white';
            
            clicked = true;
        }
    });
}

// ===== SCENE MANAGEMENT =====
function switchScene(sceneName) {
    console.log(`Switching to scene: ${sceneName}`); // Debug log

    // Replace scene 2 with scene 3
    if (sceneName === SCENES.MESSAGE) {
        console.log('Initializing scene 3 (MESSAGE)...'); // Debug log
        const galleryScene = document.getElementById(SCENES.GALLERY);
        galleryScene.id = SCENES.MESSAGE;
        galleryScene.innerHTML = `
            <div class="birthday-card">
                <h1>Happy Birthday!</h1>
                <p>   Hiii báe iu của anhhh ♥️\n\nChúc mừng sinh nhật em nhá 🤣 Cảm ơn em vì đã đồng hành cùng anh suốt thời gian qua, tuy là chưa dài nhưng em đã cho anh biết thế nào là được sống và được yêu ♥️\nChúc em chân cứng đá mềm, luôn thật hạnh phúc và bình an.\nHi vọng đến mãi về sau, mỗi khoảnh khắc nhìn thấy nhau, anh và em vẫn sẽ đều bất giác cười.\nI love you more than any word can say ♥️ </p>
                <div class="card-footer">With love, from someone who just wants to cook for you every day ❤️</div>
            </div>
            
            <div class="question-box">
                <div class="question-text">Em có yêu anh honggggg ❤️</div>
                <div class="button-group">
                    <button class="answer-btn yes-btn">Em cóooo 😍</button>
                    <button class="answer-btn no-btn">Em bình thườngggg 🤣</button>
                </div>
                <div class="answer-display" style="display: none; margin-top: 20px; font-size: 24px; font-family: Arial, sans-serif; text-align: center; color: #a21d33;">
                    Đúng nhẽ thôi =))) Anh cũng yêu báeeeeee 
                </div>
            </div>
        `;
        
        // Setup button listeners
        const yesBtn = galleryScene.querySelector('.yes-btn');
        const noBtn = galleryScene.querySelector('.no-btn');
        const answerDisplay = galleryScene.querySelector('.answer-display');
        let clicked = false;
        
        yesBtn.addEventListener('click', () => {
            if (!clicked) {
                // No swap - just show answer and disable
                answerDisplay.style.display = 'block';
                yesBtn.disabled = true;
                noBtn.disabled = true;
                
                // Change color of YES button to indicate selection
                yesBtn.style.background = '#a21d33';
                yesBtn.style.color = 'white';
                
                clicked = true;
            }
        });
        
        noBtn.addEventListener('click', () => {
            if (!clicked) {
                // Swap button content ONLY for "Không"
                const tempText = yesBtn.textContent;
                yesBtn.textContent = noBtn.textContent;
                noBtn.textContent = tempText;
                
                // Show answer and disable buttons
                answerDisplay.style.display = 'block';
                answerDisplay.textContent = 'Phải yêu thôi =))) Anh cũng yêu báeeeeee ';
                yesBtn.disabled = true;
                noBtn.disabled = true;
                
                // Change color of NO button to indicate selection
                noBtn.style.background = '#a21d33';
                noBtn.style.color = 'white';
                
                clicked = true;
            }
        });
        
        currentScene = SCENES.MESSAGE;
        return;
    }

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
