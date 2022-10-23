$(function () {
  $('input[name="datefilter"]').daterangepicker({
    opens: "center",
    autoUpdateInput: false,
  });

  $('input[name="datefilter"]').on(
    "apply.daterangepicker",
    function (ev, picker) {
      $(this).val(
        picker.startDate.format("MM/DD/YYYY") +
          " - " +
          picker.endDate.format("MM/DD/YYYY")
      );

      manage();
    }
  );

  $('input[name="datefilter"]').on(
    "cancel.daterangepicker",
    function (ev, picker) {
      $(this).val("");
    }
  );
});

// Custom Code
let destinationInput = document.getElementById("destination");
let fromInput = document.getElementById("from");
let datepickInput = document.getElementById("datepick");
let requestBtn = document.getElementById("request");

let manage = () => {
  if (destinationInput.value && fromInput.value && datepickInput.value) {
    requestBtn.disabled = false;
  } else {
    requestBtn.disabled = true;
  }
};

// Modal window
const modalWindow = document.querySelector("#modal");
const closeBtn = document.getElementsByClassName("close-btn")[0];

requestBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", clickOutside);

function openModal() {
  modalWindow.style.display = "block";
}

function closeModal() {
  modalWindow.style.display = "none";
}

function clickOutside(e) {
  if (e.target == modalWindow) {
    modalWindow.style.display = "none";
  }
}
