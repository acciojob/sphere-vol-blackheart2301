function volume_sphere() {
    //Write your code here
	var input= document.getElementbyId('radius').value;
	input= Math.abs(input);
	var v;
	v= (4/3) * Math.PI * Math.pow(input, 3);
	v= v.toFixed(4);
	document.getElementbyId('volume').value= v;
	return false; 
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
