
var numberOfPlumber =0;
var numberOfDelivery =0;
var numberOfBabySitting =0 ;
var numberOfChef =0;
var numberOfCarpenter =0 ;
var numberOfGardener=0;
var numberOfAssembly =0;
var numberOfTVFixing =0;


 var config = {
    apiKey: "AIzaSyA10pp-9zoJsUCzsMBxGIIb5Z04y_3_yRk",
    authDomain: "ijeni7890.firebaseapp.com",
    databaseURL: "https://ijeni7890.firebaseio.com",
    projectId: "ijeni7890",
    storageBucket: "ijeni7890.appspot.com",
    messagingSenderId: "534304875634"
  };

  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');


  function getJson(){
	  messagesRef.on('value' , gotData , errData);
  }


  function gotData (data){
	var messages = data.val();
	var keys = Object.keys(messages);
	for (var i =0 ; i< keys.length ; i++){
	var k = keys[i];
	var initials = messages[k].initials ;
	var name = messages[k].name ;
  var company = messages[k].company ;
  var locationn = messages[k].locationn ;
  var phone = messages[k].phone ;
  var speciality = messages[k].speciality ;
  var wage = messages[k].wage ;

      if (speciality=="Delivery") numberOfDelivery++ ;
      if (speciality=="Plumber") numberOfPlumber++ ;
      if (speciality=="Chef") numberOfChef++ ;
      if (speciality=="BabySitting") numberOfBabySitting++ ;
      if (speciality=="Carpenter") numberOfCarpenter++ ;
      if (speciality=="Gardener") numberOfGardener++ ;
      if (speciality=="Assembly") numberOfAssembly++ ;
      if (speciality=="TVFixing") numberOfTVFixing++ ;



	}

      document.getElementById('numberOfPlumber').innerHTML = numberOfPlumber ;
      document.getElementById('numberOfChef').innerHTML = numberOfChef ;
      document.getElementById('numberOfAssembly').innerHTML = numberOfAssembly ;
      document.getElementById('numberOfDelivery').innerHTML = numberOfDelivery ;
      document.getElementById('numberOfTVFixing').innerHTML = numberOfTVFixing ;
      document.getElementById('numberOfCarpenter').innerHTML = numberOfCarpenter ;
      document.getElementById('numberOfBabySitting').innerHTML = numberOfBabySitting ;
      document.getElementById('numberOfGardener').innerHTML = numberOfGardener ;

document.getElementById("loading").style.display ="none";
  }

  function errData (err){
	console.log(err) ;
  }

getJson();
