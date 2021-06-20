import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from '../models/repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (req, res) => {
  const appointments = appointmentsRepository.all();
  return res.json(appointments);
});

appointmentsRouter.post('/', (req, res) => {

  const { provider, date } = req.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointmentsRepository.findByDate(parsedDate,);

    if(findAppointmentInSameDate){
      return res.status(400).json({"error": "Date already been taken!!"})
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: parsedDate,
    });

  return res.json(appointment)

});

export default appointmentsRouter;
