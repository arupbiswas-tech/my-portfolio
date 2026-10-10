import { Box, Button, Card, CardContent, Chip, Container, Stack, Typography } from '@mui/material'
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded'
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined'
import DashboardCustomizeOutlined from '@mui/icons-material/DashboardCustomizeOutlined'
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined'

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

const projects = [
  {
    number: '01',
    title: 'Full-stack shopping cart',
    description:
      'A complete commerce journey, from a responsive product catalogue and cart to reliable backend APIs and order workflows.',
    stack: ['React', 'PHP', 'Symfony', 'MySQL'],
    Icon: ShoppingBagOutlined,
    source: 'https://github.com/yourusername/shopping-cart',
    demo: 'https://yourusername.github.io/shopping-cart',
  },
  {
    number: '02',
    title: 'Interactive web applications',
    description:
      'Purpose-built interfaces that make complex information easier to understand, act on, and manage across devices.',
    stack: ['React', 'REST APIs', 'Material UI'],
    Icon: DashboardCustomizeOutlined,
    source: 'https://github.com/yourusername/interactive-web-apps',
    demo: 'https://yourusername.github.io/interactive-web-apps',
  },
  {
    number: '03',
    title: 'AI-assisted tools',
    description:
      'Useful AI features connected through well-structured APIs, with a focus on practical workflows and dependable results.',
    stack: ['FastAPI', 'AI APIs', 'React'],
    Icon: AutoAwesomeOutlined,
    source: 'https://github.com/yourusername/ai-assisted-tools',
    demo: 'https://yourusername.github.io/ai-assisted-tools',
  },
]

function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
          spacing={2}
        >
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Built to make a difference."
            description="A few examples of the products and problems I enjoy working on."
          />
          <Button
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            endIcon={<ArrowOutwardRounded />}
            sx={{ mb: 0.5 }}
          >
            Explore GitHub
          </Button>
        </Stack>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 2,
            mt: 5,
          }}
        >
          {projects.map(({ number, title, description, stack, Icon, source, demo }) => (
            <Card
              key={number}
              sx={{
                height: '100%',
                borderRadius: 3,
                transition: 'transform 180ms ease, border-color 180ms ease',
                '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main' },
              }}
            >
              <CardContent
                sx={{ p: 3, minHeight: { md: 335 }, display: 'flex', flexDirection: 'column' }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                    }}
                  >
                    <Icon />
                  </Box>
                  <Typography variant="overline" color="text.secondary">
                    {number}
                  </Typography>
                </Stack>
                <Typography variant="h5" sx={{ mt: 3, mb: 1.25 }}>
                  {title}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {description}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 2.5 }}>
                  {stack.map((item) => (
                    <Chip key={item} label={item} size="small" variant="outlined" />
                  ))}
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 'auto', pt: 2.5 }}>
                  <Button
                    href={source}
                    target="_blank"
                    rel="noreferrer"
                    endIcon={<ArrowOutwardRounded />}
                    sx={{ px: 0, minWidth: 0 }}
                  >
                    GitHub
                  </Button>
                  <Button
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    endIcon={<ArrowOutwardRounded />}
                    sx={{ px: 0, minWidth: 0 }}
                  >
                    Live demo
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Projects
