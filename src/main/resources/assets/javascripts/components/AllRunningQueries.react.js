/** @jsx React.DOM */

/**
 * Dependencies
 */
var React = require('react');

/**
 * Stores
 */
var RunStore = require('../stores/RunStore');

/**
 * Components
 */
var RunsTable = require('./RunsTable.react');

var AllRunningQueries = React.createClass({
  displayName: 'AllRunningQueries',

  componentWillMount() {
    RunStore.ensureFetchedHistory();
  },

  render() {
    return <RunsTable />;
  }
});

module.exports = AllRunningQueries;
