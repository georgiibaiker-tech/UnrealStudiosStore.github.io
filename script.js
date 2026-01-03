document.addEventListener('DOMContentLoaded', () => {
    // Код входа (оставляем без изменений)
    const loginForm = document.getElementById('registrationForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
            if (firstName.trim() !== "") {
                localStorage.setItem('unrealUserName', firstName);
                window.location.href = 'UnrealStore.html';
            }
        });
    }

    // Логика приветствия
    const displayElement = document.getElementById('userDisplay');
    if (displayElement) {
        const savedName = localStorage.getItem('unrealUserName');
        displayElement.textContent = savedName ? savedName.toUpperCase() : 'ГОСТЬ';
    }

    // НОВАЯ ЛОГИКА: Уведомление о скачивании
    const downloadButtons = document.querySelectorAll('.download-trigger');
    const notification = document.getElementById('downloadNotification');

    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const version = button.getAttribute('data-version');
            
            // Показываем текст
            notification.textContent = `Загрузка версии ${version} началась...`;
            notification.classList.add('show');

            // Скрываем через 4 секунды
            setTimeout(() => {
                notification.classList.remove('show');
            }, 4000);
        });
    });
});