'use strict';

/* globals $, app, socket, define */

define('admin/plugins/osm-map', ['settings'], function (settings) {
	var ACP = {};

	ACP.init = function () {
		settings.load('osm-map', $('.osm-map-settings'));

		$('#save').on('click', function () {
			settings.save('osm-map', $('.osm-map-settings'), function () {
				app.alert({
					type: 'success',
					alert_id: 'osm-map-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function () {
						socket.emit('admin.reload');
					},
				});
			});
		});
	};

	return ACP;
});
