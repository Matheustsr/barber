import { isEqual } from "date-fns";
import Appointment from "../Appointment";

interface CreateAppointmenDTO{
  provider: string;
  date: Date;
}

class AppointmentsRepository{
  private appointments: Appointment[];

  constructor(){
    this.appointments = [];
  }

  public all(){
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null{
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
      ); // check if date has been reserve

      return findAppointment || null;
  }

  public create({provider, date}: CreateAppointmenDTO): Appointment{

    const appointment = new Appointment(provider, date);
    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
