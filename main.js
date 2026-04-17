function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const spans = [
        document.getElementById('liveDateTime'),
        document.getElementById('liveDateTimeAbout'),
        document.getElementById('liveDateTimeContact'),
        document.getElementById('liveDateTimeFAQ')
    ];

    spans.forEach(el => {
        if (el) 
            el.textContent = formatted;
    })
}

updateDateTime();
setInterval(updateDateTime, 1000);


const faqquestions = document.querySelectorAll('.faq-question');
faqquestions.forEach(btn => {
    btn.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        answer.classList.toggle('show');
    });
});