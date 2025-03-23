
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Certificate } from "@/schemas/resume";

interface CertificatesSectionProps {
  certificates: Certificate[];
  onChange: (updatedCertificates: Certificate[]) => void;
}

const CertificatesSection = ({ certificates, onChange }: CertificatesSectionProps) => {
  const handleAddCertificate = () => {
    onChange([
      ...certificates, 
      { 
        title: "", 
        issuer: "",
        date: ""
      }
    ]);
  };

  const handleRemoveCertificate = (index: number) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    onChange(updatedCertificates);
  };

  const handleCertificateChange = (index: number, field: keyof Certificate, value: string) => {
    const updatedCertificates = [...certificates];
    updatedCertificates[index] = { ...updatedCertificates[index], [field]: value };
    onChange(updatedCertificates);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Certifications</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3.5 w-3.5 text-green-500" /> 
            Auto-saved
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Add relevant certifications and professional qualifications</p>
        
        {certificates.map((certificate, index) => (
          <div key={index} className="space-y-4 mt-4 border p-4 rounded-md">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">Certification {index + 1}</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleRemoveCertificate(index)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Certification Name</Label>
                <Input 
                  value={certificate.title}
                  onChange={(e) => handleCertificateChange(index, 'title', e.target.value)}
                  placeholder="AWS Certified Developer, Scrum Master, etc."
                />
              </div>
              <div className="space-y-2">
                <Label>Issuing Organization</Label>
                <Input 
                  value={certificate.issuer}
                  onChange={(e) => handleCertificateChange(index, 'issuer', e.target.value)}
                  placeholder="Amazon Web Services, Scrum.org, etc."
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date Obtained</Label>
                <Input 
                  value={certificate.date}
                  onChange={(e) => handleCertificateChange(index, 'date', e.target.value)}
                  placeholder="MM/YYYY or Month YYYY"
                />
              </div>
              <div className="space-y-2">
                <Label>URL or Credential ID (Optional)</Label>
                <Input 
                  value={certificate.url || ''}
                  onChange={(e) => handleCertificateChange(index, 'url', e.target.value)}
                  placeholder="https://credential.example.com or ID number"
                />
              </div>
            </div>
          </div>
        ))}
        
        <Button 
          variant="outline" 
          className="w-full mt-4" 
          onClick={handleAddCertificate}
        >
          + Add Certification
        </Button>
      </CardContent>
    </Card>
  );
};

export default CertificatesSection;
