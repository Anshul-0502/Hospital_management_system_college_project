# Hospital Management System

A group project to build a Hospital Management System step by step.

## Current focus

We are currently building a basic frontend with React. The first version is an editable foundation for the team, not the final website design.

This version will have:

- Basic page structure and navigation
- Simple forms, tables, search bars, and other reusable components
- Minimal CSS
- Sample data where a screen needs data
- Clear separation between pages and reusable components

Sample data is for frontend development only. It is not saved to a database.

## Planned technology

- Frontend: React
- Backend (later): Java and Spring Boot
- Database: To be decided

## Planned hospital areas

The project may cover patient management, appointments, consultations, lab, pharmacy, admissions, beds, billing, and administration. We will finalize the exact pages and features before implementing them.

## Current project structure

The React frontend will follow this structure:

frontend/
└── src/
    ├── app/          # App setup and navigation
    ├── pages/        # Full screens
    ├── components/   # Reusable UI components
    ├── features/     # Components and logic for specific features
    ├── services/     # Future API integration
    └── styles/       # Minimal shared CSS

Folders and files will be added as their work begins. Empty folders do not need to be kept just to match this outline.

## Development approach

1. Create a React app that runs locally.
2. Add basic navigation and agreed pages.
3. Add simple, reusable components with minimal styling.
4. Assign individual pages or components to team members.
5. Improve the design and behaviour manually in later phases.
6. Connect the frontend to Spring Boot APIs when the backend is ready.

Do not add complex styling, generated assets, or unapproved features during the initial frontend phase.

## Team workflow

- Keep `main` as the shared working base.
- Create a separate branch for each assigned task.
- Keep each change focused on its assigned page or component.
- Open a pull request for review before merging into `main`.
- Agree on component inputs and outputs before working on shared features.

## Backend and database

The planned backend will use Java with Spring Boot. Database access and create, read, update, and delete (CRUD) operations belong to that later phase. The current frontend does not claim to save real hospital data.

## Running the frontend

Local setup commands will be added here after the React scaffold and its package scripts are created.