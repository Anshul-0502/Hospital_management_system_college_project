import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Shared
import DashboardPage from '../pages/shared/DashboardPage';
import LoginPage from '../pages/shared/LoginPage';
import NotFoundPage from '../pages/shared/NotFoundPage';

// OPD
import PatientListPage from '../pages/opd/PatientListPage';
import PatientRegistrationPage from '../pages/opd/PatientRegistrationPage';
import PatientProfilePage from '../pages/opd/PatientProfilePage';
import AppointmentsPage from '../pages/opd/AppointmentsPage';
import OPDQueuePage from '../pages/opd/OPDQueuePage';
import ConsultationPage from '../pages/opd/ConsultationPage';

// IPD
import AdmissionsPage from '../pages/ipd/AdmissionsPage';
import BedsPage from '../pages/ipd/BedsPage';
import InpatientRecordPage from '../pages/ipd/InpatientRecordPage';
import DischargePage from '../pages/ipd/DischargePage';

// Operations
import DoctorsStaffPage from '../pages/operations/DoctorsStaffPage';
import DepartmentsPage from '../pages/operations/DepartmentsPage';
import LabPage from '../pages/operations/LabPage';
import PharmacyPage from '../pages/operations/PharmacyPage';
import InventoryPage from '../pages/operations/InventoryPage';
import BillingPage from '../pages/operations/BillingPage';
import ReportsPage from '../pages/operations/ReportsPage';

// Emergency
import EmergencyWardPage from '../pages/emergency/EmergencyWardPage';
import AmbulanceRequestPage from '../pages/emergency/AmbulanceRequestPage';

export default function AppRoutes({
  // OPD
  patients,
  onRegisterPatient,
  appointments,
  onBookAppointment,
  onCheckIn,
  queue,
  consultations,
  onSaveConsultation,
  // IPD
  admissions,
  beds,
  inpatientRecords,
  discharges,
  onAdmitPatient,
  onAddInpatientNote,
  onDischargePatient,
  // Operations
  labOrders,
  onAddLabOrder,
  pharmacyStock,
  inventory,
  bills,
  onAddBill,
  onMarkBillPaid,
  // Emergency
  emergencyCases,
  onAddEmergencyCase,
  ambulanceRequests,
  onAddAmbulanceRequest,
}) {
  return (
    <Routes>
      {/* Shared routes */}
      <Route path="/" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* OPD routes */}
      <Route
        path="/opd/patients"
        element={<PatientListPage patients={patients} />}
      />
      <Route
        path="/opd/register"
        element={<PatientRegistrationPage onRegister={onRegisterPatient} />}
      />
      <Route
        path="/opd/patient/:id"
        element={
          <PatientProfilePage
            patients={patients}
            appointments={appointments}
            consultations={consultations}
            labOrders={labOrders}
          />
        }
      />
      <Route
        path="/opd/appointments"
        element={
          <AppointmentsPage
            appointments={appointments}
            patients={patients}
            onBookAppointment={onBookAppointment}
            onCheckIn={onCheckIn}
          />
        }
      />
      <Route
        path="/opd/queue"
        element={<OPDQueuePage queue={queue} />}
      />
      <Route
        path="/opd/consultation"
        element={
          <ConsultationPage
            patients={patients}
            onSaveConsultation={onSaveConsultation}
          />
        }
      />

      {/* IPD routes */}
      <Route
        path="/ipd/admissions"
        element={
          <AdmissionsPage
            patients={patients}
            admissions={admissions}
            beds={beds}
            onAdmitPatient={onAdmitPatient}
          />
        }
      />
      <Route
        path="/ipd/beds"
        element={<BedsPage beds={beds} />}
      />
      <Route
        path="/ipd/records"
        element={
          <InpatientRecordPage
            admissions={admissions}
            records={inpatientRecords}
            onAddNote={onAddInpatientNote}
          />
        }
      />
      <Route
        path="/ipd/discharge"
        element={
          <DischargePage
            admissions={admissions}
            discharges={discharges}
            onDischargePatient={onDischargePatient}
          />
        }
      />

      {/* Operations routes */}
      <Route path="/operations/staff" element={<DoctorsStaffPage />} />
      <Route path="/operations/departments" element={<DepartmentsPage />} />
      <Route
        path="/operations/lab"
        element={
          <LabPage
            orders={labOrders}
            patients={patients}
            onAddLabOrder={onAddLabOrder}
          />
        }
      />
      <Route
        path="/operations/pharmacy"
        element={<PharmacyPage stock={pharmacyStock} />}
      />
      <Route
        path="/operations/inventory"
        element={<InventoryPage inventory={inventory} />}
      />
      <Route
        path="/operations/billing"
        element={
          <BillingPage
            bills={bills}
            patients={patients}
            onAddBill={onAddBill}
            onMarkPaid={onMarkBillPaid}
          />
        }
      />
      <Route
        path="/operations/reports"
        element={
          <ReportsPage
            patients={patients}
            appointments={appointments}
            admissions={admissions}
            beds={beds}
          />
        }
      />

      {/* Emergency routes */}
      <Route
        path="/emergency/ward"
        element={
          <EmergencyWardPage
            cases={emergencyCases}
            onAddEmergencyCase={onAddEmergencyCase}
          />
        }
      />
      <Route
        path="/emergency/ambulance"
        element={
          <AmbulanceRequestPage
            requests={ambulanceRequests}
            onAddAmbulanceRequest={onAddAmbulanceRequest}
          />
        }
      />

      {/* Catch-all 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
