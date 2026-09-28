import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import AppRoutes from './routes';
import {
  SAMPLE_PATIENTS,
  SAMPLE_APPOINTMENTS,
  SAMPLE_OPD_QUEUE,
  SAMPLE_CONSULTATIONS,
  SAMPLE_ADMISSIONS,
  SAMPLE_BEDS,
  SAMPLE_INPATIENT_RECORDS,
  SAMPLE_DISCHARGES,
  SAMPLE_LAB_ORDERS,
  SAMPLE_PHARMACY_STOCK,
  SAMPLE_INVENTORY,
  SAMPLE_BILLS,
  SAMPLE_EMERGENCY_CASES,
  SAMPLE_AMBULANCE_REQUESTS,
} from '../data/sampleData';

export default function App() {
  // 1. OPD shared state
  const [patients, setPatients] = useState(SAMPLE_PATIENTS);
  const [appointments, setAppointments] = useState(SAMPLE_APPOINTMENTS);
  const [queue, setQueue] = useState(SAMPLE_OPD_QUEUE);
  const [consultations, setConsultations] = useState(SAMPLE_CONSULTATIONS);

  // 2. IPD shared state
  const [admissions, setAdmissions] = useState(SAMPLE_ADMISSIONS);
  const [beds, setBeds] = useState(SAMPLE_BEDS);
  const [inpatientRecords, setInpatientRecords] = useState(SAMPLE_INPATIENT_RECORDS);
  const [discharges, setDischarges] = useState(SAMPLE_DISCHARGES);

  // 3. Operations & Emergency shared state
  const [labOrders, setLabOrders] = useState(SAMPLE_LAB_ORDERS);
  const [pharmacyStock, setPharmacyStock] = useState(SAMPLE_PHARMACY_STOCK);
  const [inventory, setInventory] = useState(SAMPLE_INVENTORY);
  const [bills, setBills] = useState(SAMPLE_BILLS);
  const [emergencyCases, setEmergencyCases] = useState(SAMPLE_EMERGENCY_CASES);
  const [ambulanceRequests, setAmbulanceRequests] = useState(SAMPLE_AMBULANCE_REQUESTS);

  // --- OPD Actions ---
  const handleRegisterPatient = (newPatient) => {
    setPatients((prev) => [newPatient, ...prev]);
  };

  const handleBookAppointment = (newAppt) => {
    setAppointments((prev) => [newAppt, ...prev]);
  };

  const handleCheckIn = (appointmentId) => {
    const targetAppt = appointments.find((a) => a.id === appointmentId);
    if (!targetAppt) return;

    setAppointments((prev) =>
      prev.map((a) => (a.id === appointmentId ? { ...a, status: 'Checked in' } : a))
    );

    const alreadyInQueue = queue.some((q) => q.appointmentId === appointmentId);
    if (!alreadyInQueue) {
      const newQueueEntry = {
        queueNumber: queue.length + 1,
        appointmentId: targetAppt.id,
        patientId: targetAppt.patientId,
        patientName: targetAppt.patientName,
        doctorName: targetAppt.doctorName,
        room: 'Room 101',
        status: 'Waiting',
        checkInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setQueue((prev) => [...prev, newQueueEntry]);
    }
  };

  const handleSaveConsultation = (newConsultation) => {
    setConsultations((prev) => [newConsultation, ...prev]);

    if (newConsultation.appointmentId) {
      setAppointments((prev) =>
        prev.map((a) =>
          a.id === newConsultation.appointmentId ? { ...a, status: 'Completed' } : a
        )
      );
      setQueue((prev) =>
        prev.map((q) =>
          q.appointmentId === newConsultation.appointmentId
            ? { ...q, status: 'Completed' }
            : q
        )
      );
    }
  };

  // --- IPD Actions ---
  const handleAdmitPatient = ({ patientId, ward, bedNumber, reason, attendingDoctor }) => {
    const patient = patients.find((p) => p.id === patientId);
    if (!patient) return { success: false, message: 'Selected patient does not exist.' };

    // Check if bed is available
    const targetBed = beds.find((b) => b.bedNumber === bedNumber);
    if (!targetBed) return { success: false, message: `Bed ${bedNumber} not found.` };
    if (targetBed.status === 'Occupied') {
      return { success: false, message: `Bed ${bedNumber} is already occupied by ${targetBed.patientName || 'another patient'}. Cannot double-assign.` };
    }

    const newAdmission = {
      id: `ADM-${Math.floor(410 + Math.random() * 590)}`,
      patientId,
      patientName: patient.fullName,
      ward,
      bedNumber,
      admittedDate: new Date().toISOString().split('T')[0],
      attendingDoctor: attendingDoctor || 'Dr. Marcus Vance',
      reason,
      status: 'Admitted',
    };

    // 1. Add admission
    setAdmissions((prev) => [newAdmission, ...prev]);

    // 2. Mark bed as occupied
    setBeds((prev) =>
      prev.map((b) =>
        b.bedNumber === bedNumber
          ? { ...b, status: 'Occupied', patientName: patient.fullName, admissionId: newAdmission.id }
          : b
      )
    );

    // 3. Create inpatient record entry
    const newRecord = {
      admissionId: newAdmission.id,
      patientId: patient.id,
      patientName: patient.fullName,
      bedNumber: newAdmission.bedNumber,
      dailyNotes: [
        {
          date: newAdmission.admittedDate,
          author: newAdmission.attendingDoctor,
          note: `Patient admitted for: ${reason}. Vitals baseline recorded.`,
        },
      ],
    };
    setInpatientRecords((prev) => [newRecord, ...prev]);

    return { success: true, admission: newAdmission };
  };

  const handleAddInpatientNote = (admissionId, noteObj) => {
    setInpatientRecords((prev) =>
      prev.map((r) =>
        r.admissionId === admissionId
          ? { ...r, dailyNotes: [...r.dailyNotes, noteObj] }
          : r
      )
    );
  };

  const handleDischargePatient = ({ admissionId, summary, billReference }) => {
    const adm = admissions.find((a) => a.id === admissionId);
    if (!adm) return { success: false, message: 'Admission not found.' };

    const newDischarge = {
      dischargeId: `DIS-${Math.floor(510 + Math.random() * 490)}`,
      admissionId,
      patientId: adm.patientId,
      patientName: adm.patientName,
      dischargeDate: new Date().toISOString().split('T')[0],
      summary,
      billReference: billReference || 'BILL-AUTO',
      status: 'Discharged',
    };

    // 1. Mark admission discharged
    setAdmissions((prev) =>
      prev.map((a) => (a.id === admissionId ? { ...a, status: 'Discharged' } : a))
    );

    // 2. Release bed
    setBeds((prev) =>
      prev.map((b) =>
        b.bedNumber === adm.bedNumber
          ? { ...b, status: 'Available', patientName: null, admissionId: null }
          : b
      )
    );

    // 3. Add to discharges
    setDischarges((prev) => [newDischarge, ...prev]);

    return { success: true, discharge: newDischarge };
  };

  // --- Operations Actions ---
  const handleAddLabOrder = (newOrder) => {
    setLabOrders((prev) => [newOrder, ...prev]);
  };

  const handleAddBill = (newBill) => {
    setBills((prev) => [newBill, ...prev]);
  };

  const handleMarkBillPaid = (billId) => {
    setBills((prev) =>
      prev.map((b) => (b.billId === billId ? { ...b, status: 'Paid' } : b))
    );
  };

  const handleAddEmergencyCase = (newCase) => {
    setEmergencyCases((prev) => [newCase, ...prev]);
  };

  const handleAddAmbulanceRequest = (newRequest) => {
    setAmbulanceRequests((prev) => [newRequest, ...prev]);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="demo-banner">
        ⚠️ <strong>Development Notice:</strong> Basic Frontend Prototype. Data changes are stored in browser memory only and will reset upon page refresh.
      </div>
      <div className="app-body">
        <Sidebar />
        <main className="app-main-content">
          <AppRoutes
            // OPD
            patients={patients}
            onRegisterPatient={handleRegisterPatient}
            appointments={appointments}
            onBookAppointment={handleBookAppointment}
            onCheckIn={handleCheckIn}
            queue={queue}
            consultations={consultations}
            onSaveConsultation={handleSaveConsultation}
            // IPD
            admissions={admissions}
            beds={beds}
            inpatientRecords={inpatientRecords}
            discharges={discharges}
            onAdmitPatient={handleAdmitPatient}
            onAddInpatientNote={handleAddInpatientNote}
            onDischargePatient={handleDischargePatient}
            // Operations
            labOrders={labOrders}
            onAddLabOrder={handleAddLabOrder}
            pharmacyStock={pharmacyStock}
            inventory={inventory}
            bills={bills}
            onAddBill={handleAddBill}
            onMarkBillPaid={handleMarkBillPaid}
            // Emergency
            emergencyCases={emergencyCases}
            onAddEmergencyCase={handleAddEmergencyCase}
            ambulanceRequests={ambulanceRequests}
            onAddAmbulanceRequest={handleAddAmbulanceRequest}
          />
        </main>
      </div>
    </div>
  );
}
