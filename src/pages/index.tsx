import StudentNumberBarcode from "@/features/student-number-barcode/components/student-number-barcode";
import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>UEC Tools</title>
        <meta name="description" content="UEC Tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button
          component={Link}
          href="/student-number-barcode"
          variant="contained"
          size="large"
        >
          Index Page
        </Button>
      </div>
    </div>
  );
}
