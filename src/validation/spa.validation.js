import { z } from "zod";

const socialLinksSchema = z.object({
    platform: z.enum(['facebook', 'instagram', 'snapchat']),
    url: z.string().url("Invalid URL format."),
});

const businessTimingSchema = z.object({
    Monday: z.object({
        ON: z.boolean().optional(),
        startTime: z.string().default("09:00 AM"),
        endTime: z.string().default("06:00 PM"),
    }),
    Tuesday: z.object({
        ON: z.boolean().optional(),
        startTime: z.string().default("09:00 AM"),
        endTime: z.string().default("06:00 PM"),
    }),
    Wednesday: z.object({
        ON: z.boolean().optional(),
        startTime: z.string().default("09:00 AM"),
        endTime: z.string().default("06:00 PM"),
    }),
    Thursday: z.object({
        ON: z.boolean().optional(),
        startTime: z.string().default("09:00 AM"),
        endTime: z.string().default("06:00 PM"),
    }),
    Friday: z.object({
        ON: z.boolean().optional(),
        startTime: z.string().default("09:00 AM"),
        endTime: z.string().default("06:00 PM"),
    }),
    Saturday: z.object({
        ON: z.boolean().optional(),
        startTime: z.string().default("09:00 AM"),
        endTime: z.string().default("06:00 PM"),
    }),
    Sunday: z.object({
        ON: z.boolean().optional(),
        startTime: z.string().default("09:00 AM"),
        endTime: z.string().default("06:00 PM"),
    }),
});

const updateSpaSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    alternateEmail: z.string().email("Invalid alternate email address.").optional(),
    phone: z.string().optional(),
    links: z.array(socialLinksSchema).optional(),
    city: z.string().optional(),
});

export default updateSpaSchema;
