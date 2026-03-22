"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import EditLinkDialog from "./EditLinkDialog";
import DeleteLinkDialog from "./DeleteLinkDialog";

interface LinkItemProps {
  link: {
    id: string;
    code: string;
    url: string;
    createdAt: string;
  };
}

export default function LinkItem({ link }: LinkItemProps) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <li className="p-3 border rounded-md">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="font-mono text-sm text-muted-foreground shrink-0">/{link.code}</div>
          <a
            className="font-medium break-all truncate"
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.url}
          </a>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="text-sm text-muted-foreground hidden sm:block">
            {new Date(link.createdAt).toLocaleString()}
          </div>
          <Button variant="outline" size="sm" onClick={() => setEditOpen(true)}>
            Edit
          </Button>
          <Button variant="destructive" size="sm" onClick={() => setDeleteOpen(true)}>
            Delete
          </Button>
        </div>
      </div>

      <EditLinkDialog open={editOpen} onOpenChange={setEditOpen} link={link} />
      <DeleteLinkDialog open={deleteOpen} onOpenChange={setDeleteOpen} link={link} />
    </li>
  );
}
