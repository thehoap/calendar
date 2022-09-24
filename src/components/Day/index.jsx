import "./styles.scss";

const Day = ({ dayInWeek, dayInMonth, children }) => {
    const date = new Date();
    const today = date.getDate();
    console.log("🚀 ~ file: index.jsx ~ line 6 ~ Day ~ today", today);

    return (
        <div className="day">
            <section className="day-top">{dayInWeek}</section>
            <section className="day-bottom">
                <p
                    className={`day-in-month ${
                        today === Number(dayInMonth) ? "highlight" : ""
                    }`}
                >
                    {dayInMonth}
                </p>
                {children}
            </section>
        </div>
    );
};

export default Day;
