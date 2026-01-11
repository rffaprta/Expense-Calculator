let data = [];
// Load
let fromSaveData = localStorage.getItem("listData");

if (fromSaveData) {
  data = JSON.parse(fromSaveData);
  console.log("Data is found, ready to view!");
}

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

  //Tempel Data
  function jaitData() {
    const barisBaru = `
    <tr>
        <td>${inputName}</td>
        <td>Rp. ${inputNumber}</td>
        <td>${inputCategory}</td>
        <td>${inputDate}</td>
    </tr>
`;
    $("#expensesList").append(barisBaru);
  }
  jaitData();

  // Amount Total
  function total() {
    let total = 0;

    for (i = 0; i < data.length; i++) {
      total += Number(data[i].inputNumber);
      console.log(total);
    }

    // let totalPlacement = $(".total");
    const totalPlacement = `<h3>Rp. ${total}</h3>`;
    $(".total").html(totalPlacement);
  }
  total();

  // Local Storage
  const saveData = JSON.stringify(data);
  // Saving
  localStorage.setItem("listData", saveData);

  // console.log(data);
});
