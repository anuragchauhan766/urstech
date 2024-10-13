import React from 'react'

export default function DashboardLayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {children}
    </div>
  )
}