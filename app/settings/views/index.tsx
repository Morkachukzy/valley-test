import { nanoid } from "nanoid";
import { DashboardCompanyInfoSettings } from "./company-info";
import { DashboardProfileSettings } from "./your-profile";
import { DashboardManageSeatsSettings } from "./manage-seats";
import { DashboardDoNotContactSettings } from "./do-not-contact";
import { DashboardIntegrationsSettings } from "./integrations";

export const settingsTabs = [
  {
    id: nanoid(),
    label: "Your Profile",
    render: () => <DashboardProfileSettings />,
  },
  {
    id: nanoid(),
    label: "Company Info",
    render: () => <DashboardCompanyInfoSettings />,
  },
  {
    id: nanoid(),
    label: "Manage Seats",
    render: () => <DashboardManageSeatsSettings />,
  },
  {
    id: nanoid(),
    label: "Do not Contact",
    render: () => <DashboardDoNotContactSettings />,
  },
  {
    id: nanoid(),
    label: "Integrations",
    render: () => <DashboardIntegrationsSettings />,
  },
] as const;
