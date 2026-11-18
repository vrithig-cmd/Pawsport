// Pawsport prototype account dialogs. No credentials are stored or transmitted.
(() => {
  const dialog = document.getElementById('authDialog');
  const form = document.getElementById('authForm');
  const title = document.getElementById('authTitle');
  const subtitle = document.getElementById('authSubtitle');
  const nameField = document.getElementById('authNameField');
  const nameInput = document.getElementById('authName');
  const password = document.getElementById('authPassword');
  const submit = document.getElementById('authSubmit');
  const feedback = document.getElementById('authFeedback');
  document.querySelectorAll('[data-auth-open]').forEach(button => {
    button.addEventListener('click', () => {
      const signup = button.dataset.authOpen === 'signup';
      form.reset();
      feedback.textContent = '';
      nameField.hidden = !signup;
      nameInput.required = signup;
      title.textContent = signup ? 'Join Pawsport' : 'Welcome back';
      subtitle.textContent = signup ? 'Create your Pawsport profile (demo).' : 'Log in to Pawsport (demo).';
      submit.textContent = signup ? 'Sign up' : 'Log in';
      password.autocomplete = signup ? 'new-password' : 'current-password';
      dialog.showModal();
    });
  });
  document.getElementById('authClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    feedback.textContent = 'This is a design demonstration. Real account creation and login are not enabled.';
    password.value = '';
  });
})();
