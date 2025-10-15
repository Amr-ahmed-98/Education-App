// src/utils/alerts.js
import Swal from "sweetalert2";

export const successAlert = (title = "تم بنجاح!", text = "تمت العملية بنجاح") => {
  return Swal.fire({
    title,
    text,
    icon: "success",
    confirmButtonText: "اوك",
      customClass: {
    popup: "my-popup",
    title: "my-title",
    confirmButton: "my-button",
  }
  });
};

export const errorAlert = (title = "خطأ!", text = "حدث خطأ ما") => {
  return Swal.fire({
    title,
    text,
    icon: "error",
    confirmButtonText: "اوك",
        customClass: {
    popup: "my-popup",
    title: "my-title",
    confirmButton: "my-button",
  }
  });
};

export const warningAlert = (title = "تنبيه!", text = "هل أنت متأكد؟") => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "نعم",
    cancelButtonText: "إلغاء",
  });
};
