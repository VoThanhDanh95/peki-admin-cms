import { Labeled, NumberField, SimpleShowLayout, TextField, useRecordContext } from "react-admin";
import QuestionAnswersDetail from "./QuestionAnswersDetail";
import { Accordion, Typography } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QuestionContent } from "../../../types/questionContent";

const QuestionFields = () => {
    const record = useRecordContext<QuestionContent>()

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${record.id}-content`}
                id={`${record.id}-header`}
            >
                <Typography variant="body1" color="primary.main">{record.questionType}</Typography>
            </AccordionSummary>
            <AccordionDetails
                id={`${record.id}-content`}
                aria-labelledby={`${record.id}-header`}
            >
                <SimpleShowLayout>
                    <Labeled color="primary.main">
                        <TextField source="questionType" />
                    </Labeled>
                    <Labeled color="primary.main">
                        <NumberField source="level" />
                    </Labeled>
                    <Labeled color="primary.main">
                        <TextField source="requirement" />
                    </Labeled>
                    <Labeled color="primary.main">
                        <TextField source="id" />
                    </Labeled>
                    <QuestionAnswersDetail />
                </SimpleShowLayout>
            </AccordionDetails>
        </Accordion>
    )
}

export default QuestionFields