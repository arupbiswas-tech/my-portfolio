import { Box, Chip, Container, Stack, Typography } from '@mui/material'

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

const skillGroups = [
  { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML & CSS', 'Responsive UI', 'Material UI'] },
  { title: 'Backend & APIs', skills: ['PHP', 'Symfony', 'FastAPI', 'REST', 'GraphQL'] },
  { title: 'Data & Infrastructure', skills: ['MySQL', 'API design', 'Docker', 'Git', 'CI/CD'] },
  { title: 'AI & Productivity', skills: ['AI integration', 'GitHub Copilot', 'Gemini', 'Prompt design'] },
]

function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="WHAT I WORK WITH"
          title="Tools for the right job."
          description="A practical toolkit across product development, backend systems, and the newer AI-powered workflows."
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 2,
            mt: 5,
          }}
        >
          {skillGroups.map((group) => (
            <Box
              key={group.title}
              sx={{
                p: { xs: 2.5, md: 3 },
                border: 1,
                borderColor: 'divider',
                borderRadius: 3,
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="h6" sx={{ fontSize: 16, mb: 2 }}>
                {group.title}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {group.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{ bgcolor: 'action.hover', color: 'text.primary' }}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Skills
