import "./styles.scss";

const Day = ({ dayInWeek, dayInMonth, children }) => {
    return (
        <div className="day">
            <section className="day-top">{dayInWeek}</section>
            <section className="day-bottom">
                <p className="day-in-month">{dayInMonth}</p>
                {children}
            </section>
        </div>
    );
};

export default Day;
