import { getOwnPropertySymbols } from "core-js/fn/object";

function QuestionPage(props) {
    return (
        <h1>{props.name}</h1>
    )
}

export default QuestionPage;