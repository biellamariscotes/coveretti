import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[75vh] pt-6 px-4">
      {/* Brand Name */}
      <p className="brand-font gradient-text text-9xl text-center leading-[1.5] pr-3">
        Coveretti
      </p>

      {/* Brand Description */}
      <div className="mt-6 text-center ">
        <p className="font-bold text-3xl">
          You&#39;re always <span className="text-primary">retti</span> for
          spotlight.
        </p>
        <p className="text-xl pt-5 font-medium">
          Let&#39;s turn that Applican&#39;t to Applican!{" "}
        </p>
      </div>

      {/* Button */}
      <div className="mt-20">
        <Button
          variant="primary"
          action={{
            type: "link",
            href: "/dashboard",
          }}
          size="large"
        >
          Start Enhancing
        </Button>
      </div>
    </div>
  );
}
