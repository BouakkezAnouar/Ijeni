
let serviceLocation;
let service ;


const images = { Plumber: 'http://jobinn.crunchpress.com/wp-content/uploads/2016/03/categories-icon-4.png'
                  , Assembly: 'https://image.flaticon.com/icons/png/512/206/206865.png'
                  , Chef : 'https://image.flaticon.com/icons/png/512/206/206898.png'
                  , BabySitting : 'https://image.flaticon.com/icons/png/128/194/194938.png'
                  , Carpenter : 'https://image.flaticon.com/icons/png/128/320/320365.png'
                  , Delivery : 'https://image.flaticon.com/icons/png/512/237/237198.png'
                  , Gardener : 'https://image.flaticon.com/icons/png/512/1005/1005031.png'
                  ,  TVFixing : 'http://jobinn.crunchpress.com/wp-content/uploads/2016/03/categories-icon-3.png'};

service = localStorage.getItem("service").toString().trim();
serviceLocation = localStorage.getItem("serviceLocation").toString().trim();


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


    document.querySelector('.job-name').innerHTML = service + " in " + serviceLocation ;



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

 var e=document.createElement("div");
 e.innerHTML=
         '<div  class="job card mb-3 wow zoomIn" style="visibility: visible; animation-name: zoomIn;"> '
              +'<div  class="job-top row flex pt-4">'
                  + '<div  class="col-lg-2 col-md-2 col-s-1 col-xs-1">'
                       + '<img  class="job-img ml-4" width="68" height="68" src="'+  images [service] + '" alt="">'
                  + '</div>  '
                   + '<div  class="job-title-desc col-7">'
                       + '<h2  class="job-title">' + name + '</h2>'
                      +  '<h3  class="job-desc">'+company +'</h3>'
                  +  '</div>'
                 +' <div >'
                  +  '<span  class="place col-1">'+  locationn+ '</span>'
                   + '<h3  class="nulber pt-3">'+phone +'</h3>'
                  +'</div>'
             + '</div>'
             + '<div class="job-down row pt-5 pb-3">'
                +  '<div class="job-down-left col-10 pl-5">'
                  +    '<h5 > <img data-brackets-id="495" src="img/money.png">'+ wage+ '</h5>'
                +  '</div>'
                +  '<div  class="job-down-right col-2">'
                 +    ' <button  class="btn-primary">Full Time</button>'
               +  ' </div>'
           +  '</div>'
          +'</div>'  ;

if (speciality === service && locationn === serviceLocation)
    document.getElementById("contenu").appendChild(e);


	}

  document.getElementById("loading").style.display ="none";
  }

  function errData (err){
	console.log(err) ;
  }

getJson();
