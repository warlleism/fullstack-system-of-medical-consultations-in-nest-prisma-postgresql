
export interface Appointment {
  id: number;
  doctor: string;
  doctorid: number;
  patient: string;
  patientid: number;
  speciality: string;
  hour: string;
  appointmentdate: string;
  gender: string;
  description: string
}

export interface AppointmentState {
  appointments: Appointment[];
  appointmentsMonth?: number[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}