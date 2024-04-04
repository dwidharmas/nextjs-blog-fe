"use client";
import dynamic from "next/dynamic";
import PageDashbaord from "@/components/dashboard/page";
import { Button, Divider, TextInput } from "@tremor/react";

const CKEditorComponent = dynamic(() => import("@/components/ckeditor"), {
  ssr: false,
});

export default function CreatePage() {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
  };

  return (
    <PageDashbaord title="Create Page" cardClass="mb-4">
      <form onSubmit={() => handleSubmit}>
        <header className="flex flex-row justify-between items-center mb-4">
          <h1 className="text-lg">Form Create Page</h1>
          <Button type="submit">Submit</Button>
        </header>
        <div className="flex flex-col py-4 space-y-3">
          <div className="grid grid-cols-12">
            <label className="col-span-3">Title Page</label>
            <div className="col-span-9">
              <TextInput placeholder="Input Title Page" />
              <button
                type="button"
                className="p-2 text-dark-tremor-content italic text-xs"
              >
                slug: page-name
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <label className="col-span-3">Subtitle Page</label>
            <div className="col-span-9">
              <TextInput placeholder="Input Subtitle Page" />
            </div>
          </div>
          <Divider className="py-8">Custom Page</Divider>
          <CKEditorComponent />
        </div>
      </form>
    </PageDashbaord>
  );
}
