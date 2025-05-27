"use client";

import React from "react";
import { Save, Trash2, Settings, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ButtonPreview() {
  const handleSave = () => {
    console.log("Save clicked");
  };

  const handleDelete = () => {
    if (confirm("Are you sure?")) {
      console.log("Delete confirmed");
    }
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Button Preview</h1>

      {/* Primary buttons */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Primary</h2>
        <div className="flex gap-4 flex-wrap">
          <Button onClick={handleSave}>Save Changes</Button>
          <Button icon={Save}>Save with Icon</Button>
          <Button icon={Download} iconPosition="right">
            Download
          </Button>
          <Button icon={Plus}>Create New</Button>
        </div>
      </div>

      {/* Secondary buttons */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Secondary</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="secondary">Cancel</Button>
          <Button variant="secondary" icon={Settings}>
            Settings
          </Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
      </div>

      {/* Danger buttons */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Danger</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="danger" onClick={handleDelete}>
            Delete Account
          </Button>
          <Button variant="danger" icon={Trash2}>
            Delete Item
          </Button>
        </div>
      </div>
    </div>
  );
}
