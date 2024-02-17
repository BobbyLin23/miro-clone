import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const EmptyFavorites = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/empty-favorites.svg" alt="Empty" height={140} width={140} />
      <h2 className="mt-6 text-2xl font-semibold">No favorites board!</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Start by creating a board for your organization.
      </p>
      <div className="mt-6">
        <Button size="lg">Create board</Button>
      </div>
    </div>
  )
}
