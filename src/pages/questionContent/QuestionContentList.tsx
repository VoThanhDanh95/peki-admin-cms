import { List, SearchInput } from "react-admin"
import QuestionContentDataGrid from "../shared/QuestionContentDatagrid"

const questionContentFilters = [
    <SearchInput source="content" alwaysOn />
]

const QuestionContentList = () => {
    return (
        <List
            sort={{ field: "createAt", order: "DESC" }}
            filters={questionContentFilters}
        >
            <QuestionContentDataGrid rowClick="show" />
        </List>
    )
}

export default QuestionContentList