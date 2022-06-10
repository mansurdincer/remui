import { colors, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

//container
export const AppbarContainer = styled(Box)(()=>({  
    display: 'flex',
    marginTop :4,
    justifyContent: 'center',
    padding: '2px 8px',
}));     

//header
export const AppbarHeader = styled(Typography)(()=>({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: '"Montez","cursive"',
    color: Colors.secondary,

}));     