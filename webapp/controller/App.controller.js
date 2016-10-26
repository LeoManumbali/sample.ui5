sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";

	return Controller.extend("sap.ui.bootcamp.controller.App", {
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
			onInit: function() {
				var oData = {
					field: {
						username: "Leo Man",
						tryobj:{field1:"one", field2:"two"}
					}
				};
				var oModel = new JSONModel(oData);
				this.getView().setModel(oModel,"try");
				
				var i18nModel = new ResourceModel({
					bundleName:"sap.ui.bootcamp.i18n.i18n"
				});
				this.getView().setModel(i18nModel,"i18n");
				
				//var oTest = this.getView().;
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.bootcamp.view.App
		 */
		//	onExit: function() {
		//
		//	}

		onLoginPress: function() {
			// var oTextField = this.getView().byId("uname");
			// sap.m.MessageToast.show("Login Attempt by " + oTextField.getValue());
			
			var oUserName = this.getView().byId("uname").getValue();
			var oPassword = this.getView().byId("pword").getValue();
			var sValUname = "Leo Man";
			var sValPass = "abcd1234";
			var sMessage = "";

			if (oUserName.length === 0 || oPassword.length === 0) {
				sMessage = "Populate both fields";
			} else if (oUserName.length < 6 || oUserName.length > 8) {
				sMessage = "Username must be 6 to 8 characters only";
			} else if (oPassword.length < 7 || oPassword.length > 10) {
				sMessage = "Password must be 7 to 10 characters only";
			} else if (oUserName !== sValUname || oPassword !== sValPass) {
				sMessage = "Invalid username or password";
			} else {
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel("try").getProperty("/field/username");
				sMessage = oBundle.getText("helloMsg", [sRecipient]);
				// sMessage = "Successful Login!";
			}
			
			if (sMessage.length !== 0) {
				MessageToast.show(sMessage);
				// console.log(sMessage);
			}
			
		},
		
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