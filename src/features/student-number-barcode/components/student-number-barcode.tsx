import { Box } from "@mui/material";
import JsBarcode from "jsbarcode";
import { useCallback } from "react";

type Props = {
  data: string;
};

export default function StudentNumberBarcode(props: Props) {
  const canvasRef = useCallback(
    (node: HTMLCanvasElement | null) => {
      if (node !== null) {
        JsBarcode(node, props.data, {
          format: "codabar",
          displayValue: false,
          width: 3,
          height: 110,
        });
      }
    },
    [props.data]
  );

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        border: "1px red solid",
        transform: "translateY(100px) rotate(90deg)",
      }}
    ></Box>
  );
}
