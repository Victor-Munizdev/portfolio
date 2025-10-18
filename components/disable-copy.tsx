"use client"

import { useEffect } from "react"

export function DisableCopy() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement
      // Allow selection only for email and phone
      if (target && target.closest && !target.closest('[data-allow-copy]')) {
        e.preventDefault()
      }
    }

    const handleCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection()
      if (selection) {
        const selectedText = selection.toString()
        // Allow copying only email and phone
        const allowedPatterns = [
          /munizzvr@gmail\.com/,
          /\(11\) 91409-8185/
        ]

        const isAllowed = allowedPatterns.some(pattern => pattern.test(selectedText))
        if (!isAllowed) {
          e.preventDefault()
        }
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('copy', handleCopy)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('copy', handleCopy)
    }
  }, [])

  return null
}