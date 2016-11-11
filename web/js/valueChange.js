const image = "image";
const url = "url";
const endpoint = "endpoint";

function selectActions() {
    var selectedType = document.getElementById("typeSelect").value;

    if(selectedType == image){
        document.getElementById("imageDiv").style.display="block";
        document.getElementById("urlDiv").style.display="none";
        document.getElementById("endpointDiv").style.display="none";
    }else if (selectedType == url){
        document.getElementById("imageDiv").style.display="none";
        document.getElementById("urlDiv").style.display="block";
        document.getElementById("endpointDiv").style.display="none";
    }else if (selectedType == endpoint){
        document.getElementById("imageDiv").style.display="none";
        document.getElementById("urlDiv").style.display="none";
        document.getElementById("endpointDiv").style.display="block";
    }
}

function addInput(divName) {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "<input type='text' name='keys' placeholder='key'/> &nbsp" +
                        "<input type='text' name='values' placeholder='value' list='presetParam' autocomplete='off'/>"+
                            "<datalist id='presetParam'>"+
                                "<option value='$profile'>$profile</option>"+
                                "<option value='$location'>$location</option>"+
                                "<option value='$user'>$user</option>"+
                            "</datalist>"
    document.getElementById(divName).appendChild(newDiv);
}