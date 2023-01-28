import Joi from "joi"

const buyerSchema = Joi.object({
    id: Joi.number().required(),
    isAvaliable: Joi.boolean().required(),
    owner: Joi.string().required(),
})

export default buyerSchema;