import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DialogProps } from '@radix-ui/react-alert-dialog'
import { Search, History, Trash } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    CommandDialog,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import { jobs } from '@/data/jobs'
import { useHistoryUserStore } from '@/store/history-user-store'

export function SearchBar({ ...props }: DialogProps) {
    const router = useNavigate()
    const [open, setOpen] = useState(false)

    const [search, setSearch] = useState('')

    const { history, add, clear } = useHistoryUserStore()

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

    const searchList = !search.length
        ? null
        : jobs.map((navItem) => (
              <CommandItem
                  key={navItem.id}
                  value={navItem.titulo}
                  onSelect={() => {
                      runCommand(() => {
                          add(navItem.titulo)
                          setSearch('')
                          router('/')
                      })
                  }}
              >
                  <Search className='mr-2 h-4 w-4' />
                  {navItem.titulo}
              </CommandItem>
          ))

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
                    {/*        <CommandEmpty>No results found.</CommandEmpty> */}

                    {!!history.length && (
                        <>
                            <CommandGroup
                                heading={
                                    <div className='flex justify-between'>
                                        <p>Historial</p>
                                        <button
                                            className='flex items-center gap-1'
                                            onClick={clear}
                                        >
                                            <Trash size={15} /> Borrar Historial
                                        </button>
                                    </div>
                                }
                                className='m-0 p-0'
                            >
                                {history
                                    .slice(0, search ? 4 : history.length)
                                    .map((navItem, index) => (
                                        <CommandItem
                                            key={navItem + index}
                                            value={navItem}
                                            onSelect={() => {
                                                runCommand(() => router('/404'))
                                            }}
                                            /*    className='flex  justify-between' */
                                        >
                                            <div className='flex'>
                                                <History className='mr-2 h-4 w-4' />
                                                {navItem}
                                            </div>

                                            {/*             <Button
                                            variant={'ghost'}
                                            type='button'
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <X className='text-gray-400' />
                                        </Button> */}
                                        </CommandItem>
                                    ))}
                            </CommandGroup>
                        </>
                    )}

                    {!!search.length && (
                        <CommandGroup heading={'Busqueda'}>
                            {searchList}
                        </CommandGroup>
                    )}

                    {!search.length && !history.length && (
                        <div className='p-10'>
                            <Search className='mx-auto' size={60} />

                            <p className='text-center text-xs'>
                                Empieza a buscar ofertas de trabajo
                            </p>
                        </div>
                    )}
                </CommandList>
            </CommandDialog>
        </>
    )
}
