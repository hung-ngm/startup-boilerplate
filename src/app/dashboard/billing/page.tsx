import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Billing & Subscription</h1>
        <p className="text-muted-foreground">Manage your subscription and billing information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>You are currently on the Free plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">Free</p>
              <p className="text-sm text-muted-foreground">$0/month</p>
            </div>
            <Badge>Active</Badge>
          </div>
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Basic analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Up to 100 API calls/month</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Email support</span>
            </div>
          </div>
          <Button className="mt-6 w-full">Upgrade to Pro</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage This Month</CardTitle>
          <CardDescription>Your current usage and limits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span>API Calls</span>
                <span className="text-muted-foreground">42 / 100</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-[42%] rounded-full bg-primary" />
              </div>
            </div>
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span>Storage</span>
                <span className="text-muted-foreground">1.2 GB / 5 GB</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-[24%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>Your past invoices and payments</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No billing history yet.</p>
        </CardContent>
      </Card>
    </div>
  );
}
