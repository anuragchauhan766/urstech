'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function VisitorStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visitor Today</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$81,020</div>
        <div className="text-sm text-green-500">+3.06% More visitors than usual</div>
      </CardContent>
    </Card>
  )
}