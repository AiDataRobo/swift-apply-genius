
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Shield, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Mock admin users
const adminUsers = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Super Admin',
    lastActive: '2023-11-05',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'Content Manager',
    lastActive: '2023-11-04',
  },
  {
    id: 3,
    name: 'David Lee',
    email: 'david@example.com',
    role: 'Writer',
    lastActive: '2023-11-03',
  },
  {
    id: 4,
    name: 'Michelle Wong',
    email: 'michelle@example.com',
    role: 'Support',
    lastActive: '2023-11-01',
  },
];

const SettingsAccess = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Settings & Access Control</h2>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Admin Users</CardTitle>
              <CardDescription>
                Manage administrator access and permissions
              </CardDescription>
            </div>
            <Button>
              <UserCog className="h-4 w-4 mr-2" />
              Add Admin
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminUsers.map((admin) => (
                <TableRow key={admin.id}>
                  <TableCell className="font-medium">{admin.name}</TableCell>
                  <TableCell>{admin.email}</TableCell>
                  <TableCell>
                    <Badge variant={admin.role === 'Super Admin' ? 'default' : 'outline'}>
                      {admin.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{admin.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Edit</Button>
                    {admin.role !== 'Super Admin' && (
                      <Button variant="ghost" size="sm" className="text-red-500">Remove</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
            <CardDescription>
              Configure global application settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-40 border rounded-md bg-muted/50">
              <div className="flex flex-col items-center text-muted-foreground">
                <Settings className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-medium">System Preferences</h3>
                <p className="text-sm max-w-md text-center mt-1">
                  Configuration options for the JobOnboard platform
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Security & Access Logs</CardTitle>
            <CardDescription>
              Monitor login attempts and admin actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-40 border rounded-md bg-muted/50">
              <div className="flex flex-col items-center text-muted-foreground">
                <Shield className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-medium">Security Dashboard</h3>
                <p className="text-sm max-w-md text-center mt-1">
                  Access logs and security monitoring features
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsAccess;
