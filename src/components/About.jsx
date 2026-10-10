import { Box, Container, Stack, Typography } from '@mui/material'

function SectionHeading({ eyebrow, title }) {
  return (
    <Stack spacing={1.25}>
      <Typography
        variant="overline"
        color="primary.main"
        sx={{ fontWeight: 700, letterSpacing: '0.13em' }}
      >
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: '2.1rem', md: '2.8rem' } }}>
        {title}
      </Typography>
    </Stack>
  )
}

function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 10 }}>
          <Box sx={{ flex: '0 0 32%' }}>
            <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Built on experience." />
          </Box>
          <Box sx={{ maxWidth: 650 }}>
            <Typography variant="h5" sx={{ fontWeight: 450, lineHeight: 1.55, mb: 2 }}>
              I turn complex requirements into clear, reliable software people enjoy using.
            </Typography>
            <Typography color="text.secondary">
              With more than 14 years across the full stack, I bring together thoughtful
              problem-solving, strong engineering fundamentals, and a practical product mindset.
              My work spans long-lived PHP and Symfony systems as well as modern React applications
              and API-driven services.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2 }}>
              Today, I&apos;m focused on modern web architectures and integrating AI in ways that
              make products genuinely more useful: secure APIs, well-designed workflows, and
              maintainable systems built to evolve.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default About
