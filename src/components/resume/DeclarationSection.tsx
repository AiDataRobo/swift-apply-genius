
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Declaration } from "@/schemas/resume";

interface DeclarationSectionProps {
  declaration?: Declaration;
  onChange: (declaration: Declaration) => void;
}

const DeclarationSection = ({ declaration = { text: "" }, onChange }: DeclarationSectionProps) => {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">Declaration</h2>
        <p className="text-sm text-muted-foreground">Add a personal declaration or statement of authenticity to your resume</p>
        
        <div className="space-y-4">
          <div>
            <Textarea
              value={declaration.text}
              onChange={(e) => onChange({ ...declaration, text: e.target.value })}
              placeholder="I hereby declare that all the information provided above is true to the best of my knowledge..."
              className="min-h-[100px]"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Signature</label>
              <Input
                value={declaration.signature || ""}
                onChange={(e) => onChange({ ...declaration, signature: e.target.value })}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Date</label>
              <Input
                type="date"
                value={declaration.date || ""}
                onChange={(e) => onChange({ ...declaration, date: e.target.value })}
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium">Place</label>
            <Input
              value={declaration.place || ""}
              onChange={(e) => onChange({ ...declaration, place: e.target.value })}
              placeholder="City, Country"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeclarationSection;
