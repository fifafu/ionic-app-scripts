var $ = document.querySelector.bind(document);

// Watch for changes on the checkboxes in the device dropdown
var iphone = $('#device-iphone');
var android = $('#device-android');
var windows = $('#device-windows');

var devices = [iphone, android, windows];
for(i in devices) {
  devices[i].addEventListener('change', function(e) {
    var device = this.name;
    console.log('Device changed', device, this.checked);

    showDevice(device, this.checked);
  })
}

function showDevice(device, isShowing) {
  $('#' + device).style.display = isShowing ? '' : 'none';
}
