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

var vwUserChannels = Ti.UI.createView({
   backgroundColor: '#000',
   height: 60,
//   width: 480, // OR Replace width with a right property value (this is a bug, yet works if you use left & right properties, width kills it whatever property value is set.)
   left: 0,
   top: 10
});

vwUserChannels.addEventListener('click', function(e){
	Ti.API.info('extra view');
})

var btnAddChannel = Ti.UI.createButton({
	right: 10,
	width: 30,
	height: 30,
	backgroundColor: '#66CD00',
	top: 10,
	zIndex: 10,
	title: 'fsdfsdfsd'
});	
btnAddChannel.addEventListener('click',function (e){
	alert('here');
});
vwUserChannels.add(btnAddChannel); //doesnt work?
//win1.add(btnAddChannel); //works

win1.add(vwUserChannels);

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

tabGroup.addTab(tab1);  

tabGroup.open();
