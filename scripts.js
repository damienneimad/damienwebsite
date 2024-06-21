function changeTheme(theme) {
    document.body.className = '';
    document.body.classList.add(theme);

    // Change the color of the theme buttons based on the selected theme
    const labels = document.querySelectorAll('.theme-buttons label');
    if (theme === 'light') {
        labels.forEach(label => label.style.color = '#000');
    } else {
        labels.forEach(label => label.style.color = '#fff');
    }
}

// CSS to handle theme changes
const style = document.createElement('style');
style.innerHTML = `
    .light {
        background: #fff !important;
        color: #000 !important;
    }
    .dark {
        background: #000 !important;
        color: #fff !important;
    }
    .monospaced {
        font-family: 'Courier New', monospace;
    }
`;
document.head.appendChild(style);
