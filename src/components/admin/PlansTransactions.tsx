
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

const PlansTransactions = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Plans & Transactions</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Subscription & Payment Management</CardTitle>
          <CardDescription>
            Track user subscriptions, transactions, and revenue
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center h-64 border rounded-md bg-muted/50">
            <div className="flex flex-col items-center text-muted-foreground">
              <CreditCard className="h-10 w-10 mb-2" />
              <h3 className="text-lg font-medium">Financial Dashboard</h3>
              <p className="text-sm max-w-md text-center mt-1">
                This section will display transaction history, subscription management, 
                and financial reporting functions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlansTransactions;
