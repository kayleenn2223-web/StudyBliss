document.addEventListener('DOMContentLoaded', () => {
    const habitCheckboxes = document.querySelectorAll('.habit-check input[type="checkbox"]');

    habitCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const habitCard = this.closest('.habit-card');
            const progress = habitCard.querySelector('.progress');
            
            // This is a dummy interaction. A real app would calculate this.
            let currentWidth = parseInt(progress.style.width, 10);

            if (this.checked) {
                // Animate progress
                progress.style.width = (currentWidth + 20 > 100 ? 100 : currentWidth + 20) + '%';
            } else {
                // Animate progress back
                progress.style.width = (currentWidth - 20 < 0 ? 0 : currentWidth - 20) + '%';
            }
        });
    });
});
