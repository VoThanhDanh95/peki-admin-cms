import { Datagrid, DatagridProps, DateField, FunctionField, NumberField, RichTextField, TextField, WithRecord } from "react-admin"
import { SimpleQuestionContent } from "../../../types/questionContent"

type Props = DatagridProps

const QuestionContentDataGrid = (props: Props) => {
    return (
        <Datagrid {...props}>
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
            <NumberField source="order" />
            <DateField source='createAt' />
            <TextField source="id" />
        </Datagrid>
    )
}

export default QuestionContentDataGrid