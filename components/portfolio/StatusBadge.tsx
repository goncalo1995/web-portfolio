interface StatusBadgeProps {
  status: string
  pulse?: boolean
}

export function StatusBadge({ status, pulse = true }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-sm">
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green" />
      </span>
      <span className="text-muted-foreground">{status}</span>
    </div>
  )
}
