document.querySelector('form').addEventListener('submit', function(event) {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    if (!username || !password) {
      alert('Both username and password are required!');
      event.preventDefault();  // Prevent form submission
    }
  });
  