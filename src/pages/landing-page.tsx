import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex gap-6 group">
      {/* Left Card */}
      <Card className="w-1/2 transition-all group-hover:opacity-50 hover:opacity-100">
        <CardContent className="p-6">
          <p className="text-lg">Left Container</p>
        </CardContent>
      </Card>

      {/* Right Card */}
      <Card className="w-1/2 transition-all group-hover:opacity-50 hover:opacity-100">
        <CardContent className="p-6">
          <p className="text-lg">Right Container</p>
        </CardContent>
      </Card>
    </div>
  );
}
