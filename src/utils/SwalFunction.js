const Swal = require('sweetalert2');

export function SwalFunction(title, text, icon, confirmButtonText, showConfirmButton, timer) {
    const css = getComputedStyle(document.documentElement);
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText,
        showConfirmButton: showConfirmButton,
        confirmButtonColor: '#c4453a',
        background: css.getPropertyValue('--surface').trim() || '#fff',
        color: css.getPropertyValue('--ink').trim() || '#241b18',
        timer: timer
    });
}
