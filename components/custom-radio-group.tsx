"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Button } from "@/components/ui/button";

type CustomRadioGroupOption = {
  id: string;
  label: string;
  value: string;
};
type CustomRadioGroupProps = Readonly<{
  options: CustomRadioGroupOption[];
  value: string;
  onChange: (value: string) => void;
}>;

export const CustomRadioGroup = ({
  options,
  value,
  onChange,
}: CustomRadioGroupProps) => {
  return (
    <RadioGroupPrimitive.Root
      className="flex items-center gap-3"
      onValueChange={onChange}
      defaultValue={value}
    >
      {options.map((option) => (
        <RadioGroupPrimitive.Item
          key={option.id}
          value={option.value}
          className="data-[state=checked]:bg-black data-[state=checked]:text-white"
          asChild
        >
          <Button variant="outline" size="sm">
            {option.label}
          </Button>
        </RadioGroupPrimitive.Item>
      ))}
    </RadioGroupPrimitive.Root>
  );
};
