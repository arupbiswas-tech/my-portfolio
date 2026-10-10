import { Box, Container, Stack, Typography } from '@mui/material'
import CheckCircleOutlineRounded from '@mui/icons-material/CheckCircleOutlineRounded'

function SectionHeading({ eyebrow, title, description }) {
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
      {description && (
        <Typography color="text.secondary" sx={{ maxWidth: 560 }}>
          {description}
        </Typography>
      )}
    </Stack>
  )
}

const highlights = [
  '14+ years delivering and maintaining production web software',
  'Full-stack development across PHP, Symfony, JavaScript, and React',
  'Technical ownership from API design through responsive user interfaces',
  'Current focus on modern architectures and practical AI integrations',
]

function Experience() {
  return (
    <Box id="experience" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 10 }}>
          <Box sx={{ flex: '0 0 32%' }}>
            <SectionHeading
              eyebrow="EXPERIENCE"
              title="A steady hand, end to end."
              description="A career shaped by long-term delivery, evolving technologies, and solving real product challenges."
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ borderLeft: 2, borderColor: 'primary.main', pl: { xs: 2.5, md: 4 }, py: 0.5 }}>
              <Typography variant="overline" color="primary.main" sx={{ letterSpacing: '0.1em' }}>
                14+ YEARS IN SOFTWARE DEVELOPMENT
              </Typography>
              <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
                Full-stack development & technical leadership
              </Typography>
              <Typography color="text.secondary">
                A broad, hands-on career building web applications, APIs, and dependable systems
                across established and emerging technologies.
              </Typography>
              <Stack spacing={1.75} sx={{ mt: 3 }}>
                {highlights.map((item) => (
                  <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                    <CheckCircleOutlineRounded
                      fontSize="small"
                      sx={{ color: 'primary.main', mt: 0.35 }}
                    />
                    <Typography color="text.secondary">{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Experience
