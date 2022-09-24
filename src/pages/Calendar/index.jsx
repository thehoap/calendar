import Day from "components/Day";
import Workout from "components/Workout";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";

const Calendar = () => {
    const days = [
        { id: uuidv4(), dayInWeek: "Mon", dayInMonth: "05" },
        { id: uuidv4(), dayInWeek: "Tue", dayInMonth: "06" },
        { id: uuidv4(), dayInWeek: "Wed", dayInMonth: "07" },
        { id: uuidv4(), dayInWeek: "Thu", dayInMonth: "08" },
        { id: uuidv4(), dayInWeek: "Fri", dayInMonth: "09" },
        { id: uuidv4(), dayInWeek: "Sat", dayInMonth: "10" },
        { id: uuidv4(), dayInWeek: "Sun", dayInMonth: "11" },
    ];
    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        const getCalendar = async () => {
            let res = await fetch("http://localhost:3000/calendar");
            res = res.json();
            return res;
        };
        getCalendar().then((res) => setCalendar(res));
    }, []);

    return (
        <div className="calendar">
            {calendar.map(({ dayInWeek, dayInMonth, workouts }) => (
                <Day
                    key={dayInWeek}
                    dayInWeek={dayInWeek}
                    dayInMonth={dayInMonth}
                >
                    {workouts.map(({ id, name, exercises }) => (
                        <Workout
                            key={id}
                            workoutName={name}
                            exercises={exercises}
                        />
                    ))}
                </Day>
            ))}
        </div>
    );
};

export default Calendar;
