// ==========================================================================
// Project:   EurekaJView.AlertModel
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals EurekaJView */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
EurekaJView.AlertModel = SC.Record.extend(
/** @scope EurekaJView.AlertModel.prototype */ {

    primaryKey: 'alertName',
    alertName: SC.Record.attr(String),
    alertActivated: SC.Record.attr(Boolean),
    alertInstrumentationNode: SC.Record.toOne('EurekaJView.AdminstrationTreeModel', {isMaster: YES }),
    alertNotifications: SC.Record.toMany('EurekaJView.EmailGroupModel', {isMaster: YES}),
    alertWarningValue: SC.Record.attr(Number),
    alertErrorValue: SC.Record.attr(Number),
    alertType: SC.Record.attr(String),
    alertDelay: SC.Record.attr(Number)
}) ;
