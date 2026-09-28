import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const getLinkClass = ({ isActive }) =>
    `sidebar-link ${isActive ? 'active' : ''}`;

  return (
    <aside className="app-sidebar">
      <div className="sidebar-section-title">General</div>
      <ul className="sidebar-nav-list">
        <li>
          <NavLink to="/" end className={getLinkClass}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={getLinkClass}>
            Login (Demo Placeholder)
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-section-title">OPD (Outpatient)</div>
      <ul className="sidebar-nav-list">
        <li>
          <NavLink to="/opd/patients" className={getLinkClass}>
            Patient List
          </NavLink>
        </li>
        <li>
          <NavLink to="/opd/register" className={getLinkClass}>
            Patient Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/opd/appointments" className={getLinkClass}>
            Appointments
          </NavLink>
        </li>
        <li>
          <NavLink to="/opd/queue" className={getLinkClass}>
            OPD Queue
          </NavLink>
        </li>
        <li>
          <NavLink to="/opd/consultation" className={getLinkClass}>
            Consultation
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-section-title">IPD (Inpatient)</div>
      <ul className="sidebar-nav-list">
        <li>
          <NavLink to="/ipd/admissions" className={getLinkClass}>
            Admissions
          </NavLink>
        </li>
        <li>
          <NavLink to="/ipd/beds" className={getLinkClass}>
            Beds & Wards
          </NavLink>
        </li>
        <li>
          <NavLink to="/ipd/records" className={getLinkClass}>
            Inpatient Records
          </NavLink>
        </li>
        <li>
          <NavLink to="/ipd/discharge" className={getLinkClass}>
            Discharge Summary
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-section-title">Hospital Operations</div>
      <ul className="sidebar-nav-list">
        <li>
          <NavLink to="/operations/staff" className={getLinkClass}>
            Doctors & Staff
          </NavLink>
        </li>
        <li>
          <NavLink to="/operations/departments" className={getLinkClass}>
            Departments
          </NavLink>
        </li>
        <li>
          <NavLink to="/operations/lab" className={getLinkClass}>
            Laboratory
          </NavLink>
        </li>
        <li>
          <NavLink to="/operations/pharmacy" className={getLinkClass}>
            Pharmacy
          </NavLink>
        </li>
        <li>
          <NavLink to="/operations/inventory" className={getLinkClass}>
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink to="/operations/billing" className={getLinkClass}>
            Billing
          </NavLink>
        </li>
        <li>
          <NavLink to="/operations/reports" className={getLinkClass}>
            Reports & Summary
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-section-title">Emergency</div>
      <ul className="sidebar-nav-list">
        <li>
          <NavLink to="/emergency/ward" className={getLinkClass}>
            Emergency Ward
          </NavLink>
        </li>
        <li>
          <NavLink to="/emergency/ambulance" className={getLinkClass}>
            Ambulance Demo
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
