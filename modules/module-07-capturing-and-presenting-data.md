# Module 7: Capturing and Presenting Data

**Duration:** ~45 mins | **Topics:** 3 | **Level:** Beginner

## Overview
Define fields to capture user input and present data to users. Add fields to Views to define and tailor the user interface (UI) for each Step of the Case workflow. This module focuses on how to effectively collect and display information in Pega applications.

## Learning Objectives
- Identify the types of information that can be captured for a Case.
- Configure a View with different Field Types to capture various types of information.

## Topic 1: Fields
### Overview
Fields are the primary mechanism for capturing user input in Pega applications. Different Field Types support various kinds of information collection, from simple text to complex data structures.

### Key Concepts
- **Field:** UI element for capturing user input
- **Field Types:** Different types support different data (text, numbers, dates, dropdowns, etc.)
- **Input validation:** Fields can validate user input
- **Required fields:** Mark critical data as mandatory
- **Field constraints:** Limit input to specific formats or values
- **User guidance:** Fields can include help text and labels
- **Data binding:** Fields connect to underlying data model

### How It Works
Developers add fields to Views, configuring Field Types appropriate for the data being captured. Each Field Type includes specific options for formatting, validation, and user guidance. The field configuration binds the UI element to the underlying data model.

### Takeaways
- Multiple Field Types support various data collection scenarios
- Field configuration includes validation and user guidance
- Fields bind UI to underlying data model
- Proper Field Type selection improves user experience
- Field constraints prevent invalid data entry

## Topic 2: Calculated Values
### Overview
Calculated values automatically compute values based on other data without requiring user input, reducing data entry burden and ensuring consistency.

### Key Concepts
- **Calculated fields:** Automatically computed based on other values
- **Formula logic:** Define calculation rules
- **Real-time calculation:** Updates automatically when dependencies change
- **Data consistency:** Ensures computed values always reflect current data
- **Reduced manual entry:** Eliminates need for users to manually compute values
- **Examples:** Totals, averages, derived fields
- **Conditional logic:** Can include conditional calculations

### How It Works
Developers define calculation formulas that reference other fields or data values. When those source values change, the calculated field automatically updates. Calculations can include simple math, string operations, and conditional logic.

### Takeaways
- Calculated values reduce manual data entry and errors
- Automatic updates ensure consistency across views
- Support complex formulas including conditional logic
- Valuable for totals, averages, and derived information
- Improve data quality by reducing manual computation

## Topic 3: Views
### Overview
Views define the user interface for specific steps in the Case workflow. Each View comprises fields organized to create a cohesive user experience for a particular case processing step.

### Key Concepts
- **View:** UI definition for a Case workflow step
- **Field layout:** Organize fields into logical groups
- **Step-specific:** Each workflow step can have unique View
- **User experience:** Views define how data is collected and presented
- **Responsive design:** Views adapt to different screen sizes
- **Conditional fields:** Show/hide fields based on conditions
- **Mobile support:** Views render appropriately on mobile devices

### How It Works
For each Case workflow step, developers create a View that includes the appropriate fields for that step. The View layout organizes fields into sections or columns, and can include conditional logic to show/hide fields based on data state. Views automatically adapt to different screen sizes.

### Takeaways
- Views define UI for each Case workflow step
- Field organization improves user experience
- Conditional logic tailors UI to specific situations
- Responsive design supports multiple devices
- Views can be reused across different cases

## Module Summary
This module establishes the foundation for user interface design in Pega applications. Fields provide the mechanism for capturing diverse types of user input, while calculated values reduce manual data entry and ensure consistency. Views organize fields into step-specific interfaces that guide users through case workflows effectively. Together, these concepts enable developers to create intuitive, efficient user interfaces that facilitate case processing while maintaining data quality and consistency.

## CSA Exam Tips
1. Understand that Fields are the primary UI element for data capture, with different Field Types for different data
2. Know that calculated values reduce data entry and maintain consistency without user input
3. Remember that Views are step-specific UI definitions that organize fields appropriately for that workflow stage
4. Understand the relationship: Views contain Fields which bind to the Data Model
5. Be prepared to explain how proper field and view design improves both user experience and data quality
