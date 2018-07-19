 // Initialize Firebase
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
getJson() ;

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var locationn = getInputVal('locationn');
  var phone = getInputVal('phone');
  var speciality = getInputVal('speciality');
  var wage = getInputVal('wage');

  // Save message
  saveMessage(name, company, locationn, phone,  speciality, wage);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
      
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, locationn, phone,  speciality, wage){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    locationn:locationn,
    phone:phone,
    speciality:speciality,
    wage:wage,
  });
  
  }

  
  function getJson(){
	 
	  messagesRef.on('value' , gotData , errData);
  }

  
  function gotData (data){
	var messages = data.val();
	var keys = Object.keys(messages);
	for (var i =0 ; i< keys.length ; i++){
		var k = keys[i];
		var initials = messages[k].initials ;
		var phone = messages[k].phone ;
		console.log(phone);
	}
  }
  
  function errData (err){
	console.log(err) ;
  }
