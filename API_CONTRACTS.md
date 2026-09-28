# API_CONTRACTS.md — Proposed Backend REST API Contracts

> **Important Note:** This document represents the planned API architecture and contract specification for the Hospital Management System. 
> Only the `/api/health` endpoint is implemented in Phase 5. All other endpoints are **Planned** for Phases 6 through 8 and are marked as `[Status: Planned]`.
> The database technology has **not yet been finalized** (PostgreSQL is proposed for Phase 6, pending formal team decision).

---

## 1. Foundation & Health Endpoint (Phase 5)

### `GET /api/health`
- **Status**: **Implemented**
- **Purpose**: Verifies that the Spring Boot backend process is running.
- **Allowed Roles**: Public / Unauthenticated
- **Request**: None
- **Response** (HTTP 200 OK):
  ```json
  {
    "status": "UP",
    "service": "Hospital Management System Backend",
    "phase": "Phase 5 — Backend Foundation",
    "environment": "Development",
    "timestamp": "2026-09-29T00:46:15Z",
    "databaseStatus": "Not Connected (Decision pending for Phase 6)",
    "clinicalServices": "Not Active (Phase 5 foundation only)",
    "disclaimer": "Process availability only. Database and operational clinical workflows are planned for later phases."
  }
  ```

---

## 2. OPD Module Endpoints (Planned for Phase 6)

### `GET /api/patients`
- **Status**: Planned (Phase 6)
- **Purpose**: Search and list outpatient records.
- **Allowed Roles**: Receptionist, Doctor, Nurse, Admin
- **Query Parameters**: `query` (string, optional: search by name, ID, or phone), `page`, `size`
- **Response** (HTTP 200 OK):
  ```json
  [
    {
      "id": "PAT-101",
      "fullName": "Jane Doe",
      "age": 34,
      "gender": "Female",
      "contact": "555-0101",
      "bloodGroup": "O+",
      "registeredDate": "2026-09-15"
    }
  ]
  ```

### `POST /api/patients`
- **Status**: Planned (Phase 6)
- **Purpose**: Register a new patient.
- **Allowed Roles**: Receptionist, Admin
- **Request Body**:
  ```json
  {
    "fullName": "Marcus Miller",
    "age": 45,
    "gender": "Male",
    "contact": "555-0144",
    "bloodGroup": "A+",
    "address": "88 Elm Street",
    "medicalHistorySummary": "Mild asthma"
  }
  ```
- **Response** (HTTP 201 Created):
  ```json
  {
    "id": "PAT-104",
    "fullName": "Marcus Miller",
    "age": 45,
    "gender": "Male",
    "contact": "555-0144",
    "bloodGroup": "A+",
    "address": "88 Elm Street",
    "medicalHistorySummary": "Mild asthma",
    "registeredDate": "2026-09-29"
  }
  ```

### `GET /api/patients/{id}`
- **Status**: Planned (Phase 6)
- **Purpose**: Retrieve patient summary with linked appointments, consultations, and lab orders.
- **Allowed Roles**: Doctor, Nurse, Receptionist, Admin
- **Response** (HTTP 200 OK or 404 Not Found)

### `GET /api/appointments`
- **Status**: Planned (Phase 6)
- **Purpose**: List appointments filtered by date or patient ID.
- **Allowed Roles**: Receptionist, Doctor, Admin
- **Response** (HTTP 200 OK)

### `POST /api/appointments`
- **Status**: Planned (Phase 6)
- **Purpose**: Book an appointment.
- **Allowed Roles**: Receptionist, Admin
- **Request Body**:
  ```json
  {
    "patientId": "PAT-101",
    "doctorId": "DOC-01",
    "date": "2026-10-01",
    "time": "10:00 AM",
    "type": "General Consultation"
  }
  ```
- **Response** (HTTP 201 Created)

### `POST /api/appointments/{id}/check-in`
- **Status**: Planned (Phase 6)
- **Purpose**: Check in patient for scheduled appointment, assigning an OPD queue token.
- **Allowed Roles**: Receptionist, Nurse
- **Response** (HTTP 200 OK)

### `GET /api/opd/queue`
- **Status**: Planned (Phase 6)
- **Purpose**: Retrieve current waiting list for outpatient consultations.
- **Allowed Roles**: Doctor, Nurse, Receptionist
- **Response** (HTTP 200 OK)

### `POST /api/consultations`
- **Status**: Planned (Phase 6)
- **Purpose**: Record clinical consultation notes and prescription.
- **Allowed Roles**: Doctor
- **Request Body**:
  ```json
  {
    "patientId": "PAT-101",
    "appointmentId": "APP-201",
    "symptoms": "Mild fever and cough",
    "diagnosis": "Viral upper respiratory tract infection",
    "prescription": "Paracetamol 500mg, rest for 3 days",
    "notes": "Follow up if symptoms persist"
  }
  ```
- **Response** (HTTP 201 Created)

---

## 3. IPD Module Endpoints (Planned for Phase 7)

### `GET /api/ipd/admissions`
- **Status**: Planned (Phase 7)
- **Purpose**: List current and past inpatient admissions.
- **Allowed Roles**: Admission Desk, Doctor, Nurse, Admin

### `POST /api/ipd/admissions`
- **Status**: Planned (Phase 7)
- **Purpose**: Admit a patient to a ward and allot an available bed.
- **Allowed Roles**: Admission Desk, Admin
- **Request Body**:
  ```json
  {
    "patientId": "PAT-101",
    "ward": "General Medical Ward",
    "bedNumber": "GMW-11",
    "reason": "Observation following minor procedure",
    "attendingDoctor": "Dr. Marcus Vance"
  }
  ```
- **Response** (HTTP 201 Created)

### `GET /api/ipd/beds`
- **Status**: Planned (Phase 7)
- **Purpose**: Retrieve bed availability status across all wards.
- **Allowed Roles**: All clinical and administrative roles

### `POST /api/ipd/admissions/{id}/notes`
- **Status**: Planned (Phase 7)
- **Purpose**: Add clinical progress/round note for an admitted inpatient.
- **Allowed Roles**: Doctor, Nurse

### `POST /api/ipd/admissions/{id}/discharge`
- **Status**: Planned (Phase 7)
- **Purpose**: Discharge an inpatient, release the assigned bed, and finalize clinical summary.
- **Allowed Roles**: Attending Doctor, Admin

---

## 4. Hospital Operations Endpoints (Planned for Phase 7)

### `GET /api/staff`
- **Status**: Planned (Phase 7)
- **Purpose**: Directory of medical and administrative staff.

### `GET /api/departments`
- **Status**: Planned (Phase 7)
- **Purpose**: Hospital departments and head physicians.

### `GET /api/lab/orders` and `POST /api/lab/orders`
- **Status**: Planned (Phase 7)
- **Purpose**: Retrieve lab diagnostic requests and order tests.

### `GET /api/pharmacy/medicines`
- **Status**: Planned (Phase 7)
- **Purpose**: Medicines catalog and stock levels.

### `GET /api/billing/invoices` and `POST /api/billing/invoices`
- **Status**: Planned (Phase 7)
- **Purpose**: Manage patient invoices and payment statuses.

---

## 5. Emergency Endpoints (Planned for Phase 8)

### `GET /api/emergency/cases` and `POST /api/emergency/cases`
- **Status**: Planned (Phase 8)
- **Purpose**: Register emergency arrival and track bay assignment.
- **Notice**: No automated triage or diagnosis.

### `GET /api/emergency/ambulance-requests` and `POST /api/emergency/ambulance-requests`
- **Status**: Planned (Phase 8)
- **Purpose**: Log simulated ambulance transit coordination requests.
- **Notice**: Strict disclaimer that requests do not dispatch real emergency vehicles.

---

## 6. Open Decisions Pending Prior to Phase 6 Implementation

| Topic | Proposed Choice | Status |
|---|---|---|
| Database Technology | PostgreSQL 16 (Local container or native) | Decision pending team confirmation |
| Migration Tool | Flyway (Versioned SQL migrations) | Decision pending |
| Patient ID Scheme | `PAT-XXX` auto-generated sequence | Agreed for consistency with frontend |
| Authentication | Spring Security + JWT | Planned for Phase 9 |
| Roles Defined | `ADMIN`, `DOCTOR`, `NURSE`, `RECEPTIONIST` | Planned for Phase 9 |
