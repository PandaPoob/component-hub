import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Component Hub</h1>
        <p className="text-muted-foreground">
          A React component library with TypeScript, Vitest, shadcn/ui, and Storybook
        </p>
        <div className="flex gap-4 justify-center">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default App
