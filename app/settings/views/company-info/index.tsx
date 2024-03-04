/* eslint-disable react/no-unescaped-entities */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const DashboardCompanyInfoSettings = () => {
  return (
    <div className="space-y-10">
      <section className="grid w-full md:grid-cols-2 gap-x-6 gap-y-6">
        <div className="">
          <Label htmlFor="company-name">Company's Name</Label>
          <Input id="company-name" type="text" />
        </div>
        <div className="">
          <Label htmlFor="company-website">Company's Website</Label>
          <Input id="company-name" type="text" />
        </div>
        <div className="">
          <Label htmlFor="company-linkedin">Company's Linkedin</Label>
          <Input id="company-name" type="text" />
        </div>
        <div className="">
          <Label htmlFor="company-industry">Company's Industry</Label>
          <Input id="company-name" type="text" />
        </div>
      </section>

      <section className="grid w-full md:grid-cols-2 gap-x-6 gap-y-6">
        <div className="">
          <Label htmlFor="company-description">Company description</Label>
          <Input id="company-description" type="text" />
        </div>
        <div className="">
          <Label htmlFor="company-goals">What are your company goals?</Label>
          <Input id="company-goals" type="text" />
        </div>
        <div className="">
          <Label htmlFor="company-headquarters">Headquarters</Label>
          <Input id="company-headquarters" type="text" />
        </div>
      </section>

      <section className="grid w-full md:grid-cols-2 gap-x-6 gap-y-6">
        <div className="">
          <Label htmlFor="funding-round">Funding Round</Label>
          <Select>
            <SelectTrigger id="funding-round">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="">
          <Label htmlFor="faqs">FAQs</Label>
          <Input id="faqs" type="text" />
        </div>
      </section>
    </div>
  );
};
