import {useEffect} from "react";
import {useQuiz} from "./QuizContext";

function Timer() {
    const {dispatch, secondsRemaining, status} = useQuiz();

    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    useEffect(
        function () {
            if (status !== "active" || secondsRemaining <= 0) return;
            const id = setInterval(function () {
                dispatch({type: "tick"});
            }, 1000);

            return () => clearInterval(id);
        },
        [dispatch, status, secondsRemaining],
    );

    return (
        <div className="timer">
            {mins < 10 && "0"}
            {mins}:{seconds < 10 && "0"}
            {seconds}
        </div>
    );
}

export default Timer;
