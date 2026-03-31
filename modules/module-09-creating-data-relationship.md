# Module 9: Creating a Data Relationship

**Duration:** ~30 mins | **Topics:** 2 | **Level:** Beginner

## Overview
Create data objects to model the attributes of an entity and establish a common context for a group of fields. Create a data relationship in a Case Type to reference a data object. Create data relationships for single records or lists of records.

## Learning Objectives
- Explain how data objects group related fields to model a single entity.
- Configure data objects to group related fields to model a single entity.
- Create a data relationship to describe an entity during Case processing.
- Distinguish between single record and list of records data relationships.
- Distinguish between Embedded, Query, and Reference Field Types.

## Topic 1: Data Objects
### Overview
Data Objects group related fields to model a single entity. They represent business concepts and organize attributes logically, promoting reuse and consistency across applications.

### Key Concepts
- **Data Object:** Structured grouping of related fields
- **Entity modeling:** Represent business entities as data objects
- **Field grouping:** Organize related attributes together
- **Reusability:** Data objects can be used across multiple cases
- **Consistency:** Standard structure for repeated information
- **Attributes:** Properties that define the entity
- **Object context:** Creates meaningful grouping of data

### How It Works
Developers identify business entities that need representation in the application (e.g., Customer, Address, Product). For each entity, they create a data object that groups the relevant fields. These data objects can then be referenced by multiple cases, promoting consistency and reusability.

### Takeaways
- Data Objects represent business entities
- Group related fields for logical organization
- Enable reuse across multiple cases
- Promote consistency in data representation
- Foundation for creating data relationships

## Topic 2: Data Relationships
### Overview
Data Relationships describe how a Case Type references and relates to data objects. Relationships can represent single records or multiple records, and support different access patterns through Embedded, Query, and Reference field types.

### Key Concepts
- **Data Relationship:** Connection between a Case Type and data object
- **Single record relationship:** References one instance of data object
- **List of records relationship:** References multiple instances
- **Embedded Field Type:** Data stored directly within case
- **Query Field Type:** Data retrieved on-demand from query
- **Reference Field Type:** Data retrieved from referenced object
- **Relationship context:** Defines how data is accessed and displayed

### How It Works
Developers create data relationships within Case Types to reference data objects. They specify whether the relationship is to a single record or multiple records. For each relationship, they choose the appropriate field type (Embedded, Query, or Reference) based on how the data should be stored and accessed.

**Field Type Characteristics:**
- **Embedded:** Data stored with the case, good for frequently accessed data
- **Query:** Data retrieved on-demand, efficient for large datasets
- **Reference:** Links to data stored elsewhere, supports single source of truth

### Takeaways
- Data Relationships connect Cases to Data Objects
- Support both single and multiple record relationships
- Field Type choice affects storage and access patterns
- Embedded suits frequently accessed data
- Query suits large datasets; Reference suits shared data
- Proper relationship design ensures data efficiency

## Module Summary
Data Objects and Relationships form the structural backbone of application data management. By modeling business entities as data objects and creating appropriate relationships within cases, developers create applications that handle diverse data scenarios effectively. The choice between Embedded, Query, and Reference field types ensures optimal performance and data organization for specific use cases.

## CSA Exam Tips
1. Understand that Data Objects group related fields and represent business entities
2. Know the three relationship types: Single Record (one data object instance) and List of Records (multiple instances)
3. Remember the Field Type options: Embedded (stored with case), Query (retrieved on-demand), Reference (stored elsewhere)
4. Understand when to use each Field Type: Embedded for frequent access, Query for large data, Reference for shared data
5. Be prepared to explain how data relationships connect cases to data objects and why field type matters
