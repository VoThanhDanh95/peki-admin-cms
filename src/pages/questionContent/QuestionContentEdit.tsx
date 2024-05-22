import { RichTextInput } from "ra-input-rich-text"
import { ArrayInput, Edit, FormDataConsumer, NumberInput, RecordContextProvider, SelectInput, SimpleForm, SimpleFormIterator, TextInput } from "react-admin"
import { allQuestionType } from "../../types/question"
import QuestionAnswersEdit from "./components/QuestionAnswersEdit"

const QuestionContentEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <RichTextInput source="content" fullWidth />
                <TextInput source="topic" fullWidth />
                <NumberInput source="level" fullWidth />
                <ArrayInput source="grammars" fullWidth>
                    <SimpleFormIterator>
                        <TextInput source="" fullWidth />
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="questions" fullWidth>
                    <SimpleFormIterator fullWidth>
                        <NumberInput source="level" fullWidth />
                        <SelectInput
                            source="questionType"
                            choices={allQuestionType.map(item => ({
                                id: item,
                                name: item,
                            }))}
                            fullWidth
                        />
                        <TextInput source="requirement" fullWidth multiline />
                        <FormDataConsumer>
                            {
                                ({
                                    scopedFormData,
                                    getSource,
                                }) => {
                                    return (
                                        <RecordContextProvider value={{ scopedFormData, getSource }}>
                                            <QuestionAnswersEdit />
                                        </RecordContextProvider>
                                    )
                                }
                            }
                        </FormDataConsumer>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Edit>
    )
}

export default QuestionContentEdit