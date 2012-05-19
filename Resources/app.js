// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

// var label1 = Titanium.UI.createLabel({
	// color:'#999',
	// text:'I am Window 1',
	// font:{fontSize:20,fontFamily:'Helvetica Neue'},
	// textAlign:'center',
	// width:'auto'
// });
// 
// win1.add(label1);

var imageslider = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true,
    backgroundImage:('img/bgimg.png'),
    width: '100%',
    height:300
});

function createImgForScroll(img){
	var myimage = Titanium.UI.createImageView({
	                image: img,
	                left: 20,
	                top: 3,
	                width:200,
	                height:150,
	                borderColor:'#ebebee',
	                borderWidth:5,
	            });		
	return myimage;
}

imageslider.add(createImgForScroll('img/scrollTest/blueMonster.jpeg') );
imageslider.add(createImgForScroll('img/scrollTest/download.jpeg') );
imageslider.add(createImgForScroll('img/scrollTest/ears.jpeg') );
imageslider.add(createImgForScroll('img/scrollTest/mermaid.jpeg') );
imageslider.add(createImgForScroll('img/scrollTest/plouto.jpeg') );

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
