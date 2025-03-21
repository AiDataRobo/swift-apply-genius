
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { PlusCircle, Search, Building, Calendar, Clock, MapPin, DollarSign, MoreHorizontal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const JobTracker = () => {
  const [filter, setFilter] = useState('');
  
  // Mock data for job applications
  const applications = [
    {
      id: 1,
      company: 'TechCorp',
      position: 'Senior Frontend Developer',
      status: 'applied',
      dateApplied: '2023-06-15',
      location: 'Remote',
      salary: '$120,000 - $140,000',
      notes: 'Submitted resume and portfolio. Follow up in one week.'
    },
    {
      id: 2,
      company: 'DataSystems Inc.',
      position: 'Full Stack Engineer',
      status: 'interview',
      dateApplied: '2023-06-10',
      location: 'New York, NY',
      salary: '$130,000 - $150,000',
      notes: 'First interview scheduled for next Tuesday at 2pm.'
    },
    {
      id: 3,
      company: 'InnovateTech',
      position: 'UX/UI Designer',
      status: 'offer',
      dateApplied: '2023-06-05',
      location: 'San Francisco, CA',
      salary: '$110,000 - $125,000',
      notes: 'Received offer letter, needs review. Deadline to respond by Friday.'
    },
    {
      id: 4,
      company: 'GlobalFinance',
      position: 'Product Manager',
      status: 'rejected',
      dateApplied: '2023-06-01',
      location: 'Chicago, IL',
      salary: 'Not disclosed',
      notes: 'Rejection email received. Asked for feedback.'
    },
  ];
  
  const filteredApplications = applications.filter(app => 
    app.company.toLowerCase().includes(filter.toLowerCase()) ||
    app.position.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold">Job Application Tracker</h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search applications..."
              className="pl-8 w-full sm:w-[250px]"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Application
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All ({applications.length})</TabsTrigger>
          <TabsTrigger value="applied">Applied ({applications.filter(a => a.status === 'applied').length})</TabsTrigger>
          <TabsTrigger value="interview">Interviews ({applications.filter(a => a.status === 'interview').length})</TabsTrigger>
          <TabsTrigger value="offer">Offers ({applications.filter(a => a.status === 'offer').length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({applications.filter(a => a.status === 'rejected').length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="space-y-4">
            {filteredApplications.map(application => (
              <ApplicationCard key={application.id} application={application} />
            ))}
            {filteredApplications.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No applications found matching your search.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="applied" className="mt-6">
          <div className="space-y-4">
            {filteredApplications
              .filter(app => app.status === 'applied')
              .map(application => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="interview" className="mt-6">
          <div className="space-y-4">
            {filteredApplications
              .filter(app => app.status === 'interview')
              .map(application => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="offer" className="mt-6">
          <div className="space-y-4">
            {filteredApplications
              .filter(app => app.status === 'offer')
              .map(application => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="rejected" className="mt-6">
          <div className="space-y-4">
            {filteredApplications
              .filter(app => app.status === 'rejected')
              .map(application => (
                <ApplicationCard key={application.id} application={application} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ApplicationCard = ({ application }) => {
  const statusColors = {
    applied: 'bg-blue-100 text-blue-800',
    interview: 'bg-amber-100 text-amber-800',
    offer: 'bg-green-100 text-green-800',
    rejected: 'bg-slate-100 text-slate-800',
  };
  
  const statusLabels = {
    applied: 'Applied',
    interview: 'Interview',
    offer: 'Offer Received',
    rejected: 'Rejected',
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center mr-3">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{application.position}</h3>
                <p className="text-sm text-muted-foreground">{application.company}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 ml-13">
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                {formatDate(application.dateApplied)}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                {application.location}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <DollarSign className="h-3.5 w-3.5 mr-1" />
                {application.salary}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge className={`${statusColors[application.status]}`}>
              {statusLabels[application.status]}
            </Badge>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {application.notes && (
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Notes: </span>
              {application.notes}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default JobTracker;
