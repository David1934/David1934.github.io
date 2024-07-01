function MakeAItem(Folder,index)
{
	var items=0;
	
	while(Folder[items+1])
		items+=3;
	items/=3;

	if(Folder[0]!="")
		document.write('<br><br><br><h1>' + Folder[0] + '</h1><br><br>');

	for(var i=1;i<items*3;i+=3)
	{
		if(Folder[i]!="-")
		{
			document.write('<li><img class="icon" src="images/explorer.png" alt="imgLost">');

			if(Folder[i].substring(0,8)=='https://')
				document.write('<a href="' + Folder[i] + '" target=_blank class=text>');
			else
				document.write('<a href="http://' + Folder[i] + '" target=_blank class=text>');

			document.write('<h2>' + Folder[i+1] + '</h2>');

            if(Folder[i+2]!="")
                document.write('<h3>' + Folder[i+2] + '</h3></a></li>');
            else
                document.write('<h3>Amazing navigator</h3></a></li>');
		}

	}
	return items;
}
