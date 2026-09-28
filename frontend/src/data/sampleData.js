/**
 * sampleData.js
 * 
 * Fictional sample data for development and demonstration of the Hospital Management System.
 * NOTE: This is mock data stored locally for UI preview only.
 * No real patient or hospital records are stored here.
 * Changes made in the UI demo are held in memory and do not persist to a database.
 */

export const SAMPLE_PATIENTS = [
  {
    id: 'PAT-101',
    fullName: 'Jane Doe',
    age: 34,
    gender: 'Female',
    contact: '555-0101',
    address: '123 Maple Street, Springfield',
    bloodGroup: 'O+',
    registeredDate: '2026-09-15',
    medicalHistorySummary: 'Mild seasonal allergies. No chronic conditions.',
  },
  {
    id: 'PAT-102',
    fullName: 'John Smith',
    age: 52,
    gender: 'Male',
    contact: '555-0102',
    address: '456 Oak Avenue, Springfield',
    bloodGroup: 'A+',
    registeredDate: '2026-09-18',
    medicalHistorySummary: 'History of hypertension. Non-smoker.',
  },
  {
    id: 'PAT-103',
    fullName: 'Alex Rivera',
    age: 28,
    gender: 'Other',
    contact: '555-0103',
    address: '789 Pine Road, Springfield',
    bloodGroup: 'B-',
    registeredDate: '2026-09-20',
    medicalHistorySummary: 'None reported.',
  },
];

export const SAMPLE_APPOINTMENTS = [
  {
    id: 'APP-201',
    patientId: 'PAT-101',
    patientName: 'Jane Doe',
    doctorId: 'DOC-01',
    doctorName: 'Dr. Sarah Connor (Cardiology)',
    date: '2026-09-30',
    time: '10:00 AM',
    type: 'Follow-up',
    status: 'Scheduled', // Scheduled, Checked in, Completed, Cancelled
  },
  {
    id: 'APP-202',
    patientId: 'PAT-102',
    patientName: 'John Smith',
    doctorId: 'DOC-02',
    doctorName: 'Dr. Marcus Vance (General Medicine)',
    date: '2026-09-29',
    time: '11:30 AM',
    type: 'Routine Checkup',
    status: 'Checked in',
  },
  {
    id: 'APP-203',
    patientId: 'PAT-103',
    patientName: 'Alex Rivera',
    doctorId: 'DOC-03',
    doctorName: 'Dr. Elena Rostova (Orthopedics)',
    date: '2026-09-28',
    time: '02:00 PM',
    type: 'Consultation',
    status: 'Completed',
  },
];

export const SAMPLE_OPD_QUEUE = [
  {
    queueNumber: 1,
    appointmentId: 'APP-202',
    patientId: 'PAT-102',
    patientName: 'John Smith',
    doctorName: 'Dr. Marcus Vance',
    room: 'Room 104',
    status: 'Waiting', // Waiting, In Consultation, Completed
    checkInTime: '11:15 AM',
  },
  {
    queueNumber: 2,
    appointmentId: 'APP-201',
    patientId: 'PAT-101',
    patientName: 'Jane Doe',
    doctorName: 'Dr. Sarah Connor',
    room: 'Room 202',
    status: 'Waiting',
    checkInTime: '09:45 AM',
  },
];

export const SAMPLE_CONSULTATIONS = [
  {
    id: 'CON-301',
    patientId: 'PAT-103',
    patientName: 'Alex Rivera',
    appointmentId: 'APP-203',
    doctorName: 'Dr. Elena Rostova',
    date: '2026-09-28',
    symptoms: 'Mild ankle strain after exercise',
    diagnosis: 'Grade 1 sprain (sample note)',
    prescription: 'Rest, ice pack application 3x daily. Paracetamol 500mg if required.',
    notes: 'Advised rest for 5 days. Return if pain increases.',
  },
];

export const SAMPLE_ADMISSIONS = [
  {
    id: 'ADM-401',
    patientId: 'PAT-102',
    patientName: 'John Smith',
    ward: 'General Medical Ward',
    bedNumber: 'GMW-12',
    admittedDate: '2026-09-25',
    attendingDoctor: 'Dr. Marcus Vance',
    reason: 'Blood pressure monitoring and stabilization',
    status: 'Admitted', // Admitted, Discharged
  },
];

export const SAMPLE_BEDS = [
  { bedNumber: 'GMW-11', ward: 'General Medical Ward', type: 'Standard', status: 'Available' },
  { bedNumber: 'GMW-12', ward: 'General Medical Ward', type: 'Standard', status: 'Occupied', patientName: 'John Smith' },
  { bedNumber: 'ICU-01', ward: 'Intensive Care Unit', type: 'ICU', status: 'Occupied', patientName: 'Demo Patient' },
  { bedNumber: 'ICU-02', ward: 'Intensive Care Unit', type: 'ICU', status: 'Available' },
  { bedNumber: 'SUR-05', ward: 'Surgical Recovery Ward', type: 'Post-Op', status: 'Available' },
  { bedNumber: 'MAT-03', ward: 'Maternity Ward', type: 'Standard', status: 'Available' },
];

export const SAMPLE_INPATIENT_RECORDS = [
  {
    admissionId: 'ADM-401',
    patientId: 'PAT-102',
    patientName: 'John Smith',
    bedNumber: 'GMW-12',
    dailyNotes: [
      { date: '2026-09-25', author: 'Dr. Marcus Vance', note: 'Patient admitted for observation. Vitals stable.' },
      { date: '2026-09-26', author: 'Nurse Kelly', note: 'BP 130/85. Slept well. Diet normal.' },
      { date: '2026-09-27', author: 'Dr. Marcus Vance', note: 'BP normalized. Preparing for discharge review.' },
    ],
  },
];

export const SAMPLE_DISCHARGES = [
  {
    dischargeId: 'DIS-501',
    admissionId: 'ADM-399',
    patientId: 'PAT-099',
    patientName: 'Sample Patient Past',
    dischargeDate: '2026-09-20',
    summary: 'Recovered completely from mild pneumonia. Follow-up in 2 weeks.',
    billReference: 'BILL-801',
    status: 'Discharged',
  },
];

export const SAMPLE_STAFF = [
  { id: 'DOC-01', name: 'Dr. Sarah Connor', role: 'Doctor', department: 'Cardiology', contact: 'ext-101' },
  { id: 'DOC-02', name: 'Dr. Marcus Vance', role: 'Doctor', department: 'General Medicine', contact: 'ext-102' },
  { id: 'DOC-03', name: 'Dr. Elena Rostova', role: 'Doctor', department: 'Orthopedics', contact: 'ext-103' },
  { id: 'NUR-01', name: 'Nurse Kelly Martin', role: 'Nurse', department: 'General Ward', contact: 'ext-201' },
  { id: 'ADM-01', name: 'Robert Chen', role: 'Administrator', department: 'Operations', contact: 'ext-301' },
];

export const SAMPLE_DEPARTMENTS = [
  { id: 'DEP-01', name: 'Cardiology', head: 'Dr. Sarah Connor', rooms: '201-205', staffCount: 8 },
  { id: 'DEP-02', name: 'General Medicine', head: 'Dr. Marcus Vance', rooms: '101-110', staffCount: 14 },
  { id: 'DEP-03', name: 'Orthopedics', head: 'Dr. Elena Rostova', rooms: '206-210', staffCount: 6 },
  { id: 'DEP-04', name: 'Emergency Care', head: 'Dr. David Kim', rooms: 'Ground Floor ER', staffCount: 16 },
  { id: 'DEP-05', name: 'Pharmacy & Lab', head: 'Dr. Angela Moss', rooms: 'Central Wing', staffCount: 10 },
];

export const SAMPLE_LAB_ORDERS = [
  { id: 'LAB-601', patientId: 'PAT-101', testName: 'Lipid Profile', orderedBy: 'Dr. Connor', date: '2026-09-26', status: 'Completed', result: 'Cholesterol 190 mg/dL (Normal)' },
  { id: 'LAB-602', patientId: 'PAT-102', testName: 'Complete Blood Count (CBC)', orderedBy: 'Dr. Vance', date: '2026-09-27', status: 'Pending', result: 'Processing in lab' },
  { id: 'LAB-603', patientId: 'PAT-103', testName: 'Ankle X-Ray', orderedBy: 'Dr. Rostova', date: '2026-09-28', status: 'Completed', result: 'No bone fracture detected' },
];

export const SAMPLE_PHARMACY_STOCK = [
  { id: 'MED-701', name: 'Amoxicillin 500mg', category: 'Antibiotic', quantity: 350, unitPrice: '$0.50' },
  { id: 'MED-702', name: 'Paracetamol 500mg', category: 'Analgesic', quantity: 1200, unitPrice: '$0.15' },
  { id: 'MED-703', name: 'Amlodipine 5mg', category: 'Antihypertensive', quantity: 500, unitPrice: '$0.40' },
  { id: 'MED-704', name: 'Salbutamol Inhaler', category: 'Respiratory', quantity: 80, unitPrice: '$6.50' },
];

export const SAMPLE_INVENTORY = [
  { itemId: 'INV-001', name: 'Sterile Surgical Gloves (Box 100)', category: 'Consumables', stock: 120, reorderLevel: 30 },
  { itemId: 'INV-002', name: 'Disposable Syringes 5ml', category: 'Consumables', stock: 800, reorderLevel: 200 },
  { itemId: 'INV-003', name: 'Infusion Set IV', category: 'Medical Supplies', stock: 250, reorderLevel: 50 },
  { itemId: 'INV-004', name: 'Digital Thermometer', category: 'Equipment', stock: 45, reorderLevel: 10 },
];

export const SAMPLE_BILLS = [
  { billId: 'BILL-801', patientId: 'PAT-101', patientName: 'Jane Doe', type: 'OPD Consultation & Lab', amount: 85.00, status: 'Paid', date: '2026-09-26' },
  { billId: 'BILL-802', patientId: 'PAT-102', patientName: 'John Smith', type: 'IPD Ward & Medicine', amount: 340.00, status: 'Pending', date: '2026-09-27' },
  { billId: 'BILL-803', patientId: 'PAT-103', patientName: 'Alex Rivera', type: 'OPD Consultation & X-Ray', amount: 95.00, status: 'Paid', date: '2026-09-28' },
];

export const SAMPLE_EMERGENCY_CASES = [
  { caseId: 'EMG-901', patientName: 'Unknown (Trauma Case)', age: 'Approx 40', priority: 'High', arrivalTime: '23:10', bayNumber: 'Bay 1', status: 'Under Examination' },
  { caseId: 'EMG-902', patientName: 'Samuel Green', age: '65', priority: 'Medium', arrivalTime: '23:35', bayNumber: 'Bay 3', status: 'Triage Complete' },
];

export const SAMPLE_AMBULANCE_REQUESTS = [
  { requestId: 'AMB-REQ-01', location: 'Main Street & 4th Avenue', callerContact: '555-0991', requestedAt: '22:45', status: 'Demo Logged (Not Real Dispatch)', notes: 'Fictional demo entry' },
];
