sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.bootcamp.controller.LoginPanel", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcamp.view.LoginPanel
		 */
			// onInit: function() {
			// 	var oData = {
			// 		field: {
			// 			username: "Leo Man",
			// 			tryobj:{field1:"one", field2:"two"}
			// 		}
			// 	};
			// 	var oModel = new sap.ui.model.json.JSONModel(oData);
			// 	this.getView().setModel(oModel,"try");
				
			// 	var i18nModel = new sap.ui.model.resource.ResourceModel({
			// 		bundleName:"sap.ui.bootcamp.i18n.i18n"
			// 	});
			// 	this.getView().setModel(i18nModel,"i18n");		
			// },

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcamp.view.LoginPanel
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcamp.view.LoginPanel
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcamp.view.LoginPanel
		 */
		//	onExit: function() {
		//
		//	}
		
		// _getDialog: function() {
		// 	if(!this._oDialog) {
		// 		this._oDialog = sap.ui.xmlfragment("sap.ui.bootcamp.view.LoginDialog");
		// 		this.getView().addDependent(this._oDialog);
		// 	}
		// 	return this._oDialog;
		// },
		
		onOpenDialog: function() {
			// this._getDialog().open();
			this.getOwnerComponent().loginDialog.open(this.getView());
			console.log(this.getView());
		}

	});

});