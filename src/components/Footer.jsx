import { Box, Container, Link, Stack, Typography } from '@mui/material'

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, borderTop: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={1.5}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Arup Biswas. Built with care.
          </Typography>
          <Stack direction="row" spacing={2.5}>
            <Link href="#home" underline="hover" variant="body2">
              Back to top
            </Link>
            <Link href="#contact" underline="hover" variant="body2">
              Contact
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
