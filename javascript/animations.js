    // Typewriter effect for the text "neil.dev"
    const text = "neil.dev";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        } else {
            addBlinkingCursor();
        }
    }

    // Function to add a blinking cursor
    function addBlinkingCursor() {
        const typingElement = document.getElementById("typing");
        const cursor = document.createElement("span");
        cursor.id = "cursor";
        cursor.textContent = "|";
        typingElement.appendChild(cursor);

        setInterval(() => {
            cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
        }, 500);
    }
    typeEffect();

    // Animated background VANTA.BIRDS
    document.addEventListener("DOMContentLoaded", () => {
        VANTA.BIRDS({
            el: "#vantajs",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 500.00,
            minWidth: 500.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xc4ffde,
            color1: 0xabe8c,
            color2: 0x4748e,
            colorMode: "lerpGradient",
            separation: 100.00,
            alignment: 1.00,
            cohesion: 1.00,
            backgroundAlpha: 0.84
        });
    });