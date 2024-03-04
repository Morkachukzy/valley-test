import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { settingsTabs } from "./views";

export default function DashboardSettings() {
  return (
    <div className="sm:px-6 md:px-10">
      <div className="container max-w-7xl space-y-8 px-0 py-12 ">
        <h2 className="text-4xl font-semibold">Settings</h2>

        <Tabs defaultValue={settingsTabs[1].id}>
          <TabsList className="">
            {settingsTabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <section className="p-5">
            {settingsTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <tab.render />
              </TabsContent>
            ))}
          </section>
        </Tabs>
      </div>
    </div>
  );
}
