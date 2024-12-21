import { Box } from "@components";
import { ActivityIndicator } from "@components";

export function LoadingScreen() {
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="background"
    >
      <ActivityIndicator size={'large'} />
    </Box>
  );
};