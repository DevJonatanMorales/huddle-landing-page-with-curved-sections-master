const form = document.getElementById("form");
const txtForm = document.getElementById("txtForm");
const btnForm = document.getElementById("btnForm");
const alert = document.getElementById("alert");

const DefaultData = {
  email: false,
};

const Filter = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const AlertMsj = (dato) => {
  if (dato === true) {
    alert.classList.remove("text__alert-active");
  } else if (dato === false) {
    alert.classList.add("text__alert-active");
  }
};

const reset = () => {
  DefaultData.email = false;
  AlertMsj(true);
  txtForm.value = "";
};

const valEmail = (email) => {
  if (Filter.email.test(email) === true) {
    DefaultData.email = true;
    AlertMsj(email);
  } else {
    DefaultData.email = false;
    AlertMsj(email);
  }
};

txtForm.addEventListener("keyup", () => {
  valEmail(txtForm.value);
});

txtForm.addEventListener("blur", () => {
  valEmail(txtForm.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (DefaultData.email === true) {
    reset();
    Swal.fire({
      icon: "success",
      title: "SUCCESS",
      text: "Data sent.",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "WARNING",
      text: "The form has errors.",
    });
  }
});
