import { useState } from 'react';
import jsonp from 'jsonp';
import { Button, Stack, TextField } from '@mui/material';
import {isEmpty} from 'lodash';
import { MAILCHIMP_FID, MAILCHIMP_ID, MAILCHIMP_U, MAILCHIMP_URL } from '../../config';

const u = MAILCHIMP_U;
const id = MAILCHIMP_ID;
const baseUrl = MAILCHIMP_URL;
const f_id = MAILCHIMP_FID;

export const EmailSubscribe = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState('');

 const onSubmit = (e: { preventDefault: () => void; }) => {
   e.preventDefault();
   const url = `${baseUrl}/?u=${u}&id=${id}&f_id=${f_id}`;
   console.log(url);
   try {
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_: any, data: any) => {
      const { msg } = data;
      if (msg.result && msg.result === 'error') {
        setEmailError(true);
      }
      setMessage(msg);
    });
   }
  catch (error) {
    setMessage('An error occurred. Please try again later.');
  }
  setEmail(''); 
 };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

 return (
   <div>
     <form onSubmit={onSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          error={emailError}
          helperText={message}
          onChange={(e) => {
            const email = e.target.value;
            setEmail(email);
            setEmailError(!isValidEmail(email));
          }}
        />
        <Button type="submit" variant="contained" sx={{mt: 3, maxHeight: '56px'}} disabled={emailError || isEmpty(email)}>Submit</Button>
      </Stack>
     </form>
   </div>
 );
};
