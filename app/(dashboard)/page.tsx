import { UserButton } from '@clerk/nextjs'

export default function DashboardRootPage() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>This is a screen for authenticated users only.</div>
      <UserButton />
    </div>
  )
}