import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import CloseRounded from '@mui/icons-material/CloseRounded'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined'
import MenuRounded from '@mui/icons-material/MenuRounded'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

function Navbar({ mode, onToggleMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const closeMenu = () => setMenuOpen(false)

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: 'background.default',
        backgroundImage: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 }, gap: 2 }}>
          <Box
            component="a"
            href="#home"
            aria-label="Back to top"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 750,
              fontSize: 18,
              letterSpacing: '-0.05em',
              mr: 'auto',
            }}
          >
            Arup Biswas
          </Box>
          {!isMobile && (
            <Stack component="nav" direction="row" spacing={0.5} aria-label="Main navigation">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  color="inherit"
                  sx={{ color: 'text.secondary', px: 1.5, minWidth: 0 }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          )}
          <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton
              onClick={onToggleMode}
              aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
              color="inherit"
            >
              {mode === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
            </IconButton>
          </Tooltip>
          <Button
            href="#contact"
            variant="contained"
            color="primary"
            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
          >
            Let&apos;s talk
          </Button>
          {isMobile && (
            <IconButton
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              color="inherit"
            >
              <MenuRounded />
            </IconButton>
          )}
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={menuOpen} onClose={closeMenu}>
        <Box sx={{ width: 280, p: 2 }} role="presentation">
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={closeMenu} aria-label="Close navigation menu">
              <CloseRounded />
            </IconButton>
          </Stack>
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.href} component="a" href={item.href} onClick={closeMenu}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            <ListItemButton component="a" href="#contact" onClick={closeMenu}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Navbar
