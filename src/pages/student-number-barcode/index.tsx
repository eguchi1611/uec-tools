import StudentNumberBarcode from "@/features/student-number-barcode/components/student-number-barcode";
import { Box } from "@mui/material";

export default function StudentNumberBarcodePage() {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          width: "fit-content",
          marginX: "auto",
        }}
      >
        <StudentNumberBarcode data="A23110240A" />
      </Box>
    </Box>
  );
}
