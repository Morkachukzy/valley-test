"use client";
import { useMemo } from "react";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UpdateAvatar } from "./update-avatar";
import { Button } from "@/components/ui/button";
import { nanoid } from "nanoid";
import { CustomRadioGroup } from "@/components/custom-radio-group";
import { CompanySettingsFormSchema } from "@/app/settings/schema";
import type { CompanySettingsFormData } from "@/app/settings/schema/types";
import { currentCompanyDetails } from "@/app/settings/mocks";

const fundingRounds = [
  {
    id: nanoid(),
    label: "Pre-seed",
    value: "pre-seed",
  },
  {
    id: nanoid(),
    label: "Seed",
    value: "seed",
  },
  {
    id: nanoid(),
    label: "Series A",
    value: "series-a",
  },
  {
    id: nanoid(),
    label: "Series B",
    value: "series-b",
  },
  {
    id: nanoid(),
    label: "Series C",
    value: "series-c",
  },
] as const;

const employeeCountOptions = [
  {
    id: nanoid(),

    label: "1-10",
    value: "1-10",
  },
  {
    id: nanoid(),
    label: "10-100",
    value: "10-100",
  },
  {
    id: nanoid(),
    label: "100-500",
    value: "100-500",
  },
  {
    id: nanoid(),
    label: "1000+",
    value: "1000+",
  },
];

export const DashboardCompanyInfoSettings = () => {
  const form = useForm({
    mode: "onTouched",
    defaultValues: currentCompanyDetails,
    resolver: zodResolver(CompanySettingsFormSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
    reset,
  } = form;

  console.log("isValid", isValid);

  const canUpdate = useMemo(() => {
    return isDirty && isValid;
  }, [isDirty, isValid]);

  const onSubmit: SubmitHandler<CompanySettingsFormData> = async (
    newCompanyDetails,
  ) => {
    console.log(newCompanyDetails);
    window.alert("Company profile updated successfully!");
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-10">
          <section className="flex flex-col-reverse justify-between gap-7 md:flex-row md:items-center md:gap-3">
            <UpdateAvatar />
            <div className="flex w-full items-center gap-3 md:w-fit">
              <Button
                type="button"
                className="flex-1 md:flex-none "
                size="sm"
                variant="outline"
                onClick={() => reset()}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 md:flex-none"
                size="sm"
                disabled={!canUpdate}
              >
                Save changes
              </Button>
            </div>
          </section>
          <section className="grid w-full gap-x-6 gap-y-6 md:grid-cols-2">
            <div className="">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        id="company-name"
                        type="text"
                        placeholder="Enter company's name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Website</FormLabel>
                    <FormControl>
                      <Input
                        id="company-website"
                        type="text"
                        placeholder="Enter company's website"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Linkedin</FormLabel>
                    <FormControl>
                      <Input
                        id="company-linkedin"
                        type="text"
                        placeholder="Enter company's linkedin"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Industry</FormLabel>
                    <FormControl>
                      <Input
                        id="company-industry"
                        type="text"
                        placeholder="Enter company's industry"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          <section className="">
            <div className="space-y-4">
              <FormField
                control={control}
                name="employeeCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employee Count</FormLabel>
                    <FormControl>
                      <CustomRadioGroup
                        options={employeeCountOptions}
                        onChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          <section className="grid w-full gap-x-6 gap-y-6 md:grid-cols-2">
            <div className="">
              <FormField
                control={control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company's Description</FormLabel>
                    <FormControl>
                      <Input
                        id="description"
                        type="text"
                        placeholder="Enter company's description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your company goals?</FormLabel>
                    <FormControl>
                      <Input
                        id="goals"
                        type="text"
                        placeholder="Enter company's goal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={control}
                name="headquarters"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Headquarters</FormLabel>
                    <FormControl>
                      <Input
                        id="headquarters"
                        type="text"
                        placeholder="Enter company's headquarters"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          <section className="grid w-full gap-x-6 gap-y-6 md:grid-cols-2">
            <div className="">
              <FormField
                control={control}
                name="fundingRound"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Funding Round</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <SelectTrigger id="funding-round">
                          <SelectValue placeholder="Select funding round" />
                        </SelectTrigger>
                        <SelectContent>
                          {fundingRounds.map((round) => (
                            <SelectItem key={round.id} value={round.value}>
                              {round.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={control}
                name="faqs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FAQs</FormLabel>
                    <FormControl>
                      <Input
                        id="faqs"
                        type="text"
                        placeholder="Enter FAQs url"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>
        </div>
      </form>
    </Form>
  );
};
