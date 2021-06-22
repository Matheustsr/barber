import Appointment from "../models/Appointment";

interface Request{
  provider: String;
  date: Date;
}

class CreateAppointmentService {
  public execute({ date, provider }: Request): Appointment{
    const appointmentDate = startOfHour(parsedDate);

    const findAppointmentInSameDate = appointmentsRepository.findByDate(parsedDate,);

      if(findAppointmentInSameDate){
        throw Error('Date already been taken!!');
      }

      const appointment = appointmentsRepository.create({
        provider,
        date: parsedDate,
      });

      return appointment;
  }
}

export default CreateAppointmentService;
