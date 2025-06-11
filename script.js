document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-btn');
    const modal = document.getElementById('downloadModal');
    const closeModal = document.querySelector('.close-modal');
    const osRadios = document.querySelectorAll('input[name="os"]');
    const windowsDesc = document.getElementById('windows-desc');
    const linuxDesc = document.getElementById('linux-desc');
    const downloadOsBtns = document.querySelectorAll('.download-os-btn');
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-toggle-icon');

    // Функция для переключения темы
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Меняем иконку
        themeIcon.className = `fa-regular ${newTheme === 'light' ? 'fa-moon' : 'fa-sun'} theme-toggle-icon`;
        
        localStorage.setItem('theme', newTheme);
    };

    // Инициализация темы
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Устанавливаем начальную иконку
    themeIcon.className = `fa-regular ${savedTheme === 'light' ? 'fa-moon' : 'fa-sun'} theme-toggle-icon`;

    // Обработчик переключения темы
    themeToggle.addEventListener('click', toggleTheme);

    // Открытие модального окна
    downloadBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        // Добавляем класс для анимации после отображения
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });

    // Закрытие модального окна
    const closeModalWindow = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Время должно совпадать с длительностью анимации в CSS
    };

    closeModal.addEventListener('click', closeModalWindow);

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModalWindow();
        }
    });

    // Переключение между описаниями ОС
    osRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'windows') {
                windowsDesc.style.display = 'block';
                linuxDesc.style.display = 'none';
            } else {
                windowsDesc.style.display = 'none';
                linuxDesc.style.display = 'block';
            }
        });
    });

    // Обработка нажатия на кнопки скачивания
    downloadOsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const os = e.target.dataset.os;
            // Здесь будет логика скачивания для конкретной ОС
            closeModalWindow();
        });
    });
}); 