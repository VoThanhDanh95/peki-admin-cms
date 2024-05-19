import { Datagrid, DatagridProps, DateField, FunctionField, NumberField, TextField } from "react-admin"
import { SimpleQuestionContent } from "../../types/questionContent"

type Props = DatagridProps

const QuestionContentDataGrid = (props: Props) => {
    return (
        <Datagrid {...props}>
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
    )
}

export default QuestionContentDataGrid