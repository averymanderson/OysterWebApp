/*global define */

define([
    'marionette',
    'templates',
    'underscore',
    'app'
], function (Marionette, templates, _, app) {
    'use strict';

    return Marionette.ItemView.extend({
        tagName: 'li',
        className: 'task-view table-view-cell',
        template: templates.task,

        ui: {
            'remove': '.remove'
        },

        events: {
            'click': 'onClickTask',
            'click .remove': 'onClickRemove'
        },

        onRender: function() {
            if (!this.model.get('doable')) {
                $(this.el).addClass('disabled');
            }

            // event listener
            this.listenTo(app.events, 'editButtonClicked', this.onClickEdit);
        },

        onClickTask: function(e) {
            e.preventDefault();
            this.model.set('completed', true);
            this.model.save();

            var user = window.app.user,
                bank_amt = user.get("bank");

            user.set("bank", bank_amt + this.model.get("amount"));

            this.close();
        },

        onClickRemove: function(e) {
            e.preventDefault();

            this.model.destroy();

            this.close();
        },

        onClickEdit: function() {
            this.ui.remove.removeClass('display-none');
        }
    });
});
