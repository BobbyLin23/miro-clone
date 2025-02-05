'use client'

import { ChangeEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounceValue } from 'usehooks-ts'
import qs from 'query-string'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'

export const SearchInput = () => {
  const router = useRouter()
  const [debouncedValue, setValue] = useDebounceValue('', 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: {
          search: debouncedValue,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      },
    )
    router.push(url)
  }, [debouncedValue, router])

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 transform text-muted-foreground" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
      />
    </div>
  )
}
