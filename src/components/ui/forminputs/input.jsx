import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import React from 'react';

// import { useId } from 'react';

function input({ className = "", inputtype = "text", inputname = "", hanndlechange = "", label = "", ...props }, ref) {
  // const id = useId();
  // console.log(props);
  // console.log(props.formcontrolpops);
  return (
    <FormControl {...props.formcontrolpops}>
      <TextField
        // id={id}
        type={inputtype}
        name={inputname}
        label={label}
        onChange={hanndlechange}
        className={className}
        {...props}
        ref={ref}
      />
    </FormControl>
  )

};

export default React.forwardRef(input)
