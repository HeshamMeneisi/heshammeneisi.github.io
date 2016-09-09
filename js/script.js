var projects = 
[
["Shannon","https://github.com/HeshamMeneisi/Shannon"],
["Lone Wolf","https://github.com/HeshamMeneisi/Lone-Wolf"],
["Inlumino","https://github.com/HeshamMeneisi/Inlumino"]
];

function* getProjObj(){	
	for (var i = 0;i<projects.length;i++)
	{					
		p = projects[i][0]		
		yield {name : p,img:"images/"+ p.toLowerCase().replace(" ","")+".png",link:projects[i][1]}
	}
}