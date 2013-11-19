window.addEventListener("load", function(){
	"use strict";

	var textarea = document.getElementsByTagName("textarea")[0],
		button = document.getElementsByTagName("button")[0],
		p = document.getElementsByTagName("p")[0];

	button.addEventListener("click", function(){
		p.innerText = textarea.value.replace(/[\n\t\"]/g, function(match){
			var replace;
			switch(match){
				case "\n":
					replace = "\\n";
					break;
				case "\t":
					replace = "\\t";
					break;
				case "\"":
					replace = "\\\"";
					break;
			}
			return replace;
		});
	});
});

