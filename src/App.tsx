import { Footer } from '@/components/footer'
import { ModeToggle } from '@/components/mode-toggle'
import { AboutMe } from '@/presentation/about'
import { MyProjects } from '@/presentation/projects'
import { Skills } from '@/presentation/skills'

function App() {
  return (
    <div className="h-full w-full bg-slate-50 dark:bg-background">
      <div className="container flex max-w-4xl justify-end pt-2">
        <ModeToggle />
      </div>
      <div className="container max-w-4xl">
        <AboutMe />
        <Skills />
        <MyProjects />
        <Footer />
      </div>
    </div>
  )
}

export default App
