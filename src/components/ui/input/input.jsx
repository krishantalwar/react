import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/FormControl';

export default function input({ children,inputtype="text",label,...otherProps }) {
    return (
      <FormControl fullWidth>
        <InputLabel >{label}</InputLabel>
        <TextField type={inputtype}  {...otherProps}/>
      </FormControl>
    );
    
};
