import Swal from 'sweetalert2'

const SwalToaster = Swal.mixin({
    icon: "info",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    showCancelButton: false,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
    customClass: {
      title: '!text-base',
      htmlContainer: '!text-xs',
      timerProgressBar: 'bg-primary'
    },
    buttonsStyling: false,
    color: "#7c44dd",
    timerProgressBar: true,
    timer: 2000,
  });

const SwalAlert = Swal.mixin({
    icon: "info",
    toast: false,
    position: "center",
    confirmButtonText: 'Okay',
    cancelButtonText: 'Close',
    showConfirmButton: true,
    showCancelButton: true,
    customClass: {
      title: '!text-base',
      htmlContainer: '!text-xs',
      confirmButton: 'btn-confirm mx-2',
      cancelButton: 'btn-cancel mx-2 !bg-gray-400'
    },
    buttonsStyling: false,
    color: "#7c44dd",
    timerProgressBar: false,
    timer: false,
  });

export { SwalToaster, SwalAlert }