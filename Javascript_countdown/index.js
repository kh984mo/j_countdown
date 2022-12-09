const endate="30 July 2023 10:00 PM"
document.getElementById("end-date").innerText=endate;
const inputs= document.querySelectorAll("input");
function clock(){
	const end=new Date(endate);
	const now=new Date();
	const diff= (end-now);
	if (diff<0) return;
	//Days
	//1 days=24hours; 1 hour=60minutes,60min =3600sec
	inputs[0].value=Math.floor(diff/(1000*60*60*24));  //days
	inputs[1].value=Math.floor((diff%(1000*60*60*24))/(1000*60*60));  // hours
	inputs[2].value= Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // minutes
    inputs[3].value= Math.floor((diff % (1000 * 60)) / 1000); // seconds

}
clock()
setInterval(()=>{clock()},1000)

