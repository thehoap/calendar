import Exercise from "components/Exercise";
import "./styles.scss";

const Workout = ({ workoutName, exercises }) => {
    const handleDragWorkout = () => {
        console.log("drag");
    };
    return (
        <div className="workout" onDrag={handleDragWorkout}>
            <section className="workout-header">{workoutName}</section>
            <section className="workout-main">
                {exercises.map(({ id, name, set }) => (
                    <Exercise key={id} name={name} set={set} />
                ))}
            </section>
            <section className="workout-footer">
                <div className="workout-footer__icon">+</div>
            </section>
        </div>
    );
};

export default Workout;
