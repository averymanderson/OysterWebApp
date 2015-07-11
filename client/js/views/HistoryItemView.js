/*global define */

define([
    'marionette',
    'templates',
    'underscore',
], function (Marionette, templates, _) {
    'use strict';

    return Marionette.ItemView.extend({
        className: 'history-item-view list-group-item',
        template: templates.history,

        events: {
            'click': 'onClickTask'
        },

        onRender: function() {
            // $(this.el).attr('href', '#');
            // if (!this.model.get('doable')) {
            //     $(this.el).addClass('disabled');
            // }
        },

        onClickTask: function(e) {
            e.preventDefault();
            // this.model.set('completed', true);
            // this.model.save();

            // var user = window.app.user,
            //     bank_amt = user.get("bank");

            // user.set("bank", bank_amt + this.model.get("reward"));

            // this.close();
        }
    });
});