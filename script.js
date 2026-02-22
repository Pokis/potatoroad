const facts = [
    "Fact 042: Potatoes were the first vegetable grown in space (1995).",
    "Fact 001: The Romans built over 400,000 kilometers of roads, including 80,000 kilometers of paved highways.",
    "Fact 808: There are over 4,000 varieties of native potatoes.",
    "Fact 017: The term 'milestone' originates from the stone markers Romans placed every mile along their roads.",
    "Fact 101: A potato has more chromosomes than a human (48 vs 46).",
    "Fact 003: The 'Appian Way' was one of the earliest and most strategically important Roman roads.",
    "Fact 007: The Incas used potatoes to treat injuries and predict the weather.",
    "Fact 005: The Pan-American Highway is the world's longest motorable road, spanning roughly 19,000 miles.",
    "Fact 314: The word 'potato' comes from the Spanish word 'patata'.",
    "Fact 009: In the UK, cat's eyes (reflective road studs) were invented by Percy Shaw in 1933.",
    "Fact 404: French fries were actually introduced to America by Thomas Jefferson.",
    "Fact 012: The world's widest road is the Monumental Axis in Brazil, accommodating 160 cars side-by-side.",
    "Fact 512: The largest potato ever grown weighed 10 pounds 14 ounces.",
    "Fact 015: Rome's road system allowed messages to travel up to 50 miles a day via a relay of horses.",
    "Fact 777: Potatoes are 80% water and 20% solid matter.",
    "Fact 004: In 1932, the first 'Autobahn' was opened in Germany between Cologne and Bonn.",
    "Fact 999: In October 1995, the potato was designated the official vegetable of Idaho.",
    "Fact 016: Most Roman roads were built in a straight line to ensure the shortest distance between points.",
    "Fact 123: The Great Famine in Ireland (1845-1852) was caused by a potato blight.",
    "Fact 010: The Guoliang Tunnel Road in China was carved through a mountain by just 13 villagers.",
    "Fact 256: Vincent van Gogh painted 'The Potato Eaters' in 1885.",
    "Fact 002: Many modern European roads still follow the exact routes laid down by Roman engineers.",
    "Fact 666: Green potatoes contain high levels of solanine and should not be eaten.",
    "Fact 011: Route 66, known as the 'Mother Road', originally ran from Chicago to Santa Monica.",
    "Fact 111: China is the world's largest producer of potatoes.",
    "Fact 006: Australia's Highway 1 is the longest national highway in the world.",
    "Fact 333: Potato blossoms used to be a royal fashion accessory in France.",
    "Fact 018: The world's oldest known paved road was constructed in Egypt around 2600 BC.",
    "Fact 019: Potatoes belong to the nightshade family, the same family as tomatoes and tobacco.",
    "Fact 020: The 'Silk Road' wasn't a single road, but a massive network of trade routes connecting East and West.",
    "Fact 021: The Milliarium Aureum (Golden Milestone) was a monument in the Roman Forum from which all roads were measured.",
    "Fact 022: Potato chips were invented by accident in 1853 by chef George Crum.",
    "Fact 023: The highest paved road in the world is the Umling La pass in India, reaching over 19,000 feet.",
    "Fact 024: A medium-sized potato with the skin contains about 45% of the daily recommended value of Vitamin C.",
    "Fact 025: Roman road builders used 'pozzolana', a volcanic ash, to create incredibly durable concrete.",
    "Fact 026: Mr. Potato Head was the first toy ever advertised on television in 1952.",
    "Fact 027: The world's first traffic light was installed in London in 1868; it was gas-lit and exploded shortly after.",
    "Fact 028: Potatoes are the world's fourth most important food crop after rice, wheat, and maize.",
    "Fact 029: The Baldwin Street in New Zealand is the world's steepest residential road.",
    "Fact 030: You can use a potato to power a digital clock using the chemical energy of the tuber.",
    "Fact 031: The first white center line was painted on a road in Michigan in 1911.",
    "Fact 032: Idaho produces about one-third of all potatoes grown in the United States.",
    "Fact 033: Ancient Persian 'Royal Roads' featured post stations every few miles for fresh messengers.",
    "Fact 034: Sweet potatoes are not actually potatoes; they are members of the morning glory family.",
    "Fact 035: Concrete roads can last twice as long as asphalt roads but are more expensive to build.",
    "Fact 036: The potato was so unpopular in France that Antoine-Augustin Parmentier staged elaborate publicity stunts to promote it.",
    "Fact 037: The longest straight road in the world is a section of Highway 10 in Saudi Arabia, stretching 149 miles without a curve.",
    "Fact 038: A single acre of potatoes can produce enough food to feed 10 people for a year.",
    "Fact 039: The Roman road construction usually involved four layers, starting with a foundation of heavy stones.",
    "Fact 040: Potatoes can be processed into ethanol, which can be used as a biofuel for cars.",
    "Fact 041: The world's busiest road is reportedly the King Fahd Causeway between Saudi Arabia and Bahrain.",
    "Fact 043: The 'via' in Roman road names (like Via Sacra) literally translates to 'way' or 'path'.",
    "Fact 044: Pringles are technically not potato chips; the FDA ruled they are 'potato crisps' because they are made from dough.",
    "Fact 045: Brazil's Trans-Amazonian Highway is largely unpaved and becomes impassable during the rainy season.",
    "Fact 046: A potato has more potassium than a banana.",
    "Fact 047: Roundabouts (traffic circles) were first widely popularized in the UK to reduce fatal accidents at intersections.",
    "Fact 048: There is a Potato Museum in Blackfoot, Idaho, home to the world’s largest potato chip.",
    "Fact 049: The ancient 'Groma' was a Roman surveying instrument used to ensure roads were built perfectly straight.",
    "Fact 050: One of the most famous potato dishes, Gratin Dauphinois, originated in the French Alps in 1788.",
    "Fact 051: The Dalton Highway in Alaska is one of the most isolated roads in the world, with only three villages along its 414 miles.",
    "Fact 052: Potatoes were once used as currency on certain islands in the South Pacific.",
    "Fact 053: Roman roads were typically crowned (sloped downward from the center) to allow rainwater to drain into side ditches.",
    "Fact 054: Fingerling potatoes are naturally small and narrow; they are not 'baby' versions of larger potatoes.",
    "Fact 055: The first freeway in the world, the Autostrada dei Laghi in Italy, opened in 1924.",
    "Fact 056: Marie Antoinette famously wore potato blossoms in her hair to make the plant trendy among the French nobility.",
    "Fact 057: The Eyre Highway in Australia includes a 90-mile stretch that is perfectly straight, known as the '90 Mile Straight'.",
    "Fact 058: Potato starch is used in the textile industry to stiffen fabrics during the weaving process.",
    "Fact 059: Many Roman roads were built by legionaries during times of peace to keep them occupied and disciplined.",
    "Fact 060: In 18th-century Europe, people feared potatoes caused leprosy and only used them as animal feed.",
    "Fact 061: Asphalt is actually a highly recyclable material; 99% of asphalt removed from roads is reused.",
    "Fact 062: The Yukon Gold potato was developed in Canada at the University of Guelph in 1966.",
    "Fact 063: The Karakoram Highway, connecting Pakistan and China, is the highest paved international road in the world.",
    "Fact 064: To make potato vodka, the starch in potatoes must first be converted into fermentable sugars.",
    "Fact 065: The Atlantic Road in Norway features a 'bridge to nowhere' that appears to drop off into the ocean from certain angles.",
    "Fact 066: Potatoes are completely gluten-free and contain no fat or cholesterol.",
    "Fact 067: Roman engineers used 'curbs' to define the edges of their roads, much like modern street design.",
    "Fact 068: In the 1840s, the failure of the 'Lumper' potato variety led to the Great Famine in Ireland.",
    "Fact 069: The first intercity highway in the US was the Lincoln Highway, which ran from New York City to San Francisco.",
    "Fact 070: Raw potato juice can be used as a natural remedy for skin irritations and minor burns.",
    "Fact 071: The Blue Ridge Parkway is the most visited unit of the National Park System in the US, known for its scenic road design.",
    "Fact 072: One medium potato provides about 110 calories of energy.",
    "Fact 073: In Rome, the upkeep of roads was the responsibility of the 'Curatores Viarum' or Road Curators.",
    "Fact 074: Peru celebrates National Potato Day every May 30th to honor the crop's heritage.",
    "Fact 075: Magnetic roads are being researched to help guide autonomous vehicles more accurately.",
    "Fact 076: The 'eyes' of a potato are actually the buds from which new potato plants grow.",
    "Fact 077: The Great Ocean Road in Australia was built by returned soldiers as a memorial to those killed in WWI.",
    "Fact 078: Potato plants can grow up to 3 feet tall and produce white, pink, or purple flowers.",
    "Fact 079: The world's first cloverleaf interchange was built in Woodbridge, New Jersey, in 1929.",
    "Fact 080: Potatoes are often used in commercial food photography to mimic ice cream because they don't melt under hot lights.",
    "Fact 081: The Roman 'Via Latina' is one of the oldest roads in Italy, predating the Appian Way.",
    "Fact 082: Purple potatoes get their color from anthocyanins, the same antioxidants found in blueberries.",
    "Fact 083: Modern road markings were not standardized globally until the Vienna Convention on Road Signs and Signals in 1968.",
    "Fact 084: Thomas Jefferson's notes mention 'potatoes served in the French manner,' a very early reference to fries in the US.",
    "Fact 085: The Hana Highway in Maui features 59 bridges and 620 curves along its 52-mile length.",
    "Fact 086: Russian Blue potatoes have a vibrant blue skin and deep blue flesh that stays blue even after cooking.",
    "Fact 087: The Roman road 'Via Flaminia' crossed the Apennine Mountains to connect Rome to the Adriatic coast.",
    "Fact 088: Potato skins are rich in fiber; peeling them removes about half of the total fiber content.",
    "Fact 089: Glow-in-the-dark road markings have been trialed in the Netherlands to improve safety without using streetlights.",
    "Fact 090: The word 'spud' likely comes from the small spade used to dig up potatoes in the 19th century.",
    "Fact 091: The Lombard Street in San Francisco is famous for having eight sharp hairpin turns in one block.",
    "Fact 092: Russet Burbank potatoes are the most popular variety used for making McDonald's French Fries.",
    "Fact 093: Roman roads were so well built that many survived the Middle Ages with virtually no maintenance.",
    "Fact 094: Potato protein is a high-quality plant protein often used in vegan supplements.",
    "Fact 095: The North Pole does not have any permanent roads because the ice is constantly shifting.",
    "Fact 096: In 18th-century Prussia, King Frederick the Great forced peasants to grow potatoes to prevent famine.",
    "Fact 097: Some modern 'plastic roads' are being built using shredded recycled plastic waste mixed with asphalt.",
    "Fact 098: The first instant mashed potatoes were developed by the Canadian Department of Agriculture in 1962.",
    "Fact 099: Rome's primary road for transporting salt from the coast was appropriately named 'Via Salaria' (Salt Road).",
    "Fact 100: You can store potatoes for several months if they are kept in a cool, dark, and dry place."
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
