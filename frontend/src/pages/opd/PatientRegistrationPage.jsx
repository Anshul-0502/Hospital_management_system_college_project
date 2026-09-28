import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import FormField from '../../components/common/FormField';

export default function PatientRegistrationPage({ onRegister }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: 'Female',
    contact: '',
    bloodGroup: 'O+',
    address: '',
    medicalHistorySummary: '',
  });

  const [errors, setErrors] = useState({});
  const [demoMessage, setDemoMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.age || Number(formData.age) <= 0) newErrors.age = 'Please enter a valid age.';
    if (!formData.contact.trim()) newErrors.contact = 'Contact number is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newPatient = {
      id: `PAT-${Math.floor(100 + Math.random() * 900)}`,
      ...formData,
      age: Number(formData.age),
      registeredDate: new Date().toISOString().split('T')[0],
    };

    if (onRegister) {
      onRegister(newPatient);
    }

    setDemoMessage(
      `Demo Record Created: Patient "${newPatient.fullName}" (ID: ${newPatient.id}) has been added to this demo session. (Not persisted to a database)`
    );

    // After 1.5 seconds, navigate to patient list or profile
    setTimeout(() => {
      navigate('/opd/patients');
    }, 1500);
  };

  return (
    <div>
      <PageHeader
        title="Patient Registration Form"
        subtitle="Register an outpatient for consultation and record management"
        actionButton={
          <Link to="/opd/patients" className="btn btn-secondary">
            Back to Patient List
          </Link>
        }
      />

      <div className="notice-box warning">
        <strong>Demo Registration:</strong> Submitting this form adds a record to the active in-memory session only.
        It is not saved to a real hospital database.
      </div>

      {demoMessage && (
        <div className="notice-box" style={{ backgroundColor: '#dcfce7', borderColor: '#22c55e', color: '#15803d' }}>
          {demoMessage}
        </div>
      )}

      <div className="card" style={{ maxWidth: '650px' }}>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Full Legal Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Eleanor Vance"
            required
            error={errors.fullName}
          />

          <div className="grid-2">
            <FormField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              placeholder="e.g. 42"
              required
              error={errors.age}
            />

            <FormField
              label="Gender"
              name="gender"
              type="select"
              value={formData.gender}
              onChange={handleChange}
              options={[
                { value: 'Female', label: 'Female' },
                { value: 'Male', label: 'Male' },
                { value: 'Other', label: 'Other' },
              ]}
              required
            />
          </div>

          <div className="grid-2">
            <FormField
              label="Contact Number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="e.g. 555-0199"
              required
              error={errors.contact}
            />

            <FormField
              label="Blood Group"
              name="bloodGroup"
              type="select"
              value={formData.bloodGroup}
              onChange={handleChange}
              options={[
                { value: 'A+', label: 'A+' },
                { value: 'A-', label: 'A-' },
                { value: 'B+', label: 'B+' },
                { value: 'B-', label: 'B-' },
                { value: 'AB+', label: 'AB+' },
                { value: 'AB-', label: 'AB-' },
                { value: 'O+', label: 'O+' },
                { value: 'O-', label: 'O-' },
              ]}
            />
          </div>

          <FormField
            label="Residential Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="e.g. 101 Elm Street, Springfield"
          />

          <FormField
            label="Initial Medical History / Known Conditions"
            name="medicalHistorySummary"
            type="textarea"
            value={formData.medicalHistorySummary}
            onChange={handleChange}
            placeholder="Note allergies, current medications, or pre-existing conditions..."
            rows={3}
          />

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary">
              Register Patient (Demo Submit)
            </button>
            <Link to="/opd/patients" className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
