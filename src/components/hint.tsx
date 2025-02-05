import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

interface Props {
  label: string
  children: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'end' | 'center'
  sideOffset?: number
  alignOffset?: number
}

export const Hint = ({
  label,
  children,
  side = 'bottom',
  align = 'center',
  sideOffset = 0,
  alignOffset = 0,
}: Props) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="border-black bg-black text-white"
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
        >
          <p className="font-semibold capitalize">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
