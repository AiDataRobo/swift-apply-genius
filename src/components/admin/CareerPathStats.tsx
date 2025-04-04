
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Network } from 'lucide-react';

const CareerPathStats = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">IT Career Path Stats</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Career Path Explorer Analytics</CardTitle>
          <CardDescription>
            Track user engagement with IT career path content
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center h-64 border rounded-md bg-muted/50">
            <div className="flex flex-col items-center text-muted-foreground">
              <Network className="h-10 w-10 mb-2" />
              <h3 className="text-lg font-medium">Career Path Analytics</h3>
              <p className="text-sm max-w-md text-center mt-1">
                This section will display analytics on career path engagement,
                most popular paths, conversion metrics, and content effectiveness.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareerPathStats;
