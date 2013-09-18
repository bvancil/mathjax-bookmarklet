var maths=document.getElementsByClassName("latex");
while(maths.length){ 
	var s = document.createElement("script"); 
	s.setAttribute("type","math/tex"); 
	s.innerText = maths[0].getAttribute("alt"); 
	maths[0].parentElement.replaceChild(s,maths[0]);
};
MathJax.Hub.Typeset();
