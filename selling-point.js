const sellingPoint = document.getElementById("selling-point");
const sellingPoint1 = document.getElementById("selling-point1");
const sellingPoint2 = document.getElementById("selling-point2");
const sellingPoint3 = document.getElementById("selling-point3");

const sellingPoints = document.querySelectorAll(".icons .bi");

const defaultIcons = document.querySelectorAll(".icons .defaultIcon");

var prevBanner = "";


document.addEventListener("DOMContentLoaded", ()=> {
	defaultIcons.forEach(defaultIcon => {
		defaultIcon.style.transform= "scale(1.5)";
		defaultIcon.style.color = "hotpink";
	})});

function defaultSelections(value){
	if(prevBanner !== value){
		sellingPoints.forEach(point=>{
			point.style.transform = "scale(1)";
			point.style.color = "purple";
		});
		defaultIcons.forEach(defaultIcon => {
			defaultIcon.style.transform= "scale(1.5)";
			defaultIcon.style.color = "hotpink";
		});
		sellingPoint.innerHTML = "Guaranteed Satisfaction";
		sellingPoint1.innerHTML = "In-Depth Website Audit";
		sellingPoint2.innerHTML = "Regular Updates";
		sellingPoint3.innerHTML = "Brand Identity Creation";
		prevBanner = value;
	}
}



function setSellingPoint(value1, value2, value3){
	setSellingPointText(value1, value3);
	sellingPoints.forEach(point=>{
		point.style.transform = "scale(1)";
		point.style.color = "purple";
	});
	value2.style.transform = "scale(1.5)"
	value2.style.color = "hotpink";
}

function setSellingPointText(value1,value3){
	if (value3 === "WD"){
		sellingPoint.innerHTML = value1 ;
	}
	else if (value3 === "SS"){
		sellingPoint1.innerHTML = value1;
	}
	else if (value3 === "MnS"){
		sellingPoint2.innerHTML = value1;
	}
	else if( value3 === "BnM"){
		sellingPoint3.innerHTML = value1;
	}
}



