import PropTypes from 'prop-types';
import {StatisticContainerStyle } from './Statistics.styled'

export const Statistics = ({good, neutral, bad, total, count}) => {
    return (
        <StatisticContainerStyle>
            <p className="statistic-text">Good: {good}</p>
            <p className="statistic-text">Neutral: {neutral}</p>
            <p className="statistic-text">Bad: {bad}</p>
            <p className="statistic-text">Total: {total}</p>
            <p className="statistic-text">Positive feedback: {count.toFixed(0)}%</p>
        </StatisticContainerStyle>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
};