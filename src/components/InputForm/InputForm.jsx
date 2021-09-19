import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function InputForm(props){  
    return(
        <>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          onSubmit={() => {props.handleSubmit}}
        >
     
            <TextField id="standard-basic" label="File Name" variant="standard" 
                value={props.fileNameInput}
                onChange={(evt) => props.setFileNameInput(evt.target.value)}  
            />
            <TextField id="standard-basic" label="Description" variant="standard" 
                value={props.descriptionInput}
                onChange={(evt) => props.setDescriptionInput(evt.target.value)}
            /> 
            <Button variant="contained" color="primary" type="submit" onClick={props.handleSubmit}>
                Add Picture
            </Button>
        
        </Box>
        </>
    )
}

export default InputForm;