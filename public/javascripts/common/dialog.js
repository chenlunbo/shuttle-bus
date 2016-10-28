
/* common dialog */
var alertDialog = (function ($) {
	// Creating modal dialog's DOM
	var $dialog = $(
		'<div id="alertDialog" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;z-index: 999999">' +
			'<div class="modal-dialog modal-m">' +
				'<div class="modal-content">' +
					'<div class="modal-header"><h3 id="alertDialog_title" style="margin:0;"></h3></div>' +
					'<div id="alertDialog_message" class="modal-body"></div>' +
					'<div class="modal-footer">' +
						'<button id="alertDialog_cancelButton" type="button" class="btn btn-danger" data-dismiss="modal"></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');

	return {
		show: function (title, message, cancelButtonText, callBack) {
			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-m');
			$dialog.find('.progress-bar').attr('class', 'progress-bar');

			// set value
			$dialog.find("#alertDialog_title").text(title);
			$dialog.find("#alertDialog_message").text(message);
			$dialog.find("#alertDialog_cancelButton").text(cancelButtonText);

			// bind event
			$dialog.find("#alertDialog_cancelButton").off('click').on('click',callBack);

			$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
				$dialog.remove();
			});

			// Opening dialog
			$dialog.modal();
			waitingDialogStartTime = new Date();
		},
		hide: function () {
			$dialog.modal('hide');
		}
	}
})(jQuery);
var confirmDialog = (function ($) {
	// Creating modal dialog's DOM
	var $dialog = $(
		'<div id="confirmDialog" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
			'<div class="modal-dialog modal-m">' +
				'<div class="modal-content">' +
					'<div class="modal-header"><h3 id="confirmDialog_title" style="margin:0;"></h3></div>' +
					'<div id="confirmDialog_message" class="modal-body"></div>' +
					'<div class="modal-footer">' +
						'<button id="confirmDialog_confirmButton" type="button" class="btn btn-success" data-dismiss="modal"></button>' +
						'<button id="confirmDialog_cancelButton" type="button" class="btn btn-danger" data-dismiss="modal"></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');

	return {
		show: function (title, message, confirmButtonText, cancelButtonText, confirmCallback, cancelCallback) {
			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-m');
			$dialog.find('.progress-bar').attr('class', 'progress-bar');

			// set value
			$dialog.find("#confirmDialog_title").text(title);
			$dialog.find("#confirmDialog_message").text(message);
			$dialog.find("#confirmDialog_confirmButton").text(confirmButtonText);
			$dialog.find("#confirmDialog_cancelButton").text(cancelButtonText);

			// bind event
			$dialog.find("#confirmDialog_confirmButton").off('click').on('click',confirmCallback);
			$dialog.find("#confirmDialog_cancelButton").off('click').on('click',cancelCallback);

			$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
				$dialog.remove();
			});

			// Opening dialog
			$dialog.modal();
		},
		hide: function () {
			$dialog.modal('hide');
		}
	}
})(jQuery);
var waitingDialog = (function ($) {
    // Creating modal dialog's DOM
	var $dialog = $(
		'<div id="waitingDialog" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;z-index: 99999">' +
			'<div class="modal-dialog modal-m">' +
				'<div class="modal-content">' +
					'<div class="modal-header"><h3 id="waitingDialog_message" style="margin:0;"></h3></div>' +
					'<div class="modal-body">' +
						'<div class="progress progress-striped active" style="margin-bottom:0;">' +
							'<div class="progress-bar" style="width: 100%"></div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');

	return {
		show: function (message) {
			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-m');
			$dialog.find('.progress-bar').attr('class', 'progress-bar');

			// set value
			$dialog.find('#waitingDialog_message').text(message);

			$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
				$dialog.remove();
			});

			// Opening dialog
			$dialog.modal();
		},
		hide: function () {
			$dialog.modal('hide');

		},
		update: function (message) {
			$dialog.find('#waitingDialog_message').text(message);
		}
	}
})(jQuery);
var downloadDialog = (function ($) {
	// Creating modal dialog's DOM
	var $dialog = $(
		'<div id="downloadDialog" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
			'<div class="modal-dialog modal-m">' +
				'<div class="modal-content">' +
					'<div class="modal-header"><h3 id="downloadDialog_message" style="margin:0;"></h3></div>' +
					'<div class="modal-body">' +
						'<div class="progress progress-striped active">' +
							'<div id="downloadDialog_progress" class="progress-bar progress-bar-success" role="progressbar"' +
							'aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"' +
							'style="width: 0%;">' +
								'<span id="downloadDialog_progressValue">0%</span>' +
						'</div>' +
					'</div>' +
					'<div class="modal-footer">' +
						'<button id="downloadDialog_cancelButton" type="button" class="btn btn-danger" data-dismiss="modal"></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');

	return {
		show: function (message, cancelButtonText) {
			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-m');
			$dialog.find('.progress-bar').attr('class', 'progress-bar');

			// set value
			$dialog.find('#downloadDialog_progress').css("width","0%");
			$dialog.find('#downloadDialog_progressValue').html("0%");

			$dialog.find('#downloadDialog_message').text(message + "...");
			$dialog.find('#downloadDialog_cancelButton').text(cancelButtonText);

			$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
				$dialog.remove();
			});

			// Opening dialog
			$dialog.modal();
		},
		hide: function () {
			$dialog.modal('hide');
		},
		updatePercent: function (percent) {
			percent = (100.0 * percent).toFixed(0) + "%";
			$dialog.find('#downloadDialog_progress').css("width",percent);
			$dialog.find('#downloadDialog_progressValue').html(percent);
		},
		updateMessage: function (message) {
			$dialog.find('#downloadDialog_message').text(message + "...");
		},
		bindCancelEvent: function(cancelCallback){
			$dialog.find('#downloadDialog_cancelButton').off('click').on('click', cancelCallback);
		}
	}
})(jQuery);
var textFieldDialog = (function ($) {
	// Creating modal dialog's DOM
	var $dialog = $(
		'<div id="textFieldDialog" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
			'<div class="modal-dialog modal-m">' +
				'<div class="modal-content">' +
					'<div class="modal-header"><h3 id="textFieldDialog_title" style="margin:0;"></h3></div>' +
					'<div class="modal-body">' +
						'<textarea id="textFieldDialog_message" class="form-control" rows="5" style="resize: vertical"></textarea>' +
					'</div>' +
					'<div class="modal-footer">' +
						'<button id="textFieldDialog_confirmButton" type="button" class="btn btn-success" data-dismiss="modal"></button>' +
						'<button id="textFieldDialog_cancelButton" type="button" class="btn btn-danger" data-dismiss="modal"></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');

	return {
		show: function (title, message, confirmButtonText, cancelButtonText, confirmCallback) {
			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-m');
			$dialog.find('.progress-bar').attr('class', 'progress-bar');

			// set value
			$dialog.find("#textFieldDialog_title").text(title);
			$dialog.find("#textFieldDialog_message").val(message);
			$dialog.find("#textFieldDialog_confirmButton").text(confirmButtonText);
			$dialog.find("#textFieldDialog_cancelButton").text(cancelButtonText);

			// bind event
			$dialog.find("#textFieldDialog_confirmButton").off('click').on('click', function () {
				if(confirmCallback){
					confirmCallback($dialog.find("#textFieldDialog_message").val());
				}
			});

			$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
				$dialog.remove();
			});

			// Opening dialog
			$dialog.modal();
		},
		hide: function () {
			$dialog.modal('hide');
		}
	}
})(jQuery);
var dynamicBodyDialog = (function ($) {
	// Creating modal dialog's DOM
	var $dialog = $(
		'<div id="dynamicBodyDialog" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true">' +
			'<div class="modal-dialog modal-m">' +
				'<div class="modal-content">' +
					'<div class="modal-header"><h3 id="dynamicBodyDialog_title" style="margin:0;"></h3></div>' +
					'<div id="dynamicBodyDialog_body" class="modal-body"></div>' +
					'<div class="modal-footer">' +
						'<button id="dynamicBodyDialog_confirmButton" type="button" class="btn btn-success" data-dismiss="modal"></button>' +
						'<button id="dynamicBodyDialog_cancelButton" type="button" class="btn btn-danger" data-dismiss="modal"></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');

	return {
		showTemp : function (title, bodyHTML, option, confirmButtonText, cancelButtonText, confirmCallback, beforeShowCallback,afterHideCallback) {
			var $tempDialog = $dialog.clone();
			$tempDialog.attr('id','dynamicBodyDialog_temp');
			option = option==null ? {}: option;
			option.tempDialog = $tempDialog;
			this.show(title, bodyHTML, option, confirmButtonText, cancelButtonText, confirmCallback, beforeShowCallback, function () {
				if(afterHideCallback){
					afterHideCallback();
				}
				$tempDialog.remove();
			});
		},

		show: function (title, bodyHTML, option, confirmButtonText, cancelButtonText, confirmCallback, beforeShowCallback,afterHideCallback) {
			var dialog = option != null ? option.tempDialog || $dialog : $dialog;
			// Configuring dialog
			dialog.css("padding-top",option != null ? option.paddingTop || "15%" : "15%");
			dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-m');
			dialog.find('.modal-dialog').css('width', option != null ? option.width || '600px' : '600px');
			dialog.find('.progress-bar').attr('class', 'progress-bar');

			// set value
			dialog.find("#dynamicBodyDialog_title").text(title);
			dialog.find("#dynamicBodyDialog_body").html(bodyHTML);
			dialog.find("#dynamicBodyDialog_confirmButton").text(confirmButtonText);
			dialog.find("#dynamicBodyDialog_cancelButton").text(cancelButtonText);

			// bind event
			dialog.find("#dynamicBodyDialog_confirmButton").off('click').on('click', function () {
				if(confirmCallback){
					confirmCallback();
				}
			});

			// Opening dialog
			dialog.modal();
			dialog.off('shown.bs.modal').on('shown.bs.modal', function () {
				if(beforeShowCallback){
					beforeShowCallback();
				}
			});
			dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
				dialog.remove();
				if(afterHideCallback){
					afterHideCallback();
				}
			});

		},
		hide: function () {
			$dialog.modal('hide');
		}
	}
})(jQuery);
var dynamicBodyDialogSingleButton = (function ($) {
	// Creating modal dialog's DOM
	var $dialog = $(
		'<div id="dynamicBodyDialogSingleButton" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
			'<div class="modal-dialog modal-m">' +
				'<div class="modal-content" >' +
					'<div class="modal-header"><h3 id="dynamicBodyDialog_title" style="margin:0;"></h3></div>' +
					'<div id="dynamicBodyDialog_body" class="modal-body"></div>' +
					'<div class="modal-footer">' +
						'<button id="dynamicBodyDialog_closeButton" type="button" class="btn btn-danger" data-dismiss="modal"></button>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>');

	return {
		show: function (title, bodyHTML, closeButtonText, closeCallback,beforeShowCallback,afterHideCallback) {
			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-m');
			$dialog.find('.progress-bar').attr('class', 'progress-bar');

			// set value
			$dialog.find("#dynamicBodyDialog_title").text(title);
			$dialog.find("#dynamicBodyDialog_body").html(bodyHTML);
			$dialog.find("#dynamicBodyDialog_closeButton").text(closeButtonText);

			// bind event
			$dialog.find("#dynamicBodyDialog_closeButton").off('click').on('click', function () {
				if(closeCallback){
					closeCallback();
				}
			});

			// Opening dialog
			$dialog.modal();
			$dialog.off('shown.bs.modal').on('shown.bs.modal', function () {
				if(beforeShowCallback){
					beforeShowCallback();
				}
			});
			$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
				$dialog.remove();
				if(afterHideCallback){
					afterHideCallback();
				}
			});

		},
		hide: function () {
			$dialog.modal('hide');
		}
	}
})(jQuery);
var dynamicBodyDialogNoButton = (function ($) {
	// Creating modal dialog's DOM
	var $dialog = $(
		'<div id="dynamicBodyDialogNoButton" class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
		'<div class="modal-dialog modal-m">' +
		'<div class="modal-content">' +
		'<div class="modal-header"><h3 id="dynamicBodyDialog_title" style="margin:0;"></h3></div>' +
		'<div id="dynamicBodyDialog_body" class="modal-body"></div>' +
		'</div>' +
		'</div>' +
		'</div>');

	return {
		show: function (title, bodyHTML, beforeShowCallback,afterHideCallback) {
			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-m');
			$dialog.find('.progress-bar').attr('class', 'progress-bar');

			// set value
			$dialog.find("#dynamicBodyDialog_title").text(title);
			$dialog.find("#dynamicBodyDialog_body").html(bodyHTML);

			// bind event


			// Opening dialog
			$dialog.modal();
			$dialog.off('shown.bs.modal').on('shown.bs.modal', function () {
				if(beforeShowCallback){
					beforeShowCallback();
				}
			});
			$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
				$dialog.remove();
				if(afterHideCallback){
					afterHideCallback();
				}
			});

		},
		hide: function () {
			$dialog.modal('hide');
		}
	}
})(jQuery);
var alertWarning = (function () {
	return {
		show : function(warningText){
			if($("#alertWarning")){
				$("#alertWarning").remove();
			}
			var warning = $(
				'<div id="alertWarning" class="alert alert-danger alert-dismissable center shadow" style="position: fixed; top: 5px; left: 25%; width: 50%;display: none;z-index: 999999">'+
				warningText +
				'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
				'</div>');
			warning.appendTo($('body'));
			warning.fadeIn();
		}
	}
})(jQuery);
var webViewDialogSingleButton = (function ($) {
	// Creating modal dialog's DOM
	var $dialog = $(
		'<div id="webViewDialogSingleButton" class="modal fade text-center" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:3%; overflow-y:visible;">' +
			'<img id="webViewDialogSingleButton_closeButton" style="position: absolute;cursor: pointer" src="../resources/image/close_red.png" data-dismiss="modal">' +
			'<div class="modal-dialog modal-m" style="display: inline-block; width: auto; height: 90%">' +
				'<div class="modal-content" style="height:100%">' +
					'<div id="webViewDialogSingleButton_body" class="modal-body" style="height:100%"></div>' +
				'</div>' +
			'</div>' +
		'</div>');

	return {
		show: function (title, bodyHTML, closeButtonText, closeCallback,beforeShowCallback,afterHideCallback) {
			// Configuring dialog

			$dialog.find('#webViewDialogSingleButton_closeButton').attr('title',LOCALIZABLE.COMMON.CLOSE);
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-m');
			$dialog.find('.progress-bar').attr('class', 'progress-bar');

			// set value
			$dialog.find("#webViewDialogSingleButton_title").text(title);
			$dialog.find("#webViewDialogSingleButton_body").html(bodyHTML);
			$dialog.find("#webViewDialogSingleButton_closeButton").text(closeButtonText);

			// bind event
			$dialog.find("#webViewDialogSingleButton_closeButton").off('click').on('click', function () {
				if(closeCallback){
					closeCallback();
				}
			});

			// Opening dialog
			$dialog.modal();
			$dialog.off('shown.bs.modal').on('shown.bs.modal', function () {
				if(beforeShowCallback){
					beforeShowCallback();
				}
			});
			$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function () {
				$dialog.remove();
				if(afterHideCallback){
					afterHideCallback();
				}
			});

		},
		hide: function () {
			$dialog.modal('hide');
		}
	}
})(jQuery);