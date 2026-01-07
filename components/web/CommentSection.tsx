import { MessageSquare } from "lucide-react";
import { Card, CardHeader } from "../ui/card";

export function CommentSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2 border-b">
        <MessageSquare className="size-5"/>
        <h2 className="text-xl font-bold">5 Comments</h2>
      </CardHeader>
    </Card>
  )
}