import { Navbar } from '@/features/dashboard/components/navbar'
import { OrgSidebar } from '@/features/dashboard/components/org-sidebar'
import { Sidebar } from '@/features/dashboard/components/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="h-full pl-[60px]">
        <div className="flex h-full gap-x-3">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}
