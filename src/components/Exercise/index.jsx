import "./styles.scss";
const Exercise = ({ name, set }) => {
    return (
        <div className="exercise">
            <section className="exercise-top">{name}</section>
            <section className="exercise-bottom">
                <span>x{set.length}</span>
                <span>{set.join(", ")}</span>
            </section>
        </div>
    );
};

export default Exercise;
