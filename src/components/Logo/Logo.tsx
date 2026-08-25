import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 text-[1.125rem] font-medium tracking-tight text-foreground',
        className,
      )}
      aria-label="Zeftrosoft"
    >
      <span className="size-2 shrink-0 rounded-full bg-primary" aria-hidden />
      Zeftrosoft
    </span>
  )
}
