import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { MapPin } from 'lucide-react'
import { cn } from "../lib/utils"

interface StatusCardProps {
  route: string;
  coordinates: string;
  isReady: boolean;
  connections: string[];
  className?: string;
}

export default function StatusCard({ 
  route, 
  coordinates, 
  isReady, 
  connections,
  className
}: StatusCardProps) {
  return (
    <Card className={cn("w-full max-w-md", className)} dir="rtl">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{route}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{coordinates}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant={isReady ? "default" : "secondary"} className="bg-emerald-500">
            {isReady ? 'כשיר' : 'לא כשיר'}
          </Badge>
          {connections.map((connection, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-700">
              {connection}
            </Badge>
          ))}
        </div>
        <div className="space-y-2 text-right">
          <p className="text-sm">מעמד</p>
          <p className="text-sm">מגדר</p> 
          <p className="text-sm">אמנות שידור א׳</p>
          <p className="text-sm">אמנות קליטה א׳</p>
        </div>
      </CardContent>
    </Card>
  )
}

StatusCard.defaultProps = {
  route: 'מסלול',
  coordinates: '0.0 x,y',
  isReady: false,
  connections: [],
};

