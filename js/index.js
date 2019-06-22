function toggleAnswer(f) {
			var ans = "ans"+f.id.split('ques')[1];
			$("#"+ans).toggle();
}

function toggleSkill(f) {
			var skill = "skill"+f.id.split('set')[1];
			$("#"+skill).toggle();
}
