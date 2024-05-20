import { ArrayField, DateField, FunctionField, NumberField, RecordContextProvider, RichTextField, Show, SimpleShowLayout, TabbedShowLayout, TextField, WithListContext } from "react-admin"
import { QuestionContent } from "../../types/questionContent"
import QuestionFields from "./components/QuestionFields"

const QuestionContentDetail = () => {
    return (
        <Show>
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label="Main">
                    <RichTextField source="content" />
                    <TextField source="topic" />
                    <NumberField source="level" />
                    <FunctionField<QuestionContent>
                        label="Grammars"
                        render={(r) => <>
                            {r.grammars.map((grammar, index) => <div key={index}>{`- ${grammar}`}</div>)}
                        </>}
                    />
                    <DateField source="createAt" />
                    <TextField source="id" />
                </TabbedShowLayout.Tab>
                <TabbedShowLayout.Tab label="Questions">
                    <ArrayField source="questions" label={false}>
                        <WithListContext render={({ data }) => {
                            return <>{data && data.map(question => {
                                return (
                                    <RecordContextProvider value={question} key={question.id}>
                                        <QuestionFields />
                                    </RecordContextProvider>
                                )
                            })}</>
                        }} />
                    </ArrayField>
                </TabbedShowLayout.Tab>
            </TabbedShowLayout>
        </Show>
    )
}

export default QuestionContentDetail