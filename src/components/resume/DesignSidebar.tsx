
import { TemplateStyle } from "@/schemas/resume";
import { 
  Palette, FileText, FileDown, ScrollText, Code, CreditCard, FilePlus2, PanelTop, 
  Columns, Sun, Moon, Landmark, LucideProps, FileSpreadsheet, AlignLeft, AlignCenter, 
  Dot, ArrowRight, Minus, CircleDot, Square, ListFilter, Type, TextCursorInput, 
  Box, CircleOff, LineChart, Shapes, Combine, CornerDownRight, Layers
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface DesignSidebarProps {
  templateStyle: TemplateStyle;
  onStyleChange: (newStyle: TemplateStyle) => void;
}

type BulletIcon = {
  [key: string]: (props: LucideProps) => JSX.Element;
};

const bulletIcons: BulletIcon = {
  "disc": CircleDot,
  "circle": Dot,
  "square": Square,
  "dash": Minus, 
  "arrow": ArrowRight
};

const DesignSidebar = ({ templateStyle, onStyleChange }: DesignSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    templates: true,
    layout: false,
    colors: false,
    typography: false,
    sections: false,
    spacing: false,
    decorative: false
  });

  // Toggle section
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
    <ScrollArea className="h-full">
      <div className="space-y-4 pr-4">
        {/* Templates */}
        <Collapsible open={expandedSections.templates} onOpenChange={() => toggleSection('templates')}>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Templates</h3>
            <span className="text-xs text-muted-foreground">{expandedSections.templates ? '−' : '+'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
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
          </CollapsibleContent>
        </Collapsible>

        {/* Layout */}
        <Collapsible open={expandedSections.layout} onOpenChange={() => toggleSection('layout')}>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Layout</h3>
            <span className="text-xs text-muted-foreground">{expandedSections.layout ? '−' : '+'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="grid grid-cols-2 gap-2 mb-4">
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

            {/* Paper Size */}
            <div className="space-y-2 mb-4">
              <h4 className="text-xs font-medium">Paper Size</h4>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => onStyleChange({...templateStyle, paperSize: "a4"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.paperSize === "a4" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  A4
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, paperSize: "letter"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.paperSize === "letter" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Letter
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, paperSize: "legal"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.paperSize === "legal" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Legal
                </button>
              </div>
            </div>

            {/* Text Alignment */}
            <div className="space-y-2">
              <h4 className="text-xs font-medium">Text Alignment</h4>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => onStyleChange({...templateStyle, textAlign: "left"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.textAlign === "left" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <AlignLeft className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Left</span>
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, textAlign: "center"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.textAlign === "center" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <AlignCenter className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Center</span>
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, textAlign: "justified"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.textAlign === "justified" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <ListFilter className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Justified</span>
                </button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Colors */}
        <Collapsible open={expandedSections.colors} onOpenChange={() => toggleSection('colors')}>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Colors</h3>
            <span className="text-xs text-muted-foreground">{expandedSections.colors ? '−' : '+'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
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
            <div className="mt-4">
              <h4 className="text-xs font-medium mb-2">Theme</h4>
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
          </CollapsibleContent>
        </Collapsible>

        {/* Typography */}
        <Collapsible open={expandedSections.typography} onOpenChange={() => toggleSection('typography')}>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Typography</h3>
            <span className="text-xs text-muted-foreground">{expandedSections.typography ? '−' : '+'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            {/* Font Family */}
            <div className="space-y-2 mb-4">
              <h4 className="text-xs font-medium">Font Family</h4>
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
            
            {/* Font Size */}
            <div className="space-y-2 mb-4">
              <h4 className="text-xs font-medium">Font Size</h4>
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

            {/* Line Height */}
            <div className="space-y-2 mb-4">
              <h4 className="text-xs font-medium">Line Height</h4>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => onStyleChange({...templateStyle, lineHeight: "tight"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.lineHeight === "tight" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Tight
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, lineHeight: "normal"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.lineHeight === "normal" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Normal
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, lineHeight: "relaxed"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.lineHeight === "relaxed" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Relaxed
                </button>
              </div>
            </div>

            {/* Date Format */}
            <div className="space-y-2">
              <h4 className="text-xs font-medium">Date Format</h4>
              <RadioGroup 
                value={templateStyle.dateFormat}
                onValueChange={(value) => onStyleChange({...templateStyle, dateFormat: value as any})}
                className="grid grid-cols-2 gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mmyyyy" id="mmyyyy" />
                  <Label htmlFor="mmyyyy" className="text-xs">04/2023</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mmyy" id="mmyy" />
                  <Label htmlFor="mmyy" className="text-xs">04/23</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthyear" id="monthyear" />
                  <Label htmlFor="monthyear" className="text-xs">April 2023</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthyy" id="monthyy" />
                  <Label htmlFor="monthyy" className="text-xs">Apr '23</Label>
                </div>
              </RadioGroup>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Section Styling */}
        <Collapsible open={expandedSections.sections} onOpenChange={() => toggleSection('sections')}>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Section Styling</h3>
            <span className="text-xs text-muted-foreground">{expandedSections.sections ? '−' : '+'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            {/* Section Heading Style */}
            <div className="space-y-2 mb-4">
              <h4 className="text-xs font-medium">Section Headings</h4>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => onStyleChange({...templateStyle, sectionHeadingStyle: "standard"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.sectionHeadingStyle === "standard" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <Type className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Standard</span>
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, sectionHeadingStyle: "underlined"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.sectionHeadingStyle === "underlined" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <TextCursorInput className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Underlined</span>
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, sectionHeadingStyle: "boxed"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.sectionHeadingStyle === "boxed" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <Box className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Boxed</span>
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, sectionHeadingStyle: "colored"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.sectionHeadingStyle === "colored" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <Palette className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Colored</span>
                </button>
              </div>
            </div>

            {/* Bullet Point Style */}
            <div className="space-y-2 mb-4">
              <h4 className="text-xs font-medium">Bullet Point Style</h4>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(bulletIcons).map(([style, Icon]) => (
                  <button 
                    key={style}
                    onClick={() => onStyleChange({...templateStyle, bulletStyle: style as any})}
                    className={`p-2 rounded-md text-xs border flex flex-col items-center ${templateStyle.bulletStyle === style ? "border-primary bg-primary/5" : "border-border"}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="mt-1 capitalize">{style}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Header Style */}
            <div className="space-y-2">
              <h4 className="text-xs font-medium">Header Style</h4>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => onStyleChange({...templateStyle, headerStyle: "standard"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.headerStyle === "standard" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Standard
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, headerStyle: "centered"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.headerStyle === "centered" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Centered
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, headerStyle: "compact"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.headerStyle === "compact" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Compact
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, headerStyle: "modern"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.headerStyle === "modern" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Modern
                </button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Spacing */}
        <Collapsible open={expandedSections.spacing} onOpenChange={() => toggleSection('spacing')}>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Spacing</h3>
            <span className="text-xs text-muted-foreground">{expandedSections.spacing ? '−' : '+'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
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
          </CollapsibleContent>
        </Collapsible>

        {/* Decorative Elements */}
        <Collapsible open={expandedSections.decorative} onOpenChange={() => toggleSection('decorative')}>
          <CollapsibleTrigger className="flex w-full items-center justify-between">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Decorative Elements</h3>
            <span className="text-xs text-muted-foreground">{expandedSections.decorative ? '−' : '+'}</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            {/* Accent Elements */}
            <div className="space-y-2 mb-4">
              <h4 className="text-xs font-medium">Accent Elements</h4>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => onStyleChange({...templateStyle, accentElements: "none"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.accentElements === "none" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <CircleOff className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">None</span>
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, accentElements: "dots"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.accentElements === "dots" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <CircleDot className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Dots</span>
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, accentElements: "lines"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.accentElements === "lines" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <LineChart className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Lines</span>
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, accentElements: "shapes"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.accentElements === "shapes" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <Shapes className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Shapes</span>
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, accentElements: "bars"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.accentElements === "bars" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <Landmark className="h-4 w-4 mx-auto" />
                  <span className="block mt-1">Bars</span>
                </button>
              </div>
            </div>

            {/* Border Style */}
            <div className="space-y-2 mb-4">
              <h4 className="text-xs font-medium">Border Style</h4>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => onStyleChange({...templateStyle, borderStyle: "none"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.borderStyle === "none" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  None
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, borderStyle: "simple"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.borderStyle === "simple" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Simple
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, borderStyle: "shadow"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.borderStyle === "shadow" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Shadow
                </button>
                <button 
                  onClick={() => onStyleChange({...templateStyle, borderStyle: "double"})}
                  className={`p-2 rounded-md text-xs border ${templateStyle.borderStyle === "double" ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  Double
                </button>
              </div>
            </div>

            {/* Additional Options */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="show-borders" className="text-xs font-medium">Section Borders</Label>
                <Switch 
                  id="show-borders"
                  checked={templateStyle.showBorders}
                  onCheckedChange={(checked) => onStyleChange({...templateStyle, showBorders: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="rounded-corners" className="text-xs font-medium">Rounded Corners</Label>
                <Switch 
                  id="rounded-corners"
                  checked={templateStyle.roundedCorners}
                  onCheckedChange={(checked) => onStyleChange({...templateStyle, roundedCorners: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="page-numbers" className="text-xs font-medium">Page Numbers</Label>
                <Switch 
                  id="page-numbers"
                  checked={templateStyle.includePageNumbers}
                  onCheckedChange={(checked) => onStyleChange({...templateStyle, includePageNumbers: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="show-photo" className="text-xs font-medium">Show Photo</Label>
                <Switch 
                  id="show-photo"
                  checked={templateStyle.showPhoto}
                  onCheckedChange={(checked) => onStyleChange({...templateStyle, showPhoto: checked})}
                />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </ScrollArea>
  );
};

export default DesignSidebar;
