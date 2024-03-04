import { z } from "zod";
import { CompanySettingsFormSchema } from ".";

export type CompanySettingsFormData = z.input<typeof CompanySettingsFormSchema>;
