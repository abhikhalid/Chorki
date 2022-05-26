import "./AlertMessage.css";

import * as React from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function AlertMessage({message}) {
	return (
        <Stack sx={{ width: "30%", position: 'fixed', bottom: '0', left: '0',}} spacing={2}>
            
            <Alert variant="filled" severity="success">
                
                {message}
                
			</Alert>
		</Stack>
	);
}

export default AlertMessage;
