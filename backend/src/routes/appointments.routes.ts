import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appointmentsRouter = Router();

interface Appointment {
  id: string;
  provider: string;
  date: Date;
}
const appointments: Appointment[] = [];

appointmentsRouter.post('/', (req, res) => {

  const { provider, date } = req.body;

  const parsedDate = startOfHour(parseISO(date));

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  const findAppointmentsInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date)) // check if date has been reserve

  if(findAppointmentsInSameDate){
    return res.status(400).json({"error": "Date already been taken!!"})
  }
  appointments.push(appointment);

  return res.json(appointment)

});

export default appointmentsRouter;
