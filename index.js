let data = [];
// Load
let fromSaveData = localStorage.getItem("listData");

if (fromSaveData) {
  data = JSON.parse(fromSaveData);
  updateTampilan();
  console.log("Data is found, ready to view!");
}

//Tempel Data
function updateTampilan() {
  // Reset
  $("#expensesList").html("");
  total = 0;

  // Loop
  for (i = 0; i < data.length; i++) {
    const barisBaru = `
    <tr>
        <td>${data[i].inputName}</td>
        <td>Rp. ${data[i].inputNumber}</td>
        <td>${data[i].inputCategory}</td>
        <td>${data[i].inputDate}</td>
    </tr>
`;
    $("#expensesList").append(barisBaru);

    // total
    total += Number(data[i].inputNumber);
    console.log(total);
  }

  // let totalPlacement = $(".total");
  const totalPlacement = `<h3>Rp. ${total}</h3>`;
  $(".total").html(totalPlacement);
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

  updateTampilan();

  // Local Storage
  const saveData = JSON.stringify(data);
  // Saving
  localStorage.setItem("listData", saveData);

  // console.log(data);
});
