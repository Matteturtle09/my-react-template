import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/other')({
  component: Other,
})

function Other() {
  return <div className="">
    Hello from Other Route!
    <Button>Click Me</Button>
  </div>
}