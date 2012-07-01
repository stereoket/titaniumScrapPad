// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//  
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#C7C7C7'
});

var imageslider = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:80,
    top: 5,
    left: 5,
    showVerticalScrollIndicator:false,
    showHorizontalScrollIndicator:true,
    // backgroundImage:('img/bgimg.png'),
    backgroundColor: '#C7C7C7',
    width: '100%',
    height:80
});

var scrollView = {
	self : this,
	postitionOffset : 10,
	imgWidth : 100,
	
	count: -1,

	createImgForScroll: function (imgForView) {
		var self = this;
		self.count = self.count + 1;
		self.postitionOffset = self.count * self.imgWidth;
		var myimage = Titanium.UI.createView({
		                backgroundImage: imgForView,
		                width:self.width,
		                height:80,
		                borderRadius:2,
		                left: self.postitionOffset,
		                alertText: imgForView
		            });	
        myimage.addEventListener('click',function(e){
        	Ti.API.info(e);	
        });	
		return myimage;
	}	 
}



imageslider.add(scrollView.createImgForScroll('img/sidescrollTest/blueMonster.jpeg') );
imageslider.add(scrollView.createImgForScroll('img/sidescrollTest/download.jpeg') );
imageslider.add(scrollView.createImgForScroll('img/sidescrollTest/ears.jpeg') );
imageslider.add(scrollView.createImgForScroll('img/sidescrollTest/mermaid.jpeg') );
imageslider.add(scrollView.createImgForScroll('img/sidescrollTest/plouto.jpeg') );

win1.add(imageslider);

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
