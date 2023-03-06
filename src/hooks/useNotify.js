import {useSnackbar} from 'notistack';


export default function useNotify(){
    const {enqueueSnackbar} = useSnackbar();

    const successMessage = (msg)=>{
        return enqueueSnackbar(msg,{variant:'success'})
    }

    const loadingMessage = ()=>{
        return enqueueSnackbar('loading...',{variant:'info'})
    }
    
    const errorMessage = (msg)=>{
        return enqueueSnackbar(msg,{variant:'error'})
    }
    
    return{successMessage,errorMessage,loadingMessage}
}