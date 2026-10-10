import { Avatar, Box, Button, Container, Stack, Typography } from '@mui/material'
import ArrowDownwardRounded from '@mui/icons-material/ArrowDownwardRounded'
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import CodeRounded from '@mui/icons-material/CodeRounded'

function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        py: { xs: 10, sm: 14, md: 17 },
        position: 'relative',
        overflow: 'hidden',
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'radial-gradient(ellipse at 85% 20%, rgba(67, 85, 214, 0.08), transparent 35%)'
            : 'radial-gradient(ellipse at 85% 20%, rgba(168, 176, 255, 0.09), transparent 35%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 820 }}>
          <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 3 }}>
            <Avatar
              sx={{
                width: 34,
                height: 34,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
              }}
            >
              <CodeRounded fontSize="small" />
            </Avatar>
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.12em' }}>
              Arup Biswas · FULL-STACK WEB DEVELOPER
            </Typography>
          </Stack>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 'clamp(3rem, 13vw, 4.4rem)', md: 'clamp(4.6rem, 8vw, 6.9rem)' },
              maxWidth: 900,
            }}
          >
            Thoughtful code.
            <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
              Useful products.
            </Box>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 3, maxWidth: 640, fontWeight: 400, lineHeight: 1.65 }}
          >
            I build dependable web experiences with PHP, Symfony, React, and AI-powered APIs.
            Bringing 14+ years of full-stack experience to complex problems and modern products.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 4 }}>
            <Button
              href="#projects"
              variant="contained"
              endIcon={<ArrowDownwardRounded />}
              sx={{ alignSelf: { xs: 'stretch', sm: 'flex-start' } }}
            >
              View work
            </Button>
            <Button
              href="#contact"
              variant="outlined"
              endIcon={<ArrowForwardRounded />}
              sx={{ alignSelf: { xs: 'stretch', sm: 'flex-start' } }}
            >
              Get in touch
            </Button>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ mt: 5, color: 'text.secondary' }}
          >
            <Box sx={{ width: 34, height: 1, bgcolor: 'divider' }} />
            <Typography variant="body2">14+ years building for the web</Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
