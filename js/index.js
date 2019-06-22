function toggleAnswer(f) {
			var ans = "ans"+f.id.split('ques')[1];
 			var x = document.getElementById(ans);
			$("#"+ans).toggle();
			if (x.style.display === "none") {
				x.style.display = "block";
			} else {
				x.style.display = "none";
			}
}
