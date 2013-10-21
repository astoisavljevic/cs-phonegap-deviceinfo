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
        templateText = $('#template').html();
        // convert it to function
        templateFunction = _.template(templateText);
        // parse deviceName
        var deviceProperties = [
            {key: 'Device Name', value: device.name},
            {key: 'PhoneGap', value: device.phonegap},
            {key: 'Device Platform', value: device.platform},
            {key: 'Device UUID', value: device.uuid},
            {key: 'OS Version', value: device.version}
        ];
        parsedTemplate = templateFunction(deviceProperties);

        $('#deviceProperties').html(parsedTemplate);
    }
};
