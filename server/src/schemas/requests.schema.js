const { z } = require('zod');

const createRequestSchema = z.object({
    title: z.string().min(1, 'El título es requerido'),
    description: z.string().optional(),
    area_id: z.number().int(),
    category_id: z.number().int().optional(),
    // Aquí agregamos priority como pide la Parte 7
    priority: z.enum(['low', 'normal', 'high']).default('normal')
});

const updateRequestSchema = z.object({
    title: z.string().min(1).optional(),
    description: z.string().optional(),
    area_id: z.number().int().optional(),
    category_id: z.number().int().optional(),
    priority: z.enum(['low', 'normal', 'high']).optional()
});

module.exports = { createRequestSchema, updateRequestSchema };