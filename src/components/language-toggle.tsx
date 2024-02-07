import React from 'react'

import { Check, Languages } from 'lucide-react'

import { Language, useLanguage } from './language-provider'
import { Button } from './ui/button'
import { Command, CommandGroup, CommandItem } from './ui/command'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

type CheckIconProps = {
  isActive: boolean
}

const CheckIcon: React.FC<CheckIconProps> = ({ isActive }) =>
  isActive ? <Check size={10} /> : null

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = React.useState(false)

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setOpen(false)
  }

  const renderCheckIcon = (isActive: boolean) => (
    <CheckIcon isActive={isActive} />
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle Language"
          onClick={() => setOpen(!open)}
        >
          <Languages />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto bg-secondary">
        <Command>
          <CommandGroup className="bg-background">
            <CommandItem
              value="PT"
              onSelect={() => changeLanguage('pt')}
              className="flex cursor-pointer gap-3"
            >
              PT <span>{renderCheckIcon(language === 'pt')}</span>
            </CommandItem>
            <CommandItem
              value="EN"
              onSelect={() => changeLanguage('en')}
              className="flex cursor-pointer gap-3"
            >
              EN <span>{renderCheckIcon(language === 'en')}</span>
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
