import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { settingsTabs } from "./views";

export default function DashboardSettings() {
  return (
    <div className="md:px-6">
      <div className="container max-w-7xl space-y-8 px-0 py-12 ">
        <h2 className="text-4xl font-semibold">Settings</h2>

        <Tabs defaultValue={settingsTabs[1].id}>
          <div className="px-6 md:px-0">
            <TabsList className="no-scrollbar flex max-w-fit snap-x snap-mandatory justify-start overflow-scroll">
              {settingsTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="snap-center snap-always "
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
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
