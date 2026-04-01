AOS.init();

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

function validateForm() {
  let n = document.getElementById('name').value;
  let e = document.getElementById('email').value;
  let m = document.getElementById('message').value;

  if (n === '' || e === '' || m === '') {
    alert('Please fill all fields');
    return false;
  }

  alert('Form Submitted!');
  return true;
}