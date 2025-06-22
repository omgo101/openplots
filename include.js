// include.js
function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch ${file}`);
        return response.text();
      })
      .then(html => {
        el.innerHTML = html;
      })
      .catch(err => {
        el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
        console.error(err);
      });
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
