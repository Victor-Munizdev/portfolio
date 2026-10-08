import { cn } from "@/lib/utils"

interface TagListProps {
  items: string[]
  label: string
  className?: string
}

export function TagList({ items, label, className }: TagListProps) {
  if (items.length === 0) return null
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-x-2 gap-y-2", className)}>
      {items.map((item) => (
        <li key={item} className="rounded-full border border-line px-3 py-1 text-label text-text-2">
          {item}
        </li>
      ))}
    </ul>
  )
}
