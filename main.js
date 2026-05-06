function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    updateThemeText(targetTheme);
}

function updateThemeText(theme) {
    const themeText = document.getElementById('theme-text');
    if (themeText) {
        themeText.innerText = theme === 'light' ? '亮色模式' : '深色模式';
    }
}

// 頁面加載時自動恢復主題設定
(function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    updateThemeText(savedTheme);
});
