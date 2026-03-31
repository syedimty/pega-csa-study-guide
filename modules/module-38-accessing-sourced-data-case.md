# Module 38: Accessing Sourced Data in a Case

**Duration:** ~25 mins | **Topics:** 1 | **Level:** Intermediate

## Overview
Access external data sources and systems during case processing. Sourced data enables cases to reference information from systems of record.

## Learning Objectives
- Configure data sourcing from external systems.
- Implement data access patterns.
- Handle external data retrieval and caching.

## Topic 1: External Data Access
### Overview
Cases can access data from external systems and sources, bringing current information into case processing.

### Key Concepts
- **Data source:** External system or database
- **Data access:** Retrieve data on demand
- **Caching:** Store retrieved data temporarily
- **Real-time data:** Current information from source
- **Performance:** Balance freshness and speed
- **Error handling:** Manage missing data
- **Data mapping:** Transform external format to case format
- **Refresh:** Update cached data

### How It Works
Data Pages and integration rules retrieve data from external sources when cases need it. Retrieved data can be cached for performance or retrieved fresh each time. Data is mapped from external format to case structures.

### Takeaways
- External data access brings systems together
- Caching balances performance and freshness
- Data mapping enables integration
- Error handling ensures graceful failures
- Real-time data supports current information

## Module Summary
Accessing sourced data enables cases to work with current information from external systems. By implementing appropriate data access patterns, applications integrate with existing data sources seamlessly.

## CSA Exam Tips
1. Understand that sourced data comes from external systems
2. Know the tradeoff between caching and real-time
3. Remember data mapping importance
4. Understand error handling for missing data
5. Be prepared to explain external data access patterns
