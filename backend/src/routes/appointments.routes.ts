import { response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { startOfHour, parseISO } from 'date-fns';

import CreateAppointmentService from '../services/CreateAppointmentService';

import AppointmentsRepository from '../models/repositories/AppointmentsRepository';

const appointmentsRouter = Router();

appointmentsRouter.get('/', (req, res) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository)
  const appointments = appointmentsRepository.find();
  return res.json(appointments);
});

appointmentsRouter.post('/', async (req, res) => {
try{
  const { provider, date } = req.body;
  const appointmentsRepository = getCustomRepository(AppointmentsRepository)

  const parsedDate = parseISO(date);
  const createAppointment =  new CreateAppointmentService();

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider,
  })

  return res.json(appointment);
} catch (err){
  return res.status(400).json({ error: err.message })
}

});

export default appointmentsRouter;
