"use client";
import Container from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  companyName: z.string().min(2, "Must be at least 2 charactes long"),
  contactPerson: z.string().min(2, "Must be at least 2 charactes long"),
  contactTelephone: z.coerce.number().refine((value) => !isNaN(value)),
  contactEmail: z.string().email(),
  natureOfBusiness: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  sector: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      contactTelephone: NaN,
      contactEmail: "",
      natureOfBusiness: [""],
      sector: [""],
    },
  });

  const natureOfBusinessOptions = [
    {
      id: "multinational-or-affiliate-of-multinational",
      label: "Multinational / Affiliate of multinational",
    },
    {
      id: "local-manufacturer",
      label: "Local Manufacturer",
    },
    {
      id: "consultancy-or-agency",
      label: "Consultancy/ agency",
    },
    {
      id: "ratailer",
      label: "Retailer",
    },
    {
      id: "wholesaler",
      label: "Wholesaler",
    },
    {
      id: "distributor",
      label: "Distributor",
    },
    {
      id: "local-association",
      label: "Local Association",
    },
    {
      id: "international-association",
      label: "International Association",
    },
    {
      id: "insurance-company",
      label: "Insurance Company",
    },
    {
      id: "other",
      label: "Other (please specify)",
    },
  ];

  const sectorClassificationOptions = [
    {
      id: "anaesthisia-and-respiratory",
      label: "Anaesthesia and Respiratory",
    },
    {
      id: "blood",
      label: "Blood",
    },
    {
      id: "cardiology",
      label: "Cardiology",
    },
    {
      id: "contact-manufacturing-organisation",
      label: "Contact Manufacturing Organisation",
    },
    {
      id: "dental",
      label: "Dental",
    },
    {
      id: "diabetic-care",
      label: "Diabetic Care",
    },
    {
      id: "diagbostic-imaging",
      label: "Diagnostic Imaging",
    },
    {
      id: "dialysis",
      label: "Dialysis",
    },
    {
      id: "digital-health",
      label: "Digital Health",
    },
    {
      id: "drug-delivery",
      label: "Drug Delivery",
    },
    {
      id: "ear-nose-and-throat",
      label: "Ear, Nose and Throat",
    },
    {
      id: "general-hospital-and-healthcate-supply",
      label: "General Hospital and Healthcare Supply",
    },
    {
      id: "imaging",
      label: "Imaging",
    },
    {
      id: "infectious-disease",
      label: "Infectious Disease",
    },
    {
      id: "in-vitro-diagnostics",
      label: "In Vitro Diagnostics",
    },
    {
      id: "neurology",
      label: "Neurology",
    },
    {
      id: "ophthalmology",
      label: "Ophthalmology",
    },
    {
      id: "orthopedic",
      label: "Orthopedic",
    },
    {
      id: "other-specify",
      label: "Other (please specify)",
    },
    {
      id: "patient-monitoring",
      label: "Patient Monitoring",
    },
    {
      id: "physical-medicine-and-rehabilitaion-or-mobility",
      label: "Physical Medicine and Rehabilitation/ Mobility",
    },
    {
      id: "radiation-therapy",
      label: "Radiation Therapy",
    },
    {
      id: "surgical-devices-instruments-and-accessories",
      label: "Surgical Devices, Instruments and Accessories",
    },
    {
      id: "urology",
      label: "Urology",
    },
    {
      id: "womens-health",
      label: "Womens Health",
    },
    {
      id: "wound-management",
      label: "Wound Management",
    },
    {
      id: "other",
      label: "Other",
    },
  ];
  return (
    <Container>
      <Card className="mt-4 mx-auto max-w-xl">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => console.log(data))}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Company Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Person</FormLabel>
                    <FormControl>
                      <Input placeholder="Contact Person" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactTelephone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Telephone</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Contact Telephone"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Contact Email"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* nature of business checkboxes */}
              <FormField
                control={form.control}
                name="natureOfBusiness"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">
                        Nature of Business
                      </FormLabel>
                      <FormDescription>
                        Click all that apply, Tick (√) one or as many
                        descriptions that best describe your organisation
                      </FormDescription>
                    </div>
                    {natureOfBusinessOptions.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="natureOfBusiness"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* sectors checkboxes */}
              <FormField
                control={form.control}
                name="sector"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">
                        Sector Classification
                      </FormLabel>
                      <FormDescription>
                        Click all that apply, Tick (√) one or as many
                        descriptions that best describe your organisation
                      </FormDescription>
                    </div>
                    {sectorClassificationOptions.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="sector"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Button>Submit</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignUp;
