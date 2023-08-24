document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('add-button');
    addButton.addEventListener('click', addInputRow);

  
});
let count=1
function addInputRow() {
    var container = document.getElementById('input-container');
    var row = document.createElement('div');
    row.className = 'input-container';

    var keyInput = document.createElement('input');
    keyInput.type = 'text';
    keyInput.name = 'label'+count;
    row.appendChild(keyInput);

    var valueInput = document.createElement('input');
    valueInput.type = 'text';
    valueInput.name = 'label_value'+count;
    row.appendChild(valueInput);

    container.appendChild(row);
    count++;
}


 
async function sendData(e){
    console.log(e)
    e.preventDefault()
    var form = document.getElementById('my-form');
    
    let formData=new FormData(form)
    
  
    //   console.log(formData.entries());
    //   var data = {};
    //         for (var pair of formData.entries()) {
    //             var fieldName = pair[0];
    //             var fieldValue = pair[1];
    //             data[fieldName] = fieldValue;
    //         }
    //         console.log(data)
      let header = {
        "content-type": "application/json",
      };
      let resData = await axios(
        "https://dezensolutions.com/lims_windlas_apis/api//user/generate_qrcode",
        {
          data: {data:JSON.stringify(formData)},
          method: "POST",
          headers: header,
        }
      ); 
      console.log(resData)
}
