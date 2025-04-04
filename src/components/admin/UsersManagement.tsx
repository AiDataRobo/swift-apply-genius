import React, { useState } from 'react';
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Search,
  Shield,
  UserCog,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Mock data
const users = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 555-123-4567',
    plan: 'Premium',
    signupDate: '2023-10-15',
    lastActive: '2023-11-05',
    country: 'United States',
    status: 'active',
  },
  {
    id: 2,
    name: 'Maria Garcia',
    email: 'maria@example.com',
    phone: '+1 555-987-6543',
    plan: 'Basic',
    signupDate: '2023-09-22',
    lastActive: '2023-11-04',
    country: 'Mexico',
    status: 'active',
  },
  {
    id: 3,
    name: 'Ahmed Khan',
    email: 'ahmed@example.com',
    phone: '+1 555-456-7890',
    plan: 'Premium',
    signupDate: '2023-08-30',
    lastActive: '2023-11-02',
    country: 'United Arab Emirates',
    status: 'active',
  },
  {
    id: 4,
    name: 'Sophie Martin',
    email: 'sophie@example.com',
    phone: '+1 555-234-5678',
    plan: 'Basic',
    signupDate: '2023-10-02',
    lastActive: '2023-10-28',
    country: 'France',
    status: 'active',
  },
  {
    id: 5,
    name: 'Chen Wei',
    email: 'chen@example.com',
    phone: '+1 555-876-5432',
    plan: 'Premium',
    signupDate: '2023-09-12',
    lastActive: '2023-11-01',
    country: 'China',
    status: 'active',
  },
  {
    id: 6,
    name: 'Olivia Johnson',
    email: 'olivia@example.com',
    phone: '+1 555-765-4321',
    plan: 'Basic',
    signupDate: '2023-07-18',
    lastActive: '2023-10-20',
    country: 'Canada',
    status: 'inactive',
  },
  {
    id: 7,
    name: 'Carlos Rodriguez',
    email: 'carlos@example.com',
    phone: '+1 555-345-6789',
    plan: 'Premium',
    signupDate: '2023-10-28',
    lastActive: '2023-11-03',
    country: 'Brazil',
    status: 'active',
  },
  {
    id: 8,
    name: 'Aisha Patel',
    email: 'aisha@example.com',
    phone: '+1 555-654-3210',
    plan: 'Basic',
    signupDate: '2023-09-05',
    lastActive: '2023-10-15',
    country: 'India',
    status: 'inactive',
  },
  {
    id: 9,
    name: 'Hiroshi Tanaka',
    email: 'hiroshi@example.com',
    phone: '+1 555-432-1098',
    plan: 'Premium',
    signupDate: '2023-08-12',
    lastActive: '2023-11-01',
    country: 'Japan',
    status: 'active',
  },
  {
    id: 10,
    name: 'Emma Wilson',
    email: 'emma@example.com',
    phone: '+1 555-789-0123',
    plan: 'Basic',
    signupDate: '2023-10-10',
    lastActive: '2023-10-25',
    country: 'United Kingdom',
    status: 'banned',
  },
];

const UsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [planFilter, setPlanFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortColumn, setSortColumn] = useState('lastActive');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Filter and sort users based on current filters and sort state
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = planFilter === 'all' || user.plan.toLowerCase() === planFilter.toLowerCase();
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    
    return matchesSearch && matchesPlan && matchesStatus;
  }).sort((a, b) => {
    if (sortColumn === 'name') {
      return sortDirection === 'asc' 
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortColumn === 'signupDate') {
      return sortDirection === 'asc'
        ? new Date(a.signupDate).getTime() - new Date(b.signupDate).getTime()
        : new Date(b.signupDate).getTime() - new Date(a.signupDate).getTime();
    } else if (sortColumn === 'lastActive') {
      return sortDirection === 'asc'
        ? new Date(a.lastActive).getTime() - new Date(b.lastActive).getTime()
        : new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime();
    }
    return 0;
  });

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'inactive':
        return <Badge variant="outline" className="text-muted-foreground">Inactive</Badge>;
      case 'banned':
        return <Badge variant="destructive">Banned</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">Users Management</h2>
          <Badge variant="outline" className="ml-2">
            {users.length} Total
          </Badge>
        </div>
        <Button variant="default">
          <UserCog className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            View and manage all registered users across the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-end">
            <div className="grid w-full md:max-w-sm">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-9"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Select
                value={planFilter}
                onValueChange={setPlanFilter}
              >
                <SelectTrigger className="h-9 w-[130px]">
                  <SelectValue placeholder="Filter by Plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Plans</SelectLabel>
                    <SelectItem value="all">All Plans</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
              >
                <SelectTrigger className="h-9 w-[130px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="banned">Banned</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      className="flex items-center gap-1 p-0 font-medium"
                      onClick={() => handleSort('name')}
                    >
                      Name
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </TableHead>
                  <TableHead>Email / Phone</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      className="flex items-center gap-1 p-0 font-medium"
                      onClick={() => handleSort('signupDate')}
                    >
                      Signup Date
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button 
                      variant="ghost" 
                      className="flex items-center gap-1 p-0 font-medium"
                      onClick={() => handleSort('lastActive')}
                    >
                      Last Active
                      <ArrowUpDown className="h-3 w-3" />
                    </Button>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{user.email}</span>
                        <span className="text-xs text-muted-foreground">{user.phone}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.plan === 'Premium' ? 'default' : 'outline'}>
                        {user.plan}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>{user.signupDate}</TableCell>
                    <TableCell>{user.lastActive}</TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Change Plan</DropdownMenuItem>
                          <DropdownMenuItem>View Documents</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {user.status === 'banned' ? (
                            <DropdownMenuItem className="text-green-600">Unban User</DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem className="text-red-600">Ban User</DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredUsers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersManagement;
