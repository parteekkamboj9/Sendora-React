import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { NavLink } from 'react-router-dom';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.3)`
    : alpha(theme.palette.background.default, 0.3),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '10px 20px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 20px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', pr: 2 }}>
            {          
            <div className='flex justify-center items-center gap-0 mr-5'>
                <img src='/static/icons/logo.svg' className='w-6' />
                <span className='text-primary pt-0.5'>Sendora</span>
            </div>
            }
            <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="space-x-4">
              <NavLink to={''} className="text-gray-700">Features</NavLink>
              <NavLink to={''} className="text-gray-700">Testimonials</NavLink>
              <NavLink to={''} className="text-gray-700">Highlights</NavLink>
              <NavLink to={''} className="text-gray-700">Pricing</NavLink>
              <NavLink to={''} className="text-gray-700">FAQ</NavLink>
              <NavLink to={''} className="text-gray-700">Blog</NavLink>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              alignItems: 'center',
            }}
          >
            <NavLink to={''} className="text-gray-700">
              Sign in
            </NavLink>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            
          {/* <ColorModeIconDropdown size="medium" /> */}
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 5, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: '4px'}}>
                  <NavLink to={''} className="text-gray-700">Features</NavLink>
                  <NavLink to={''} className="text-gray-700">Testimonials</NavLink>
                  <NavLink to={''} className="text-gray-700">Highlights</NavLink>
                  <NavLink to={''} className="text-gray-700">Pricing</NavLink>
                  <NavLink to={''} className="text-gray-700">FAQ</NavLink>
                  <NavLink to={''} className="text-gray-700">Blog</NavLink>
                  <Divider sx={{ my: 2 }} />
                  <NavLink to={''} className="text-gray-700">Sign up</NavLink>
                  <NavLink to={''} className="text-gray-700">Sign in</NavLink>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}