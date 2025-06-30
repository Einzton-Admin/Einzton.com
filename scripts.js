// JScript File
function showsublayer(curlayer,menuid)
{
	
	for(var i=1;i<3;i++)
	{
		
		var elemid=document.getElementById(i);
		elemid.style.display='none';
		
	}
	if(curlayer==0)
	{
	}	
	else
	{
	var curid=document.getElementById(curlayer);
	curid.style.display='block';
	}
	for(var i=1;i<8;i++)
	{
		var notcurrent="menu"+i;
		document.getElementById(notcurrent).className="notcurrent";
		document.getElementById(notcurrent).style.backgroundColor='RGB(174,16,0)';
	}
	document.getElementById(menuid).style.backgroundColor='RGB(227,227,227)';
	
	
}
function display(submenuid,menu)
{

for(var i=1;i<3;i++)
	{
		
		var elem=document.getElementById(i);
		elem.style.display='none';
		
	}
	var elemid=document.getElementById(submenuid);
	elemid.style.display='block';
	for(var i=1;i<8;i++)
	{
		var notcurrent="menu"+i;
		document.getElementById(notcurrent).className="notcurrent";
		document.getElementById(notcurrent).style.backgroundColor='RGB(174,16,0)';
	}
	var menuid=document.getElementById(menu);
    menuid.style.backgroundColor='RGB(227,227,227)';
    
}
function hide(subid)
{
    
        
}
function hides(mainmenuid)
{

 if((mainmenuid != "menu3") &&(mainmenuid!="menu4"))
    {
        var elemid=document.getElementById(mainmenuid);
        elemid.style.backgroundColor='RGB(174,16,0)';
   }
//   else
//   {
//    var elemid=document.getElementById(mainmenuid);
//    elemid.style.backgroundColor='RGB(227,227,227)';
//   }
var sPath = window.location.pathname;

var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
var sname = sPage.substring(0,sPage.lastIndexOf('.') );

if((sname=="outsourcing")||(sname=="ourtechnologies")||(sname=="methodologies")||(sname=="servicesoffered")||(sname=="approaches"))
{
   for(var i=1;i<3;i++)
	{
		
		var elem=document.getElementById(i);
		elem.style.display='none';
		
	}
    var current=document.getElementById("1");
    current.style.display='block';
    for(var i=1;i<8;i++)
	{
		var notcurrent="menu"+i;
		document.getElementById(notcurrent).className="notcurrent";
		document.getElementById(notcurrent).style.backgroundColor='RGB(174,16,0)';
	}
	
    var menu=document.getElementById("menu3");
    menu.style.backgroundColor='RGB(227,227,227)';
}
else
if(sname=="security")
{
   for(var i=1;i<3;i++)
	{
		
		var elem=document.getElementById(i);
		elem.style.display='none';
		
	}
    var current=document.getElementById("2");
    current.style.display='block';
    for(var i=1;i<8;i++)
	{
		var notcurrent="menu"+i;
		document.getElementById(notcurrent).className="notcurrent";
		document.getElementById(notcurrent).style.backgroundColor='RGB(174,16,0)';
	}
	
    var menu=document.getElementById("menu4");
    menu.style.backgroundColor='RGB(227,227,227)';
    }
    }
    
//function hides()
//    {
//    var spath = window.location.pathname;

//var spage = spath.substring(spath.lastindexof('/') + 1);
//var sname = spage.substring(0,spage.lastindexof('.') );

//if((sname=="outsourcing")||(sname=="technology")||(sname=="method")||(sname=="offered")||(sname=="approach"))
//{
//   for(var i=1;i<3;i++)
//	{
//		
//		var elem=document.getelementbyid(i);
//		elem.style.display='none';
//		
//	}
//    var current=document.getelementbyid("1");
//    current.style.display='block';
//    var menu=document.getelementbyid("menu3");
//    menu.style.backgroundcolor='rgb(227,227,227)';
//}
//else
//if(sname=="security")
//{
//   for(var i=1;i<3;i++)
//	{
//		
//		var elem=document.getelementbyid(i);
//		elem.style.display='none';
//		
//	}
//    var current=document.getelementbyid("2");
//   current.style.display='block';
//   var menu=document.getelementbyid("menu4");
//   menu.style.backgroundcolor='rgb(227,227,227)';
//   }
//   }