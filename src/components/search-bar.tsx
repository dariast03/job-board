import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DialogProps } from '@radix-ui/react-alert-dialog'
import { Search, History, WholeWord } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import { historialUsuario } from '@/data/historialUsuario'
import { trabajos } from '@/data/trabajos'

export function SearchBar({ ...props }: DialogProps) {
    const router = useNavigate()
    const [open, setOpen] = useState(false)

    const [search, setSearch] = useState('')

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
                if (
                    (e.target instanceof HTMLElement &&
                        e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                ) {
                    return
                }

                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const runCommand = useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <Button
                variant='outline'
                className={cn(
                    'relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64'
                )}
                onClick={() => setOpen(true)}
                {...props}
            >
                <span className='hidden lg:inline-flex'>
                    Buscar ofertas de trabajo...
                </span>
                <span className='inline-flex lg:hidden'>Buscar...</span>

                <kbd className='pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded  px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
                    <Search />
                </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput
                    placeholder='Busca algo'
                    value={search}
                    onValueChange={(x) => setSearch(x)}
                />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    <CommandGroup heading='Historial'>
                        {historialUsuario
                            .slice(0, search ? 4 : historialUsuario.length)
                            .map((navItem) => (
                                <CommandItem
                                    key={navItem.id}
                                    value={navItem.detalle}
                                    onSelect={() => {
                                        runCommand(() => router('/404'))
                                    }}
                                >
                                    <History className='mr-2 h-4 w-4' />
                                    {navItem.detalle}
                                </CommandItem>
                            ))}
                    </CommandGroup>

                    <CommandGroup heading='Busqueda'>
                        {trabajos.map((navItem) => (
                            <CommandItem
                                key={navItem.id}
                                value={navItem.descripcion_contrato}
                                onSelect={() => {
                                    runCommand(() => router('/404'))
                                }}
                            >
                                <Search className='mr-2 h-4 w-4' />
                                {navItem.descripcion_contrato}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    {/*   
          {docsConfig.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string))
                  }}
                >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                    <CircleIcon className="h-3 w-3" />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))} */}
                    {/*     <CommandSeparator />
                    <CommandGroup heading='Theme'>
                        <CommandItem
                            onSelect={() => runCommand(() => setTheme('light'))}
                        >
                            <SunIcon className='mr-2 h-4 w-4' />
                            Light
                        </CommandItem>
                        <CommandItem
                            onSelect={() => runCommand(() => setTheme('dark'))}
                        >
                            <MoonIcon className='mr-2 h-4 w-4' />
                            Dark
                        </CommandItem>
                        <CommandItem
                            onSelect={() =>
                                runCommand(() => setTheme('system'))
                            }
                        >
                            <LaptopIcon className='mr-2 h-4 w-4' />
                            System
                        </CommandItem>
                    </CommandGroup> */}
                </CommandList>
            </CommandDialog>
        </>
    )
}
