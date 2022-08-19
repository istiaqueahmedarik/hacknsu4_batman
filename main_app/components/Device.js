import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Image from 'next/image';
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import app from '../firebase';

function Device({user}) {
const cookies = new Cookies();

    const db = getFirestore(app);
    
    const [device_id,setDeviceid] = useState('')
    const device_update = async ()=>{

const Ref = doc(db, user,device_id);
    
cookies.set('device', device_id, { path: '/' });
await setDoc(Ref, {
     
});

    setDeviceid('')

    }
    return (
        <>
            <div className="contactSvg primary">
                <Image src="/../public/Electrician-pana.png" alt="logo" width={500} height={500}/>
                <h1 className='name'>Write your device id:</h1>
                <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" value={device_id} label="Device-id:" variant="filled" color="success" onChange={(e)=>setDeviceid(e.target.value)} />
      
    </Box>
    <Button onClick={device_update}> Update</Button>
            </div>
  

        </>
    )
}

export default Device