import { ArrayField, DateField, FunctionField, NumberField, RichTextField, Show, SimpleShowLayout, TextField } from "react-admin"
import { QuestionContent } from "../../types/questionContent"
import QuestionList from "./components/QuestionList"

const QuestionContentDetail = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <RichTextField source="content" />
                <TextField source="topic" />
                <NumberField source="level" />
                <FunctionField
                    label="Grammars"
                    render={(r: QuestionContent) => <>
                        {r.grammars.map((grammar, index) => <div key={index}>{`- ${grammar}`}</div>)}
                    </>}
                />
                <DateField source="createAt" />
                <TextField source="id" />
                <ArrayField source="questions">
                    <QuestionList />
                </ArrayField>
            </SimpleShowLayout>
        </Show>
    )
}

export default QuestionContentDetail