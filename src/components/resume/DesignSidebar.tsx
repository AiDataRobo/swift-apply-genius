
import { TemplateStyle } from "@/schemas/resume";
import { Palette, FileText, FileDown, ScrollText, Code, CreditCard, FilePlus2, PanelTop, Columns, Sun, Moon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface DesignSidebarProps {
  templateStyle: TemplateStyle;
  onStyleChange: (newStyle: TemplateStyle) => void;
}

const DesignSidebar = ({ templateStyle, onStyleChange }: DesignSidebarProps) => {
  // Toggle dark mode
  const toggleDarkMode = () => {
    onStyleChange({
      ...templateStyle,
      darkMode: !templateStyle.darkMode,
      // Change colors accordingly
      primaryColor: templateStyle.darkMode ? "#1a73e8" : "#a78bfa",
      secondaryColor: templateStyle.darkMode ? "#f1f5f9" : "#1e293b",
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Templates</h3>
        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => onStyleChange({...templateStyle, template: "modern"})}
            className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "modern" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            <FileText className="h-8 w-8 mb-1" />
            Modern
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, template: "minimal"})}
            className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "minimal" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            <FileDown className="h-8 w-8 mb-1" />
            Minimal
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, template: "professional"})}
            className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "professional" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            <ScrollText className="h-8 w-8 mb-1" />
            Professional
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, template: "creative"})}
            className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "creative" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            <Palette className="h-8 w-8 mb-1" />
            Creative
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, template: "technical"})}
            className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "technical" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            <Code className="h-8 w-8 mb-1" />
            Technical
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, template: "executive"})}
            className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "executive" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            <CreditCard className="h-8 w-8 mb-1" />
            Executive
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, template: "ats"})}
            className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.template === "ats" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            <FilePlus2 className="h-8 w-8 mb-1" />
            ATS
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Layout</h3>
        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => onStyleChange({...templateStyle, layout: "single"})}
            className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.layout === "single" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            <PanelTop className="h-5 w-5 mb-1" />
            Single Column
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, layout: "two-column"})}
            className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.layout === "two-column" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            <Columns className="h-5 w-5 mb-1" />
            Two Column
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Colors</h3>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => onStyleChange({...templateStyle, primaryColor: "#1a73e8"})}
            className={`w-6 h-6 rounded-full bg-blue-600 ${templateStyle.primaryColor === "#1a73e8" ? "ring-2 ring-offset-2 ring-blue-600" : ""}`}
            aria-label="Blue"
          />
          <button 
            onClick={() => onStyleChange({...templateStyle, primaryColor: "#15803d"})}
            className={`w-6 h-6 rounded-full bg-green-700 ${templateStyle.primaryColor === "#15803d" ? "ring-2 ring-offset-2 ring-green-700" : ""}`}
            aria-label="Green"
          />
          <button 
            onClick={() => onStyleChange({...templateStyle, primaryColor: "#7c3aed"})}
            className={`w-6 h-6 rounded-full bg-purple-600 ${templateStyle.primaryColor === "#7c3aed" ? "ring-2 ring-offset-2 ring-purple-600" : ""}`}
            aria-label="Purple"
          />
          <button 
            onClick={() => onStyleChange({...templateStyle, primaryColor: "#be123c"})}
            className={`w-6 h-6 rounded-full bg-rose-700 ${templateStyle.primaryColor === "#be123c" ? "ring-2 ring-offset-2 ring-rose-700" : ""}`}
            aria-label="Rose"
          />
          <button 
            onClick={() => onStyleChange({...templateStyle, primaryColor: "#1e293b"})}
            className={`w-6 h-6 rounded-full bg-slate-800 ${templateStyle.primaryColor === "#1e293b" ? "ring-2 ring-offset-2 ring-slate-800" : ""}`}
            aria-label="Slate"
          />
          <button 
            onClick={() => onStyleChange({...templateStyle, primaryColor: "#f97316"})}
            className={`w-6 h-6 rounded-full bg-orange-500 ${templateStyle.primaryColor === "#f97316" ? "ring-2 ring-offset-2 ring-orange-500" : ""}`}
            aria-label="Orange"
          />
          <button 
            onClick={() => onStyleChange({...templateStyle, primaryColor: "#0ea5e9"})}
            className={`w-6 h-6 rounded-full bg-sky-500 ${templateStyle.primaryColor === "#0ea5e9" ? "ring-2 ring-offset-2 ring-sky-500" : ""}`}
            aria-label="Sky Blue"
          />
          <button 
            onClick={() => onStyleChange({...templateStyle, primaryColor: "#8b5cf6"})}
            className={`w-6 h-6 rounded-full bg-violet-500 ${templateStyle.primaryColor === "#8b5cf6" ? "ring-2 ring-offset-2 ring-violet-500" : ""}`}
            aria-label="Violet"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Font</h3>
        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => onStyleChange({...templateStyle, fontFamily: "Inter"})}
            className={`p-2 rounded-md text-xs border ${templateStyle.fontFamily === "Inter" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            Inter
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, fontFamily: "Poppins"})}
            className={`p-2 rounded-md text-xs border ${templateStyle.fontFamily === "Poppins" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            Poppins
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, fontFamily: "Georgia"})}
            className={`p-2 rounded-md text-xs border ${templateStyle.fontFamily === "Georgia" ? "border-primary bg-primary/5" : "border-border"}`}
            style={{ fontFamily: "Georgia" }}
          >
            Georgia
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, fontFamily: "Arial"})}
            className={`p-2 rounded-md text-xs border ${templateStyle.fontFamily === "Arial" ? "border-primary bg-primary/5" : "border-border"}`}
            style={{ fontFamily: "Arial" }}
          >
            Arial
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Font Size</h3>
        <div className="grid grid-cols-3 gap-2">
          <button 
            onClick={() => onStyleChange({...templateStyle, fontSize: "small"})}
            className={`p-2 rounded-md text-xs border ${templateStyle.fontSize === "small" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            Small
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, fontSize: "medium"})}
            className={`p-2 rounded-md text-xs border ${templateStyle.fontSize === "medium" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            Medium
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, fontSize: "large"})}
            className={`p-2 rounded-md text-xs border ${templateStyle.fontSize === "large" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            Large
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Spacing</h3>
        <div className="grid grid-cols-3 gap-2">
          <button 
            onClick={() => onStyleChange({...templateStyle, spacing: "compact"})}
            className={`p-2 rounded-md text-xs border ${templateStyle.spacing === "compact" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            Compact
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, spacing: "comfortable"})}
            className={`p-2 rounded-md text-xs border ${templateStyle.spacing === "comfortable" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            Comfortable
          </button>
          <button 
            onClick={() => onStyleChange({...templateStyle, spacing: "spacious"})}
            className={`p-2 rounded-md text-xs border ${templateStyle.spacing === "spacious" ? "border-primary bg-primary/5" : "border-border"}`}
          >
            Spacious
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Theme</h3>
        <button 
          onClick={toggleDarkMode}
          className="w-full p-2 rounded-md text-xs border flex items-center justify-center gap-2"
        >
          {templateStyle.darkMode ? (
            <>
              <Sun className="h-4 w-4" />
              Switch to Light Mode
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              Switch to Dark Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default DesignSidebar;
