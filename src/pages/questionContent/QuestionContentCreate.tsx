import { RichTextInput } from "ra-input-rich-text"
import { ArrayInput, Create, FormDataConsumer, NumberInput, RecordContextProvider, SelectInput, SimpleForm, SimpleFormIterator, TextInput } from "react-admin"
import { allQuestionType } from "../../types/question"
import QuestionAnswersCreate from "./components/QuestionAnswersCreate"

const QuestionContentCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <RichTextInput source="content" fullWidth />
                <TextInput source="topic" />
                <NumberInput source="level" />
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
                                            <QuestionAnswersCreate />
                                        </RecordContextProvider>
                                    )
                                }
                            }
                        </FormDataConsumer>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    )
}

export default QuestionContentCreate