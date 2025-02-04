import Image from 'next/image'

export const Loading = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  )
}
