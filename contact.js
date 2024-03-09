document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Запобігаємо реальному надсиланню форми
      
      // Отримуємо дані з форми
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Створюємо елемент для відгуку
      const feedback = document.createElement('div');
      feedback.classList.add('feedback');

      feedback.innerHTML = `<div class="nameList"><p>${name}</p></div><div class="emailList"><p>(${email})</p></div><div class="messageList"><p>${message}</p></div>`;
      
      // Додаємо відгук у контейнер
      const feedbacksContainer = document.getElementById('feedbacks');
      feedbacksContainer.appendChild(feedback);
  
      // Очищуємо форму після надсилання
      form.reset();
    });
  });
  