import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

export default function button({ children, ...otherProps }) {

  return (
    <FormControl fullWidth>
      <Button {...otherProps}>
        {children}
      </Button>
    </FormControl>
  );

};
