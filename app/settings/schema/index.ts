import { z } from "zod";

export const CompanySettingsFormSchema = z.object({
  name: z.string().min(3, "Name must be more than 3 characters").max(100),
  website: z.string().url("Website must be a valid URL"),
  linkedin: z.string().url("Linkedin profile must be a valid URL"),
  industry: z.string(),
  employeeCount: z.string(),
  description: z.string(),
  goals: z.string(),
  headquarters: z.string(),
  fundingRound: z.string(),
  faqs: z.string().url("FAQs url must be a valid URL"),
});
