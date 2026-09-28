# Hospital Management System — Architecture

## 1. Purpose

This document describes the initial architecture of our Hospital Management System group project.

The current implementation phase focuses only on a basic, editable React frontend. The team will improve individual pages and components manually. Java, Spring Boot, database access, and CRUD operations belong to later phases.

## 2. Current scope

The initial frontend should:

- Run locally as a React application.
- Provide basic navigation between agreed pages.
- Use simple HTML elements and minimal CSS.
- Keep reusable components separate from full pages.
- Use clearly identified sample data where needed.
- Make it easy for team members to work on separate tasks.

It should not pretend that sample data is saved or loaded from a real hospital database.

## 3. High-level architecture

Current phase:

User action → React page → Component → Local state or sample data → Updated screen

Future integration:

User action → React page → Service function → Spring Boot API → Database

The frontend must call the future backend through functions in `services/`. Components should not contain direct database logic.

## 4. Frontend responsibilities

### `app/`

Contains application setup and navigation configuration.

Responsibilities:

- Mount the application.
- Define routes for agreed pages.
- Provide the shared page layout where needed.

### `pages/`

Contains complete screens that a user navigates to.

A page:

- Combines smaller components.
- Holds page-level state when needed.
- Passes data and event handlers to components.
- May call a service function when API integration is added later.

Only create a page when its purpose has been agreed by the team.

### `components/`

Contains reusable interface pieces, such as a basic input, search bar, table, button, or page header.

A reusable component:

- Receives data through props.
- Reports user actions through callbacks.
- Does not decide the hospital workflow by itself.
- Uses simple markup and minimal styling in this phase.

### `features/`

Contains code specific to an approved hospital feature. For example, once patient management is approved, its feature folder may contain its own forms and display components.

Do not create empty feature folders for ideas that have not been selected.

### `services/`

Provides one place for future API calls.

During the frontend-only phase, a page may use local sample data. When Spring Boot APIs are available, service functions will replace that data source without requiring a complete UI rewrite.

### `styles/`

Contains minimal shared CSS. Keep the first version readable and usable. Detailed visual design will be done manually in later tasks.

## 5. Page and component relationship

A route opens a page. The page assembles components and supplies their data.

Example for a future search page:

- The page owns the search text and displayed results.
- `SearchBar` receives the current text and an `onSearch` callback.
- A basic list or table displays the results.
- In the initial phase, results may come from sample data.
- Later, the page may obtain results through a service function.

This example defines a component boundary; it does not make a search feature mandatory.

## 6. Data rules

- Mark sample data clearly in code and on screens where confusion is possible.
- Keep sample records separate from reusable UI components.
- Do not put real patient information into sample data or the repository.
- Do not show a successful “saved” message unless data has actually been persisted.
- Define the backend request and response format before connecting a page to an API.

## 7. Backend architecture — Phase 5 Foundation

The backend application is implemented using Java (21/25 LTS) and Spring Boot 3.4.3 with Maven. It establishes:

- Application package root: `com.hospital.management`
- Common health check endpoint: `GET /api/health`
- CORS policy: Restricted to local React development server (`http://localhost:5173`)
- Separation of layers: Controllers (`web/`), Services (`service/`), Repositories (`repository/`), DTOs (`dto/`) as feature phases are introduced.

In Phase 5, the backend runs independently without database credentials. Database drivers and JPA are deferred until the database choice is confirmed for Phase 6.


## 8. Team collaboration

- One shared repository contains the agreed project foundation.
- Each member works on an assigned task in a separate Git branch.
- Before implementation, the task specifies the page or component name, expected inputs, user actions, and expected output.
- Members open pull requests for review.
- Merge into `main` after checking that navigation and existing pages still run.
- Avoid editing another member's assigned files without coordination.

## 9. Decisions still open

The team will decide these before building their related features:

- Exact hospital workflows and required pages
- User roles and what each role can access
- Database choice
- API contracts
- Authentication and authorization
- AI/ML use case, if included
- Final visual design

## 10. Current completion condition

The architecture's first phase is satisfied when the React app runs, agreed routes open, basic components render, and another team member can take one component as an independent task. Real hospital data and backend CRUD are not required for this phase.