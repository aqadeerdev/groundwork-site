(function () {
  const form = document.getElementById('contact-form');
  const formWrap = document.getElementById('form-wrap');
  const success = document.getElementById('form-success');

  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    const data = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const json = await res.json();

      if (json.success) {
        formWrap.style.display = 'none';
        success.classList.add('form__success--visible');
      } else {
        throw new Error(json.message);
      }
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      alert('Something went wrong. Please try again or email us directly.');
    }
  });
})();
