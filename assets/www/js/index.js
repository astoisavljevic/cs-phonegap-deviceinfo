var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    onDeviceReady: function() {        
        var element = document.getElementById('deviceProperties');

        var deviceName = 
        	'<div class=\"device-property-item\">' + 
        		'<div class=\"device-property-item-left\">' + 
        			'<span>Device name:</span>' +
        		'</div>' +
        		'<div class=\"device-property-item-right\">' + 
        			'<span>' + device.name +'</span>' +
        		'</div>' +
        		'<div style=\"clear: both;\"></div>' +
        	'</div>';
        
        var phoneGapVersion = 
        	'<div class=\"device-property-item\">' + 
        		'<div class=\"device-property-item-left\">' + 
        			'<span>PhoneGap:</span>' +
        		'</div>' +
        		'<div class=\"device-property-item-right\">' + 
        			'<span>' + device.phonegap +'</span>' +
        		'</div>' +
        		'<div style=\"clear: both;\"></div>' +
        	'</div>';
        	
        var devicePlatform = 
        	'<div class=\"device-property-item\">' + 
        		'<div class=\"device-property-item-left\">' + 
        			'<span>Device Platform:</span>' +
        		'</div>' +
        		'<div class=\"device-property-item-right\">' + 
        			'<span>' + device.platform +'</span>' +
        		'</div>' +
        		'<div style=\"clear: both;\"></div>' +
        	'</div>';
        
        var deviceUUID = 
        	'<div class=\"device-property-item\">' + 
        		'<div class=\"device-property-item-left\">' + 
        			'<span>Device UUID:</span>' +
        		'</div>' +
        		'<div class=\"device-property-item-right\">' + 
        			'<span>' + device.uuid +'</span>' +
        		'</div>' +
        		'<div style=\"clear: both;\"></div>' +
        	'</div>';
        	
        var deviceVersion = 
        	'<div class=\"device-property-item\">' + 
        		'<div class=\"device-property-item-left\">' + 
        			'<span>Device UUID:</span>' +
        		'</div>' +
        		'<div class=\"device-property-item-right\">' + 
        			'<span>' + device.version +'</span>' +
        		'</div>' +
        		'<div style=\"clear: both;\"></div>' +
        	'</div>';
        
        element.innerHTML = deviceName + phoneGapVersion + devicePlatform + deviceUUID + 
        	deviceVersion;
    }
};
