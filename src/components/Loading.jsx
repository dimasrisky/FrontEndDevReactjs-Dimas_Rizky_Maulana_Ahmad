import React from 'react'

export function Loading() {
  return (
    <div class="flex-col gap-4 w-full flex items-center justify-center">
        <div class="w-28 h-28 border-8 text-bluePrimary text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-bluePrimary rounded-full"></div>
    </div>
  )
}
