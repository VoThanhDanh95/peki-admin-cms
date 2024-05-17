import { Datagrid, DateField, FunctionField, List, NumberField, SearchInput, TextField } from "react-admin"
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
                <FunctionField
                    label="content"
                    sortBy='content'
                    sortable
                    render={(r: SimpleQuestionContent) => r.content.length > 200 ? r.content.slice(0, 200) + "..." : r.content}
                />
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