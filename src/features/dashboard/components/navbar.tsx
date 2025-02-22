'use client'

import {
  OrganizationSwitcher,
  useOrganization,
  UserButton,
} from '@clerk/nextjs'

import { SearchInput } from './search-input'
import { InviteButton } from './invite-button'

export const Navbar = () => {
  const { organization } = useOrganization()

  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block flex-1 lg:hidden">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '376px',
              },
              organizationSwitcherTrigger: {
                padding: '6px',
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                width: '100%',
                justifyContent: 'space-between',
                backgroundColor: 'white',
              },
            },
          }}
        />
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  )
}
