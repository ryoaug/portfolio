document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.accordion-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const isOpen = card.classList.contains('open');
            
            document.querySelectorAll('.card').forEach(c => c.classList.remove('open'));
            
            if (!isOpen) {
                card.classList.add('open');
            }
        });
    });
});
