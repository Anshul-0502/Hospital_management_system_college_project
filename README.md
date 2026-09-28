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

## Backend technology (Phase 5 Foundation)

- Runtime: Java 21 / 25 LTS (OpenJDK / Oracle JDK)
- Framework: Spring Boot 3.4.3
- Build Tool: Apache Maven 3.9+
- Database: Decision pending for Phase 6 (PostgreSQL proposed)
- Health Check: `GET http://localhost:8080/api/health`

At this stage (Phase 5), the backend provides application foundation, CORS configuration for `http://localhost:5173`, and an availability health-check endpoint. Database persistence and clinical CRUD APIs are planned for subsequent phases.

## Running the backend

To build, test, and run the Spring Boot backend locally:

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Run unit and health-check tests
mvn test

# 3. Start the Spring Boot server
mvn spring-boot:run
```

Once started, the backend runs on `http://localhost:8080`. Verify process health:
```bash
curl http://localhost:8080/api/health
```

Expected JSON response:
```json
{
  "status": "UP",
  "service": "Hospital Management System Backend",
  "phase": "Phase 5 — Backend Foundation",
  "environment": "Development",
  "databaseStatus": "Not Connected (Decision pending for Phase 6)",
  "clinicalServices": "Not Active (Phase 5 foundation only)",
  "disclaimer": "Process availability only. Database and operational clinical workflows are planned for later phases."
}
```


## Running the frontend

To run the React frontend locally:

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies (Node.js and npm required)
npm install

# 3. Start the local development server
npm run dev

# 4. Or build for production
npm run build
```

Once started with `npm run dev`, open the displayed local URL (typically `http://localhost:5173`) in your web browser.

## Frontend Demo & Data Notice

- All records displayed in the frontend come from `frontend/src/data/sampleData.js`.
- Any registrations, appointments, consultations, or admissions made in the UI are held in active React browser memory.
- Data resets upon refreshing the browser.
- **Safety notice:** The emergency and ambulance screens are educational student demonstrations only; they do not contact emergency dispatch services.