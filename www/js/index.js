var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);

        // find template section block
        deviceNameTemplateText = $('#deviceName').html();
        // convert it to function
        deviceNameTemplate = _.template(deviceNameTemplateText);
        // parse deviceName
        var deviceName1 = { deviceNamePlaceholder : 'MB525'};
        parsedTemplate = deviceNameTemplate(deviceName1);

        $('#deviceProperties').html(parsedTemplate);
    }
};
