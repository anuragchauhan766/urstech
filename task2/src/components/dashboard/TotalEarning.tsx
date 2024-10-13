'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TotalEarning() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Earning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$81,020</div>
        <div className="text-sm text-green-500">+8.20% More earning than usual</div>
      </CardContent>
    </Card>
  )
}