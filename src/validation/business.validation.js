import { z } from "zod";

const CreatTreatmentSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters."),
    goal: z.string().min(3, "Goal must be at least 3 characters."),
    description: z.string().min(5, "Description must be at least 5 characters."),
    price: z.string().min(1, "Price must be at least 1 number."),
});

export { CreatTreatmentSchema };
