function toggleAnswer(f) {
	var click = f.id.split('ques')[1];
	var ans = "ans"+click;
	var x = document.getElementById(ans);
	var len = document.getElementsByClassName('certification').length;
	for(var i=1;i++;i<=len){
		ans = "ans"+i;
		document.getElementById(ans).style.display='none';
	}
	if(x.style.display=='none'){
		x.style.display='block';
	}
}

function toggleSkill(f) {
	var click = f.id.split('set')[1];
	var ans = "skill"+click;
	var x = document.getElementById(ans);
	var len = document.getElementsByClassName('skill').length;
	for(var i=1;i++;i<=len){
		ans = "skill"+i;
		document.getElementById(ans).style.display='none';
	}
	if(x.style.display=='none'){
		x.style.display='block';
	}

}

function loadProject(filename){
	$("#projcontainer").show();
	filename = "project/"+filename + ".html";
	$("#projectholder").load(filename);
	
}

function closeProject(){
	$("#projcontainer").hide();
}
