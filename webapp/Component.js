sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/bootcamp/model/models",
	"sap/ui/bootcamp/controller/LoginDialog"
], function(UIComponent, Device, models, LoginDialog) {
	"use strict";

	return UIComponent.extend("sap.ui.bootcamp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.loginDialog = new LoginDialog();
			this.getRouter().initialize();
		}
	});
});