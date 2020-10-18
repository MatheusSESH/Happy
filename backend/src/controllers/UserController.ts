import { request, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import userView from '../views/user_view';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response){
        const {
            name,
            email,
            password
        } = request.body;

        const userRepository = getRepository(User);

        const data = {
            name,
            email,
            password
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required().max(300),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const user = userRepository.create(data);

        await userRepository.save(user);

        return response.status(201).json(user);
    },

    async show(request :Request, response: Response){
        const { id } = request.params;

        const userRepository = getRepository(User);

        const user = await userRepository.findOneOrFail(id);

        return response.json(userView.render(user));
    }
}