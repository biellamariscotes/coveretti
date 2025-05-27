"use client";

import React, { useState } from "react";
import {
  Save,
  Trash2,
  Settings,
  Download,
  Plus,
  Menu,
  ExternalLink,
  X,
  Home,
  User,
  FileText,
  MessageSquare,
} from "lucide-react";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const handleModalOpen = (modalId: string) => {
    setActiveModal(modalId);
    setIsModalOpen(true);
  };

  const handleDrawerOpen = (drawerId: string) => {
    setActiveDrawer(drawerId);
    setIsDrawerOpen(true);
    console.log(`Opening drawer: ${drawerId}`);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setActiveDrawer(null);
  };

  return (
    <div className="p-8 space-y-8 py-5">
      <section>
        {/* ---- Normal Buttons Preview ---- */}
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
      </section>

      {/* ---- Event Buttons Preview ---- */}
      <section>
        <h1 className="text-2xl font-bold py-5">Event Buttons</h1>
        {/* Regular Button */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Regular Button</h3>
          <Button onClick={() => alert("Regular button clicked!")}>
            Click Me
          </Button>
        </div>

        {/* Link Button */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Link Buttons</h3>
          <div className="space-x-2">
            <Button
              action={{
                type: "link",
                href: "https://example.com",
                target: "_blank",
              }}
              icon={ExternalLink}
              iconPosition="right"
            >
              Open External Link
            </Button>

            <Button
              variant="secondary"
              action={{
                type: "link",
                href: "/dashboard",
              }}
            >
              Go to Dashboard
            </Button>
          </div>
        </div>

        {/* Modal Button */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Modal Buttons</h3>
          <div className="space-x-2">
            <Button
              action={{
                type: "modal",
                modalId: "settings-modal",
              }}
              onModalOpen={handleModalOpen}
              icon={Settings}
            >
              Open Settings
            </Button>

            <Button
              variant="danger"
              action={{
                type: "modal",
                modalId: "delete-confirmation",
              }}
              onModalOpen={handleModalOpen}
              icon={Trash2}
            >
              Delete Item
            </Button>
          </div>
        </div>

        {/* Drawer Button */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Drawer Buttons</h3>
          <div className="space-x-2">
            <Button
              variant="secondary"
              action={{
                type: "drawer",
                drawerId: "navigation-drawer",
              }}
              onDrawerOpen={handleDrawerOpen}
              icon={Menu}
            >
              Open Navigation
            </Button>

            <Button
              variant="secondary"
              action={{
                type: "drawer",
                drawerId: "settings-drawer",
              }}
              onDrawerOpen={handleDrawerOpen}
              icon={Settings}
            >
              Open Settings Drawer
            </Button>
          </div>
        </div>

        {/* Custom Action Button */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Custom Action Button</h3>
          <Button
            action={{
              type: "custom",
              customAction: () => {
                // Custom logic here
                console.log("Custom action executed!");
                // Could trigger API calls, state updates, etc.
              },
            }}
          >
            Custom Action
          </Button>
        </div>

        {/* Combined onClick and Action */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Combined Actions</h3>
          <Button
            onClick={() => console.log("onClick executed first")}
            action={{
              type: "custom",
              customAction: () => console.log("Custom action executed second"),
            }}
          >
            Multiple Actions
          </Button>
        </div>

        {/* Simple Modal Simulation */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">
                {activeModal === "settings-modal" && "Settings Modal"}
                {activeModal === "delete-confirmation" && "Delete Confirmation"}
              </h3>
              <p className="mb-4">
                {activeModal === "settings-modal" &&
                  "Settings content would go here..."}
                {activeModal === "delete-confirmation" &&
                  "Are you sure you want to delete this item?"}
              </p>
              <div className="flex space-x-2 justify-end">
                <Button
                  variant="secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                {activeModal === "delete-confirmation" && (
                  <Button
                    variant="danger"
                    onClick={() => {
                      console.log("Item deleted!");
                      setIsModalOpen(false);
                    }}
                  >
                    Delete
                  </Button>
                )}
                {activeModal === "settings-modal" && (
                  <Button
                    onClick={() => {
                      console.log("Settings saved!");
                      setIsModalOpen(false);
                    }}
                  >
                    Save
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Drawer Implementation */}
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeDrawer}
            />

            {/* Drawer */}
            <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">
                  {activeDrawer === "navigation-drawer" && "Navigation"}
                  {activeDrawer === "settings-drawer" && "Settings"}
                </h2>
                <button
                  onClick={closeDrawer}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-4">
                {activeDrawer === "navigation-drawer" && (
                  <nav className="space-y-2">
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Home clicked");
                      }}
                    >
                      <Home size={20} />
                      <span>Home</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Profile clicked");
                      }}
                    >
                      <User size={20} />
                      <span>Profile</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Documents clicked");
                      }}
                    >
                      <FileText size={20} />
                      <span>Documents</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("Messages clicked");
                      }}
                    >
                      <MessageSquare size={20} />
                      <span>Messages</span>
                    </a>
                  </nav>
                )}

                {activeDrawer === "settings-drawer" && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Theme</h3>
                      <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option>Light</option>
                        <option>Dark</option>
                        <option>System</option>
                      </select>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Language</h3>
                      <select className="w-full p-2 border border-gray-300 rounded-lg">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Notifications</h3>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        <span>Email notifications</span>
                      </label>
                      <label className="flex items-center gap-2 mt-2">
                        <input type="checkbox" />
                        <span>Push notifications</span>
                      </label>
                    </div>
                    <div className="pt-4 border-t">
                      <Button
                        onClick={() => {
                          console.log("Settings saved!");
                          closeDrawer();
                        }}
                        className="w-full"
                      >
                        Save Settings
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
