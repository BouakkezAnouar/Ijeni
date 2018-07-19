

let serviceLocation;
let service ;


function chooseService(id){
  service =id ;
}

function chooseLocation(){
    var sel = document.getElementById('locationn');
    serviceLocation = sel.options[sel.selectedIndex].value ;
     localStorage.setItem("service",service);
     localStorage.setItem("serviceLocation",serviceLocation);
     window.location.href = 'template.html';
}
