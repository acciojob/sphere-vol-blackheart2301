function volume_sphere() {
    //Write your code here
	var input= document.querySelector('#radius').value;
	var output= document.querySelector('#volume').value;
	input= Math.abs(input);
	var v;
	v= (4/3) * Math.PI * Math.pow(input, 3);
	v= v.toFixed(4);
	output= v; 
} 

window.onload = document.querySelector('#MyForm').onsubmit = volume_sphere;
