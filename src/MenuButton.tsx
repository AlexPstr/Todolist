import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
type MenuButtonProps = {
    background?: string
}
export const MenuButton = styled(Button)<MenuButtonProps>(({theme}) =>({
    minWidth: '110px',
    fontWeight: 'bold',
    boxShadow: '0 0 0 1px #054B62, 2px 2px 0 0 #054B62',
    borderRadius: '2px',
    textTransform: 'capitalize',
    margin: '0 10px',
    padding: '8px 24px',
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.light,
}))