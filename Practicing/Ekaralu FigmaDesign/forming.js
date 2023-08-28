document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
    const generatedCodeContainer = document.getElementById("generatedCodeContainer");

    generateButton.addEventListener("click", function() {
        for (let i = 0; i < 3; i++) {
            const generatedCode = `
            <div class="flex">
            <div class="Frame1">
                <img src="../Figma design/img/1.svg" alt="1.svg" id="A">
                <p id="Acres">50 Acres<span id="price">₹ 2.5 Cr p/a</span> 
                </p>
                <p1 id="Location" >Area,Location,Zaheerabad</p1><br>
                <div class="add ">
                <div class="slidebar">
                  <p3 style="color: green;">More details</p3>
                 
                    <img src="../Figma design/img/arrow-right.svg" alt="arrow-right" id="arrow-right">
                  </div>
                <div class="call d-flex">
                   <img src="../Figma design/img/incomming call.svg" alt="call-incoming" id="call-incoming">
                </div>
                </div>
                <br>
                
            </div>
            <div class="Frame1">
                <img src="../Figma design/img/2.jpg" alt="3.jpg" id="B">
                <p id="Acres">50 Acres<span id="price">₹ 2.5 Cr p/a</span>
                </p>
                <p1 id="Location" >Area,Location,Zaheerabad</p1>
                <div class="add ">
                    <div class="slidebar">
                      <p3 style="color: green;">More details</p3>
                     
                        <img src="../Figma design/img/arrow-right.svg" alt="arrow-right" id="arrow-right">
                      </div>
                    <div class="call d-flex">
                       <img src="../Figma design/img/incomming call.svg" alt="call-incoming" id="call-incoming">
                    </div>
                    </div>
                <br>
                
            </div>
            <div class="Frame1">
                <img src="../Figma design/img/3.svg" alt="2.jpg" id="B">
                <p id="Acres">50 Acres<span id="price">₹ 2.5 Cr p/a</span>
                </p>
                <p1 id="Location">Area,Location,Zaheerabad</p1>
                <div class="add ">
                    <div class="slidebar" >
                      <p3 style="color: green;">More details</p3>
                     
                        <img src="../Figma design/img/arrow-right.svg" alt="arrow-right" id="arrow-right">
                      </div>
                    <div class="call d-flex">
                       <img src="../Figma design/img/incomming call.svg" alt="call-incoming" id="call-incoming">
                    </div>
                    </div>
            </div>
            <br>
        </div>`;
            const newDiv = document.createElement('div');
            newDiv.innerHTML = generatedCode;
            generatedCodeContainer.appendChild(newDiv);
        }
    });
});
