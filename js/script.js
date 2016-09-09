var projects = 
[
["Shannon","https://github.com/HeshamMeneisi/Shannon"],
["Lone Wolf","https://github.com/HeshamMeneisi/Lone-Wolf"],
["ASMSharp","https://github.com/HeshamMeneisi/ASMSharp"],
["Inlumino","https://github.com/HeshamMeneisi/Inlumino"],
["Splash","https://github.com/emam95/Splash"],
["Sylla",""],
["WIS",""]
];

function* getProjObj(){	
	for (var i = 0;i<projects.length;i++)
	{					
		p = projects[i][0]		
		yield {name : p,img:"images/"+ p.toLowerCase().replace(" ","")+".png",link:projects[i][1]}
	}
}

function writeObj(obj){
	if(i%3 == 0)
  	{
    	document.write("<tr>")
  	}
  	i++
  	var hr = ""
  	if(obj["link"] != "")
  		hr = "href=\""+obj["link"]+"\""  	
	document.write("<td class=\"cell\">"+
	"<div class=\"hovereffect\">"+
	    "<img src=\""+obj["img"]+"\" class=\"rimg\">"+
	    "<div class=\"overlay\">"+
	       "<h2>"+obj["name"]+"</h2>"+
	       "<a class=\"info\""+hr+">Go to repo</a>"+
	    "</div></div></td>")
	if(i%3 == 0)
	{
	  document.write("</tr>")
	} 
}