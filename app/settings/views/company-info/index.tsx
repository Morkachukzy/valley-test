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
import { UpdateAvatar } from "./update-avatar";
import { Button } from "@/components/ui/button";

export const DashboardCompanyInfoSettings = () => {
  return (
    <div className="space-y-10">
      <section className="flex flex-col-reverse justify-between gap-7 md:flex-row md:items-center md:gap-3">
        <UpdateAvatar />
        <div className="flex w-full items-center gap-3 md:w-fit">
          <Button className="flex-1 md:flex-none " size="sm" variant="outline">
            Cancel
          </Button>
          <Button className="flex-1 md:flex-none" size="sm">
            Save changes
          </Button>
        </div>
      </section>
      <section className="grid w-full gap-x-6 gap-y-6 md:grid-cols-2">
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

      <section className="grid w-full gap-x-6 gap-y-6 md:grid-cols-2">
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

      <section className="grid w-full gap-x-6 gap-y-6 md:grid-cols-2">
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
