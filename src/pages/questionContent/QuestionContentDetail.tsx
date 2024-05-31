import { ArrayField, DateField, DeleteButton, EditButton, FunctionField, Labeled, NumberField, RecordContextProvider, RichTextField, Show, TabbedShowLayout, TextField, TopToolbar, WithListContext } from "react-admin"
import { QuestionContent } from "../../types/questionContent"
import QuestionFields from "./components/QuestionFields"

const QuestionContentDetailShowActions = () => {
    return (
        <TopToolbar>
            <EditButton />
            <DeleteButton />
        </TopToolbar>
    )
}

const QuestionContentDetail = () => {
    return (
        <Show actions={<QuestionContentDetailShowActions />}>
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label="Main">
                    <Labeled color="primary.main">
                        <RichTextField source="content" />
                    </Labeled>
                    <Labeled color="primary.main">
                        <TextField source="topic" />
                    </Labeled>
                    <Labeled color="primary.main">
                        <NumberField source="level" />
                    </Labeled>
                    <Labeled color="primary.main">
                        <NumberField source="order" />
                    </Labeled>
                    <Labeled color="primary.main">
                        <FunctionField<QuestionContent>
                            label="Grammars"
                            render={(r) => <>
                                {r.grammars.map((grammar, index) => <div key={index}>{`- ${grammar}`}</div>)}
                            </>}
                        />
                    </Labeled>
                    <Labeled color="primary.main">
                        <DateField source="createAt" />
                    </Labeled>
                    <Labeled color="primary.main">
                        <TextField source="id" />
                    </Labeled>
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