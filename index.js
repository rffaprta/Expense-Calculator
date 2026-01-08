let data = [];

$("button").click(function (e) {
  e.preventDefault();

  // Variable
  const inputName = $("#itemName").val();
  const inputNumber = $("#itemNumber").val();
  const inputCategory = $("#itemCategory").val();
  const inputDate = $("#itemDate").val();

  // Object
  const dataInput = { inputName, inputNumber, inputCategory, inputDate };

  if (dataInput !== "") {
    data.push(dataInput);
  } else {
    alert("Please enter an item.");
  }
  $("#itemName").val("");
  $("#itemNumber").val("");
  $("#itemCategory").val("");
  $("#itemDate").val("");
  console.log(data);
});
