import { Button, Typography } from '@mui/material';

type Props = {
    onClick: VoidFunction
    label: string
}

const RichTextInputToolbarButton = ({ onClick, label }: Props) => {
    return (
        <Button
            onClick={onClick}
            sx={{
                border: 1,
                borderColor: 'text.disabled'
            }}
        >
            <Typography component="b" variant='body2' color='text.secondary'>{label}</Typography>
        </Button>
    )
}

export default RichTextInputToolbarButton