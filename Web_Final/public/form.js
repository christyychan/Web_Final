var form= document.querySelector("#my_form");
//var name =document.querySelector("#name");



function submitHandler(event){
	event.preventDefault();
	var name= document.querySelector("#name").value;
	var age= document.querySelector("#age").value;
	var dogname= document.querySelector("#othername").value;
	var city= document.querySelector("#city").value;
	var verb1= document.querySelector("#verb1").value;
	var food= document.querySelector("#food").value;
	var noun= document.querySelector("#noun").value;
	var verb2= document.querySelector("#verb2").value;
	var verb3= document.querySelector("#verb3").value;
	var verb4= document.querySelector("#verb4").value;
	var adjective= document.querySelector("#adjective").value;
	var pluralnoun= document.querySelector("#plural").value;

	
	form.style.display="none";
	response.style,display="block";
	story.innerHTML="There was once a " + age + " year old corgi named " + dogname + " and its owner, " +name+ ". " + name + " lives in " + city + " and one day, they decide to go " + verb1 + " in the park. After a long day at the park, " + name + " decides to go get " +food + " for dinner." + " After dinner, they walk out of the restruant and notice it is raining so "+ name + " pulls out the trusty " +noun +" and they " + verb2 + " home. When they get home, "+name+ " decides to " + verb3 + " instead of " + verb4 + " with " +dogname+". Hours later, it is finally time to go to sleep so " + name + " puts on " + adjective +" "+ pluralnoun + " and goes to bed with " + dogname + "."
	ending.innerHTML= "THE END";

}

form.addEventListener("submit",submitHandler);