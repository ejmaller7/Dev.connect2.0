import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
    // As long as there is an alert & the length of the array is greater than 0, it will map the alert with a div and the alert msg which we get from the prop types of alerts
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
            { alert.msg }
        </div>
    ));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
