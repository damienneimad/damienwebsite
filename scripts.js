const themes = ['light', 'dark', 'monospaced'];

function applyTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('preferredTheme', theme);

    const radioButtons = document.querySelectorAll('.theme-buttons input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.checked = radio.value === theme;
    });
}

function changeTheme(theme) {
    if (!themes.includes(theme)) return;
    applyTheme(theme);
}

function restoreTheme() {
    const stored = localStorage.getItem('preferredTheme');
    if (stored && themes.includes(stored)) {
        applyTheme(stored);
    } else {
        applyTheme('dark');
    }
}

document.addEventListener('DOMContentLoaded', restoreTheme);

// Surprise generator
const surpriseIdeas = [
    'Build a weather-powered mood light that changes colors based on tomorrow\'s forecast.',
    'Pair on a "week in review" bot that turns GitHub issues into a digestible email.',
    'Prototype a dashboard that maps indoor air quality to plant care tips.',
    'Create a playful CLI that generates design prompts for daily practice.',
    'Ship a tiny API that returns one remarkable open-source repo per day.',
    'Craft a React widget that visualizes how much caffeine is in your bloodstream.',
    'Design a retro terminal landing page with animated ASCII art.',
];

function generateSurprise() {
    const prompt = surpriseIdeas[Math.floor(Math.random() * surpriseIdeas.length)];
    const surpriseText = document.getElementById('surprisePrompt');
    if (surpriseText) {
        surpriseText.textContent = prompt;
    }
}
