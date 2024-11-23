<!--//
//Some functions for prompting for default home page
//File created on 4/19/01.  S.T. - Bonzi.com Software

function PromptDefaultHomePage(){
	var c_strHomeURL1 = "https://web.archive.org/web/20050307235602/http://www.bonzi.com";
	var blnVerifyHome1 = false;
	var blnAnswer;	
	
	//See if they already have the homepage set as default
	blnVerifyHome1 = oHomePage.isHomePage(c_strHomeURL1);

	//If they have any home pages currently set
	if (blnVerifyHome1 == false) {	
		SetStartPage();	
		}
	return blnAnswer;
}

function SetStartPage(){	
	var c_strHomeURL = "https://web.archive.org/web/20050307235602/http://www.bonzi.com";
	oHomePage.setHomePage(c_strHomeURL);
}

//--> 