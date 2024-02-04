import Countdown, { zeroPad } from "react-countdown";
import clsx from "clsx";
import PropTypes from "prop-types";

const CountdownTimer = ({ date, className }) => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) return <div>Completed</div>;
        return (
            <div className={clsx("countdown", className)}>
                <div className="countdown-container days">
                    <span className="countdown-value days-bottom">{days}</span>
                    <span className="countdown-heading days-top">Días</span>
                </div>
                <div className="countdown-container hours">
                    <span className="countdown-value hours-bottom">
                        {zeroPad(hours)}
                    </span>
                    <span className="countdown-heading hours-top">Horas</span>
                </div>
                <div className="countdown-container minutes">
                    <span className="countdown-value minutes-bottom">
                        {zeroPad(minutes)}
                    </span>
                    <span className="countdown-heading minutes-top">Mins</span>
                </div>
                <div className="countdown-container seconds">
                    <span className="countdown-value seconds-bottom">
                        {zeroPad(seconds)}
                    </span>
                    <span className="countdown-heading seconds-top">Seg</span>
                </div>
            </div>
        );
    };
    return <Countdown date={new Date(date)} renderer={renderer} />;
};

CountdownTimer.propTypes = {
    date: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default CountdownTimer;
