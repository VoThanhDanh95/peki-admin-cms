import { Datagrid, DateField, FunctionField, List, NumberField, RichTextField, SearchInput, TextField, WithRecord } from "react-admin"
import { SimpleQuestionContent } from "../../types/questionContent"

const questionContentFilters = [
    <SearchInput source="content" alwaysOn />
]

const QuestionContentList = () => {
    return (
        <List
            sort={{ field: "createAt", order: "DESC" }}
            filters={questionContentFilters}
        >
            <Datagrid rowClick="show">
                <WithRecord render={({ content, ...rest }) => {
                    return <RichTextField source="content" record={{
                        ...rest,
                        content: content.length > 200 ? content.slice(0, 200) + "..." : content
                    }}
                    />
                }} />

                <TextField source="topic" />
                <NumberField source="level" />
                <FunctionField
                    label="Grammars"
                    render={(r: SimpleQuestionContent) => <>
                        {r.grammars.map((grammar, index) => <div key={index}>{`- ${grammar}`}</div>)}
                    </>}
                />
                <FunctionField
                    label="No. question"
                    render={(r: SimpleQuestionContent) => r.questions.length}
                />
                {/* <ReferenceField source="exerciseId" reference="exercises" /> */}
                <DateField source='createAt' />
                <TextField source="id" />
            </Datagrid>
        </List>
    )
}

export default QuestionContentList