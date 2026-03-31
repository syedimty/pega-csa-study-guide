# Module 10: Application User Interface Design

**Duration:** ~70 mins | **Topics:** 5 | **Level:** Beginner

## Overview
Design intuitive, efficient user interfaces in Pega Platform using the Constellation architecture. Explore different View types including full Case Pages, Lists, Partials, and Forms. Configure customizable areas, apply field settings, use Field Groups and hierarchical forms. Implement dynamic field behavior using cascading dropdowns, conditional values, and When Rules.

## Learning Objectives
- Describe how different View types and templates manage user interface elements during Case processing.
- Explain the purpose of customizable areas of a Full Page View.
- Distinguish the roles of default and hierarchical forms.
- Analyze how field settings, Primary Fields, and Field Groups contribute to consistent UI design.
- Explain how patterns enable dynamic field behavior.

## Topic 1: Views in Constellation
### Overview
Constellation is Pega's modern design architecture that provides multiple View types for organizing and presenting information during case processing. Different View types serve different purposes in the user interface.

### Key Concepts
- **Constellation architecture:** Modern design system for Pega UI
- **View types:** Full Case Pages, Lists, Partials, Forms
- **Full Case Page:** Complete case view with sections and data
- **List View:** Displays multiple records or cases
- **Partial View:** Reusable components within larger views
- **Form View:** Data entry and form display
- **Responsive design:** Views adapt to different screen sizes
- **User experience:** Views organize information logically

### How It Works
Developers select appropriate View types based on the information that needs to be presented at each case workflow step. Full Case Pages provide comprehensive information, Lists display multiple items, Partials serve as reusable components, and Forms facilitate data entry. Views automatically adapt to different screen sizes and devices.

### Takeaways
- Multiple View types serve different purposes in UI design
- Constellation provides modern, responsive design foundations
- Proper View selection improves user experience
- Views organize information logically for users
- Support for multiple devices and screen sizes

## Topic 2: UI Configuration in App Studio
### Overview
App Studio provides tools for configuring user interfaces without requiring code. Developers customize areas within Views, apply field settings, and organize elements to create efficient user experiences.

### Key Concepts
- **Customizable areas:** Sections within Views that can be configured
- **Field settings:** Common configurations for field behavior
- **Visual layout:** Organize fields and content spatially
- **Field grouping:** Group related fields together
- **Conditional display:** Show/hide content based on conditions
- **Responsive layout:** Adapt to different screen sizes
- **No-code configuration:** Design without programming

### How It Works
In App Studio, developers drag and drop fields and components into customizable areas of Views. They configure field settings such as validation, labels, and help text. They organize content into logical groups and apply conditional logic to show/hide elements based on data state.

### Takeaways
- App Studio enables visual UI configuration without code
- Customizable areas provide flexibility in layout design
- Field settings control behavior and validation
- Conditional display improves user experience
- Responsive design is automatic

## Topic 3: Form Views
### Overview
Form Views are specialized Views designed for data entry and form display. They support both default forms (simple field-by-field layouts) and hierarchical forms (organized with grouping and conditional display).

### Key Concepts
- **Form View:** Specialized view for data entry
- **Default form:** Simple field-by-field layout
- **Hierarchical form:** Organized with logical grouping
- **Data entry:** Optimized for user input
- **Field organization:** Logical grouping improves UX
- **Conditional sections:** Show/hide based on data
- **Validation integration:** Built-in data validation

### How It Works
Default forms present fields in a straightforward sequence, suitable for simple data entry. Hierarchical forms organize fields into sections or groups, making complex forms more understandable. Both types support validation and conditional display of fields based on values.

### Takeaways
- Form Views optimize data entry experiences
- Default forms work for simple scenarios
- Hierarchical forms organize complex data entry
- Both support validation and conditional logic
- Proper form design reduces user errors

## Topic 4: Exploring Fields
### Overview
Fields are the fundamental UI elements for displaying and capturing data. Pega provides extensive configuration options and specialized field types to support diverse display and interaction needs.

### Key Concepts
- **Field types:** Different field types for different data
- **Primary Fields:** Highlighted fields for important data
- **Field Groups:** Organize related fields together
- **Common settings:** Validation, labels, help text
- **Dynamic behavior:** Cascading dropdowns, conditional values
- **Display options:** Different ways to present data
- **Accessibility:** Built-in accessibility support

### How It Works
Developers configure fields with appropriate types and settings. Primary Fields are marked for emphasis. Field Groups organize related fields. Dynamic behaviors like cascading dropdowns connect field values so changing one affects others. Conditional settings show/hide fields or values based on other data.

### Takeaways
- Field configuration is critical to UI quality
- Primary Fields emphasize important information
- Field Groups organize information logically
- Dynamic field behavior improves user experience
- Accessibility is built-in

## Topic 5: Model-driven UI Controls
### Overview
Model-driven UI Controls are dynamic, responsive controls that automatically adapt based on underlying data models. They support patterns like cascading dropdowns, conditional suggested values, and When Rules for responsive, user-centric experiences.

### Key Concepts
- **Model-driven controls:** Automatically adapt to data model
- **Cascading dropdowns:** Dependent list values
- **Conditional suggested values:** Dynamic dropdown options
- **When Rules:** Conditional logic for field behavior
- **Dynamic fields:** Responsive to user actions
- **Intelligent defaults:** Suggest appropriate values
- **User-centric design:** Reduce cognitive load

### How It Works
Model-driven controls configure themselves based on underlying data relationships. Cascading dropdowns filter options based on parent field selection. Conditional suggested values show appropriate options based on current data state. When Rules trigger field visibility and behavior changes based on conditions.

### Takeaways
- Model-driven controls provide intelligent UI behavior
- Cascading dropdowns reduce invalid selections
- Conditional values guide users toward correct choices
- When Rules implement responsive UI logic
- Dynamic behavior improves user experience significantly

## Module Summary
Constellation architecture provides a comprehensive framework for designing modern, intuitive user interfaces in Pega applications. By leveraging different View types, customizable areas, and intelligent field configurations, developers create user experiences that guide users effectively through case processing. Features like Primary Fields, Field Groups, and model-driven controls add sophistication and responsiveness to interfaces. The combination of visual design tools in App Studio with intelligent behavior patterns enables creation of professional, user-friendly applications that reduce errors and improve efficiency.

## CSA Exam Tips
1. Understand the Constellation architecture's View types and their purposes
2. Know that App Studio enables no-code UI configuration in customizable areas
3. Remember the distinction between default forms (simple) and hierarchical forms (organized with grouping)
4. Understand Primary Fields highlight important information and improve accessibility
5. Know that model-driven controls enable dynamic behavior through cascading dropdowns, conditional values, and When Rules
