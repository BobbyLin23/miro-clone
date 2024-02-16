'use client'

import { Hint } from '@/components/hint'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { CreateOrganization } from '@clerk/nextjs'
import { Plus } from 'lucide-react'

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Hint
          label="Create Organization"
          side="right"
          align="start"
          sideOffset={18}
        >
          <div className="aspect-square">
            <button className="flex h-full w-full items-center justify-center rounded-md bg-white/25 opacity-60 transition hover:opacity-100">
              <Plus className="text-white" />
            </button>
          </div>
        </Hint>
      </DialogTrigger>
      <DialogContent className="maw-w-[480px] border-none bg-transparent p-0">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  )
}
