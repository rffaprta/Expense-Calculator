let data = [];

$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault();
    const inputValue = $("#itemInput").val();
    if (inputValue.trim() !== "") {
      data.push(inputValue);

      inputValue.value = "";
    } else {
      alert("Please enter an item.");
    }
    console.log(data);
  });
});
