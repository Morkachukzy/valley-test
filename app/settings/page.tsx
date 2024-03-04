import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { settingsTabs } from "./views";

export default function DashboardSettings() {
  return (
    <div className="container max-w-7xl py-12">
      <h2 className="text-4xl mb-8 font-semibold">Settings</h2>

      <Tabs defaultValue={settingsTabs[0].id} className="w-[400px]">
        <TabsList className="">
          {settingsTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {settingsTabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <tab.render />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
