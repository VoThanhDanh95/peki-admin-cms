import toast from 'react-hot-toast';

const useToast = () => {
    const toastError = (str: string) => {
        toast.remove();
        toast.error(str);
    }

    const toastSuccess = (str: string) => {
        toast.remove();
        toast.success(str);
    }

    return {
        toastError,
        toastSuccess,
    };
}

export {
    useToast
}