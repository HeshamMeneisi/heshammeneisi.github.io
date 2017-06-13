var projects =
[
["Anna", "https://github.com/HeshamMeneisi/AnnaPacman", "An AI that plays Pacman using a DQN."],
["Hallo", "https://github.com/HeshamMeneisi/Hallo", "A minimalist social network."],
["Shannon", "https://github.com/HeshamMeneisi/Shannon", "A mason SFG design and analysis tool."],
["Lone Wolf", "https://github.com/HeshamMeneisi/Lone-Wolf", "A puzzle/adventure game in XNA."],
["ASMSharp", "https://github.com/HeshamMeneisi/ASMSharp", "A highly customizable assembly IDE."],
["Inlumino", "https://github.com/HeshamMeneisi/Inlumino", "A cross-platform puzzle game."],
["Splash", "https://github.com/emam95/Splash", "A graphics design stub project in java."],
["Sylla", "", "A custom math script in C++."],
["WIS", "https://github.com/HeshamMeneisi/WIS", "An input recorder and simulator for windows."],
["Subtitle Editor", "https://github.com/HeshamMeneisi/Subtitle-Editor", "A subtitle file editor."]
];

function getProjObj(){
	var objlist = [];
	for (var i = 0;i<projects.length;i++)
	{
		p = projects[i][0];
		objlist.push({name : p,img:"images/"+ p.toLowerCase().replace(" ","")+".png",link:projects[i][1], desc:projects[i][2]});
	}
	return objlist;
}

function writeObj(obj, i){
	if(i%3 == 0)
  	{
    	document.write("<tr>");
  	}
  	i++;
		var a = "";
		var d = "";
  	if(obj["link"])
			a = "<a class=\"info\" href=\""+obj["link"]+"\">Learn More</a>";
		if(obj["desc"])
			d = "<p>"+obj["desc"]+"</p></br>";
	document.write("<td class=\"cell\">"+
	"<div class=\"hovereffect\">"+
	    "<img src=\""+obj["img"]+"\" class=\"rimg\">"+
	    "<div class=\"overlay\">"+
	       "<h2>"+obj["name"]+"</h2>"+
				 d+
	       a+
	    "</div></div></td>");
	if(i%3 == 0)
	{
	  document.write("</tr>");
	}
}
