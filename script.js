// 1. The "Starch-Facts" Ticker
const facts = [
    "Fact 042: Potatoes were the first vegetable grown in space (1995).",
    "Fact 808: There are over 4,000 varieties of native potatoes.",
    "Fact 101: A potato has more chromosomes than a human (48 vs 46).",
    "Fact 007: The Incas used potatoes to treat injuries and predict the weather.",
    "Fact 314: The word 'potato' comes from the Spanish word 'patata'.",
    "Fact 404: French fries were actually introduced to America by Thomas Jefferson."
];

function initMarquee() {
    const marqueeTop = document.getElementById('marquee-top');
    // Ensure the facts repeat enough to look continuous initially
    const repeatedFacts = [...facts, ...facts, ...facts].map(fact => `<span>${fact}</span>`).join('');
    marqueeTop.innerHTML = repeatedFacts;
}

// 2. The "Dirt" Cursor
function initDirtCursor() {
    const bgDirt = document.getElementById('bg-dirt');

    document.addEventListener('mousemove', (e) => {
        // Calculate percentages
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        // Update clip-path to show the true color image underneath
        // A circle around the cursor is cut out from the B&W layer
        bgDirt.style.clipPath = `circle(80px at ${x}% ${y}%)`;
    });
}

// 3. The "Potato" Command (Matrix Rain)
let potatoBuffer = "";
const potatoTrigger = "potato";

// 4. The Konami Code
const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];
let konamiPosition = 0;

document.addEventListener('keydown', (e) => {
    // Hidden Terminal listener (Backtick `)
    if (e.key === '`') {
        const terminal = document.getElementById('secret-terminal');
        const input = document.getElementById('terminal-input');
        terminal.classList.toggle('hidden');
        if (!terminal.classList.contains('hidden')) {
            input.focus();
        }
        return;
    }

    // Potato command logic
    const key = e.key.toLowerCase();
    if (key.length === 1 && key.match(/[a-z]/i)) {
        potatoBuffer += key;
        // Keep buffer size the same as the trigger word to avoid massive strings
        if (potatoBuffer.length > potatoTrigger.length) {
            potatoBuffer = potatoBuffer.substring(1);
        }

        if (potatoBuffer === potatoTrigger) {
            startPotatoMatrix();
            potatoBuffer = ""; // Reset buffer
        }
    }

    // Konami code logic
    if (e.key === konamiCode[konamiPosition]) {
        konamiPosition++;
        if (konamiPosition === konamiCode.length) {
            document.body.classList.toggle('upside-down');
            // Show alert or msg
            setTimeout(() => {
                alert("VIEW FROM THE ROOT.");
            }, 1000);
            konamiPosition = 0;
        }
    } else {
        konamiPosition = 0; // Reset if broken
    }
});

// Secret Terminal Logic
document.getElementById('terminal-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const value = this.value.trim().toLowerCase();
        const body = document.getElementById('terminal-body');

        const line = document.createElement('div');
        line.textContent = `> ${this.value}`;
        body.appendChild(line);

        const response = document.createElement('div');
        if (value === 'home') {
            response.textContent = "> Redirecting to Home Assistant...";
            response.style.color = "var(--crt-green)";
            setTimeout(() => {
                window.location.href = "http://homeassistant.local:8123"; // Adjust as needed
            }, 1000);
        } else {
            response.textContent = "> ACCESS DENIED.";
            response.style.color = "red";
        }

        body.appendChild(response);
        this.value = '';

        // Auto scroll to bottom
        body.scrollTop = body.scrollHeight;
    }
});

// 5. The "Harvest" Click
document.getElementById('hero').addEventListener('click', (e) => {
    // We bind it to hero, or bg-container.
    // If we click on text, we might not want it, but for simplicity we bind to hero container
    const popup = document.getElementById('harvest-popup');
    popup.classList.remove('hidden');
});

document.getElementById('close-harvest-popup').addEventListener('click', () => {
    document.getElementById('harvest-popup').classList.add('hidden');
});

// Matrix Rain Implementation
function startPotatoMatrix() {
    const canvas = document.getElementById('potato-matrix');
    canvas.classList.add('active');
    const ctx = canvas.getContext('2d');

    // Resize canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = ['🥔', 'S', 'T', 'A', 'R', 'C', 'H'];
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    // Array holding the 'y' coordinate for each column
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1; // start at top
    }

    function draw() {
        // Black background with slight transparency for trail effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Green text color
        ctx.fillStyle = "#00FF41";
        ctx.font = fontSize + "px 'JetBrains Mono', monospace";

        for (let i = 0; i < drops.length; i++) {
            // Random character string
            const text = characters[Math.floor(Math.random() * characters.length)];

            // Draw character
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Send drop back to top randomly to create staggered fall
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    // Run animation
    const matrixInterval = setInterval(draw, 33);

    // Stop after 5 seconds to not be too annoying (shortened from 15s)
    setTimeout(() => {
        clearInterval(matrixInterval);
        canvas.classList.remove('active');
        setTimeout(() => {
            // Clear canvas after fade out
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 1000);
    }, 5000);
}

// Ensure the true color background clip path is inverted compared to what we want
// Wait, the "dirt" cursor reveals true color. So true color is BELOW dirt.
// The DIRT layer has absolute positioning over the TRUE COLOR layer.
// We set a clip-path on the DIRT layer to form a "hole", showing the TRUE COLOR beneath.
// clip-path: polygon() can make a hole, but circle() cannot easily make a hole without an SVG mask
// Better approach: 
// The COLOR image is on top (z-index 2), wrapped in a clip-path circle(). 
// The DIRT image is below it (z-index 1).
// This is opposite to what is in CSS. Let's fix that logic here.

// Fix up layer order for the clip-path trick
window.addEventListener('DOMContentLoaded', () => {
    initMarquee();

    const bgColor = document.getElementById('bg-color');
    const bgDirt = document.getElementById('bg-dirt');

    // We want the Dirt (B&W) layer visible everywhere EXCEPT under the cursor
    // So Dirt is on top, but we cut a hole in it using clip-path
    bgDirt.style.zIndex = "2";
    bgColor.style.zIndex = "1";

    // Start with Dirt covering everything
    bgDirt.style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 0 100%)`;

    document.addEventListener('mousemove', (e) => {
        // Use pixels for clip-path circle center
        const x = e.clientX;
        const y = e.clientY;

        // The clip-path needs to be on the color layer. 
        // Wait, if color is on top, we show color ONLY in the circle.
        // Let's put Color on top (z-index 2), and Dirt on bottom (z-index 1).
        // Then we clip the Color layer to only show in the circle.
        bgColor.style.zIndex = "2";
        bgDirt.style.zIndex = "1";

        // Show color layer ONLY in a 150px circle around the mouse
        bgColor.style.clipPath = `circle(150px at ${x}px ${y}px)`;
    });
});
