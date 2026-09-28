# Hospital Management System — Project Structure

## 1. Project goal

We are building a Hospital Management System as a group project.

The system is planned around four areas:

1. OPD — registration, appointments, consultations, prescriptions, and related records
2. IPD — admissions, beds, inpatient records, and discharge
3. Hospital Operations — staff, departments, lab, pharmacy, inventory, billing, and reports
4. Emergency — emergency ward and ambulance requests

The current phase is a basic React frontend. Java with Spring Boot, database access, and real CRUD operations will be added later.

## 2. Basic user flow

### OPD flow

Patient registration → Appointment/check-in → Doctor consultation → Prescription or lab order → Billing → Visit record

### IPD flow

Patient admission → Bed allotment → Inpatient record → Discharge → Final bill

### Emergency flow

Emergency arrival or ambulance request → Emergency ward view → Staff updates the case status

In the first frontend version, emergency and ambulance screens are demonstrations only. A form submission must not claim that an ambulance has actually been dispatched.

## 3. Proposed frontend pages

### Shared pages

- `LoginPage` — basic login screen layout
- `DashboardPage` — navigation to the hospital sections
- `NotFoundPage` — shown for an unknown route

Login and role-based access are visual placeholders until authentication is implemented.

### OPD pages

- `PatientListPage` — patient search and basic list
- `PatientRegistrationPage` — patient registration form
- `PatientProfilePage` — one patient's summary and related records
- `AppointmentsPage` — appointment list and basic booking interface
- `OPDQueuePage` — patients waiting for consultation
- `ConsultationPage` — consultation form, notes, and prescription interface

### IPD pages

- `AdmissionsPage` — admission list and basic admission form
- `BedsPage` — bed list and availability display
- `InpatientRecordPage` — patient's inpatient summary and daily notes interface
- `DischargePage` — discharge summary interface

### Hospital Operations pages

- `DoctorsStaffPage` — doctor and staff list
- `DepartmentsPage` — hospital departments
- `LabPage` — test orders and result display
- `PharmacyPage` — medicines and prescription fulfilment interface
- `InventoryPage` — basic stock list
- `BillingPage` — OPD and IPD bill interface
- `ReportsPage` — simple operational summaries

### Emergency pages

- `EmergencyWardPage` — emergency arrivals and case status display
- `AmbulanceRequestPage` — basic ambulance request form and sample request status

The page names are a planning map. The team can revise them before implementation.

## 4. Suggested folder layout

hospital-management-system/
├── README.md
├── ARCHITECTURE.md
├── PROJECT_STRUCTURE.md
├── PROJECT_PLAYBOOK.md
├── MASTER_PROMPT.md
├── frontend/
│   ├── package.json
│   └── src/
│       ├── app/
│       │   ├── App.jsx
│       │   └── routes.jsx
│       ├── pages/
│       │   ├── shared/
│       │   ├── opd/
│       │   ├── ipd/
│       │   ├── operations/
│       │   └── emergency/
│       ├── components/
│       │   ├── layout/
│       │   └── common/
│       ├── features/
│       ├── data/
│       │   └── sampleData.js
│       ├── services/
│       └── styles/
│           └── global.css
└── backend/
    └── (created in a later phase)

Create folders when they are needed. The first scaffold does not need an empty file for every planned page.

## 5. Shared components

Start with simple versions of:

- `Header`
- `Sidebar` or basic navigation menu
- `PageHeader`
- `SearchBar`
- `BasicTable`
- `FormField`
- `StatusBadge`

A component should handle one clear job. Use simple HTML and minimal CSS so the team can improve it manually.

## 6. Page development rule

For each page:

1. Add a heading that identifies the page.
2. Add only the basic form, list, table, or links needed to show its purpose.
3. Use sample data if data is needed for display.
4. Label demo actions clearly.
5. Keep reusable UI in `components/`.
6. Do not add a real API call until its Spring Boot endpoint and data contract are defined.

A button must not show a real-world success message for an action that the frontend has not actually completed.

## 7. Data and backend boundary

### Current frontend phase

- Data may come from `sampleData.js`.
- Form values may be held in React state.
- Refreshing the page may reset demo data.
- There is no real hospital database connection.

### Later backend phase

- Spring Boot will provide APIs and own validation, business rules, and database CRUD.
- React pages will use functions in `services/` to call those APIs.
- The browser will not access the database directly.
- Ambulance dispatch, authentication, and real patient records need actual backend workflows before they can be described as operational.

Do not put real patient information in sample data or commit it to Git.

## 8. Team workflow

- The shared React scaffold goes into the main GitHub repository.
- Each member copies or clones the repository.
- Give each member a specific page or component task.
- For each task, specify the file, expected inputs, user actions, and output.
- Each member works in a separate branch and opens a pull request.
- Review that the app still runs and navigation still works before merging into `main`.

## 9. Current implementation order

1. Create a React app that runs locally.
2. Add the shared layout and navigation.
3. Add basic pages for OPD, IPD, Operations, and Emergency.
4. Add simple common components.
5. Use clearly marked sample data for display.
6. Assign individual pages and components to team members for manual improvement.
7. Plan API contracts and backend integration in later phases.

## 10. Current completion condition

The frontend foundation is complete when all agreed section pages open through navigation, basic components render, and teammates can independently edit assigned pages without breaking the rest of the app.

This condition does not mean the Hospital Management System, database CRUD, or ambulance service is complete.