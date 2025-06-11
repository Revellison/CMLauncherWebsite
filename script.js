document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-btn');
    const modal = document.getElementById('downloadModal');
    const closeModal = document.querySelector('.close-modal');
    const osRadios = document.querySelectorAll('input[name="os"]');
    const windowsDesc = document.getElementById('windows-desc');
    const linuxDesc = document.getElementById('linux-desc');
    const downloadOsBtns = document.querySelectorAll('.download-os-btn');
    const themeToggle = document.querySelector('.theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Переключаем видимость иконок
        if (newTheme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
        
        localStorage.setItem('theme', newTheme);
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Устанавливаем начальное состояние иконок
    if (savedTheme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    themeToggle.addEventListener('click', toggleTheme);

    downloadBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });

    const closeModalWindow = () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    };

    closeModal.addEventListener('click', closeModalWindow);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModalWindow();
        }
    });

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

    downloadOsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const os = e.target.dataset.os;
            closeModalWindow();
        });
    });
}); 