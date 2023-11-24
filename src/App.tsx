import { ModeToggle } from '@/components/mode-toggle'
import { Presentation } from '@/components/presentation'
import { Skills } from '@/components/skills'

function App() {
  return (
    <div className="h-screen w-screen dark:bg-background bg-slate-50">
      <div className="container flex justify-end pt-2">
        <ModeToggle />
      </div>
      <div className="container">
        <Presentation />
        <Skills />
      </div>
    </div>
  )
}

export default App
