import './index.css';

function ToastNotif() {
  return <div className="toast-notif-container" id="toast-notif" />;
}

function displayToast(message, color, interval = 3000) {
  const toastNotifEl = document.getElementById('toast-notif');

  const toastEl = document.createElement('div');
  toastEl.className = 'toast-notif';
  toastEl.innerHTML = `
    <p class="toast-message">${message}</p>
  `;

  if (color) {
    toastEl.style.color = color;
  }

  toastNotifEl.append(toastEl);

  setInterval(() => {
    toastEl.remove();
  }, interval);
}

export { ToastNotif as default, displayToast };
