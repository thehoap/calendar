import Exercise from "components/Exercise";
import "./styles.scss";

const Workout = ({ workoutName, exercises }) => {
    const onDragStart = (e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    return (
        <div className="workout" draggable onDragStart={onDragStart}>
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
