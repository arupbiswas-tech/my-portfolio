import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded'
import SendRounded from '@mui/icons-material/SendRounded'

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

function Contact() {
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    if (!name || !email || !message) {
      setError('Please complete each field before preparing your message.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`)
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
  }

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 10 }}>
          <Box sx={{ flex: '0 0 38%' }}>
            <SectionHeading
              eyebrow="GET IN TOUCH"
              title="Have something in mind?"
              description="Have a project, a tricky problem, or an idea you would like to explore? Send a note."
            />
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, width: 'fit-content' }}
              >
                GitHub <ArrowOutwardRounded fontSize="small" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                underline="hover"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, width: 'fit-content' }}
              >
                LinkedIn <ArrowOutwardRounded fontSize="small" />
              </Link>
              <Link
                href="mailto:hello@example.com"
                underline="hover"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, width: 'fit-content' }}
              >
                hello@example.com
              </Link>
            </Stack>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              flex: 1,
              p: { xs: 2.5, sm: 3.5 },
              border: 1,
              borderColor: 'divider',
              borderRadius: 3,
              display: 'grid',
              gap: 2,
            }}
          >
            <Typography variant="h5" sx={{ mb: 0.5 }}>
              Send a message
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField name="name" label="Your name" autoComplete="name" required fullWidth />
            <TextField
              name="email"
              label="Email address"
              type="email"
              autoComplete="email"
              required
              fullWidth
            />
            <TextField
              name="message"
              label="What would you like to talk about?"
              multiline
              minRows={4}
              required
              fullWidth
            />
            <Typography variant="caption" color="text.secondary">
              Your email app will open with the message ready to send.
            </Typography>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendRounded />}
              sx={{ justifySelf: 'start' }}
            >
              Prepare message
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Contact
